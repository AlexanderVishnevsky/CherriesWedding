import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';

import { styled } from '@mui/material/styles';

import PictureSpinner from './Picture.spinner';
import { assignRef, convertSrcSet, dedupeMediaQueryList, getImageTypeFromUrl, getSrcList } from './Picture.helpers';
import PictureBase, { IMAGE_PLACEHOLDER } from './Picture.base';
import {
    CommonPictureProps,
    FETCH_STATUSES,
    ImageSourceProps,
    InitialPictureProps,
    PictureFactoryOptionsType,
    PictureImagesByQueryNameProps,
    PictureProps,
    PlainPictureProps,
    SourceGroupProps,
} from './Picture.typings';

export const createPictureComponent = <QueryName extends string>(options: PictureFactoryOptionsType<QueryName>) => {
    const PlainPicture = pictureComponents(options);

    return ({
        className,
        width,
        height,
        useSpinner,
        usePlaceholder,
        placeholderColor,
        spinnerComponent: SpinnerComponent,
        onStatusChange,
        ...plainPictureProps
    }: PictureProps<QueryName>) => {
        const [status, setStatus] = useState<FETCH_STATUSES>(FETCH_STATUSES.LOADING);

        const isLoading = status === FETCH_STATUSES.LOADING;

        const renderSpinner = () => (SpinnerComponent ? <SpinnerComponent /> : <PictureSpinner show />);

        const containerStyle = useMemo<CSSProperties | undefined>(
            () => (width !== undefined && height !== undefined ? { width, height } : undefined),
            [height, width],
        );

        const imageStyle = useMemo<CSSProperties | undefined>(
            () => (isLoading && (useSpinner || usePlaceholder) ? { opacity: 0 } : undefined),
            [isLoading, usePlaceholder, useSpinner],
        );

        function handleStatusChange(status: FETCH_STATUSES) {
            setStatus(status);

            if (onStatusChange) {
                onStatusChange(status);
            }
        }

        return (
            <PictureContainer
                className={className}
                style={containerStyle}
                backgroundColor={isLoading && usePlaceholder ? placeholderColor : undefined}
                data-picture-loading={isLoading}
                data-picture-status={status.toLowerCase()}
            >
                {isLoading && useSpinner && renderSpinner()}

                <PlainPicture {...plainPictureProps} onStatusChange={handleStatusChange} imageStyle={imageStyle} />
            </PictureContainer>
        );
    };
};

const PictureContainer = styled('div')<{ backgroundColor?: string }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};

    img {
        transition: opacity 0.3s;
    }
`;

const Source = ({ srcList, isLazy, type, ...rest }: ImageSourceProps) => {
    if (srcList.length === 0) return null;

    return (
        <source
            {...rest}
            srcSet={convertSrcSet(srcList)}
            data-srcset={isLazy ? convertSrcSet(srcList) : undefined}
            type={type ?? getImageTypeFromUrl(srcList[0] ?? null) ?? undefined}
        />
    );
};

const SourceGroup = ({ media, images, isLazy }: SourceGroupProps) => {
    if (!images || Object.values(images).length === 0) return null;

    return (
        <>
            <Source isLazy={isLazy} srcList={getSrcList(images.webp, images.webp2x)} media={media} />
            <Source isLazy={isLazy} srcList={getSrcList(images.src, images.src2x)} media={media} />
        </>
    );
};

const Picture = ({
    src,
    src2x,
    srcWebp,
    srcWebp2x,
    allSizes,
    alt,
    className,
    imageStyle,
    loading,
    imageRef: outerImageRef,
    mediaQueryList,
    imageMap,
    onStatusChange,
}: InitialPictureProps) => {
    const isLazy = loading === 'lazy';
    const innerImageRef = useRef<HTMLImageElement>(null);
    const [status, setStatus] = useState<FETCH_STATUSES>(FETCH_STATUSES.IDLE);

    const statusChangeHandler = useRef<CommonPictureProps['onStatusChange'] | undefined>(onStatusChange);

    useEffect(function trackImageLoadStatus() {
        if (!innerImageRef.current) return;

        /** If PictureBase is already loaded */
        if (
            innerImageRef.current.src &&
            innerImageRef.current.complete &&
            IMAGE_PLACEHOLDER !== innerImageRef.current.src
        ) {
            setStatus(FETCH_STATUSES.SUCCESS);
            return;
        }

        /** If `lazysizes` didn't change `src` attribute yet */
        if (IMAGE_PLACEHOLDER === innerImageRef.current.src) {
            const mutationObserver = new MutationObserver(function mutationCallback(_mutations, observer) {
                setStatus(FETCH_STATUSES.LOADING);
                observer.disconnect();

                if (!innerImageRef.current) return;

                if (innerImageRef.current.complete) {
                    setStatus(FETCH_STATUSES.SUCCESS);
                    return;
                }

                function handleLoad() {
                    if (!innerImageRef.current) return;
                    innerImageRef.current.removeEventListener('load', handleLoad);
                    setStatus(FETCH_STATUSES.SUCCESS);
                }

                function handleError() {
                    if (!innerImageRef.current) return;
                    innerImageRef.current.removeEventListener('error', handleError);
                    setStatus(FETCH_STATUSES.FAILURE);
                }

                innerImageRef.current.addEventListener('load', handleLoad);
                innerImageRef.current.addEventListener('error', handleError);
            });

            mutationObserver.observe(innerImageRef.current, {
                attributes: true,
                attributeFilter: ['src'],
            });

            return;
        }

        /** If image is currently loading */
        if (innerImageRef.current.src && innerImageRef.current.src !== IMAGE_PLACEHOLDER) {
            setStatus(FETCH_STATUSES.LOADING);

            const handleLoad = () => {
                if (!innerImageRef.current) return;
                innerImageRef.current.removeEventListener('load', handleLoad);
                setStatus(FETCH_STATUSES.SUCCESS);
            };

            const handleError = () => {
                if (!innerImageRef.current) return;
                innerImageRef.current.removeEventListener('error', handleError);
                setStatus(FETCH_STATUSES.FAILURE);
            };

            innerImageRef.current.addEventListener('load', handleLoad);
            innerImageRef.current.addEventListener('error', handleError);
        }
    }, []);

    useEffect(
        function updateStatusChangeHandlerRef() {
            statusChangeHandler.current = onStatusChange;
        },
        [onStatusChange],
    );

    useEffect(
        function callStatusChangeHandler() {
            if (statusChangeHandler.current) {
                statusChangeHandler.current(status);
            }
        },
        [status],
    );

    return (
        <picture className={className}>
            {mediaQueryList.map((mediaQuery) => (
                <SourceGroup
                    key={mediaQuery.name}
                    media={mediaQuery.value}
                    images={imageMap[mediaQuery.name]}
                    isLazy={isLazy}
                />
            ))}
            {src2x || srcWebp || srcWebp2x ? (
                <SourceGroup
                    images={{
                        src: src,
                        src2x: src2x,
                        webp: srcWebp,
                        webp2x: srcWebp2x,
                    }}
                    isLazy={isLazy}
                />
            ) : allSizes ? (
                <SourceGroup
                    images={{
                        src: `${src}-1x.png`,
                        src2x: `${src}-2x.png`,
                        webp: `${src}-1x.webp`,
                        webp2x: `${src}-2x.webp`,
                    }}
                    isLazy={isLazy}
                />
            ) : null}
            <PictureBase
                style={imageStyle}
                src={(allSizes ? `${src}-1x.png` : src) ?? undefined}
                srcSet={src2x ? `${src2x} 2x` : allSizes ? `${src}-2x.png` : undefined}
                loading={loading}
                alt={alt ?? ''}
                ref={(imageNode) => {
                    assignRef(innerImageRef, imageNode);
                    assignRef(outerImageRef, imageNode);
                }}
                data-image-status={status.toLowerCase()}
            />
        </picture>
    );
};

export const pictureComponents = <QueryName extends string>(options: PictureFactoryOptionsType<QueryName>) => {
    const uniqueMediaQueryList = dedupeMediaQueryList(options.mediaQueryList);

    return (props: PlainPictureProps<QueryName>) => {
        const imageMap = uniqueMediaQueryList.reduce<PictureImagesByQueryNameProps<QueryName>>(
            (map, mediaQuery) => ({
                ...map,
                [mediaQuery.name]: props[mediaQuery.name],
            }),
            {},
        );

        return <Picture {...props} mediaQueryList={uniqueMediaQueryList} imageMap={imageMap} />;
    };
};

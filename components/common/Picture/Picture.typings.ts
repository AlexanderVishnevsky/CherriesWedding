import { CSSProperties, FunctionComponent, MutableRefObject, Ref, SourceHTMLAttributes } from 'react';

import { EMP } from '@/typings/common';

export type MediaQueryParams = {
    min?: number;
    max?: number;
};

export interface PictureMediaQueryItemType<QueryName extends string = string> {
    name: QueryName;
    value: string;
}

export interface CommonPictureProps {
    src?: EMP<string>;
    src2x?: EMP<string>;
    srcWebp?: EMP<string>;
    srcWebp2x?: EMP<string>;
    alt?: string;
    className?: string;
    imageStyle?: CSSProperties;
    loading?: 'eager' | 'lazy';
    imageRef?: Ref<HTMLImageElement>;
    onStatusChange?: (status: FETCH_STATUSES) => void;
}

export interface SpecialPictureProps {
    mediaQueryList: Array<PictureMediaQueryItemType>;
    imageMap: { [key: string]: PictureImageType | undefined };
}

export interface InitialPictureProps extends CommonPictureProps, SpecialPictureProps {}

export interface PictureImageType {
    src?: EMP<string>;
    src2x?: EMP<string>;
    webp?: EMP<string>;
    webp2x?: EMP<string>;
}

export interface SourceGroupProps {
    media?: string;
    images?: PictureImageType;
    isLazy: boolean;
}

export interface ImageSourceProps extends SourceHTMLAttributes<HTMLSourceElement> {
    srcList: Array<string>;
    isLazy: boolean;
}

export type AssignableRef<ValueType> =
    | {
          bivarianceHack(instance: ValueType | null): void;
      }['bivarianceHack']
    | MutableRefObject<ValueType | null>;

interface SmartPictureProps {
    className?: string;
    useSpinner?: boolean;
    usePlaceholder?: boolean;
    width?: number;
    height?: number;
    placeholderColor?: string;
    spinnerComponent?: FunctionComponent;
}

export enum FETCH_STATUSES {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE',
}

export type PictureProps<QueryName extends string> = PlainPictureProps<QueryName> & SmartPictureProps;

export interface PictureFactoryOptionsType<QueryName extends string> {
    mediaQueryList: Array<PictureMediaQueryItemType<QueryName>>;
}

export type PictureImagesByQueryNameProps<QueryName extends string> = {
    [key in QueryName]?: PictureImageType;
};

export type PlainPictureProps<QueryName extends string> = CommonPictureProps & PictureImagesByQueryNameProps<QueryName>;

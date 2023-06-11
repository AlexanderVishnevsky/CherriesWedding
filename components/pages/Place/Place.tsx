import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { DynamicVideo } from '@ui/common/Video';
import { FlexJCBetween } from '@ui/common/Common.styles';
import SendIcon from '@icons/place/send-icon.svg';

import { URLS } from '@/constants/url';
import { isBrowser } from '@/utils/browserUtils';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Place.styles';

const copyToClipboard = async (): Promise<void> => {
    if (isBrowser) {
        try {
            await navigator.clipboard.writeText('55.650538, 26.995473');
        } catch (e) {
            console.error(e);
        }
        window.open(URLS.GMAPS, '_blank');
    }
};

const Place = (): ReactElement => {
    const { t } = useTranslation('place');
    return (
        <S.PlaceLayout>
            <Typography variant={'h1'}>{t('place')}</Typography>
            <S.Map />
            <S.PlaceMap>
                <S.MapTextContainer>
                    <Typography id="t1" variant={'h3'}>
                        {t('location')}
                    </Typography>
                    <Typography id="t2" variant={'h5'}>
                        {t('town')}
                    </Typography>
                    <Typography id="t3" variant={'subtitle2'}>
                        {t('texts.0')}
                    </Typography>
                    <Typography id="t4" variant={'subtitle2'}>
                        {t('texts.1')}
                    </Typography>
                </S.MapTextContainer>
            </S.PlaceMap>
            <S.VideoContainer>
                <DynamicVideo
                    src={'/static/video/nomad.mp4'}
                    poster={`/static/images/place/Poster.png`}
                    id="bg-video"
                />
            </S.VideoContainer>
            <FlexJCBetween>
                <S.Location onClick={copyToClipboard}>
                    <SendIcon />
                    55.650538, 26.995473
                </S.Location>
            </FlexJCBetween>
        </S.PlaceLayout>
    );
};

export default Place;

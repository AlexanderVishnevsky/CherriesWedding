import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { DynamicVideo } from '@ui/common/Video';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Place.styles';

const Place = (): ReactElement => {
    const { t } = useTranslation('place');
    return (
        <S.PlaceLayout>
            <S.PlaceMap>
                <Typography variant={'h1'}>{t('place')}</Typography>
                <S.Map />
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
        </S.PlaceLayout>
    );
};

export default Place;

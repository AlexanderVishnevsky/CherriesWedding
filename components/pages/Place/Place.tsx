import Link from 'next/link';

import { ReactElement } from 'react';

import { Typography } from '@mui/material';

import { DynamicVideo } from '@ui/common/Video';
import SendIcon from '@icons/place/send-icon.svg';

import { URLS } from '@/constants/url';
import { copyToClipboard } from '@/utils/browserUtils';

import useTranslation from 'next-translate/useTranslation';

import * as S from './Place.styles';

const NOMAD_GEO = '55.650538, 26.995473';

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
            <S.Links>
                <S.Location onClick={() => copyToClipboard(NOMAD_GEO)}>
                    <SendIcon />
                    {NOMAD_GEO}
                </S.Location>
                <S.NomadTitle variant={'h4'}>{t('nomad.title')}</S.NomadTitle>
                <S.LinkData>
                    <Typography variant={'overline'}>{t('nomad.link')}</Typography>
                    <Typography variant={'overline'}>
                        &nbsp;
                        <Link href={URLS.NOMAD_VID} target={'_blank'} style={{ textDecoration: 'underline' }}>
                            {t('nomad.title')}
                        </Link>
                    </Typography>
                </S.LinkData>
            </S.Links>
        </S.PlaceLayout>
    );
};

export default Place;

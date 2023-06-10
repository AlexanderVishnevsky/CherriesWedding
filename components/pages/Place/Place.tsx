import { ReactElement } from 'react';

import { DynamicVideo } from '@ui/common/Video';

import * as S from './Place.styles';

const Place = (): ReactElement => {
    return (
        <S.PlaceLayout>
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

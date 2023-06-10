import { VideoHTMLAttributes } from 'react';

const Video = ({
    id,
    loop = true,
    autoPlay = false,
    muted = false,
    src,
    ...rest
}: VideoHTMLAttributes<HTMLVideoElement>) => (
    <video id={id} loop={loop} autoPlay={autoPlay} muted={muted} controls {...rest}>
        <source src={src} type={'video/mp4'} />
        Your browser does not support the video tag.
    </video>
);

export default Video;

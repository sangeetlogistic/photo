import React, { useRef } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import { IBannerVideo } from './BannerVideo.type';

const BannerVideo = ({ bannerVideo, type = 'video/mp4', controls = true, autoPlay = false, loop = false, className, poster, id }: IBannerVideo) => {
    const playerRef = useRef<any>(null);

    return (
        <>
            {loop ? (
                <video
                    loop={loop}
                    autoPlay={autoPlay}
                    preload="none"
                    width="100%"
                    playsInline
                    controls={controls}
                    muted
                    className={className}
                    poster={poster}
                    id={id}
                >
                    <source data-src={bannerVideo} type={type} />
                </video>
            ) : (
                <LazyLoadComponent>
                    <Player ref={playerRef} autoPlay={autoPlay} preload="none" playsInline muted poster={poster} src={bannerVideo}>
                        <source src={bannerVideo} type={type} />
                        {!controls && (
                            <>
                                <ControlBar disableCompletely />
                            </>
                        )}
                        <BigPlayButton position="center" />
                    </Player>
                </LazyLoadComponent>
            )}
        </>
    );
};

export default BannerVideo;

/* eslint-disable no-nested-ternary */
import React, { forwardRef } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import { IBannerVideo } from './BannerVideo.type';

const BannerVideo = forwardRef(
    (
        {
            bannerVideo,
            type = 'video/mp4',
            controls = true,
            autoPlay = false,
            loop = false,
            className,
            poster,
            id,
            isVideoContent = false,
        }: IBannerVideo,
        ref: any,
    ) => (
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
            ) : isVideoContent ? (
                <Player ref={ref} autoPlay={autoPlay} preload="none" playsInline muted poster={poster} src={bannerVideo}>
                    <source src={bannerVideo} type={type} />
                    {!controls && (
                        <>
                            <ControlBar disableCompletely />
                        </>
                    )}
                    <BigPlayButton position="center" />
                </Player>
            ) : (
                <LazyLoadComponent>
                    <Player autoPlay={autoPlay} preload="none" playsInline muted poster={poster} src={bannerVideo}>
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
    ),
);

export default BannerVideo;

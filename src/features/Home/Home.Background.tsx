import React, { useEffect, useState } from 'react';
import { PageBackground } from './Home.component';
import BannerVideo from '../../components/BannerVideo';
import { Images } from '../../theme';
import { delayTimeForSpeed, homeHeroVideo } from '../../constants/general';

const Background = () => {
    const [bgVideo, setBgVideo] = useState('');

    useEffect(() => {
        const functionForAsync = async () => {
            // when window is undefined
            if (typeof window !== 'undefined') {
                await setBgVideo(homeHeroVideo);
                const homeVideo: any = document.getElementById('sf-home-video');
                homeVideo.children[0].src = homeVideo.children[0].dataset.src;
                homeVideo.load();
                setTimeout(() => {
                    homeVideo.play();
                }, delayTimeForSpeed);
            }
        };
        functionForAsync();
    }, []);

    return (
        <>
            <PageBackground bgSectionImg={Images.homePageBackground}>
                {bgVideo && (
                    <BannerVideo
                        className="background_video"
                        bannerVideo={bgVideo}
                        type="video/mp4"
                        controls={false}
                        loop
                        id="sf-home-video"
                        poster={Images.HeroImage}
                    />
                )}
                <div className="page-bg-section"></div>
            </PageBackground>
        </>
    );
};

export default Background;

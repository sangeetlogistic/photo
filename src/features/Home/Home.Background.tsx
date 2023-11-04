import React, { useEffect, useState } from 'react';

import { PageBackground } from './Home.component';
import BannerVideo from '../../components/BannerVideo';
import { Images } from '../../theme';
import { delayTimeForSpeed } from '../../constants/general';

const Background = () => {
    const [bgVideo, setBgVideo] = useState('');

    const homeVideo: any = document.getElementById('sf-home-video');

    useEffect(() => {
        const functionForAsync = async () => {
            if (typeof window !== 'undefined') {
                await setBgVideo(require('../../../public/hero.mp4'));

                if (homeVideo) {
                    homeVideo.children[0].src = homeVideo.children[0].dataset.src;
                    homeVideo.load();
                    setTimeout(() => {
                        homeVideo.play();
                    }, delayTimeForSpeed);
                }
            }
        };
        functionForAsync();
    }, [homeVideo]);

    return (
        <>
            <PageBackground bgSectionImg={Images.homePageBackground?.src}>
                <BannerVideo
                    className="background_video"
                    bannerVideo={bgVideo}
                    type="video/mp4"
                    controls={false}
                    loop
                    id="sf-home-video"
                    poster={Images.HeroImage?.src}
                />
                <div className="page-bg-section"></div>
            </PageBackground>
        </>
    );
};

export default Background;

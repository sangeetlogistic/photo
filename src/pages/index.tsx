/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { FadeIn } from 'react-slide-fade-in';

import { Images } from '../theme';

import ParallaxTranslate from '../components/ParallaxTranslate';
import { useDeviceDetect, useRedirectOrder } from '../hooks';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearHomeDetail, getHomeDetailAction, selectError, selectHomeDetail, selectLoading } from '../features/Home/Home.slice';
import LoadingCover from '../components/LoadingCover';
import Toast from '../components/Toast';
import { checkForDevice, roundOff } from '../utils/func';
import { windowSize } from '../constants/general';
import { setHeaderFAQs, setRecentBlogs, setTotalRating } from '../services/API/GeneralSettings/GeneralSettings.slice';
import LayoutCmp from '../components/Layout';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Background = dynamic(() => import('../features/Home/Home.Background'), { ssr: false });
const HeroSectionContent = dynamic(() => import('../features/Home/Home.HeroSectionContent'), { ssr: false });
const IndividualReviewSlider = dynamic(() => import('../components/IndividualReviewSlider'), { ssr: false });
const GallerySliderBlock = dynamic(() => import('../components/GallerySliderBlock'), { ssr: false });
const HowItWoks = dynamic(() => import('../components/HowItWoks'), { ssr: false });
const TourPaintings = dynamic(() => import('../components/TourPaintings'), { ssr: false });
const AfterBefore = dynamic(() => import('../components/AfterBefore'), { ssr: false });
const PaintingRevealProcess = dynamic(() => import('../components/PaintingRevealProcess'), { ssr: false });
const FetureInfo = dynamic(() => import('../components/FetureInfo'), { ssr: false });
const ProfessionalPainters = dynamic(() => import('../components/ProfessionalPainters'), { ssr: false });
const PageContentWrapper = dynamic(() => import('../components/PageContentWrapper'), { ssr: false });

const Home = ({ data }: any) => {
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const loading = useAppSelector(selectLoading);
    const homeDetail = useAppSelector(selectHomeDetail);
    const error = useAppSelector(selectError);
    const redirect = useRedirectOrder();

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getHomeDetailAction());
    }, []);

    useEffect(() => {
        dispatch(setHeaderFAQs(homeDetail?.faqOnHover));
    }, [homeDetail?.faqOnHover]);

    useEffect(() => {
        if (error) setShow(true);

        return () => {
            dispatch(clearHomeDetail());
        };
    }, [error]);

    useEffect(() => {
        const rate = roundOff(homeDetail?.trustPilotTotalRating);
        dispatch(setTotalRating(rate));
        dispatch(setRecentBlogs(homeDetail?.recentBlog));
    }, [homeDetail?.trustPilotTotalRating, homeDetail?.recentBlog]);

    const redireactOrderPage = () => {
        redirect.redirectTo();
    };

    return (
        <>
            <Head>
                <title>{data?.[0]?.title}</title>
                <meta property="og:title" content={data?.[0]?.title} />
                <meta property="og:description" content={data?.[0]?.title} />
                <meta property="og:image" content={data?.[0]?.thumbnailUrl} />
            </Head>

            <LayoutCmp key={null} type="" props={undefined}>
                <Background />
                <HeroSectionContent />

                <PageContentWrapper className="top-content-wrap">
                    <IndividualReviewSlider
                        trustPilots={homeDetail?.trustPilots}
                        title={homeDetail?.trustPilotTitle}
                        subTitle={homeDetail?.trustPilotDescription}
                        totalRating={roundOff(homeDetail?.trustPilotTotalRating)}
                    />

                    <GallerySliderBlock
                        heading="Gallery"
                        subHeading="Check out our gallery of custom paintings from photos"
                        themedTitle="Gallery of pictures into paintings by theme"
                        mediumsTitle="Gallery of photos into paintings by medium"
                        themeDetail={homeDetail?.theme}
                        mediumDetail={homeDetail?.medium}
                    />
                </PageContentWrapper>

                {isMobile ? (
                    <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                        <HowItWoks
                            detail={homeDetail?.howItWork}
                            info="Start your order, upload a photo, select medium, and pay only 20% of the
        full amount. One of our super talented artists will start working to
        turn your photo into painting. Approve the custom painting and pay the
        remaining balance. Your artwork is ready to be delivered!"
                        />
                    </FadeIn>
                ) : (
                    <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                        <HowItWoks
                            detail={homeDetail?.howItWork}
                            info="Start your order, upload a photo, select medium, and pay only 20% of the
        full amount. One of our super talented artists will start working to
        turn your photo into painting. Approve the custom painting and pay the
        remaining balance. Your artwork is ready to be delivered!"
                        />
                    </ParallaxTranslate>
                )}

                <PageContentWrapper className="btm-content-wrap">
                    <TourPaintings
                        title="That's How We turn Photos Into Paintings!"
                        content={homeDetail?.turnPhotoIntoPainting[0]?.description}
                        btnTitle="Turn my photo into painting!"
                        reviewTitle="Excellent Customer Reviews"
                        rate={roundOff(homeDetail?.trustPilotTotalRating)}
                        bannerVideo={homeDetail?.turnPhotoIntoPainting[0]?.videoUrl}
                        poster={homeDetail?.turnPhotoIntoPainting[0]?.videoThumbUrl || Images.TourPaintingVideoThumb}
                        onClick={redireactOrderPage}
                    />
                    <ProfessionalPainters detail={homeDetail?.painter} />
                </PageContentWrapper>

                {isMobile ? (
                    <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                        <AfterBefore
                            leftImage={homeDetail?.makePhotoAlive[0]?.originalImageUrl}
                            rightImage={homeDetail?.makePhotoAlive[0]?.paintingImageUrl}
                            title={homeDetail?.makePhotoAlive[0]?.title}
                            description={homeDetail?.makePhotoAlive[0]?.description}
                            btnText="Turn Your Photo Into Art!"
                            onClick={redireactOrderPage}
                        />
                    </FadeIn>
                ) : (
                    <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                        <AfterBefore
                            leftImage={homeDetail?.makePhotoAlive[0]?.originalImageUrl}
                            rightImage={homeDetail?.makePhotoAlive[0]?.paintingImageUrl}
                            title={homeDetail?.makePhotoAlive[0]?.title}
                            description={homeDetail?.makePhotoAlive[0]?.description}
                            btnText="Turn Your Photo Into Art!"
                            onClick={redireactOrderPage}
                        />
                    </ParallaxTranslate>
                )}

                <PaintingRevealProcess detail={homeDetail?.review} />
                <FetureInfo />
                <LoadingCover show={loading} />
                {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            </LayoutCmp>
        </>
    );
};

export default Home;

export async function getServerSideProps() {
    // Retrieve id

    // Fetch data
    const result = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const data = await result.json();

    return {
        props: {
            data,
        },
    };
}

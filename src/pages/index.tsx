/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { FadeIn } from 'react-slide-fade-in';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Images } from '../theme';
import ParallaxTranslate from '../components/ParallaxTranslate';
import { useDeviceDetect, useRedirectOrder } from '../hooks';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearHomeDetail, selectError, selectHomeDetail, selectLoading, setHomeDetail } from '../features/Home/Home.slice';
import Toast from '../components/Toast';
import { checkForDevice, roundOff } from '../utils/func';
import { windowSize } from '../constants/general';
import { setHeaderFAQs, setRecentBlogs, setTotalRating } from '../services/API/GeneralSettings/GeneralSettings.slice';
import HomeServices from '../services/API/Home/Home.services';
import { statusCode } from '../constants/statusCode';
import FetureInfo from '../components/FetureInfo';
import SEO from '../services/API/SEO';
import { SITE_URL } from '../constants/predicates';

const LayoutCmp = dynamic(() => import('../components/Layout'));
const Background = dynamic(() => import('../features/Home/Home.Background'), { ssr: false });
const HeroSectionContent = dynamic(() => import('../features/Home/Home.HeroSectionContent'));
const IndividualReviewSlider = dynamic(() => import('../components/IndividualReviewSlider'));
const GallerySliderBlock = dynamic(() => import('../components/GallerySliderBlock'));
const HowItWoks = dynamic(() => import('../components/HowItWoks'));
const TourPaintings = dynamic(() => import('../components/TourPaintings'));
const AfterBefore = dynamic(() => import('../components/AfterBefore'));
const PaintingRevealProcess = dynamic(() => import('../components/PaintingRevealProcess'));
const ProfessionalPainters = dynamic(() => import('../components/ProfessionalPainters'));
const PageContentWrapper = dynamic(() => import('../components/PageContentWrapper'));

const Home = ({ seoResult, homeResult }: any) => {
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const loading = useAppSelector(selectLoading);
    const homeDetail = useAppSelector(selectHomeDetail);
    const error = useAppSelector(selectError);
    const redirect = useRedirectOrder();

    const [show, setShow] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(clearHomeDetail());
        };
    }, []);

    useEffect(() => {
        dispatch(setHomeDetail(homeResult));
    }, [homeResult]);

    useEffect(() => {
        dispatch(setHeaderFAQs(homeDetail?.faqOnHover));
    }, [homeDetail?.faqOnHover]);

    useEffect(() => {
        if (error) setShow(true);
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
                <title>{seoResult?.title}</title>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:site_name" content={SITE_URL} />
                <meta property="og:updated_time" content={seoResult?.updatedAt} />
                <meta property="og:title" content={seoResult?.title} />
                <meta property="og:description" content={seoResult?.description || ''} />
                <meta name="description" content={seoResult?.description || ''} />
                <meta property="og:image" content={seoResult?.imageUrl || ''} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoResult?.title} />
                <meta name="twitter:description" content={seoResult?.description || ''} />
                <meta name="twitter:data1" content="gsilag" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>

            <LayoutCmp key={null} type="" props={undefined}>
                <Background />
                <HeroSectionContent />

                <PageContentWrapper className="top-content-wrap">
                    {homeResult?.detail?.trustPilots?.length > 0 ? (
                        <IndividualReviewSlider
                            trustPilots={homeResult?.detail?.trustPilots}
                            title={homeResult?.detail?.trustPilotTitle}
                            subTitle={homeResult?.detail?.trustPilotDescription}
                            totalRating={roundOff(homeResult?.detail?.trustPilotTotalRating)}
                        />
                    ) : null}

                    <GallerySliderBlock
                        heading="Gallery"
                        subHeading="Check out our gallery of custom paintings from photos"
                        themedTitle="Gallery of pictures into paintings by theme"
                        mediumsTitle="Gallery of photos into paintings by medium"
                        themeDetail={homeResult?.detail?.theme}
                        mediumDetail={homeResult?.detail?.medium}
                    />
                </PageContentWrapper>

                {isMobile ? (
                    <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                        <HowItWoks
                            detail={homeResult?.detail?.howItWork}
                            info="Start your order, upload a photo, select medium, and pay only 20% of the
        full amount. One of our super talented artists will start working to
        turn your photo into painting. Approve the custom painting and pay the
        remaining balance. Your artwork is ready to be delivered!"
                        />
                    </FadeIn>
                ) : (
                    <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                        <HowItWoks
                            detail={homeResult?.detail?.howItWork}
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
                        content={homeResult?.detail?.turnPhotoIntoPainting[0]?.description}
                        btnTitle="Turn my photo into painting!"
                        reviewTitle="Excellent Customer Reviews"
                        rate={roundOff(homeResult?.detail?.trustPilotTotalRating)}
                        bannerVideo={homeResult?.detail?.turnPhotoIntoPainting[0]?.videoUrl}
                        poster={homeResult?.detail?.turnPhotoIntoPainting[0]?.videoThumbUrl || Images.TourPaintingVideoThumb}
                        onClick={redireactOrderPage}
                    />
                    <ProfessionalPainters detail={homeResult?.detail?.painter} />
                </PageContentWrapper>

                {isMobile ? (
                    <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                        <AfterBefore
                            leftImage={homeResult?.detail?.makePhotoAlive[0]?.originalImageUrl}
                            leftImageAlt={homeResult?.detail?.makePhotoAlive[0]?.originalImageAlt}
                            rightImage={homeResult?.detail?.makePhotoAlive[0]?.paintingImageUrl}
                            rightImageAlt={homeResult?.detail?.makePhotoAlive[0]?.paintedImageAlt}
                            title={homeResult?.detail?.makePhotoAlive[0]?.title}
                            description={homeResult?.detail?.makePhotoAlive[0]?.description}
                            btnText="Turn Your Photo Into Art!"
                            onClick={redireactOrderPage}
                        />
                    </FadeIn>
                ) : (
                    <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                        <AfterBefore
                            leftImage={homeResult?.detail?.makePhotoAlive[0]?.originalImageUrl}
                            rightImage={homeResult?.detail?.makePhotoAlive[0]?.paintingImageUrl}
                            leftImageAlt={homeResult?.detail?.makePhotoAlive[0]?.originalImageAlt}
                            rightImageAlt={homeResult?.detail?.makePhotoAlive[0]?.paintedImageAlt}
                            title={homeResult?.detail?.makePhotoAlive[0]?.title}
                            description={homeResult?.detail?.makePhotoAlive[0]?.description}
                            btnText="Turn Your Photo Into Art!"
                            onClick={redireactOrderPage}
                        />
                    </ParallaxTranslate>
                )}

                <PaintingRevealProcess detail={homeResult?.detail?.review} />
                <FetureInfo />
                {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            </LayoutCmp>
        </>
    );
};

export default Home;

export const getServerSideProps = async () => {
    let seoResult: any = '';
    try {
        const response = await SEO.getSeoDetail();
        if (response.status === statusCode.success) {
            seoResult = response?.data?.data;
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        seoResult = null;
    }

    let homeResult: any = {};

    try {
        const response: any = await HomeServices.getHomeDetail();
        if (response.status === statusCode.success) {
            homeResult = { detail: response.data };
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        homeResult = { error: { message: err?.response?.data?.message || null, code: err?.response?.data?.code || null } };
    }

    return {
        props: {
            seoResult,
            homeResult,
        },
    };
};

/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FadeIn } from 'react-slide-fade-in';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { statusCode } from '../../constants/statusCode';
import { Routes } from '../../navigation/Routes';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';
import Toast from '../../components/Toast';
import { checkForDevice, roundOff } from '../../utils/func';
import { windowSize } from '../../constants/general';
import {
    selectDrawDetail,
    selectError,
    selectLoading,
    selectRecentBlogDraw,
    setRecentBlogs,
    setTotalRating,
    setDrawDetail,
} from '../../services/API/GeneralSettings/GeneralSettings.slice';
import PaintingsFAQ from '../../features/Paintings/Paintings.FAQ';
import LayoutCmp from '../../components/Layout';
import ParallaxTranslate from '../../components/ParallaxTranslate';
import GeneralSettings from '../../services/API/GeneralSettings';
import SEO from '../../services/API/SEO';
import { SITE_URL } from '../../constants/predicates';

const Background = dynamic(() => import('../../features/DrawingPortrait/DrawingPortrait.Background'), { ssr: false });
const PortraitsHeroSectionContent = dynamic(() => import('../../features/DrawingPortrait/DrawingPortrait.HeroSectionContent'), { ssr: true });
const IndividualReviewSlider = dynamic(() => import('../../components/IndividualReviewSlider'));
const GallerySliderBlock = dynamic(() => import('../../components/GallerySliderBlock'));
const HowItWoks = dynamic(() => import('../../components/HowItWoks'));
const TourPaintings = dynamic(() => import('../../components/TourPaintings'));
const AfterBefore = dynamic(() => import('../../components/AfterBefore'));
const PaintingRevealProcess = dynamic(() => import('../../components/PaintingRevealProcess'));
const FetureInfo = dynamic(() => import('../../components/FetureInfo'));
const ProfessionalPainters = dynamic(() => import('../../components/ProfessionalPainters'));
const PageContentWrapper = dynamic(() => import('../../components/PageContentWrapper'));

const DrawingPortrait = ({ seoResult, drawResult }: any) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const drawDetail = useAppSelector(selectDrawDetail);
    const recentBlogDraw = useAppSelector(selectRecentBlogDraw);

    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const redirect = useRedirectOrder();

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (error) {
            if (error.code === statusCode.notFound) route.push(Routes.notFound);
            else {
                setShow(true);
            }
        }
    }, [error]);

    useEffect(() => {
        const rate = roundOff(drawDetail?.DOP?.trustPilotTotalRating);
        dispatch(setTotalRating(rate));
        dispatch(setRecentBlogs(recentBlogDraw));
    }, [drawDetail?.DOP?.trustPilotTotalRating, recentBlogDraw]);

    const redirectOrderPage = () => {
        redirect.redirectTo();
    };

    useEffect(() => {
        dispatch(setDrawDetail(drawResult));
    }, [drawResult]);

    return (
        <>
            <Head>
                <title>{seoResult?.title}</title>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}${route.asPath}`} />
                <meta property="og:site_name" content={SITE_URL} />
                <meta property="og:updated_time" content={seoResult?.updatedAt} />
                <meta property="og:title" content={seoResult?.title} />
                <meta property="og:description" content={seoResult?.description || ''} />
                <meta name="description" content={seoResult?.description || ''} />
                <meta property="og:image" content={seoResult?.imageUrl || ''} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoResult?.title} />
                <meta name="twitter:description" content={seoResult?.description || ''} />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="Less than a minute" />
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>

            <LayoutCmp key={null} type="" props={undefined}>
                {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
                <Background backgroundRepeatImage={drawResult?.detail?.DOP?.backgroundRepeatImageUrl} />
                {drawResult?.detail?.DOP && (
                    <PortraitsHeroSectionContent
                        detailPageCoverImage={drawResult?.detail?.DOP.detailPageCoverImageUrl}
                        handImage={drawResult?.detail?.DOP.handImageUrl}
                        coverTitle={drawResult?.detail?.DOP.coverTitle}
                        coverSubTitle={drawResult?.detail?.DOP.coverSubTitle}
                        coverButtonTitle={drawResult?.detail?.DOP.coverButtonTitle}
                        onClick={redirectOrderPage}
                    />
                )}

                <PageContentWrapper className="top-content-wrap">
                    {drawResult?.detail?.DOP?.trustPilots ? (
                        <IndividualReviewSlider
                            trustPilots={drawResult?.detail?.DOP?.trustPilots}
                            title={drawResult?.detail?.DOP?.trustPilotTitle}
                            subTitle={drawResult?.detail?.DOP?.trustPilotDescription}
                            totalRating={roundOff(drawResult?.detail?.DOP?.trustPilotTotalRating)}
                        />
                    ) : null}
                    <GallerySliderBlock
                        heading="Gallery"
                        subHeading="In our colorful gallery, we store a diverse range of personalized individual portraits"
                        mediumDetail={drawResult?.detail?.DOP?.mediumRecords}
                    />
                </PageContentWrapper>
                {isMobile ? (
                    <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                        <HowItWoks
                            detail={drawResult?.detail?.DOP?.howItWorkRecords}
                            info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                        />
                    </FadeIn>
                ) : (
                    <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                        <HowItWoks
                            detail={drawResult?.detail?.DOP?.howItWorkRecords}
                            info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                        />
                    </ParallaxTranslate>
                )}
                <PageContentWrapper className="btm-content-wrap">
                    <TourPaintings
                        title={drawResult?.detail?.DOP?.turnPhotoToPaintingTitle}
                        content={drawResult?.detail?.DOP?.turnPhotoToPaintingDiscription}
                        btnTitle={drawResult?.detail?.DOP?.turnPhotoToPaintingButtonTitle}
                        reviewTitle="Excellent Customer Reviews"
                        rate={roundOff(drawResult?.detail?.DOP?.trustPilotTotalRating)}
                        bannerVideo={drawResult?.detail?.DOP?.turnPhotoToPaintingVideoUrl}
                        poster={drawResult?.detail?.DOP?.videoThumbnailUrl}
                        onClick={redirectOrderPage}
                    />
                    <ProfessionalPainters detail={drawResult?.detail?.DOP?.painterRecords} />
                </PageContentWrapper>

                {isMobile ? (
                    <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                        <AfterBefore
                            leftImage={drawResult?.detail?.DOP?.makePhotoAliveOriginalImageUrl}
                            rightImage={drawResult?.detail?.DOP?.makePhotoAlivePaintedImageUrl}
                            title={drawResult?.detail?.DOP?.makePhotoAliveTitle}
                            description={drawResult?.detail?.DOP?.makePhotoAliveDiscription}
                            btnText={drawResult?.detail?.DOP?.makePhotoAliveButtonTitle}
                            onClick={redirectOrderPage}
                        />
                    </FadeIn>
                ) : (
                    <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                        <AfterBefore
                            leftImage={drawResult?.detail?.DOP?.makePhotoAliveOriginalImageUrl}
                            rightImage={drawResult?.detail?.DOP?.makePhotoAlivePaintedImageUrl}
                            title={drawResult?.detail?.DOP?.makePhotoAliveTitle}
                            description={drawResult?.detail?.DOP?.makePhotoAliveDiscription}
                            btnText={drawResult?.detail?.DOP?.makePhotoAliveButtonTitle}
                            onClick={redirectOrderPage}
                        />
                    </ParallaxTranslate>
                )}
                <PaintingRevealProcess detail={drawResult?.detail?.DOP?.reviewRecords} />
                <FetureInfo />

                <PaintingsFAQ name={drawResult?.detail?.DOP?.name} description={drawResult?.detail?.DOP?.description} />
            </LayoutCmp>
        </>
    );
};

export default DrawingPortrait;

export const getServerSideProps = async (context) => {
    const slug = context.resolvedUrl.split('/')[1];
    let seoResult: any = '';
    try {
        const response = await SEO.getSeoDetail({ slug });
        if (response.status === statusCode.success) {
            seoResult = response?.data?.data;
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        seoResult = null;
    }
    let drawResult: any = {};

    try {
        const response: any = await GeneralSettings.drawingPicture({ slug });
        if (response.status === statusCode.success) {
            drawResult = { detail: response.data };
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        drawResult = { error: { message: err?.response?.data?.message || null, code: err?.response?.data?.code || null } };
    }

    return {
        props: {
            seoResult,
            drawResult,
        },
    };
};

/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from 'react';
import { FadeIn } from 'react-slide-fade-in';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import _ from 'lodash';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearThemeDetail, selectError, selectLoading, selectRecentBlog, setThemeDetail } from '../../features/Portraits/Portraits.slice';
import { statusCode } from '../../constants/statusCode';
import { Routes } from '../../navigation/Routes';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';
import { checkForDevice, roundOff } from '../../utils/func';
import { portraitsGallery, separateNotToGoNoFound, siteName, sketchGallery, windowSize } from '../../constants/general';
import { setHeaderFAQs, setRecentBlogs, setTotalRating } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import { useRouter } from 'next/router';
import {
    selectRecentBlog as selectMediumRecentBlog,
    selectError as selectMediumError,
    selectLoading as selectMediumLoading,
    setMediumDetail,
} from '../../features/Paintings/Paintings.slice';
import PortraitsServices from '../../services/API/Portraits/Portraits.services';
import PaintingsServices from '../../services/API/Paintings/Paintings.services';
import SEO from '../../services/API/SEO';
import { SITE_URL } from '../../constants/predicates';
import Toast from '../../components/Toast';
import ParallaxTranslate from '../../components/ParallaxTranslate';

const PortraitsBackground = dynamic(() => import('../../features/Portraits/Portraits.Background'), { ssr: false });
const PortraitsHeroSectionContent = dynamic(() => import('../../features/Portraits/Portraits.HeroSectionContent'));
const PortraitsFAQ = dynamic(() => import('../../features/Portraits/Portraits.FAQ'));

const PaintingHeroSectionContent = dynamic(() => import('../../features/Paintings/Paintings.HeroSectionContent'));
const PaintingBackground = dynamic(() => import('../../features/Paintings/Paintings.Background'), { ssr: false });
const PaintingsFAQ = dynamic(() => import('../../features/Paintings/Paintings.FAQ'));

const LayoutCmp = dynamic(() => import('../../components/Layout'));
const IndividualReviewSlider = dynamic(() => import('../../components/IndividualReviewSlider'));
const GallerySliderBlock = dynamic(() => import('../../components/GallerySliderBlock'));
const HowItWoks = dynamic(() => import('../../components/HowItWoks'));
const TourPaintings = dynamic(() => import('../../components/TourPaintings'));
const AfterBefore = dynamic(() => import('../../components/AfterBefore'));
const PaintingRevealProcess = dynamic(() => import('../../components/PaintingRevealProcess'));
const ProfessionalPainters = dynamic(() => import('../../components/ProfessionalPainters'));
const PageContentWrapper = dynamic(() => import('../../components/PageContentWrapper'));
const FetureInfo = dynamic(() => import('../../components/FetureInfo'));

const Portraits = ({ redireactOrderPage, portraitsGalleryResult }: any) => {
    const { isMobile } = useDeviceDetect();
    const loading = useAppSelector(selectLoading);

    return (
        <>
            <PortraitsBackground backgroundRepeatImage={portraitsGalleryResult?.detail?.Theme?.backgroundRepeatImageUrl} />
            <PortraitsHeroSectionContent
                detailPageCoverImage={portraitsGalleryResult?.detail?.Theme?.detailPageCoverImageUrl}
                handImage={portraitsGalleryResult?.detail?.Theme?.handImageUrl}
                handImageAlt={portraitsGalleryResult?.detail?.Theme?.handImageAlt}
                coverTitle={portraitsGalleryResult?.detail?.Theme?.coverTitle}
                coverSubTitle={portraitsGalleryResult?.detail?.Theme?.coverSubTitle}
                coverButtonTitle={portraitsGalleryResult?.detail?.Theme?.coverButtonTitle}
                onClick={redireactOrderPage}
            />
            <PageContentWrapper className="top-content-wrap">
                {portraitsGalleryResult?.detail?.Theme?.trustPilots ? (
                    <IndividualReviewSlider
                        trustPilots={portraitsGalleryResult?.detail?.Theme?.trustPilots}
                        title={portraitsGalleryResult?.detail?.Theme?.trustPilotTitle}
                        subTitle={portraitsGalleryResult?.detail?.Theme?.trustPilotDescription}
                        totalRating={roundOff(portraitsGalleryResult?.detail?.Theme?.trustPilotTotalRating)}
                    />
                ) : null}
                <GallerySliderBlock
                    heading={portraitsGalleryResult?.detail?.Theme?.galleryTxt || 'Gallery'}
                    subHeading={
                        portraitsGalleryResult?.detail?.Theme?.galleryDesc ||
                        'In our colorful gallery, we store a diverse range of personalized individual portraits'
                    }
                    themedTitle={portraitsGalleryResult?.detail?.Theme?.gallerySliderTitle}
                    mediumDetail={portraitsGalleryResult?.detail?.Theme?.mediumRecords}
                />
            </PageContentWrapper>
            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <HowItWoks
                        detail={portraitsGalleryResult?.detail?.Theme?.howItWorkRecords}
                        info={
                            portraitsGalleryResult?.detail?.Theme?.howItWorkLongDiscription ||
                            'Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork'
                        }
                        howItWorkTitle={portraitsGalleryResult?.detail?.Theme?.howItWorkTitle}
                        howItWorkShortDiscription={portraitsGalleryResult?.detail?.Theme?.howItWorkShortDiscription}
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <HowItWoks
                        detail={portraitsGalleryResult?.detail?.Theme?.howItWorkRecords}
                        info={
                            portraitsGalleryResult?.detail?.Theme?.howItWorkLongDiscription ||
                            'Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork'
                        }
                        howItWorkTitle={portraitsGalleryResult?.detail?.Theme?.howItWorkTitle}
                        howItWorkShortDiscription={portraitsGalleryResult?.detail?.Theme?.howItWorkShortDiscription}
                    />
                </ParallaxTranslate>
            )}
            <PageContentWrapper className="btm-content-wrap">
                <TourPaintings
                    title={portraitsGalleryResult?.detail?.Theme?.turnPhotoToPaintingTitle}
                    content={portraitsGalleryResult?.detail?.Theme?.turnPhotoToPaintingDiscription}
                    btnTitle={portraitsGalleryResult?.detail?.Theme?.turnPhotoToPaintingButtonTitle}
                    reviewTitle="Excellent Customer Reviews"
                    rate={roundOff(portraitsGalleryResult?.detail?.Theme?.trustPilotTotalRating)}
                    bannerVideo={portraitsGalleryResult?.detail?.Theme?.turnPhotoToPaintingVideoUrl}
                    poster={portraitsGalleryResult?.detail?.Theme?.videoThumbnailUrl}
                    onClick={redireactOrderPage}
                />
                <ProfessionalPainters detail={portraitsGalleryResult?.detail?.Theme?.painterRecords} />
            </PageContentWrapper>
            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <AfterBefore
                        leftImage={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveOriginalImageUrl}
                        rightImage={portraitsGalleryResult?.detail?.Theme?.makePhotoAlivePaintedImageUrl}
                        leftImageAlt={portraitsGalleryResult?.detail?.Theme?.originalImageAlt}
                        rightImageAlt={portraitsGalleryResult?.detail?.Theme?.paintedImageAlt}
                        title={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveTitle}
                        description={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveDiscription}
                        btnText={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <AfterBefore
                        leftImage={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveOriginalImageUrl}
                        rightImage={portraitsGalleryResult?.detail?.Theme?.makePhotoAlivePaintedImageUrl}
                        leftImageAlt={portraitsGalleryResult?.detail?.Theme?.originalImageAlt}
                        rightImageAlt={portraitsGalleryResult?.detail?.Theme?.paintedImageAlt}
                        title={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveTitle}
                        description={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveDiscription}
                        btnText={portraitsGalleryResult?.detail?.Theme?.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </ParallaxTranslate>
            )}
            <PaintingRevealProcess detail={portraitsGalleryResult?.detail?.Theme?.reviewRecords} />
            <FetureInfo />
            <PortraitsFAQ
                name={portraitsGalleryResult?.detail?.Theme?.name}
                description={portraitsGalleryResult?.detail?.Theme?.description}
                faqs={portraitsGalleryResult?.detail?.Theme?.faqs}
            />
        </>
    );
};

const Painting = ({ redireactOrderPage, sketchGalleryResult }: any) => {
    const { isMobile } = useDeviceDetect();
    const mediumLoading = useAppSelector(selectMediumLoading);
    return (
        <>
            <PaintingBackground backgroundRepeatImage={sketchGalleryResult?.detail?.Medium.backgroundRepeatImageUrl} />
            <PaintingHeroSectionContent
                detailPageCoverImage={sketchGalleryResult?.detail?.Medium.detailPageCoverImageUrl}
                coverTitle={sketchGalleryResult?.detail?.Medium.coverTitle}
                coverSubTitle={sketchGalleryResult?.detail?.Medium.coverSubTitle}
                coverButtonTitle={sketchGalleryResult?.detail?.Medium.coverButtonTitle}
                onClick={redireactOrderPage}
            />

            <PageContentWrapper className="top-content-wrap">
                <IndividualReviewSlider
                    trustPilots={sketchGalleryResult?.detail?.Medium.trustPilots}
                    title={sketchGalleryResult?.detail?.Medium.trustPilotTitle}
                    subTitle={sketchGalleryResult?.detail?.Medium.trustPilotDescription}
                    totalRating={roundOff(sketchGalleryResult?.detail?.Medium.trustPilotTotalRating)}
                />
                <GallerySliderBlock
                    heading={sketchGalleryResult?.detail?.Medium?.galleryTxt || 'Gallery'}
                    subHeading={
                        sketchGalleryResult?.detail?.Medium?.galleryDesc ||
                        'In our colorful gallery, we store a diverse range of personalized individual portraits'
                    }
                    themedTitle={sketchGalleryResult?.detail?.Medium?.gallerySliderTitle}
                    themeDetail={sketchGalleryResult?.detail?.Medium.themeRecord}
                />
            </PageContentWrapper>

            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <HowItWoks
                        detail={sketchGalleryResult?.detail?.Medium.howItWorkRecords}
                        info={
                            sketchGalleryResult?.detail?.Medium.howItWorkLongDiscription ||
                            'Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork'
                        }
                        howItWorkTitle={sketchGalleryResult?.detail?.Medium.howItWorkTitle}
                        howItWorkShortDiscription={sketchGalleryResult?.detail?.Medium.howItWorkShortDiscription}
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={mediumLoading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <HowItWoks
                        detail={sketchGalleryResult?.detail?.Medium.howItWorkRecords}
                        info={
                            sketchGalleryResult?.detail?.Medium.howItWorkLongDiscription ||
                            'Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork'
                        }
                        howItWorkTitle={sketchGalleryResult?.detail?.Medium.howItWorkTitle}
                        howItWorkShortDiscription={sketchGalleryResult?.detail?.Medium.howItWorkShortDiscription}
                    />
                </ParallaxTranslate>
            )}
            <PageContentWrapper className="btm-content-wrap">
                <TourPaintings
                    title={sketchGalleryResult?.detail?.Medium.turnPhotoToPaintingTitle}
                    content={sketchGalleryResult?.detail?.Medium.turnPhotoToPaintingDiscription}
                    btnTitle={sketchGalleryResult?.detail?.Medium.turnPhotoToPaintingButtonTitle}
                    reviewTitle="Excellent Customer Reviews"
                    rate={roundOff(sketchGalleryResult?.detail?.Medium.trustPilotTotalRating)}
                    bannerVideo={sketchGalleryResult?.detail?.Medium.turnPhotoToPaintingVideoUrl}
                    poster={sketchGalleryResult?.detail?.Medium.videoThumbnailUrl}
                    onClick={redireactOrderPage}
                />
                <ProfessionalPainters detail={sketchGalleryResult?.detail?.Medium.painterRecords} />
            </PageContentWrapper>

            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <AfterBefore
                        leftImage={sketchGalleryResult?.detail?.Medium.makePhotoAliveOriginalImageUrl}
                        rightImage={sketchGalleryResult?.detail?.Medium.makePhotoAlivePaintedImageUrl}
                        title={sketchGalleryResult?.detail?.Medium.makePhotoAliveTitle}
                        description={sketchGalleryResult?.detail?.Medium.makePhotoAliveDiscription}
                        btnText={sketchGalleryResult?.detail?.Medium.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={mediumLoading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <AfterBefore
                        leftImage={sketchGalleryResult?.detail?.Medium.makePhotoAliveOriginalImageUrl}
                        rightImage={sketchGalleryResult?.detail?.Medium.makePhotoAlivePaintedImageUrl}
                        title={sketchGalleryResult?.detail?.Medium.makePhotoAliveTitle}
                        description={sketchGalleryResult?.detail?.Medium.makePhotoAliveDiscription}
                        btnText={sketchGalleryResult?.detail?.Medium.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </ParallaxTranslate>
            )}

            <PaintingRevealProcess detail={sketchGalleryResult?.detail?.Medium.reviewRecords} />
            <FetureInfo />

            <PaintingsFAQ
                name={sketchGalleryResult?.detail?.Medium.name}
                description={sketchGalleryResult?.detail?.Medium.description}
                faqs={sketchGalleryResult?.detail?.Medium.faqs}
            />
        </>
    );
};

const ThemeAndMedium = ({ seoResult, portraitsGalleryResult, sketchGalleryResult }: any) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const recentBlog = useAppSelector(selectRecentBlog);
    const error: any = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const redirect = useRedirectOrder();

    const recentMediumBlog = useAppSelector(selectMediumRecentBlog);
    const mediumError: any = useAppSelector(selectMediumError);
    const mediumLoading = useAppSelector(selectMediumLoading);

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!seoResult) route.push(Routes.notFound);
    }, [seoResult]);

    useEffect(() => {
        if (!_.isEmpty(portraitsGalleryResult)) {
            dispatch(setThemeDetail(portraitsGalleryResult));
        } else if (!_.isEmpty(sketchGalleryResult)) {
            dispatch(setMediumDetail(sketchGalleryResult));
        }
    }, [portraitsGalleryResult, sketchGalleryResult]);

    useEffect(() => {
        const rate = roundOff(
            portraitsGalleryResult?.detail?.Theme?.trustPilotTotalRating || sketchGalleryResult?.detail?.Medium.trustPilotTotalRating,
        );
        dispatch(setTotalRating(rate));
        dispatch(setRecentBlogs(recentBlog));
        dispatch(setHeaderFAQs(portraitsGalleryResult?.detail?.Theme?.faqs || sketchGalleryResult?.detail?.Medium.faqs));
    }, [
        portraitsGalleryResult?.detail?.Theme?.trustPilotTotalRating,
        recentBlog,
        portraitsGalleryResult?.detail?.Theme?.faqs,
        sketchGalleryResult?.detail?.Medium.trustPilotTotalRating,
        recentMediumBlog,
        sketchGalleryResult?.detail?.Medium.faqs,
    ]);

    useEffect(() => {
        if (error || mediumError) {
            if (error?.code === statusCode.notFound || mediumError?.code === statusCode.notFound) route.push(Routes.notFound);
            else {
                setShow(true);
            }
        }

        return () => {
            dispatch(clearThemeDetail());
        };
    }, [error, mediumError]);

    const redireactOrderPage = () => {
        redirect.redirectTo();
    };

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
                <meta property="og:image" content={seoResult?.imageUrl} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoResult?.title} />
                <meta name="twitter:description" content={seoResult?.description || ''} />
                <meta name="twitter:image" content={seoResult?.imageUrl} />
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="Less than a minute" />
            </Head>

            {(portraitsGallery.includes(`/${route.query?.themeandmedium}`) || sketchGallery.includes(`/${route.query?.themeandmedium}`)) && (
                <LayoutCmp key={null} type="" props={undefined}>
                    {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}

                    {portraitsGallery.includes(`/${route.query?.themeandmedium}`) ? (
                        <Portraits redireactOrderPage={redireactOrderPage} portraitsGalleryResult={portraitsGalleryResult} />
                    ) : null}

                    {sketchGallery.includes(`/${route.query?.themeandmedium}`) ? (
                        <Painting redireactOrderPage={redireactOrderPage} sketchGalleryResult={sketchGalleryResult} />
                    ) : null}
                </LayoutCmp>
            )}
        </>
    );
};

export default ThemeAndMedium;

export const getServerSideProps = async (context) => {
    const { themeandmedium }: any = context.query;

    let seoResult: any = '';
    if (separateNotToGoNoFound.includes(`/${themeandmedium}`)) {
        try {
            const response = await SEO.getSeoDetail({ slug: themeandmedium });
            if (response.status === statusCode.success) {
                seoResult = response?.data?.data;
            }
        } catch (err: any) {
            if (!err.response) {
                throw err;
            }
            seoResult = null;
        }
    }

    let portraitsGalleryResult: any = {};
    let sketchGalleryResult: any = {};

    if (portraitsGallery.includes(`/${themeandmedium}`)) {
        try {
            const response: any = await PortraitsServices.getThemeDetail({ themeName: themeandmedium });
            if (response.status === statusCode.success) {
                portraitsGalleryResult = { detail: response.data };
            }
        } catch (err: any) {
            if (!err.response) {
                throw err;
            }
            portraitsGalleryResult = { error: { message: err?.response?.data.message || null, code: err?.response?.data?.code || null } };
        }
    } else if (sketchGallery.includes(`/${themeandmedium}`)) {
        try {
            const response: any = await PaintingsServices.getMediumDetail({ mediumName: themeandmedium });
            if (response.status === statusCode.success) {
                sketchGalleryResult = { detail: response.data };
            }
        } catch (err: any) {
            if (!err.response) {
                throw err;
            }
            sketchGalleryResult = { error: { message: err?.response?.data.message || null, code: err?.response?.data?.code || null } };
        }
    }

    return {
        props: {
            seoResult,
            portraitsGalleryResult,
            sketchGalleryResult,
        },
    };
};

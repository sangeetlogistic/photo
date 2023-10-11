/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FadeIn } from 'react-slide-fade-in';
import { usePathname } from 'next/navigation';

import FetureInfo from '../../components/FetureInfo';
import AfterBefore from '../../components/AfterBefore';
import GallerySliderBlock from '../../components/GallerySliderBlock';
import HowItWoks from '../../components/HowItWoks';
import PaintingRevealProcess from '../../components/PaintingRevealProcess';
import IndividualReviewSlider from '../../components/IndividualReviewSlider';
import PageContentWrapper from '../../components/PageContentWrapper';
import ParallaxTranslate from '../../components/ParallaxTranslate';
import ProfessionalPainters from '../../components/ProfessionalPainters';
import TourPaintings from '../../components/TourPaintings';
import Background from './Portraits.Background';
import PortraitsHeroSectionContent from './Portraits.HeroSectionContent';
import PortraitsFAQ from './Portraits.FAQ';
import { portraitsTitle } from './Portraits.constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearThemeDetail, getThemeDetailAction, selectError, selectLoading, selectRecentBlog, selectThemeDetail } from './Portraits.slice';
import { statusCode } from '../../constants/statusCode';
import { Routes } from '../../navigation/Routes';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';
import Toast from '../../components/Toast';
import { checkForDevice, roundOff } from '../../utils/func';
import { windowSize } from '../../constants/general';
import { setHeaderFAQs, setRecentBlogs, setTotalRating } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import LoadingCover from '../../components/LoadingCover';
import { useRouter } from 'next/router';

const Portraits = () => {
    const pathname = usePathname();
    const history = useRouter();
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const themeDetail = useAppSelector(selectThemeDetail);
    const recentBlog = useAppSelector(selectRecentBlog);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const redirect = useRedirectOrder();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const themeName = pathname.split('/')[1];
        dispatch(getThemeDetailAction({ themeName }));
    }, [pathname]);

    useEffect(() => {
        const rate = roundOff(themeDetail?.trustPilotTotalRating);
        dispatch(setTotalRating(rate));
        dispatch(setRecentBlogs(recentBlog));
        dispatch(setHeaderFAQs(themeDetail?.faqs));
    }, [themeDetail?.trustPilotTotalRating, recentBlog, themeDetail?.faqs]);

    useEffect(() => {
        if (error) {
            if (error.code === statusCode.notFound) history.push(Routes.notFound);
            else {
                setShow(true);
            }
        }

        return () => {
            dispatch(clearThemeDetail());
        };
    }, [error]);

    const redireactOrderPage = () => {
        redirect.redirectTo();
    };

    const pageTitle = useMemo(() => portraitsTitle[pathname], [pathname]);

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            <Background backgroundRepeatImage={themeDetail?.backgroundRepeatImageUrl} />
            <PortraitsHeroSectionContent
                detailPageCoverImage={themeDetail?.detailPageCoverImageUrl}
                handImage={themeDetail?.handImageUrl}
                coverTitle={themeDetail?.coverTitle}
                coverSubTitle={themeDetail?.coverSubTitle}
                coverButtonTitle={themeDetail?.coverButtonTitle}
                onClick={redireactOrderPage}
            />
            <PageContentWrapper className="top-content-wrap">
                <IndividualReviewSlider
                    trustPilots={themeDetail?.trustPilots}
                    title={themeDetail?.trustPilotTitle}
                    subTitle={themeDetail?.trustPilotDescription}
                    totalRating={roundOff(themeDetail?.trustPilotTotalRating)}
                />
                <GallerySliderBlock
                    heading="Gallery"
                    subHeading="In our colorful gallery, we store a diverse range of personalized individual portraits"
                    mediumDetail={themeDetail?.mediumRecords}
                />
            </PageContentWrapper>
            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <HowItWoks
                        detail={themeDetail?.howItWorkRecords}
                        info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <HowItWoks
                        detail={themeDetail?.howItWorkRecords}
                        info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                    />
                </ParallaxTranslate>
            )}
            <PageContentWrapper className="btm-content-wrap">
                <TourPaintings
                    title={themeDetail?.turnPhotoToPaintingTitle}
                    content={themeDetail?.turnPhotoToPaintingDiscription}
                    btnTitle={themeDetail?.turnPhotoToPaintingButtonTitle}
                    reviewTitle="Excellent Customer Reviews"
                    rate={roundOff(themeDetail?.trustPilotTotalRating)}
                    bannerVideo={themeDetail?.turnPhotoToPaintingVideoUrl}
                    poster={themeDetail?.videoThumbnailUrl}
                    onClick={redireactOrderPage}
                />
                <ProfessionalPainters detail={themeDetail?.painterRecords} />
            </PageContentWrapper>
            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <AfterBefore
                        leftImage={themeDetail?.makePhotoAliveOriginalImageUrl}
                        rightImage={themeDetail?.makePhotoAlivePaintedImageUrl}
                        title={themeDetail?.makePhotoAliveTitle}
                        description={themeDetail?.makePhotoAliveDiscription}
                        btnText={themeDetail?.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <AfterBefore
                        leftImage={themeDetail?.makePhotoAliveOriginalImageUrl}
                        rightImage={themeDetail?.makePhotoAlivePaintedImageUrl}
                        title={themeDetail?.makePhotoAliveTitle}
                        description={themeDetail?.makePhotoAliveDiscription}
                        btnText={themeDetail?.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </ParallaxTranslate>
            )}
            <PaintingRevealProcess detail={themeDetail?.reviewRecords} />
            <FetureInfo />
            <PortraitsFAQ name={themeDetail?.name} description={themeDetail?.description} faqs={themeDetail?.faqs} />
            <LoadingCover show={loading} />
        </>
    );
};

export default Portraits;

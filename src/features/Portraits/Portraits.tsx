import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useLocation } from 'react-router-dom';
import { FadeIn } from 'react-slide-fade-in';
import { message } from 'antd';

import AfterBefore from '../../components/AfterBefore';
import FetureInfo from '../../components/FetureInfo';
import GallerySliderBlock from '../../components/GallerySliderBlock';
import HowItWoks from '../../components/HowItWoks';
import IndividualReviewSlider from '../../components/IndividualReviewSlider';
import PageContentWrapper from '../../components/PageContentWrapper';
import PaintingRevealProcess from '../../components/PaintingRevealProcess';
import ParallaxTranslate from '../../components/ParallaxTranslate';
import ProfessionalPainters from '../../components/ProfessionalPainters';
import TourPaintings from '../../components/TourPaintings';
import Background from './Portraits.Background';
import PortraitsHeroSectionContent from './Portraits.HeroSectionContent';
import PortraitsFAQ from './Portraits.FAQ';
import { portraitsTitle } from './Portraits.constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearThemeDetail, getThemeDetailAction, selectError, selectLoading, selectThemeDetail } from './Portraits.slice';
import LoadingCover from '../../components/LoadingCover';
import { statusCode } from '../../constants/statusCode';
import { Routes } from '../../navigation/Routes';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';

const Portraits = () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const themeDetail = useAppSelector(selectThemeDetail);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const redirect = useRedirectOrder();

    useEffect(() => {
        const themeName = pathname.split('/')[1];
        dispatch(getThemeDetailAction({ themeName }));
    }, []);

    useEffect(() => {
        if (error) {
            if (error.code === statusCode.notFound) history.replace(Routes.notFound);
            else {
                message.error(error.message);
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
            <Background backgroundRepeatImage={themeDetail?.backgroundRepeatImageUrl} />
            {themeDetail && (
                <PortraitsHeroSectionContent
                    detailPageCoverImage={themeDetail.detailPageCoverImageUrl}
                    handImage={themeDetail.handImageUrl}
                    coverTitle={themeDetail.coverTitle}
                    coverSubTitle={themeDetail.coverSubTitle}
                    coverButtonTitle={themeDetail.coverButtonTitle}
                    onClick={redireactOrderPage}
                />
            )}

            <PageContentWrapper className="top-content-wrap">
                <IndividualReviewSlider
                    title="Customers love our individual portraits"
                    subTitle="Our customers never hesitate to share their immediate emotions after receiving customized personal portraits."
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
                <ParallaxTranslate speed={loading ? 0 : 4}>
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
                    reviewTitle={
                        <div>
                            Customer review - <span className="text-success">Excellent</span>
                        </div>
                    }
                    rate={4.9}
                    totalReviews={356}
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
                <ParallaxTranslate speed={loading ? 0 : 4}>
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

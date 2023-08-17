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
import Background from './Paintings.Background';
import PortraitsHeroSectionContent from './Paintings.HeroSectionContent';
import PaintingsFAQ from './Paintings.FAQ';
import { sketchTitle } from './Paintings.constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearMediumDetail, getMediumDetailAction, selectError, selectLoading, selectMediumDetail } from './Paintings.slice';
import LoadingCover from '../../components/LoadingCover';
import { statusCode } from '../../constants/statusCode';
import { Routes } from '../../navigation/Routes';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';

const Paintings = () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const mediumDetail = useAppSelector(selectMediumDetail);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const redirect = useRedirectOrder();

    useEffect(() => {
        const mediumName = pathname.split('/')[1];
        dispatch(getMediumDetailAction({ mediumName }));
    }, []);

    useEffect(() => {
        if (error) {
            if (error.code === statusCode.notFound) history.replace(Routes.notFound);
            else {
                message.error(error.message);
            }
        }

        return () => {
            dispatch(clearMediumDetail());
        };
    }, [error]);

    const pageTitle = useMemo(() => sketchTitle[pathname], [pathname]);

    const redireactOrderPage = () => {
        redirect.redirectTo();
    };

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <Background backgroundRepeatImage={mediumDetail?.backgroundRepeatImageUrl} />
            <PortraitsHeroSectionContent
                detailPageCoverImage={mediumDetail?.detailPageCoverImageUrl}
                coverTitle={mediumDetail?.coverTitle}
                coverSubTitle={mediumDetail?.coverSubTitle}
                coverButtonTitle={mediumDetail?.coverButtonTitle}
                onClick={redireactOrderPage}
            />

            <PageContentWrapper className="top-content-wrap">
                <IndividualReviewSlider
                    title="Inside our customers' mind"
                    subTitle="Our customers enjoy communicating with us and sharing their insights about custom oil paintings from photos!"
                />
                <GallerySliderBlock
                    heading="OIL GALLERY"
                    subHeading="In our diverse gallery, we have personalized oil paintings of our customers’ children, pets, beloved people, and even landscapes."
                    mediumsTitle="Explore our gallery of oil perfections"
                    themeDetail={mediumDetail?.themeRecord}
                />
            </PageContentWrapper>

            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <HowItWoks
                        detail={mediumDetail?.howItWorkRecords}
                        info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : 4}>
                    <HowItWoks
                        detail={mediumDetail?.howItWorkRecords}
                        info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                    />
                </ParallaxTranslate>
            )}
            <PageContentWrapper className="btm-content-wrap">
                <TourPaintings
                    title={mediumDetail?.turnPhotoToPaintingTitle}
                    content={mediumDetail?.turnPhotoToPaintingDiscription}
                    btnTitle={mediumDetail?.turnPhotoToPaintingButtonTitle}
                    reviewTitle={
                        <div>
                            Customer review - <span className="text-success">Excellent</span>
                        </div>
                    }
                    rate={4.9}
                    totalReviews={356}
                    bannerVideo={mediumDetail?.turnPhotoToPaintingVideoUrl}
                    poster={mediumDetail?.videoThumbnailUrl}
                    onClick={redireactOrderPage}
                />
                <ProfessionalPainters detail={mediumDetail?.painterRecords} />
            </PageContentWrapper>

            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <AfterBefore
                        leftImage={mediumDetail?.makePhotoAliveOriginalImageUrl}
                        rightImage={mediumDetail?.makePhotoAlivePaintedImageUrl}
                        title={mediumDetail?.makePhotoAliveTitle}
                        description={mediumDetail?.makePhotoAliveDiscription}
                        btnText={mediumDetail?.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : 4}>
                    <AfterBefore
                        leftImage={mediumDetail?.makePhotoAliveOriginalImageUrl}
                        rightImage={mediumDetail?.makePhotoAlivePaintedImageUrl}
                        title={mediumDetail?.makePhotoAliveTitle}
                        description={mediumDetail?.makePhotoAliveDiscription}
                        btnText={mediumDetail?.makePhotoAliveButtonTitle}
                        onClick={redireactOrderPage}
                    />
                </ParallaxTranslate>
            )}

            <PaintingRevealProcess detail={mediumDetail?.reviewRecords} />
            <FetureInfo />

            <PaintingsFAQ name={mediumDetail?.name} description={mediumDetail?.description} faqs={mediumDetail?.faqs} />
            <LoadingCover show={loading} />
        </>
    );
};

export default Paintings;

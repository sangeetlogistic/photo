/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FadeIn } from 'react-slide-fade-in';

import AfterBefore from '../../components/AfterBefore';
import GallerySliderBlock from '../../components/GallerySliderBlock';
import HowItWoks from '../../components/HowItWoks';
import PaintingRevealProcess from '../../components/PaintingRevealProcess';
import FetureInfo from '../../components/FetureInfo';
import IndividualReviewSlider from '../../components/IndividualReviewSlider';
import PageContentWrapper from '../../components/PageContentWrapper';
import ParallaxTranslate from '../../components/ParallaxTranslate';
import ProfessionalPainters from '../../components/ProfessionalPainters';
import TourPaintings from '../../components/TourPaintings';
import Background from './Paintings.Background';
import PortraitsHeroSectionContent from './Paintings.HeroSectionContent';
import PaintingsFAQ from './Paintings.FAQ';
import { sketchTitle } from './Paintings.constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearMediumDetail, getMediumDetailAction, selectError, selectLoading, selectMediumDetail, selectRecentBlog } from './Paintings.slice';
import { statusCode } from '../../constants/statusCode';
import { Routes } from '../../navigation/Routes';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';
import Toast from '../../components/Toast';
import { checkForDevice, roundOff } from '../../utils/func';
import { windowSize } from '../../constants/general';
import { setHeaderFAQs, setRecentBlogs, setTotalRating } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import LoadingCover from '../../components/LoadingCover';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const Paintings = () => {
    const pathname = usePathname();
    const history = useRouter();
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const mediumDetail = useAppSelector(selectMediumDetail);
    const recentBlog = useAppSelector(selectRecentBlog);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const redirect = useRedirectOrder();

    const [show, setShow] = useState(false);

    useEffect(() => {
        const mediumName = pathname.split('/')[1];
        dispatch(getMediumDetailAction({ mediumName }));
    }, [pathname]);

    useEffect(() => {
        const rate = roundOff(mediumDetail?.trustPilotTotalRating);
        dispatch(setTotalRating(rate));
        dispatch(setRecentBlogs(recentBlog));
        dispatch(setHeaderFAQs(mediumDetail?.faqs));
    }, [mediumDetail?.trustPilotTotalRating, recentBlog, mediumDetail?.faqs]);

    useEffect(() => {
        if (error) {
            if (error.code === statusCode.notFound) history.push(Routes.notFound);
            else {
                setShow(true);
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
            {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
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
                    trustPilots={mediumDetail?.trustPilots}
                    title={mediumDetail?.trustPilotTitle}
                    subTitle={mediumDetail?.trustPilotDescription}
                    totalRating={roundOff(mediumDetail?.trustPilotTotalRating)}
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
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
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
                    reviewTitle="Excellent Customer Reviews"
                    rate={roundOff(mediumDetail?.trustPilotTotalRating)}
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
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
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

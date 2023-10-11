/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FadeIn } from 'react-slide-fade-in';

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
import Background from './DrawingPortrait.Background';
import PortraitsHeroSectionContent from './DrawingPortrait.HeroSectionContent';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { statusCode } from '../../constants/statusCode';
import { Routes } from '../../navigation/Routes';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';
import Toast from '../../components/Toast';
import { checkForDevice, roundOff } from '../../utils/func';
import { windowSize } from '../../constants/general';
import {
    drawingPictureAction,
    selectDrawDetail,
    selectError,
    selectLoading,
    selectRecentBlogDraw,
    setRecentBlogs,
    setTotalRating,
} from '../../services/API/GeneralSettings/GeneralSettings.slice';
import PaintingsFAQ from '../Paintings/Paintings.FAQ';
import LoadingCover from '../../components/LoadingCover';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const DrawingPortrait = () => {
    const pathname = usePathname();
    const history = useRouter();
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
            if (error.code === statusCode.notFound) history.push(Routes.notFound);
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
        const slug = pathname.split('/')[1];
        dispatch(drawingPictureAction({ slug }));
    }, []);

    return (
        <>
            <Helmet>
                <title>Drawing Portrait</title>
            </Helmet>
            {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            <Background backgroundRepeatImage={drawDetail?.DOP?.backgroundRepeatImageUrl} />
            {drawDetail?.DOP && (
                <PortraitsHeroSectionContent
                    detailPageCoverImage={drawDetail?.DOP.detailPageCoverImageUrl}
                    handImage={drawDetail?.DOP.handImageUrl}
                    coverTitle={drawDetail?.DOP.coverTitle}
                    coverSubTitle={drawDetail?.DOP.coverSubTitle}
                    coverButtonTitle={drawDetail?.DOP.coverButtonTitle}
                    onClick={redirectOrderPage}
                />
            )}

            <PageContentWrapper className="top-content-wrap">
                <IndividualReviewSlider
                    trustPilots={drawDetail?.DOP?.trustPilots}
                    title={drawDetail?.DOP?.trustPilotTitle}
                    subTitle={drawDetail?.DOP?.trustPilotDescription}
                    totalRating={roundOff(drawDetail?.DOP?.trustPilotTotalRating)}
                />
                <GallerySliderBlock
                    heading="Gallery"
                    subHeading="In our colorful gallery, we store a diverse range of personalized individual portraits"
                    mediumDetail={drawDetail?.DOP?.mediumRecords}
                />
            </PageContentWrapper>
            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <HowItWoks
                        detail={drawDetail?.DOP?.howItWorkRecords}
                        info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <HowItWoks
                        detail={drawDetail?.DOP?.howItWorkRecords}
                        info="Start your order, upload a photo, select theme & medium, and pay only 20% of the full amount, approve your painting and receive your precious artwork"
                    />
                </ParallaxTranslate>
            )}
            <PageContentWrapper className="btm-content-wrap">
                <TourPaintings
                    title={drawDetail?.DOP?.turnPhotoToPaintingTitle}
                    content={drawDetail?.DOP?.turnPhotoToPaintingDiscription}
                    btnTitle={drawDetail?.DOP?.turnPhotoToPaintingButtonTitle}
                    reviewTitle="Excellent Customer Reviews"
                    rate={roundOff(drawDetail?.DOP?.trustPilotTotalRating)}
                    bannerVideo={drawDetail?.DOP?.turnPhotoToPaintingVideoUrl}
                    poster={drawDetail?.DOP?.videoThumbnailUrl}
                    onClick={redirectOrderPage}
                />
                <ProfessionalPainters detail={drawDetail?.DOP?.painterRecords} />
            </PageContentWrapper>

            {isMobile ? (
                <FadeIn from="bottom" positionOffset={400} triggerOffset={200} delayInMilliseconds={0}>
                    <AfterBefore
                        leftImage={drawDetail?.DOP?.makePhotoAliveOriginalImageUrl}
                        rightImage={drawDetail?.DOP?.makePhotoAlivePaintedImageUrl}
                        title={drawDetail?.DOP?.makePhotoAliveTitle}
                        description={drawDetail?.DOP?.makePhotoAliveDiscription}
                        btnText={drawDetail?.DOP?.makePhotoAliveButtonTitle}
                        onClick={redirectOrderPage}
                    />
                </FadeIn>
            ) : (
                <ParallaxTranslate speed={loading ? 0 : checkForDevice(windowSize) ? 2 : 4}>
                    <AfterBefore
                        leftImage={drawDetail?.DOP?.makePhotoAliveOriginalImageUrl}
                        rightImage={drawDetail?.DOP?.makePhotoAlivePaintedImageUrl}
                        title={drawDetail?.DOP?.makePhotoAliveTitle}
                        description={drawDetail?.DOP?.makePhotoAliveDiscription}
                        btnText={drawDetail?.DOP?.makePhotoAliveButtonTitle}
                        onClick={redirectOrderPage}
                    />
                </ParallaxTranslate>
            )}
            <PaintingRevealProcess detail={drawDetail?.DOP?.reviewRecords} />
            <FetureInfo />

            <PaintingsFAQ name={drawDetail?.DOP?.name} description={drawDetail?.DOP?.description} />
            <LoadingCover show={loading} />
        </>
    );
};

export default DrawingPortrait;

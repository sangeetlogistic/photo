/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FadeIn } from 'react-slide-fade-in';
import { message } from 'antd';

import HowItWoks from '../../components/HowItWoks';
import IndividualReviewSlider from '../../components/IndividualReviewSlider';
import PageContentWrapper from '../../components/PageContentWrapper';
import TourPaintings from '../../components/TourPaintings';
import Background from './Home.Background';
import HeroSectionContent from './Home.HeroSectionContent';
import FetureInfo from '../../components/FetureInfo';
import { Images } from '../../theme';
import GallerySliderBlock from '../../components/GallerySliderBlock/Loadable';
import ProfessionalPainters from '../../components/ProfessionalPainters/Loadable';
import AfterBefore from '../../components/AfterBefore/Loadable';
import PaintingRevealProcess from '../../components/PaintingRevealProcess/Loadable';
import ParallaxTranslate from '../../components/ParallaxTranslate';
import { useDeviceDetect, useRedirectOrder } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearHomeDetail, getHomeDetailAction, selectError, selectHomeDetail, selectLoading } from './Home.slice';
import LoadingCover from '../../components/LoadingCover';

const Home = () => {
    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const loading = useAppSelector(selectLoading);
    const homeDetail = useAppSelector(selectHomeDetail);
    const error = useAppSelector(selectError);
    const redirect = useRedirectOrder();

    useEffect(() => {
        dispatch(getHomeDetailAction());
    }, []);

    useEffect(() => {
        if (error) message.error(error.message);

        return () => {
            dispatch(clearHomeDetail());
        };
    }, [error]);

    const redireactOrderPage = () => {
        redirect.redirectTo();
    };

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Background />
            <HeroSectionContent />

            <PageContentWrapper className="top-content-wrap">
                <IndividualReviewSlider
                    title="Customers love our custom paintings from photos"
                    subTitle="Genuine feedback helps us improve our service and motivates us to turn photos into paintings more enthusiastically."
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
                <ParallaxTranslate speed={loading ? 0 : 4}>
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
                    reviewTitle={
                        <div>
                            Customer review - <span className="text-success">Excellent</span>
                        </div>
                    }
                    rate={4.9}
                    totalReviews={1356}
                    bannerVideo={homeDetail?.turnPhotoIntoPainting[0]?.videoUrl}
                    poster={homeDetail?.turnPhotoIntoPainting[0]?.videoThumbUrl || Images.TourPaintingVideoThumb}
                    onClick={redireactOrderPage}
                />
                <ProfessionalPainters detail={homeDetail?.painter} />
            </PageContentWrapper>

            {homeDetail?.makePhotoAlive?.length > 0 &&
                (isMobile ? (
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
                    <ParallaxTranslate speed={loading ? 0 : 4}>
                        <AfterBefore
                            leftImage={homeDetail?.makePhotoAlive[0]?.originalImageUrl}
                            rightImage={homeDetail?.makePhotoAlive[0]?.paintingImageUrl}
                            title={homeDetail?.makePhotoAlive[0]?.title}
                            description={homeDetail?.makePhotoAlive[0]?.description}
                            btnText="Turn Your Photo Into Art!"
                            onClick={redireactOrderPage}
                        />
                    </ParallaxTranslate>
                ))}

            <PaintingRevealProcess detail={homeDetail?.review} />
            <FetureInfo />
            <LoadingCover show={loading} />
        </>
    );
};

export default Home;

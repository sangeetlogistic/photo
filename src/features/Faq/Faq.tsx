/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { Col, Collapse, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import StickyBox from 'react-sticky-box';
import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';

import { Images } from '../../theme';
import { FaqPageMain } from './Faq.component';
import BannerVideo from '../../components/BannerVideo';
import { faqVideo } from '../../constants/general';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFaqAction, selectError, selectFaqs, selectLoading } from './Faq.slice';
import LoadingCover from '../../components/LoadingCover';
import Toast from '../../components/Toast';

const { Panel } = Collapse;

const Faq = () => {
    const { isMobile } = useDeviceDetect();
    const dispatch = useAppDispatch();
    const faqs = useAppSelector(selectFaqs);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);

    const [show, setShow] = useState(false);

    const contentSticky = (
        <div className="video_left_block">
            <div className="video-block">
                <div className="video-block-inner">
                    <h2 className="">HOW IT WORKS?</h2>
                    <BannerVideo bannerVideo={faqVideo} poster={Images.FaqVideoThumb?.src} className="responsive-video" />

                    <div className="how-it-work-steps-block">
                        <div className="how-it-work-steps-block-step">
                            <div className="how-it-work-steps-block-step-inner">
                                <img src={Images.HowFaq1?.src} alt="" className="" width="216" height="201" />
                                <div className="how-it-work-steps-thumb-text">
                                    <p className="">
                                        Choose the painting technique and style. Select an artist and then upload your photo. You can upload multiple
                                        photos to be combined into one portrait. Pick a size, pay only 20%, and submit your order!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="how-it-work-steps-block-step">
                            <div className="how-it-work-steps-block-step-inner">
                                <img src={Images.HowFaq2?.src} alt="" className="" width="216" height="201" />
                                <div className="how-it-work-steps-thumb-text">
                                    <p className="">
                                        Our graphic designers create a digital mock-up of your portrait and send it to you for approval. You can ask
                                        for modifications and upload additional photos from your user-friendly dashboard.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="how-it-work-steps-block-step">
                            <div className="how-it-work-steps-block-step-inner">
                                <img src={Images.HowFaq3?.src} alt="" className="" width="216" height="201" />
                                <div className="how-it-work-steps-thumb-text">
                                    <p className="">
                                        The approved image is sent to our artist who begins painting your portrait. The artist will take a picture of
                                        the portrait and send it to you for approval. You&apos;ll be able to ask for any modification here as well!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="how-it-work-steps-block-step">
                            <div className="how-it-work-steps-block-step-inner">
                                <img src={Images.HowFaq4?.src} alt="" className="" width="216" height="201" />
                                <div className="how-it-work-steps-thumb-text">
                                    <p className="">
                                        Choose from a variety of payment options, including Klarna and Paypal, to finalize your payment. That&apos;s
                                        it! Your portrait will be packaged and shipped to you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        dispatch(getFaqAction());
    }, []);
    useEffect(() => {
        if (error) setShow(true);
    }, []);

    return (
        <>
            <Helmet>
                <title>FAQs</title>
            </Helmet>
            {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            <FaqPageMain>
                <div className="faq-content">
                    <div className="faq-content-container">
                        <Row gutter={24} className="gutter-row" style={{ alignItems: 'flex-start' }}>
                            {!isMobile ? (
                                <StickyBox offsetTop={20} offsetBottom={20}>
                                    {contentSticky}
                                </StickyBox>
                            ) : (
                                <>{contentSticky}</>
                            )}
                            <Col xs={24} md={12} className="gutter-row">
                                <div className="our-faq-card">
                                    <h2 className="">OUR FAQ</h2>
                                    <Collapse
                                        bordered={false}
                                        className="our-faq-collapse-block"
                                        activeKey={[1, 2, 3, 4, 5]}
                                        ghost
                                        expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                    >
                                        {faqs?.map((obj: any, mainIndex: number) => (
                                            <Panel header={obj?.title} key={mainIndex + 1}>
                                                <Collapse
                                                    bordered={false}
                                                    ghost
                                                    expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                                >
                                                    {obj?.faqs?.map((desc: any, index: number) => (
                                                        <Panel header={desc?.question} key={index + 1}>
                                                            <p>{parse(desc?.answer)}</p>
                                                        </Panel>
                                                    ))}
                                                </Collapse>
                                            </Panel>
                                        ))}
                                    </Collapse>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </FaqPageMain>
            <LoadingCover show={loading} />
        </>
    );
};
export default Faq;

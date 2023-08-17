/* eslint-disable max-lines-per-function */
import React from 'react';
import { Col, Collapse, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import StickyBox from 'react-sticky-box';
import { Helmet } from 'react-helmet';

import { Images } from '../../theme';
import { FaqPageMain } from './Faq.component';
import LazyImage from '../../components/LazyImage';
import BannerVideo from '../../components/BannerVideo';
import { faqVideo } from '../../constants/general';

const { Panel } = Collapse;

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada urna nisi, quis dictum sem pharetra et. Donec at nulla lectus. Nunc convallis nisi et felis faucibus vehicula. In ornare dui in elit varius, eu interdum turpis bibendum. Phasellus vitae ante vel odio volutpat fringilla. Proin nulla felis, malesuada quis ligula at, pulvinar lobortis mi. Etiam eget tempor odio, in tristique leo. Donec a molestie ex. Nullam eget consectetur erat, vel sagittis odio.
`;

const Faq = () => (
    <>
        <Helmet>
            <title>FAQs</title>
        </Helmet>

        <FaqPageMain>
            <div className="faq-content">
                <div className="faq-content-container">
                    <Row gutter={20} className="gutter-row">
                        <Col xs={24} lg={12}>
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <div className="video-block">
                                    <div className="video-block-inner">
                                        <h2 className="">HOW IT WORKS?</h2>
                                        <BannerVideo bannerVideo={faqVideo} poster={Images.FaqVideoThumb} className="responsive-video" />

                                        <div className="how-it-work-steps-block">
                                            <div className="how-it-work-steps-block-step">
                                                <div className="how-it-work-steps-block-step-inner">
                                                    <LazyImage src={Images.HowFaq1} alt="" className="" width="216" height="201" />
                                                    <div className="how-it-work-steps-thumb-text">
                                                        <p className="">
                                                            Choose the painting technique and style. Select an artist and then upload your photo. You
                                                            can upload multiple photos to be combined into one portrait. Pick a size, pay only 20%,
                                                            and submit your order!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="how-it-work-steps-block-step">
                                                <div className="how-it-work-steps-block-step-inner">
                                                    <LazyImage src={Images.HowFaq2} alt="" className="" width="216" height="201" />
                                                    <div className="how-it-work-steps-thumb-text">
                                                        <p className="">
                                                            Our graphic designers create a digital mock-up of your portrait and send it to you for
                                                            approval. You can ask for modifications and upload additional photos from your
                                                            user-friendly dashboard.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="how-it-work-steps-block-step">
                                                <div className="how-it-work-steps-block-step-inner">
                                                    <LazyImage src={Images.HowFaq3} alt="" className="" width="216" height="201" />
                                                    <div className="how-it-work-steps-thumb-text">
                                                        <p className="">
                                                            The approved image is sent to our artist who begins painting your portrait. The artist
                                                            will take a picture of the portrait and send it to you for approval. You&apos;ll be able
                                                            to ask for any modification here as well!
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="how-it-work-steps-block-step">
                                                <div className="how-it-work-steps-block-step-inner">
                                                    <LazyImage src={Images.HowFaq4} alt="" className="" width="216" height="201" />
                                                    <div className="how-it-work-steps-thumb-text">
                                                        <p className="">
                                                            Choose from a variety of payment options, including Klarna and Paypal, to finalize your
                                                            payment. That&apos;s it! Your portrait will be packaged and shipped to you.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                        </Col>
                        <Col xs={24} lg={12} className="gutter-row">
                            <div className="our-faq-card">
                                <h2 className="">OUR FAQ</h2>
                                <Collapse
                                    bordered={false}
                                    className="our-faq-collapse-block"
                                    activeKey={[1, 2, 3, 4, 5]}
                                    ghost
                                    expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                >
                                    <Panel header="Shipping & Delivery" key="1">
                                        <Collapse
                                            bordered={false}
                                            ghost
                                            expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header="When will I receive my painting?" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="What is express service?" key="2">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Do you offer express shipping?" key="3">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="How long does modifications take to my painting?" key="4">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Is it possible to ship to FPO, PO or APO Boxes?" key="5">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Is my product well-protected during shipping?" key="6">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Do you offer international shipping?" key="7">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Panel>
                                    <Panel header="Regarding Photo Editing" key="2">
                                        <Collapse
                                            bordered={false}
                                            ghost
                                            expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header="How does photo editing/modification work? " key="1">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Can you combine multiple photos into a single painting?" key="2">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="What if my photo is damaged or is not of high quality?" key="3">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Can you restore old photos or colorize black & white photos?" key="4">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Can I inquire any special request for the photo editing?" key="5">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Panel>
                                    <Panel header="Prices and Payments" key="3">
                                        <Collapse
                                            bordered={false}
                                            ghost
                                            expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header="How much does a painting cost?" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="When do I pay for my order?" key="2">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Do you offer any payment plans? " key="3">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Do I have to pay extra for modifications?" key="4">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Which payment methods are available?" key="5">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Can I use 2 different cards/payment options?" key="6">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Panel>
                                    <Panel header="Ordering" key="4">
                                        <Collapse
                                            bordered={false}
                                            ghost
                                            expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header="How do I apply a coupon code?" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="What is the video service?" key="2">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Do you offer framing options?" key="3">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="I can't upload my photo. Is there anything I can do?" key="4">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Why are the number of subjects limited for some sizes?" key="5">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Why aren’t smaller sizes available?" key="6">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Can I choose the background for my painting?" key="7">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="What medium is best for my photo?" key="8">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Panel>
                                    <Panel header="General Questions" key="5">
                                        <Collapse
                                            bordered={false}
                                            ghost
                                            expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header="How can I log in?" key="1">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Can I talk to the painting artist?" key="2">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Can I find all of your artwork on your online galleries? " key="3">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="Will I be able to preview the painting before receiving it?" key="4">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="What about my privacy? Is my private information protected?" key="5">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="What is your refund policy?" key="6">
                                                <p>{text}</p>
                                            </Panel>
                                            <Panel header="What about your return policy?" key="7">
                                                <p>{text}</p>
                                            </Panel>
                                        </Collapse>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </FaqPageMain>
    </>
);

export default Faq;

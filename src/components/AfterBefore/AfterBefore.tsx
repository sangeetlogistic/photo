import React from 'react';
import { Col, Row } from 'antd';
import ReactCompareImage from 'react-compare-image';
import _ from 'lodash';
import parse from 'html-react-parser';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import { Images } from '../../theme';
import FilledButton from '../FilledButton';
import { AfterBeforeCmp } from './AfterBefore.component';
import { IAfterBefore } from './AfterBefore.type';
import LazyImage from '../LazyImage';
import { useAppDispatch } from '../../app/hooks';
import { setIsAfterBeforeSliderMoving } from '../Layout/Layout.slice';
import { debounceTime } from '../../constants/general';

const AfterBefore = (props: IAfterBefore) => {
    const { title, firstContent, seondContent, btnText, leftImage, rightImage, percentShown, description, onClick, ...rest } = props;
    const dispatch = useAppDispatch();

    const handleSliderChange = _.debounce(() => {
        dispatch(setIsAfterBeforeSliderMoving(false));
    }, debounceTime);

    const handleSliderPositionChange = () => {
        dispatch(setIsAfterBeforeSliderMoving(true));
        handleSliderChange();
    };

    return (
        <AfterBeforeCmp className="after-before-section" percentShown={percentShown}>
            <div className="after-before-container">
                <Row gutter={7}>
                    <Col className="gutter-row" xs={24} md={8}>
                        <div className="after-before-wrapper ">
                            <div className="after-before-content-block">
                                <h3 className="sec-sub-title text-font">{title}</h3>
                                <div className="after-before-text-block">
                                    <p>{firstContent || ''}</p>
                                    <p>{seondContent || ''}</p>
                                    {description ? parse(`${description}`) : ''}
                                </div>
                                <FilledButton size="large" color="primaryGRD" className="text-uppercase btn-turn-photo" onClick={onClick}>
                                    {btnText}
                                </FilledButton>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} md={16}>
                        <div className="after-before-img-block">
                            <LazyLoadComponent>
                                <ReactCompareImage
                                    handleSize={4}
                                    leftImage={leftImage}
                                    rightImage={rightImage}
                                    sliderPositionPercentage={0.7}
                                    handle={<LazyImage src={Images.IconAfterBeforeArrow} alt="" effect="opacity" />}
                                    leftImageLabel="photo"
                                    rightImageLabel="painting"
                                    rightImageCss={{}}
                                    onSliderPositionChange={handleSliderPositionChange}
                                    {...rest}
                                />
                            </LazyLoadComponent>
                            <div className="mobile-dobule-arrow-row">
                                <span className="mobil-icon mobile-icon-left">
                                    <img src={Images.IconMobileDubleArrowLeft} alt="" className="" />
                                </span>
                                <span className="mobil-icon mobile-icon-right">
                                    <img src={Images.IconMobileDubleArrowRight} alt="" className="" />
                                </span>
                            </div>
                            <div className="swiper-text-block">
                                <span className="text-block-wrap">
                                    <i className="icon-arrow icon-arrow-1">
                                        <LazyImage effect="opacity" src={Images.AfterBeforeArrow1} alt="" className="" />
                                    </i>
                                    <i className="icon-arrow icon-arrow-2">
                                        <LazyImage effect="opacity" src={Images.AfterBeforeArrow2} alt="" className="" />
                                    </i>
                                    <span className="text-block">SWIPE</span>
                                    <i className="icon-arrow icon-arrow-3">
                                        <LazyImage effect="opacity" src={Images.AfterBeforeArrow3} alt="" className="" />
                                    </i>
                                    <i className="icon-arrow icon-arrow-2">
                                        <LazyImage effect="opacity" src={Images.AfterBeforeArrow4} alt="" className="" />
                                    </i>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </AfterBeforeCmp>
    );
};

export default AfterBefore;

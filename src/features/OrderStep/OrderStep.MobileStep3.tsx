/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Images } from '../../theme';
import { OrderStep3Cmp } from './OrderPage.component';
import OrderSummary from './OrderStep.Step3.OrderSummary';
import SliderCarousel from '../../components/SliderCarousel/SliderCarousel';
import { NextBtn, PrevBtn } from '../../components/PrevNextBtn/PrevNextBtn';
import FilledButton from '../../components/FilledButton/FilledButton';
import { OrderSummaryThemeModal } from './OrderPage.MobileComponent';
import { depositDue } from './OrderStep.constants';
import { setSelectSize } from './OrderStep.slice';
import { useAppDispatch } from '../../app/hooks';

const MobileStep3 = ({
    selectPaintingSizeAndPrice,
    selectedFrame,
    combinePhotoPrice,
    videoCreated,
    selectSize,
    step3Detail,
    handleInputSelection,
    handleFrameChange,
    classWithPaintingSize,
    selectPaintingSize,
    setSelectPaintingSize,
    selectedPaintingFraming,
    setSelectedPaintingFraming,
    isNoteFadeList,
    setIsNoteFadeList,
    currentSlide,
    setCurrentSlide,
    viewOrderSummary,
    setViewOrderSummary,
    selectSizeSlider,
    setSelectSizeSlider,
    personsCount,
    petsCount,
}: any) => {
    const dispatch = useAppDispatch();

    const [nav1, setNav1] = useState<any>();
    const [nav2, setNav2] = useState();

    const settings = {
        arrows: false,
        dots: true,
        fade: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                },
            },
        ],
        beforeChange: (current: number, next: number) => {
            if (isNoteFadeList?.length > 0) {
                const filterSizePrice = isNoteFadeList?.find((list: any, index: number) => next === index);
                handleInputSelection(filterSizePrice)(undefined);
            }
            setCurrentSlide(next);
        },
    };

    useEffect(() => {
        if (nav1) nav1?.slickGoTo(currentSlide);
    }, [nav1, currentSlide]);

    useEffect(() => {
        if (selectSizeSlider && !selectPaintingSize) {
            const filterSizePrice = step3Detail?.size?.find((list: any, index: number) => currentSlide === index);
            handleInputSelection(filterSizePrice)(undefined);
        }
    }, [currentSlide, selectPaintingSize, selectSizeSlider]);

    useEffect(() => {
        if (selectPaintingSize && selectSizeSlider) {
            isNoteFadeList?.forEach((obj: any, index: any) => {
                if (obj.id === selectSizeSlider.id) {
                    setCurrentSlide(index);
                }
            });
        }
    }, [selectPaintingSize, selectSizeSlider]);

    useEffect(() => {
        const noteFadeList = step3Detail?.size?.filter((list: any) => !list.isFade);
        setIsNoteFadeList(noteFadeList);
    }, [step3Detail?.size]);

    useEffect(() => {
        if (!selectPaintingSize || selectPaintingSize === null) setSelectedPaintingFraming(false);
    }, [selectPaintingSize]);

    useEffect(() => {
        if (step3Detail?.frame?.filter((obj: any) => obj?.sizeid?.id === selectPaintingSizeAndPrice?.sizeid).length === 1)
            setSelectedPaintingFraming(true);
    }, [selectPaintingSizeAndPrice]);

    const settingsBox = {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
    };

    const handlePrevious = () => nav1?.slickPrev();
    const handleNext = () => nav1?.slickNext();
    const handleSlideClick = (index: number) => {
        if (index === currentSlide) {
            // Clicked on the current slide, do nothing
            return;
        }
        if (index === currentSlide - 1 || (currentSlide === 0 && index === isNoteFadeList?.length - 1)) {
            nav1.slickPrev();
        } else if (index === currentSlide + 1 || (currentSlide === isNoteFadeList?.length - 1 && index === 0)) {
            nav1.slickNext();
        } else if (currentSlide === isNoteFadeList?.length - 1) {
            nav1.slickPrev();
        } else {
            nav1.slickNext();
        }
    };

    return (
        <>
            {!selectPaintingSize && (
                <OrderStep3Cmp className="mobile-order-inner-block step-3">
                    {selectSize.painting && (
                        <div className="select-size-frame-card">
                            <div className="sub-info-block-inner">
                                <h4 className="title">
                                    <span className="">20% DEPOSIT DUE TODAY &nbsp;</span>
                                </h4>
                                <p className="note">✹ Remaining balance to be paid after painting approval</p>
                            </div>
                            <p className="painting-size">Select Painting Size</p>
                            <div className="frame-size-block">
                                {step3Detail?.size?.map((list: any, index: number) => (
                                    <label htmlFor={list.id} className="select-size-label" key={index}>
                                        <input
                                            type="radio"
                                            className="select-size-input-radio"
                                            name="paintingSize"
                                            id={list.id}
                                            onChange={async () => {
                                                await setCurrentSlide(index);
                                                await setSelectSizeSlider(list);
                                                setTimeout(async () => {
                                                    await setSelectPaintingSize(true);
                                                }, 1000);
                                            }}
                                            checked={selectPaintingSizeAndPrice?.id === list.id}
                                            disabled={list.isFade}
                                        />
                                        <div className={`select-size-block-outer ${list.isFade ? 'opacity05' : ''} `} role="button" tabIndex={0}>
                                            <div className="select-size-wrap">
                                                <div className="d-flex justify-between items-center">
                                                    <span className="painting-size">{`${list?.size_id?.height}” x ${list?.size_id?.width}”`}</span>
                                                    <span className="painting-rate">{`$${list?.newprice || list?.price}`}</span>
                                                </div>
                                                <p className="twenty_per_text">
                                                    <span className="painting-size">20% Due Now:</span>{' '}
                                                    <span
                                                        className={`painting-rate-red  ${
                                                            selectPaintingSizeAndPrice?.id === list.id ? 'text-red' : ''
                                                        }`}
                                                    >
                                                        ${Math.round((list?.newprice || list?.price) * depositDue)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </OrderStep3Cmp>
            )}

            {selectSize.frame && (
                <OrderStep3Cmp className="mobile-order-inner-block step-3">
                    <div className="order-select-setp-1-card select-size-frame-card step-selected">
                        <div className="card-title-row">
                            <h4 className="card-title">Size Selected</h4>
                            <FilledButton
                                className="btn-selected"
                                onClick={() => {
                                    dispatch(
                                        setSelectSize({
                                            painting: true,
                                            frame: false,
                                        }),
                                    );
                                    setSelectedPaintingFraming(true);
                                }}
                            >
                                <span className="selected">Edit</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </FilledButton>
                        </div>
                        <div
                            className="frame-size-block justify-center"
                            onClick={() => {
                                dispatch(
                                    setSelectSize({
                                        painting: true,
                                        frame: false,
                                    }),
                                );
                                setSelectedPaintingFraming(true);
                            }}
                        >
                            <label className="select-size-label selected_width">
                                <input
                                    type="radio"
                                    className="select-size-input-radio"
                                    name="paintingSize"
                                    defaultChecked={
                                        step3Detail?.size?.length > 0 &&
                                        step3Detail?.size?.find((obj: any) => obj?.id === selectPaintingSizeAndPrice?.id)
                                    }
                                />
                                <div className="select-size-block-outer">
                                    <div className="select-size-wrap">
                                        <div className="d-flex justify-between items-center">
                                            <span className="painting-size">{`${selectPaintingSizeAndPrice?.title}`}</span>
                                            <span className="twenty_per_text">{`$${selectPaintingSizeAndPrice?.price}`}</span>
                                        </div>
                                        <p className="twenty_per_text">
                                            <span className="painting-size">20% Due Now:</span>{' '}
                                            <span className="painting-rate-red text-red">
                                                ${Math.round(selectPaintingSizeAndPrice?.price * depositDue)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className={`${selectedPaintingFraming ? 'selected_block_show' : 'selected_block_hide'}`}>
                            <div className="card-title-row mt-3">
                                <h4 className="card-title">Painting Framing</h4>
                                {selectPaintingSizeAndPrice?.framingServiceAvailable && (
                                    <FilledButton className="btn-selected" onClick={() => setSelectedPaintingFraming(false)}>
                                        <span className="selected">Edit</span>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </FilledButton>
                                )}
                            </div>
                            <div
                                className="select-frame-block"
                                onClick={() => selectPaintingSizeAndPrice?.framingServiceAvailable && setSelectedPaintingFraming(false)}
                            >
                                <label htmlFor="framePainting" className="select-frame-label">
                                    <input
                                        type="radio"
                                        className="select-frame-input-radio"
                                        name="framePainting"
                                        defaultChecked={
                                            step3Detail?.frame?.length > 0 && step3Detail?.frame?.find((obj: any) => obj?.id === selectedFrame?.id)
                                        }
                                    />
                                    <div className="select-frame-block-outer">
                                        <div className="select-frame-wrap">
                                            {' '}
                                            <figure className="img-block">
                                                <span className="frame-rate">${selectedFrame?.price}</span>
                                                <img src={selectedFrame?.image} className="select-frame-img" alt="" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="frame-name">{selectedFrame?.title}</div>
                                </label>
                            </div>
                        </div>
                        <div className={`${!selectedPaintingFraming ? 'select_framing_block_show' : 'select_framing_block_hide'}`}>
                            <div className="card-title-row mt-3">
                                <h4 className="card-title">Select Painting Framing</h4>
                            </div>
                            <div className="select-frame-block">
                                {step3Detail?.frame
                                    ?.filter((obj: any) => obj?.sizeid?.id === selectPaintingSizeAndPrice?.sizeid)
                                    ?.map((list: any, index: number) => (
                                        <label htmlFor={list.id} className="select-frame-label" key={index} defaultChecked>
                                            <>
                                                <input
                                                    type="radio"
                                                    className="select-frame-input-radio"
                                                    name="paintingFrame"
                                                    id={list.id}
                                                    onChange={(event) => {
                                                        handleFrameChange(list)(event);
                                                        setSelectedPaintingFraming(true);
                                                    }}
                                                    checked={list.id === selectedFrame?.id}
                                                />
                                                <div className="select-frame-block-outer">
                                                    <div className="select-frame-wrap">
                                                        <figure className="img-block">
                                                            <span className="frame-rate">${list.price}</span>
                                                            <img src={list.frameImageUrl} className="select-frame-img" alt="" />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <span className="frame-name">{list.name}</span>
                                            </>
                                        </label>
                                    ))}
                            </div>
                        </div>
                        <div onClick={() => setViewOrderSummary(true)} tabIndex={0} role="button" className="orderSummary_button">
                            <button type="button" className="summary_button">
                                VIEW ORDER SUMMARY
                                <img src={Images.BoxIcon} alt="boxicon" className="mx-3" />
                            </button>
                        </div>
                    </div>
                </OrderStep3Cmp>
            )}
            <OrderSummaryThemeModal>
                <div className={`bottom_drawer ${viewOrderSummary ? 'modal_show' : ''}`}>
                    <div className="custom-back" tabIndex={0} role="button">
                        <div className="relative">
                            <Button type="link" className="icon-close" icon={<CloseOutlined />} onClick={() => setViewOrderSummary(false)} />
                            <OrderSummary
                                selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                                selectedFrame={selectedFrame}
                                combinePhotoPrice={combinePhotoPrice}
                                videoCreated={videoCreated}
                                personsCount={personsCount}
                                petsCount={petsCount}
                            />
                        </div>
                    </div>
                </div>
            </OrderSummaryThemeModal>
            {selectSize.painting && selectPaintingSize && (
                <OrderStep3Cmp className="mobile-order-inner-block step-3 px-0 py-0 slider_slide_bottom">
                    <div className="mobile_fram_selection">
                        <div className="frame-select-preview">
                            <img src={Images.OrderPaintingImgBg} alt="" className="f-s-bg" />
                            <img src={Images.OrderPaintingImgLight} alt="" className="f-s-light" />
                        </div>
                        <div className={`slider_top ${selectSize.painting && selectPaintingSize ? 'slider_show' : ''}`}>
                            <PrevBtn handlePrevious={handlePrevious} />
                            <SliderCarousel settings={settings} ref={(slider1: any) => setNav1(slider1)} asNavFor={nav2}>
                                {isNoteFadeList?.map((preview: any, index: number) => (
                                    <div key={index}>
                                        <img
                                            src={preview?.size_id?.sizeImageUrl}
                                            alt=""
                                            className={`f-painting ${classWithPaintingSize[`${preview.size_id.height}x${preview.size_id.width}`]} ${
                                                preview?.id === selectPaintingSizeAndPrice?.id ? 'active' : ''
                                            }`}
                                        />
                                    </div>
                                ))}
                            </SliderCarousel>
                            <div className="select-size-frame-card slider_frame">
                                <div className="frame-size-block">
                                    <SliderCarousel settings={settingsBox} ref={(slider2: any) => setNav2(slider2)} asNavFor={nav1}>
                                        {isNoteFadeList?.map((list: any, index: number) => (
                                            <label
                                                htmlFor={list.id}
                                                className={`select-size-label ${selectPaintingSizeAndPrice?.id === list.id ? 'active' : ''}`}
                                                key={index}
                                            >
                                                <input
                                                    type="radio"
                                                    className="select-size-input-radio"
                                                    name="paintingSize"
                                                    id={list.id}
                                                    onChange={() => handleSlideClick(index)}
                                                    disabled={list.isFade}
                                                />
                                                <div
                                                    className={`select-size-block-outer ${list.isFade ? 'opacity05' : ''} `}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <div className="select-size-wrap">
                                                        <div className="d-flex justify-between items-center">
                                                            <span className="painting-size">
                                                                {`${list?.size_id?.height}” x ${list?.size_id?.width}”`}
                                                            </span>
                                                            <span className="painting-rate">{`$${list?.newprice || list?.price}`}</span>
                                                        </div>
                                                        <p className="twenty_per_text">
                                                            20% Due Now:
                                                            <span
                                                                className={`painting-rate-red  ${
                                                                    selectPaintingSizeAndPrice?.id === list.id ? 'text-red' : ''
                                                                }`}
                                                            >
                                                                ${Math.round((list?.newprice || list?.price) * depositDue)}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </SliderCarousel>
                                </div>
                            </div>
                            <NextBtn handleNext={handleNext} />
                        </div>
                    </div>
                </OrderStep3Cmp>
            )}
        </>
    );
};

export default MobileStep3;

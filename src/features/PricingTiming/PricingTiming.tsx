/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useMemo, useState } from 'react';
import { faAngleDown, faAngleRight, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, InputNumber, Select, Popover } from 'antd';
import _ from 'lodash';
import StickyBox from 'react-sticky-box';
import { Helmet } from 'react-helmet';

import { Images } from '../../theme';
import { PricingTimingWrapCmp } from './PricingTiming.component';
import FilledButton from '../../components/FilledButton';
import { maxRangeInput, minRangeInput } from '../../components/Layout/Header/Header.constants';
import { paintingSize } from '../../components/Layout/Header/Header.data';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';
import PricingTimingGiftCardPopup from './PricingTiming.GiftCard';
import FramePreview from '../../components/FramePreview';
import { priceCalculatorMenu } from '../../utils/func';
import { Routes } from '../../navigation/Routes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPriceTimeAction, selectLoading, selectPrice, selectServiceAndShipping, selectSize, selectThemeObject } from './PricingTiming.slice';
import { selectLoading as selectOrderStepLoading } from '../OrderStep/OrderStep.slice';
import LoadingCover from '../../components/LoadingCover/LoadingCover';
import { depositDue } from '../OrderStep/OrderStep.constants';
import { useRouter } from 'next/router';
import Image from 'next/image';

const contentFreeService = `The following turnaround is from the day you place your order to the day you receive it at your door. Shipping times may vary (4-5 days) during high-volume order periods`;
const contentExpressService = `If you choose the Express service, we will start working on your order right away! You can choose this service on the checkout page. The cost of this service is an additional 15%. Shipping times may vary (2-3 days) during high-volume order periods`;
const contentExpressServiceShipping = `If you want to reduce the delivery time by several days, you can choose our Express service (+15%) + Express Shipping service (+15%). Delivery times may vary (2-3 days) during high-volume order periods `;

const { Option } = Select;
const PricingTiming = () => {
    const history = useRouter();
    const { isMobile } = useDeviceDetect();
    const dispatch = useAppDispatch();

    const price = useAppSelector(selectPrice);
    const size = useAppSelector(selectSize);
    const themeObject = useAppSelector(selectThemeObject);
    const serviceAndShipping = useAppSelector(selectServiceAndShipping);
    const loading = useAppSelector(selectLoading);
    const orderStepLoading = useAppSelector(selectOrderStepLoading);

    const [paintingSizeDropdownOpen, setPaintingSizeDropdownOpen] = useState(false);
    const [isActiveDropDown, setIsActiveDropDown] = useState(false);
    const [isHovered, setIsHovered] = useState({ open: false, obj: null });
    const [giftCardPopup, setGiftCardPopup] = useState(false);
    const [paintingSizePrice, setPaintingSizePrice] = useState<number>(179);
    const [amountPersonsAndPets, setAmountPersonsAndPets] = useState<number>(0);
    const [numPersons, setNumPersons] = useState<any>(0);
    const [numPets, setNumPets] = useState<any>(0);

    useEffect(() => {
        dispatch(getPriceTimeAction());
    }, []);

    const serviceShippingInfo = useMemo(
        () =>
            Array?.from(new Set(serviceAndShipping?.map((obj: any) => obj.serviceType)))?.map((serviceType: any, index: number) => (
                <tr key={index}>
                    {serviceAndShipping
                        .filter((obj: any) => obj.serviceType === serviceType)
                        .map((obj: any) => (
                            <td
                                key={obj.id}
                                className={`upper-case-text ${serviceType === 'EXPRESS SERVICE + EXPRESS SHIPPING' ? 'text-primary' : ''}`}
                            >
                                {obj.daysTaken} days
                            </td>
                        ))}
                </tr>
            )),
        [serviceAndShipping],
    );
    const stickyContent = useMemo(
        () => (
            <>
                {!isMobile ? (
                    <div className="service-shippping-block-wrapp">
                        <div className="service-and-shipping-outer">
                            <h2 className="title-space">SERVICE & SHIPPING</h2>
                            <div className="grd-brd-card service-and-shipping-card service_card_web">
                                <div className="service-table-block">
                                    <ul className="service-left-list">
                                        <li className="">
                                            <div className="text-label ">free service</div>
                                            <Popover
                                                trigger="hover"
                                                content={contentFreeService}
                                                arrowPointAtCenter={false}
                                                overlayClassName="order-step-tooltip"
                                                showArrow={false}
                                            >
                                                <i className="icon">
                                                    <img src={Images.QuestionIcon} alt="" className="" />
                                                </i>
                                            </Popover>
                                        </li>
                                        <li className="">
                                            <div className="text-label">Express service</div>
                                            <Popover
                                                trigger="hover"
                                                content={contentExpressService}
                                                arrowPointAtCenter={false}
                                                overlayClassName="order-step-tooltip"
                                                showArrow={false}
                                            >
                                                <i className="icon">
                                                    <img src={Images.QuestionIcon} alt="" className="" />
                                                </i>
                                            </Popover>
                                        </li>
                                        <li className="">
                                            <div className="text-label text-primary">express service + Express shipping</div>
                                            <Popover
                                                trigger="hover"
                                                content={contentExpressServiceShipping}
                                                arrowPointAtCenter={false}
                                                overlayClassName="order-step-tooltip"
                                                showArrow={false}
                                            >
                                                <i className="icon">
                                                    <img src={Images.QuestionIcon} alt="" className="" />
                                                </i>
                                            </Popover>
                                        </li>
                                    </ul>
                                    <div className="service-right-block">
                                        <ul className="service-right-head-list">
                                            <li className="">small size Portrait</li>
                                            <li className="">Medium size Portrait</li>
                                            <li className="">Big size Portrait</li>
                                        </ul>
                                        <div className="size-table-block service-size-table-block">
                                            <table className="size-brd-table">
                                                <tbody>{serviceShippingInfo}</tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="place-order-block">
                            <div className="place-order-text">
                                <p className="text-top">Looking for something with a shorter turnaround?</p>
                                <div className="text-primary link_button" onClick={() => setGiftCardPopup(true)} role="button" tabIndex={0}>
                                    Order a Gift Card!
                                </div>
                                <div className="btn-row">
                                    <FilledButton
                                        color="primary"
                                        className="btn-place-order"
                                        block
                                        onClick={() => history.push(Routes.orderStep.replace(':id', '1'))}
                                    >
                                        Place your order now
                                    </FilledButton>
                                </div>
                            </div>
                            <div className="place-order-img-block ">
                                <img src={Images.PersonBox} alt="" className="" />
                            </div>
                        </div>
                        <div className="framing-information-block order_mobile_show">
                            <h4 className="sub-title text-uppercase title-space">Framing information</h4>
                            <div className="grd-brd-card framing-info-card">
                                <div className="framing-info-row">
                                    <figure className="framing-info-img">
                                        <span className="price">$0</span>
                                        <img src={Images.OrderFrameTube} alt="" className="" />
                                        <p className="title_img">Delivered in tube</p>
                                    </figure>
                                    <div className="framing-data-block ">
                                        <h6 className="">free Service includes painting to be delivered in the tube</h6>
                                        <p className="">
                                            You can chose different framing during order process, Frame prices might vary from
                                            {` `}
                                            <span className="fw-bold">20$ -150$</span> and depending on the painting size and frame medium and
                                            structure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="service-shippping-block-wrapp">
                        <div className="service-and-shipping-outer">
                            <h2 className="title-space">SERVICE & SHIPPING</h2>
                            <div className="grd-brd-card service-and-shipping-card service_card_mobile">
                                <div className="service-table-block">
                                    <ul className="service-right-head-list">
                                        <li className="">
                                            small <br /> size Portrait
                                        </li>
                                        <li className="">
                                            Medium <br /> size Portrait
                                        </li>
                                        <li className="">
                                            Big <br /> size Portrait
                                        </li>
                                    </ul>
                                    <div className="service-right-block">
                                        <div className="size-table-block service-size-table-block">
                                            <table className="size-brd-table">
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            <div className="heading_tab">
                                                                <div className="text-label ">free service</div>
                                                                <Popover
                                                                    trigger="click"
                                                                    content={contentFreeService}
                                                                    arrowPointAtCenter={false}
                                                                    overlayClassName="order-step-tooltip"
                                                                    showArrow={false}
                                                                >
                                                                    <i className="icon">
                                                                        <img src={Images.QuestionIcon} alt="" className="" />
                                                                    </i>
                                                                </Popover>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="heading_tab">
                                                                <div className="text-label">Express service</div>
                                                                <Popover
                                                                    trigger="click"
                                                                    content={contentExpressService}
                                                                    arrowPointAtCenter={false}
                                                                    overlayClassName="order-step-tooltip"
                                                                    showArrow={false}
                                                                >
                                                                    <i className="icon">
                                                                        <img src={Images.QuestionIcon} alt="" className="" />
                                                                    </i>
                                                                </Popover>
                                                            </div>
                                                        </th>
                                                        <th>
                                                            <div className="heading_tab">
                                                                <div className="text-label text-primary">
                                                                    express service + <br /> Express shipping
                                                                </div>
                                                                <Popover
                                                                    trigger="click"
                                                                    content={contentExpressServiceShipping}
                                                                    arrowPointAtCenter={false}
                                                                    overlayClassName="order-step-tooltip"
                                                                    showArrow={false}
                                                                >
                                                                    <i className="icon">
                                                                        <img src={Images.QuestionIcon} alt="" className="" />
                                                                    </i>
                                                                </Popover>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    {serviceShippingInfo}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="place-order-block">
                            <div className="place-order-text">
                                <p className="text-top">Looking for something with a shorter turnaround?</p>
                                <div className="text-primary link_button" onClick={() => setGiftCardPopup(true)} role="button" tabIndex={0}>
                                    Order a Gift Card!
                                </div>
                                <div className="btn-row">
                                    <FilledButton
                                        color="primary"
                                        className="btn-place-order"
                                        block
                                        onClick={() => history.push(Routes.orderStep.replace(':id', '1'))}
                                    >
                                        Place your order now
                                    </FilledButton>
                                </div>
                            </div>
                            <div className="place-order-img-block ">
                                <img src={Images.PersonBox} alt="" className="" />
                            </div>
                        </div>
                        <div className="framing-information-block order_mobile_show">
                            <h4 className="sub-title text-uppercase title-space">Framing information</h4>
                            <div className="grd-brd-card framing-info-card">
                                <div className="framing-info-row">
                                    <figure className="framing-info-img">
                                        <span className="price">$0</span>
                                        <img src={Images.OrderFrameTube} alt="" className="" />
                                        <p className="title_img">Delivered in tube</p>
                                    </figure>
                                    <div className="framing-data-block ">
                                        <h6 className="">free Service includes painting to be delivered in the tube</h6>
                                        <p className="">
                                            You can chose different framing during order process, Frame prices might vary from
                                            {` `}
                                            <span className="fw-bold">20$ -150$</span> and depending on the painting size and frame medium and
                                            structure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        ),
        [serviceAndShipping, isMobile],
    );

    const handleClickIcon = (type: boolean) => {
        setIsActiveDropDown(type);
        setPaintingSizeDropdownOpen(!paintingSizeDropdownOpen);
    };

    const handleHover = (obj: any) => setIsHovered(!obj || obj === null ? { open: false, obj: null } : { open: true, obj });

    const handlePersonsAmountChange = (value: number | null) => {
        setNumPersons(value);
        const total: any = priceCalculatorMenu(paintingSizePrice, value || 0, numPets);
        setAmountPersonsAndPets(total);
    };
    const handlePetsAmountChange = (value: number | null) => {
        setNumPets(value);
        const total: any = priceCalculatorMenu(paintingSizePrice, numPersons, value || 0);
        setAmountPersonsAndPets(total);
    };
    const handleChange = (value: number) => {
        setPaintingSizePrice(value);

        const total: any = priceCalculatorMenu(value, numPersons, numPets);
        setAmountPersonsAndPets(total);
    };

    return (
        <PricingTimingWrapCmp>
            <Helmet>
                <title>Pricing Timing</title>
            </Helmet>
            <div className="price-content">
                <div className="price-timing-container">
                    <Row gutter={{ md: 32 }} id="price-timing-menu" style={{ alignItems: 'flex-start' }}>
                        {size?.length > 0 && themeObject?.length > 0 ? (
                            <Col className="gutter-row" xs={24} md={12}>
                                <h2 className="title-space">PRICE LIST</h2>
                                <div className="grd-brd-card price-list-card">
                                    <div className="price-tbl-wrap">
                                        <div className="object-theme-block">
                                            <div className="obj-box">
                                                <h5 className="title-txt">Objects & Theme</h5>
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                            <ul className="obj-box-icon-row">
                                                {themeObject?.map((obj: any) => (
                                                    <li className="obj-inner" key={obj.id}>
                                                        <i className="icon ">
                                                            <Image fill src={obj.objSelectImageUrl} alt="" className="" />
                                                        </i>
                                                        <p className="">{_.capitalize(obj.thmObj)}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="price-list-rate-box ">
                                            <div className="price-size-box ">
                                                <div className="p-size-arrow">
                                                    <div className="p-size-arrow-inner">
                                                        <h5 className="title-txt">
                                                            Size <span className="mob-text">& Theme</span>
                                                        </h5>
                                                        <FontAwesomeIcon icon={faAngleDown} className="arrow-down" />
                                                    </div>
                                                    <FontAwesomeIcon icon={faAngleRight} className="arrow-right" />
                                                </div>
                                                <ul className="p-size-list">
                                                    {size?.map((obj: any) => (
                                                        <li className="" key={obj?.id}>
                                                            <div className="p-size-block">
                                                                {(obj?.isPopular || obj?.id === 7) && (
                                                                    <span className="star_icon">
                                                                        <FontAwesomeIcon icon={faStar} />
                                                                    </span>
                                                                )}
                                                                <span className="p-size-view">
                                                                    {obj.height}” x {obj.width}”
                                                                </span>
                                                            </div>
                                                            <i
                                                                className="icon"
                                                                onMouseEnter={() => handleHover(obj)}
                                                                onMouseLeave={() => handleHover(null)}
                                                            >
                                                                <FontAwesomeIcon icon={faEye} />
                                                            </i>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="size-table-block">
                                                {isHovered.open && <FramePreview classNamePriview="gift_card_frame" obj={isHovered.obj} />}
                                                <table className="size-brd-table">
                                                    <tbody>
                                                        {size?.map((obj: any) => (
                                                            <tr key={obj?.id}>
                                                                {themeObject?.map((theme: any) => (
                                                                    <React.Fragment key={theme?.id}>
                                                                        {price
                                                                            ?.filter(
                                                                                (amt: any) =>
                                                                                    obj?.id === amt?.size_id?.id && theme?.id === amt?.thmobj_id?.id,
                                                                            )
                                                                            .map((filterObj: any) => (
                                                                                <td key={filterObj?.id}>${filterObj?.price}</td>
                                                                            ))}
                                                                    </React.Fragment>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="adv-pay-wrap">
                                        <div className="adv-pay-block">
                                            <h4 className="title">20% Advance Payment only</h4>
                                            <p className="sub-title">✹ Remaining balance to be paid after painting approval</p>
                                        </div>
                                        <div className="our-installment-block">
                                            <h6 className="title">Our installment options include</h6>
                                            <div className="installment-option-wrap">
                                                <div className="ins-opt">
                                                    <img src={Images.AfterpayInstallImg1} alt="" className="img-1" />
                                                    <Popover
                                                        trigger={!isMobile ? 'hover' : 'click'}
                                                        content="Buy the painting today, pay for it in 4 installments. You'll pay the first installment upfront, and the rest over 6 weeks."
                                                        arrowPointAtCenter={false}
                                                        overlayClassName="tooltip_buttons popover_zippay"
                                                        showArrow={false}
                                                    >
                                                        <i className="help-icon">
                                                            <img src={Images.AfterpayInstallHelp1} alt="" className="" />
                                                        </i>
                                                    </Popover>
                                                </div>
                                                <div className="ins-opt">
                                                    <img src={Images.AfterpayInstallImg2} alt="" className="img-2" />
                                                    <Popover
                                                        trigger={!isMobile ? 'hover' : 'click'}
                                                        content="Make 4 interest-free payments every two weeks, or divide your painting's cost into bi-monthly installments, with payment plans available for 3, 6, or 12 months."
                                                        arrowPointAtCenter={false}
                                                        overlayClassName="tooltip_buttons popover_affirm"
                                                        showArrow={false}
                                                    >
                                                        <i className="help-icon">
                                                            <img src={Images.AfterpayInstallHelp2} alt="" className="" />
                                                        </i>
                                                    </Popover>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cant-find-block">
                                    <h4 className="sub-title text-uppercase title-space">Can’t find exact combination? </h4>
                                    <div className="grd-brd-card combination-card">
                                        <div className="price-timing-menu-wrapper">
                                            <Row gutter={24}>
                                                <Col xs={24} md={12} className="p-col p-col-1 pricing-size">
                                                    <div className="p-label">Painting Size</div>
                                                    <Select
                                                        placeholder="Select Size Value"
                                                        open={paintingSizeDropdownOpen}
                                                        popupClassName="select-painting-size"
                                                        getPopupContainer={() => document.getElementById('price-timing-menu')!}
                                                        className="p2p-painting-size-dropdown"
                                                        onFocus={() => {
                                                            setIsActiveDropDown(true);
                                                        }}
                                                        onBlur={() => {
                                                            setIsActiveDropDown(false);
                                                        }}
                                                        onDropdownVisibleChange={(open) => {
                                                            setPaintingSizeDropdownOpen(open);
                                                            setIsActiveDropDown(!isActiveDropDown);
                                                        }}
                                                        suffixIcon={
                                                            <span
                                                                onClick={() => (isActiveDropDown ? handleClickIcon(false) : handleClickIcon(true))}
                                                                role="button"
                                                                tabIndex={0}
                                                            >
                                                                <img
                                                                    src={isActiveDropDown ? Images.IconArrowUp?.src : Images.IconArrowDown?.src}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        }
                                                        onChange={handleChange}
                                                    >
                                                        {paintingSize.map((obj, index) => (
                                                            <Option key={index} value={obj.amount}>
                                                                {obj.size}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </Col>
                                                <Col xs={12} md={6} className="p-col p-col-2 pricing-amount">
                                                    <div className="p-label">Amount of Persons</div>
                                                    <InputNumber
                                                        min={minRangeInput}
                                                        max={maxRangeInput}
                                                        defaultValue={0}
                                                        controls={{
                                                            upIcon: <img src={Images.IconArrowUp?.src} alt="" />,
                                                            downIcon: <img src={Images.IconArrowDown?.src} alt="" />,
                                                        }}
                                                        onChange={handlePersonsAmountChange}
                                                    />
                                                </Col>
                                                <Col xs={12} md={6} className="p-col p-col-3 pricing-to-pet">
                                                    <div className="p-label">Amount of Pets</div>
                                                    <InputNumber
                                                        min={minRangeInput}
                                                        max={maxRangeInput}
                                                        defaultValue={0}
                                                        controls={{
                                                            upIcon: <img src={Images.IconArrowUp?.src} alt="" />,
                                                            downIcon: <img src={Images.IconArrowDown?.src} alt="" />,
                                                        }}
                                                        onChange={handlePetsAmountChange}
                                                    />
                                                </Col>
                                                <Col xs={24} className="p-col p-col-4 exact-total">
                                                    <div className="p-label">Total Summary</div>
                                                    <div className="exact-total-wrap">
                                                        <span>Total :</span>
                                                        <span>$ {amountPersonsAndPets}</span>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="adv-pay-wrap">
                                            <div className="adv-pay-block">
                                                <h4 className="title">
                                                    20% Advance Payment only{' '}
                                                    <span className="adv-price">${(amountPersonsAndPets * depositDue).toFixed(2)}</span>
                                                </h4>
                                                <p className="sub-title">✹ Remaining balance to be paid after painting approval</p>
                                            </div>
                                            <div className="our-installment-block">
                                                <h6 className="title">Our installment options include</h6>
                                                <div className="installment-option-wrap">
                                                    <div className="ins-opt">
                                                        <img src={Images.AfterpayInstallImg1} alt="" className="img-1" />

                                                        <Popover
                                                            trigger={!isMobile ? 'hover' : 'click'}
                                                            content="Buy the painting today, pay for it in 4 installments. You'll pay the first installment upfront, and the rest over 6 weeks."
                                                            arrowPointAtCenter={false}
                                                            overlayClassName="tooltip_buttons popover_zippay"
                                                            showArrow={false}
                                                        >
                                                            <i className="help-icon">
                                                                <img src={Images.AfterpayInstallHelp1} alt="" className="" />
                                                            </i>
                                                        </Popover>
                                                    </div>
                                                    <div className="ins-opt">
                                                        <img src={Images.AfterpayInstallImg2} alt="" className="img-2" />
                                                        <Popover
                                                            trigger={!isMobile ? 'hover' : 'click'}
                                                            content="Make 4 interest-free payments every two weeks, or divide your painting's cost into bi-monthly installments, with payment plans available for 3, 6, or 12 months."
                                                            arrowPointAtCenter={false}
                                                            overlayClassName="tooltip_buttons popover_affirm"
                                                            showArrow={false}
                                                        >
                                                            <i className="help-icon">
                                                                <img src={Images.AfterpayInstallHelp2} alt="" className="" />
                                                            </i>
                                                        </Popover>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="framing-information-block order_mobile_hide">
                                    <h4 className="sub-title text-uppercase title-space">Framing information</h4>
                                    <div className="grd-brd-card framing-info-card">
                                        <div className="framing-info-row">
                                            <figure className="framing-info-img">
                                                <span className="price">$0</span>
                                                <img src={Images.OrderFrameTube} alt="" className="" />
                                                <p className="title_img">Delivered in tube</p>
                                            </figure>
                                            <div className="framing-data-block ">
                                                <h6 className="">free Service includes painting to be delivered in the tube</h6>
                                                <p className="">
                                                    You can chose different framing during order process, Frame prices might varry from{` `}
                                                    <span className="fw-bold">20$ -150$</span> and depending on the painting size and framemedium and
                                                    structure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ) : null}
                        {serviceAndShipping?.length > 0 ? (
                            !isMobile ? (
                                <StickyBox offsetTop={20} offsetBottom={20}>
                                    <div className="right_block">{stickyContent}</div>
                                </StickyBox>
                            ) : (
                                <Col className="gutter-row" xs={24}>
                                    {stickyContent}
                                </Col>
                            )
                        ) : null}
                    </Row>
                </div>
            </div>
            <PricingTimingGiftCardPopup giftCardPopup={giftCardPopup} setGiftCardPopup={setGiftCardPopup} />
            <LoadingCover show={loading || orderStepLoading} />
        </PricingTimingWrapCmp>
    );
};
export default PricingTiming;

/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import FilledButton from '../../components/FilledButton';
import { Routes } from '../../navigation/Routes';
import { Images } from '../../theme';
import { OrderStepFooterCmp } from './OrderPage.component';
import { OrderSteps, SelectThemes } from './OrderStep.constants';
import { selectedSize, selectMediumItems, selectOrderStep, selectThemesItems, setSelectSize } from './OrderStep.slice';
import { IOrderStepFooter } from './OrderStep.types';
import { LocalStorageKeys } from '../../constants/keys';
import { useLocalStorage } from '../../hooks';

const OrderStepFooter = ({
    complateStep2,
    complateStep3,
    showProgressBar,
    preview,
    selectPaintingSizeAndPrice,
    selectedFrame,
    repeatStep2,
    repeatStep3,
    repeatStep4,
    complateStep4,
    personsCount,
    petsCount,
    setSavedCardPopup,
    savedCardProccessComplete,
}: IOrderStepFooter) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();
    const authUser = localStorage?.getItem(LocalStorageKeys.authUser);

    const step = useAppSelector(selectOrderStep);
    const themesItems = useAppSelector(selectThemesItems);
    const mediumItems = useAppSelector(selectMediumItems);
    const selectSize = useAppSelector(selectedSize);

    const handleForword = async () => {
        if (step === OrderSteps.step1) {
            route.push(Routes.orderStep.replace(':id', '2'));
        } else if (step === OrderSteps.step2) {
            if (savedCardProccessComplete || authUser) {
                route.push(Routes.orderStep.replace(':id', '3'));
            } else {
                await setSavedCardPopup?.(true);
            }
        } else if (step === OrderSteps.step3) {
            if (selectSize.painting) {
                dispatch(setSelectSize({ painting: false, frame: true }));
            } else {
                route.push(Routes.orderStep.replace(':id', '4'));
            }
        } else if (step === OrderSteps.step4) {
            route.push(Routes.orderStep.replace(':id', 'checkout'));
        }
    };

    const handleBack = () => {
        if (step === OrderSteps.step3 && selectSize.frame) {
            dispatch(setSelectSize({ painting: true, frame: false }));
        } else if (step === OrderSteps.step4) {
            route.push(Routes.orderStep.replace(':id', '3'));
        } else if (step === OrderSteps.step3) {
            route.push(Routes.orderStep.replace(':id', '2'));
        } else if (step === OrderSteps.step2) {
            route.push(Routes.orderStep.replace(':id', '1'));
        }
    };

    const handleOrderFooter = (item: OrderSteps) => {
        if (item === OrderSteps.step1) {
            route.push(Routes.orderStep.replace(':id', '1'));
        } else if (item === OrderSteps.step2) {
            route.push(Routes.orderStep.replace(':id', '2'));
        } else if (item === OrderSteps.step3) {
            route.push(Routes.orderStep.replace(':id', '3'));
        } else if (item === OrderSteps.step4) {
            route.push(Routes.orderStep.replace(':id', '4'));
        }
    };

    return (
        <OrderStepFooterCmp className="order-footer">
            <nav className="order-nav">
                <div
                    className={`order-nav-item ${themesItems && mediumItems ? 'selected' : ''} ${step === OrderSteps.step1 ? 'active' : ''}`}
                    onClick={() => handleOrderFooter(OrderSteps.step1)}
                    tabIndex={0}
                    role="button"
                >
                    {step === OrderSteps.step1 ? (
                        <>
                            <h4 className="navigation_title">MEDIUM AND THEME</h4>
                            <span className="nav-num">01</span>
                        </>
                    ) : (
                        <>
                            <div className="navigation-selections">
                                <span className="navigation-selection theme-select">
                                    <img src={themesItems?.image} alt="" className="" />
                                    {themesItems?.theme === SelectThemes.custom && (
                                        <div className="d-flex">
                                            <output className="mx-3 pb-2">{personsCount || 0}</output>
                                            <output className="mx-3 pb-2">{petsCount || 0}</output>
                                        </div>
                                    )}
                                </span>
                                <span className="navigation-selection medium-select">
                                    <span className="medium-img-block">
                                        <img src={mediumItems?.image} alt="" className="" />
                                        <img src={mediumItems?.hoverImage} alt="" className="" />
                                    </span>
                                    <p className="medium-title">{mediumItems?.title}</p>
                                </span>
                            </div>
                            <span className="nav-action-link">
                                <i className="icon ">
                                    <img src={Images.OrderIconstepSelected?.src} alt="" height="25" width="25" className="icon-selected" />
                                    <img src={Images.OrderIconstepEdit?.src} alt="" height="25" width="25" className="icon-edit" />
                                </i>
                            </span>
                        </>
                    )}
                </div>
                <div
                    className={`order-nav-item ${step === OrderSteps.step2 ? 'active' : ''} ${complateStep2 ? 'selected' : ''} ${
                        themesItems && mediumItems ? '' : 'pointer-none'
                    }`}
                    onClick={() => complateStep2 && handleOrderFooter(OrderSteps.step2)}
                    tabIndex={0}
                    role="button"
                >
                    {!complateStep2 || !repeatStep2 ? (
                        <>
                            <h4 className="navigation_title">UPLOAD MATERIALS</h4>
                            <span className="nav-num">02</span>
                        </>
                    ) : (
                        <>
                            <div className="navigation-selections">
                                <span className="navigation-selection images">
                                    <img src={Images.OrderNavStep2Img?.src} alt="" className="" />
                                    <p className="medium-title">{`X${preview.length || 0}`}</p>
                                </span>
                            </div>
                            <span className="nav-action-link">
                                <i className="icon ">
                                    <img src={Images.OrderIconstepSelected?.src} alt="" height="25" width="25" className="icon-selected" />
                                    <img src={Images.OrderIconstepEdit?.src} alt="" height="25" width="25" className="icon-edit" />
                                </i>
                            </span>
                        </>
                    )}
                </div>
                <div
                    className={`order-nav-item ${step === OrderSteps.step3 ? 'active' : ''} ${complateStep3 ? 'selected' : ''} ${
                        themesItems && mediumItems ? '' : 'pointer-none'
                    }`}
                    onClick={() => complateStep3 && handleOrderFooter(OrderSteps.step3)}
                    tabIndex={0}
                    role="button"
                >
                    {!complateStep3 || !repeatStep3 ? (
                        <>
                            <h4 className="navigation_title">SIZE AND FRAME</h4>
                            <span className="nav-num">03</span>
                        </>
                    ) : (
                        <>
                            <div className="navigation-selections">
                                <span className="navigation-selection size-frame">
                                    <p className="medium-title medium-title-dark">{selectPaintingSizeAndPrice?.title}</p>
                                    <p className="medium-title">&</p>
                                    <p className="medium-title medium-title-dark">{selectedFrame?.title}</p>
                                </span>
                            </div>
                            <span className="nav-action-link">
                                <i className="icon ">
                                    <img src={Images.OrderIconstepSelected?.src} alt="" height="25" width="25" className="icon-selected" />
                                    <img src={Images.OrderIconstepEdit?.src} alt="" height="25" width="25" className="icon-edit" />
                                </i>
                            </span>
                        </>
                    )}
                </div>
                <div
                    className={`order-nav-item order-nav-attributes ${step === OrderSteps.step4 ? 'active' : ''} ${complateStep4 ? 'selected' : ''} ${
                        themesItems && mediumItems ? '' : 'pointer-none'
                    }`}
                    onClick={() => complateStep4 && handleOrderFooter(OrderSteps.step4)}
                    tabIndex={0}
                    role="button"
                >
                    {!complateStep4 || !repeatStep4 ? (
                        <>
                            <h4 className="navigation_title">ADDITIONAL ATTRIBUTES</h4>
                            <span className="nav-num">04</span>
                        </>
                    ) : (
                        <>
                            <div className="navigation-selections">
                                <span className="navigation-selection size-frame">
                                    <img src={Images.Attachment?.src} alt="attachment-icon" className="attachment" />
                                    <p className="medium-title medium-title-dark">Additional Attributes</p>
                                </span>
                            </div>
                            <span className="nav-action-link">
                                <i className="icon ">
                                    <img src={Images.OrderIconstepSelected?.src} alt="" height="25" width="25" className="icon-selected" />
                                    <img src={Images.OrderIconstepEdit?.src} alt="" height="25" width="25" className="icon-edit" />
                                </i>
                            </span>
                        </>
                    )}
                </div>
                <div className="order-nav-item order-nav-last">
                    <div className="btn-row">
                        {step !== OrderSteps.step1 && (
                            <FilledButton color="gray" className="btn_gray" onClick={handleBack}>
                                Back
                            </FilledButton>
                        )}
                        <FilledButton
                            color="primary"
                            className="btn_continue"
                            disabled={!(themesItems && mediumItems) || showProgressBar}
                            onClick={handleForword}
                        >
                            Continue
                        </FilledButton>
                    </div>
                </div>
            </nav>
        </OrderStepFooterCmp>
    );
};

export default OrderStepFooter;

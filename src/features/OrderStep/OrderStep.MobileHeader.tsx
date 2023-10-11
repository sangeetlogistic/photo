/* eslint-disable complexity */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Routes } from '../../navigation/Routes';
import { Images } from '../../theme';
import { MobileOrderHeaderCmp } from './OrderPage.MobileComponent';
import { OrderSteps } from './OrderStep.constants';
import { selectMediumItems, selectOrderStep, selectThemesItems, setSelectSize } from './OrderStep.slice';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export interface IMobileHeader {
    complateStep2?: boolean;
    repeatStep2?: boolean;
    complateStep3?: boolean;
    repeatStep3?: boolean;
    complateStep4?: boolean;
    repeatStep4?: boolean;
}

const MobileHeader = ({ complateStep2, repeatStep2, complateStep3, repeatStep3, complateStep4, repeatStep4 }: IMobileHeader) => {
    const history = useRouter();
    const location = usePathname();
    const dispatch = useAppDispatch();
    const step = useAppSelector(selectOrderStep);
    const themesItems = useAppSelector(selectThemesItems);
    const mediumItems = useAppSelector(selectMediumItems);

    const handleOrder = async (item: OrderSteps) => {
        await dispatch(setSelectSize({ painting: true, frame: false }));
        if (item === OrderSteps.step1) {
            history.push(Routes.orderStep.replace(':id', '1'));
        } else if (item === OrderSteps.step2) {
            history.push(Routes.orderStep.replace(':id', '2'));
        } else if (item === OrderSteps.step3) {
            history.push(Routes.orderStep.replace(':id', '3'));
        } else if (item === OrderSteps.step4) {
            history.push(Routes.orderStep.replace(':id', '4'));
        }
    };

    return (
        <MobileOrderHeaderCmp>
            {location !== Routes.orderStep.replace(':id', 'checkout') ? (
                <ul className="mobile-order-header-nav">
                    <li className="nav-item" onClick={() => history.push(Routes.home)}>
                        <div className="top-indicater">
                            <img src={Images.HomeIconMobile} alt="" />
                        </div>
                        <div className="nav-link-name text-danger">Home</div>
                    </li>
                    <li
                        className={`nav-item ${themesItems && mediumItems ? 'selected' : ''} ${step === OrderSteps.step1 ? 'active' : ''}`}
                        onClick={() => handleOrder(OrderSteps.step1)}
                    >
                        <div className="top-indicater">
                            {step === OrderSteps.step1 ? (
                                <span className="number">1</span>
                            ) : (
                                <img src={Images.OrderIconstepSelected} alt="" className="icon" />
                            )}
                        </div>
                        <div className="nav-link-name">Medium & theme</div>
                    </li>
                    <li
                        className={`nav-item ${step === OrderSteps.step2 ? 'active' : ''} ${complateStep2 ? 'selected' : ''}`}
                        onClick={() => complateStep2 && handleOrder(OrderSteps.step2)}
                    >
                        <div className="top-indicater">
                            {!complateStep2 || !repeatStep2 ? (
                                <span className="number">2</span>
                            ) : (
                                <img src={Images.OrderIconstepSelected} alt="" className="icon" />
                            )}
                        </div>
                        <div className="nav-link-name">Upload materials</div>
                    </li>
                    <li
                        className={`nav-item ${step === OrderSteps.step3 ? 'active' : ''} ${complateStep3 ? 'selected' : ''}`}
                        onClick={() => complateStep3 && handleOrder(OrderSteps.step3)}
                    >
                        <div className="top-indicater">
                            {!complateStep3 || !repeatStep3 ? (
                                <span className="number">3</span>
                            ) : (
                                <img src={Images.OrderIconstepSelected} alt="" className="icon" />
                            )}
                        </div>
                        <div className="nav-link-name">Select size and frame</div>
                    </li>
                    <li
                        className={`nav-item ${step === OrderSteps.step4 ? 'active' : ''} ${complateStep4 ? 'selected' : ''}`}
                        onClick={() => complateStep4 && handleOrder(OrderSteps.step4)}
                    >
                        <div className="top-indicater">
                            {!complateStep4 || !repeatStep4 ? (
                                <span className="number">4</span>
                            ) : (
                                <img src={Images.OrderIconstepSelected} alt="" className="icon" />
                            )}
                        </div>
                        <div className="nav-link-name">additional attributes</div>
                    </li>
                </ul>
            ) : (
                <div className="checkout-header-inner">
                    <h4 className="checkout-header-title">ORDER SUMMARY</h4>
                </div>
            )}
        </MobileOrderHeaderCmp>
    );
};

export default MobileHeader;

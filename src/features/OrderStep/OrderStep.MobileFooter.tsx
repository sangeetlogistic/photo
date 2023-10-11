import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import FilledButton from '../../components/FilledButton';
import { Routes } from '../../navigation/Routes';
import { MobileOrderFooterCmp } from './OrderPage.MobileComponent';
import { OrderSteps } from './OrderStep.constants';
import { selectedSize, selectMediumItems, selectOrderStep, selectThemesItems, setSelectSize } from './OrderStep.slice';
import { useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export interface IMobileFooter {
    showProgressBar?: boolean;
    savedCardProccessComplete?: boolean;
    setSavedCardPopup?: React.Dispatch<React.SetStateAction<boolean>>;
    selectPaintingSize?: boolean;
    setSelectPaintingSize?: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectSizeSlider?: any;
    selectPaintingSizeAndPrice?: {
        id: number;
        price: number;
        framingServiceAvailable: boolean;
        title: string;
        sizeid: number;
        sizeInText: string;
    } | null;
    viewOrderSummary?: boolean;
    setViewOrderSummary?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileFooter = ({
    showProgressBar,
    savedCardProccessComplete,
    setSavedCardPopup,
    selectPaintingSize,
    setSelectPaintingSize,
    setSelectSizeSlider,
    selectPaintingSizeAndPrice,
    viewOrderSummary,
    setViewOrderSummary,
}: IMobileFooter) => {
    const dispatch = useAppDispatch();
    const history = useRouter();
    const pathname = usePathname();
    const step = useAppSelector(selectOrderStep);
    const themesItems = useAppSelector(selectThemesItems);
    const mediumItems = useAppSelector(selectMediumItems);
    const selectSize = useAppSelector(selectedSize);
    const localStorage = useLocalStorage();
    const authUser = localStorage.getItem(LocalStorageKeys.authUser);

    const handleBack = () => {
        if (step === OrderSteps.step4) {
            if (viewOrderSummary) {
                setViewOrderSummary?.(false);
            } else {
                history.push(Routes.orderStep.replace(':id', '3'));
            }
        } else if (step === OrderSteps.step3) {
            if (viewOrderSummary) {
                setViewOrderSummary?.(false);
            } else if (selectSize.frame) {
                dispatch(setSelectSize({ painting: true, frame: false }));
                setSelectPaintingSize?.(true);
            } else if (selectSize.painting && selectPaintingSize) {
                setSelectSizeSlider?.(null);
                setSelectPaintingSize?.(false);
            } else {
                history.push(Routes.orderStep.replace(':id', '2'));
            }
        } else if (step === OrderSteps.step2) {
            history.push(Routes.orderStep.replace(':id', '1'));
        }
    };

    const handleForword = async () => {
        if (step === OrderSteps.step1) {
            history.push(Routes.orderStep.replace(':id', '2'));
        } else if (step === OrderSteps.step2) {
            if (savedCardProccessComplete || authUser) {
                history.push(Routes.orderStep.replace(':id', '3'));
            } else {
                await setSavedCardPopup?.(true);
            }
        } else if (step === OrderSteps.step3) {
            if (viewOrderSummary) {
                setViewOrderSummary?.(false);
            }
            if (selectSize.painting) {
                if (!selectPaintingSize) {
                    setSelectPaintingSize?.(true);
                } else {
                    dispatch(setSelectSize({ painting: false, frame: true }));
                }
            } else {
                history.push(Routes.orderStep.replace(':id', '4'));
            }
        } else if (step === OrderSteps.step4) {
            if (viewOrderSummary) {
                setViewOrderSummary?.(false);
            }
            history.push(Routes.orderStep.replace(':id', 'checkout'));
        }
    };

    const successBtn = useMemo(() => {
        if (step === OrderSteps.step3) {
            if (selectSize.frame) {
                return 'Continue';
            }
            return 'select  size';
        }
        if (step === OrderSteps.step4) {
            return 'summerize & pay';
        }
        return 'Continue';
    }, [step, themesItems, mediumItems, selectSize]);

    const disabledBtn = useMemo(() => {
        if (
            (step === OrderSteps.step1 && !(themesItems && mediumItems)) ||
            (step === OrderSteps.step2 && showProgressBar) ||
            (step === OrderSteps.step3 && (!selectPaintingSizeAndPrice || selectPaintingSizeAndPrice === null))
        ) {
            return true;
        }
        return false;
    }, [step, themesItems, mediumItems, showProgressBar, selectPaintingSizeAndPrice]);

    return (
        <>
            {pathname !== Routes.orderStep.replace(':id', 'checkout') && (
                <MobileOrderFooterCmp step1={step === OrderSteps.step1}>
                    <div className="btn-row">
                        {step !== OrderSteps.step1 && (
                            <FilledButton color="gray" className="btn_gray" onClick={handleBack}>
                                Back
                            </FilledButton>
                        )}
                        <FilledButton
                            color="primary"
                            className={`btn_continue ${step !== OrderSteps.step1 ? 'btn_large' : ''}`}
                            disabled={disabledBtn}
                            onClick={handleForword}
                        >
                            {successBtn}
                        </FilledButton>
                    </div>
                </MobileOrderFooterCmp>
            )}
        </>
    );
};

export default MobileFooter;

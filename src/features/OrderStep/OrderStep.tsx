/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getCountries } from 'react-phone-number-input';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { message } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import LoadingCover from '../../components/LoadingCover';
import { LocalStorageKeys } from '../../constants/keys';
import { useDeviceDetect, useLocalStorage } from '../../hooks';
import { Routes } from '../../navigation/Routes';
import { OrderPageWrappCmp } from './OrderPage.component';
import Checkout from './OrderStep.Checkout';
import {
    clearThemeAndMedium,
    getOrderStepThemeObjMedium,
    selectedSize,
    selectError,
    selectLoading,
    selectMediumItems,
    selectOrderStep,
    selectStep3Detail,
    selectThemesItems,
    setSelectMediumItems,
    setSelectSize,
    setSelectThemesItems,
} from './OrderStep.slice';
import Step1 from './OrderStep.Step1';
import Step2 from './OrderStep.Step2';
import Step3 from './OrderStep.Step3';
import Step4 from './OrderStep.Step4';
import OrderStepFooter from './OrderStep.Footer';
import { OrderSteps, successPage } from './OrderStep.constants';
import { isLocalStorageValid } from '../../utils/func';

const OrderStep = () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const { id }: { id: string } = useParams();

    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();
    const localStorage = useLocalStorage();

    const themesItems = useAppSelector(selectThemesItems);
    const mediumItems = useAppSelector(selectMediumItems);
    const selectSize = useAppSelector(selectedSize);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    const step3Detail = useAppSelector(selectStep3Detail);
    const step = useAppSelector(selectOrderStep);

    const savedCardProccessCompleteLocal: any = localStorage.getItem(LocalStorageKeys.savedCardProccessComplete)
        ? JSON.parse(localStorage.getItem(LocalStorageKeys.savedCardProccessComplete) || '')
        : '';

    const [initLoad, setInitLoad] = useState(false);
    const [personTheme, setPersonTheme] = useState<any>({});
    const [petTheme, setPetTheme] = useState<any>({});
    const [complateStep1, setComplateStep1] = useState(false);
    const [isdelay, setIsDelay] = useState(false);

    // Select Themes
    const [selectThemesAns, setSelectThemesAns] = useState(false);
    const [selectThemesActive, setSelectThemesActive] = useState(true);
    const [customThemeFliped, setCustomThemeFliped] = useState(false);

    const [personsCount, setPersonsCount] = useState<number | null>(null);
    const [petsCount, setPetsCount] = useState<number | null>(null);
    const [selectThemesBtnDisabled, setSelectThemesBtnDisabled] = useState(false);

    const [customSelectValueBlock, setCustomSelectValueBlock] = useState(false);

    // Select Medium
    const [selectMediumAns, setSelectMediumAns] = useState(false);
    const [selectMediumActive, setSelectMediumActive] = useState(false);
    const [selectMediumBtnDisabled, setSelectMediumBtnDisabled] = useState(false);

    // STEP2
    const [showProgressBar, setShowProgressBar] = useState<boolean>(false);
    const [preview, setPreview] = useState<{ url: string; name: string }[]>([]);
    const [complateStep2, setComplateStep2] = useState(false);
    const [repeatStep2, setRepeatStep2] = useState(false);
    const [combinePhotoPrice, setCombinePhotoPrice] = useState(undefined);
    const [artistAdvice, setArtistAdvice] = useState(false);
    const [savedCardPopup, setSavedCardPopup] = useState(false);
    const [savedCardProccessComplete, setSavedCardProccessComplete] = useState(false);

    // STEP3
    const [complateStep3, setComplateStep3] = useState(false);
    const [repeatStep3, setRepeatStep3] = useState(false);
    const [selectPaintingSizeAndPrice, setSelectPaintingSizeAndPrice] = useState<{
        id: number;
        price: number;
        framingServiceAvailable: boolean;
        title: string;
        sizeid: number;
        sizeInText: string;
    } | null>(null);
    const [selectedFrame, setSelectedFrame] = useState<{
        id?: number;
        title?: string;
        price: number;
        image?: string;
    } | null>(null);
    const [selectPaintingSize, setSelectPaintingSize] = useState(false);
    const [selectedPaintingFraming, setSelectedPaintingFraming] = useState(false);
    const [isNoteFadeList, setIsNoteFadeList] = useState<any>([]);
    const [currentSlideMobile, setCurrentSlideMobile] = useState(null);

    // STEP4
    const [complateStep4, setComplateStep4] = useState(false);
    const [repeatStep4, setRepeatStep4] = useState(false);
    const [videoCreated, setVideoCreated] = useState(undefined);
    const [artistSign, setArtistSign] = useState(false);

    const [viewOrderSummary, setViewOrderSummary] = useState(false);

    // CheckOut
    const [expressService, setExpressService] = useState(false);
    const [comments, setComments] = useState('');
    const [fillingForm, setFillingForm] = useState<any>({
        firstName: '',
        lastName: '',
        countryCode: getCountries().filter((obj: string) => obj === 'US')[0],
        phoneNumber: '',
        email: '',
    });
    const [successCouponCode, setSuccessCouponCode] = useState<string>('');
    const [couponCode, setCouponCode] = useState<string>('');
    const [successCouponId, setSuccessCouponId] = useState<{
        Cdata: number;
        discountIn: string;
        discountedAmount: string;
        message: string;
    } | null>(null);

    // useEffect(() => {
    //   const data: any = localStorage.getItem(LocalStorageKeys.orderPageDetail)
    //     ? JSON.parse(localStorage.getItem(LocalStorageKeys.orderPageDetail) || '')
    //     : '';

    //   if (data?.data?.selectPaintingSize)
    //     setSelectPaintingSize(data?.data?.selectPaintingSize);
    // }, [selectPaintingSize]);

    useEffect(() => {
        if (!initLoad) {
            return;
        }

        const payload = {
            selectThemesActive,
            customThemeFliped,
            personsCount,
            petsCount,
            selectThemesBtnDisabled,
            selectMediumActive,
            selectMediumBtnDisabled,
            complateStep2,
            repeatStep2,
            combinePhotoPrice,
            selectSize,
            complateStep3,
            repeatStep3,
            selectPaintingSizeAndPrice,
            selectedFrame,
            complateStep4,
            repeatStep4,
            videoCreated,
            artistSign,
            themesItems,
            mediumItems,
            preview,
            artistAdvice,
            expressService,
            comments,
            personTheme,
            petTheme,
            fillingForm,
            successCouponCode,
            couponCode,
            successCouponId,
            // selectPaintingSize,
        };
        if (initLoad) {
            saveDataToLocalStorage(LocalStorageKeys.orderPageDetail, payload, 1);
        }
    }, [
        selectThemesActive,
        customThemeFliped,
        personsCount,
        petsCount,
        selectThemesBtnDisabled,
        selectMediumActive,
        selectMediumBtnDisabled,
        complateStep2,
        repeatStep2,
        combinePhotoPrice,
        selectSize,
        complateStep3,
        repeatStep3,
        selectPaintingSizeAndPrice,
        selectedFrame,
        complateStep4,
        repeatStep4,
        videoCreated,
        artistSign,
        themesItems,
        mediumItems,
        preview,
        artistAdvice,
        expressService,
        comments,
        personTheme,
        petTheme,
        fillingForm,
        successCouponCode,
        couponCode,
        successCouponId,
        // selectPaintingSize,
    ]);

    useEffect(() => {
        if (pathname === Routes.orderStep.replace(':id', id) && !successPage.includes(id)) {
            history.push(Routes.home);
        } else {
            history.push(Routes.orderStep.replace(':id', '1'));
        }

        setInitLoad(true);
        if (isLocalStorageValid(LocalStorageKeys.orderPageDetail)) {
            const data: any = localStorage.getItem(LocalStorageKeys.orderPageDetail)
                ? JSON.parse(localStorage.getItem(LocalStorageKeys.orderPageDetail) || '')
                : '';

            if (data) {
                setSelectThemesActive(data?.data.selectThemesActive);
                setCustomThemeFliped(data?.data.customThemeFliped);
                setPersonsCount(data?.data.personsCount);
                setPetsCount(data?.data.petsCount);
                setSelectThemesBtnDisabled(data?.data.selectThemesBtnDisabled);
                setSelectMediumAns(data?.data.selectMediumAns);
                setSelectMediumActive(data?.data.selectMediumActive);
                setSelectMediumBtnDisabled(data?.data.selectMediumBtnDisabled);
                setComplateStep2(data?.data.complateStep2);
                setRepeatStep2(data?.data.repeatStep2);
                setCombinePhotoPrice(data?.data.combinePhotoPrice);
                setComplateStep3(data?.data.complateStep3);
                setRepeatStep3(data?.data.repeatStep3);
                setSelectPaintingSizeAndPrice(data?.data.selectPaintingSizeAndPrice);
                setSelectedFrame(data?.data.selectedFrame);
                setComplateStep4(data?.data.complateStep4);
                setRepeatStep4(data?.data.repeatStep4);
                setVideoCreated(data?.data.videoCreated);
                setArtistSign(data?.data.artistSign);
                setPreview(data?.data.preview);
                setArtistAdvice(data?.data.artistAdvice);
                setExpressService(data?.data.expressService);
                setComments(data?.data.comments);
                setPersonTheme(data?.data.personTheme);
                setPetTheme(data?.data.petTheme);
                setFillingForm(data?.data.fillingForm);
                setSuccessCouponCode(data?.data.successCouponCode);
                setCouponCode(data?.data.couponCode);
                setSuccessCouponId(data?.data.successCouponId);
                // setSelectPaintingSize(data?.data.selectPaintingSize);
                dispatch(setSelectThemesItems(data?.data.themesItems));
                dispatch(setSelectMediumItems(data?.data.mediumItems));
                dispatch(setSelectSize(data?.data.selectSize));
            }
        } else {
            localStorage.removeItem(LocalStorageKeys.orderPageDetail);
        }

        dispatch(getOrderStepThemeObjMedium());
    }, []);

    useEffect(() => {
        if (error) {
            message.error(error.message);
        }
    }, [error]);

    useEffect(() => {
        const filterFrame = step3Detail?.frame?.filter((obj: any) => obj?.sizeid?.id === selectPaintingSizeAndPrice?.sizeid);

        if (filterFrame && selectPaintingSizeAndPrice) {
            setSelectedFrame({
                id: filterFrame[0]?.id,
                title: filterFrame[0]?.name,
                price: filterFrame[0]?.price,
                image: filterFrame[0]?.frameImageUrl,
            });
        }
    }, [selectPaintingSizeAndPrice?.sizeid]);

    useEffect(() => {
        const noteFadeList = step3Detail?.size?.filter((list: any) => !list.isFade);
        setIsNoteFadeList(noteFadeList);
    }, [step3Detail?.size]);

    useEffect(() => {
        if (savedCardProccessCompleteLocal?.data) {
            return;
        }
        saveDataToLocalStorage(LocalStorageKeys.savedCardProccessComplete, savedCardProccessComplete, 15);
    }, [savedCardProccessComplete]);

    const saveDataToLocalStorage = (key: string, data: any, days: number) => {
        const expirationDate = moment().add(days, 'days').toISOString();

        const dataToStore = {
            data,
            expirationDate,
        };

        localStorage.setItem(key, JSON.stringify(dataToStore));
    };

    const clearOrderData = () => {
        setSelectThemesActive(true);
        setCustomThemeFliped(false);
        setPersonsCount(null);
        setPetsCount(null);
        setSelectThemesBtnDisabled(false);
        setSelectMediumAns(false);
        setSelectMediumActive(false);
        setSelectMediumBtnDisabled(false);
        setComplateStep2(false);
        setRepeatStep2(false);
        setCombinePhotoPrice(undefined);
        setComplateStep3(false);
        setRepeatStep3(false);
        setSelectPaintingSizeAndPrice(null);
        setSelectedFrame(null);
        setComplateStep4(false);
        setRepeatStep4(false);
        setVideoCreated(undefined);
        setArtistSign(false);
        setPreview([]);
        setArtistAdvice(false);
        setExpressService(false);
        setComments('');
        setPersonTheme({});
        setPetTheme({});
        setFillingForm({
            firstName: '',
            lastName: '',
            countryCode: getCountries().filter((obj: string) => obj === 'US')[0],
            phoneNumber: '',
            email: '',
        });
        setSuccessCouponCode('');
        setCouponCode('');
        setSuccessCouponId(null);
        setSelectPaintingSize(false);
        dispatch(clearThemeAndMedium());
        dispatch(setSelectSize({ painting: true, frame: false }));
    };

    const handleMobileBackDrop = () => {
        if (step === OrderSteps.step1) {
            setCustomSelectValueBlock(false);
        } else if (step === OrderSteps.step3 || step === OrderSteps.step4) {
            setViewOrderSummary(false);
        }
    };

    useEffect(() => {
        if (customSelectValueBlock || viewOrderSummary) {
            setTimeout(() => {
                setIsDelay(true);
            }, 300);
        } else {
            setTimeout(() => {
                setIsDelay(false);
            }, 300);
        }
    }, [customSelectValueBlock, viewOrderSummary]);

    return (
        <>
            <Helmet>
                <title>Order</title>
            </Helmet>
            <OrderPageWrappCmp className={`${!isMobile ? 'order-wrap' : ''}`}>
                <div className={`${!isMobile ? 'order-data-block' : 'mobile_comp_data-block'}`}>
                    {isMobile && <div className={`backdrop_class ${isdelay ? 'backdrop_class_show' : ''}`} onClick={handleMobileBackDrop} />}

                    {pathname === Routes.orderStep.replace(':id', '1') && (
                        <Step1
                            selectThemesAns={selectThemesAns}
                            setSelectThemesAns={setSelectThemesAns}
                            selectThemesActive={selectThemesActive}
                            setSelectThemesActive={setSelectThemesActive}
                            customThemeFliped={customThemeFliped}
                            setCustomThemeFliped={setCustomThemeFliped}
                            personsCount={personsCount}
                            setPersonsCount={setPersonsCount}
                            petsCount={petsCount}
                            setPetsCount={setPetsCount}
                            selectThemesBtnDisabled={selectThemesBtnDisabled}
                            setSelectThemesBtnDisabled={setSelectThemesBtnDisabled}
                            selectMediumAns={selectMediumAns}
                            setSelectMediumAns={setSelectMediumAns}
                            selectMediumActive={selectMediumActive}
                            setSelectMediumActive={setSelectMediumActive}
                            selectMediumBtnDisabled={selectMediumBtnDisabled}
                            setSelectMediumBtnDisabled={setSelectMediumBtnDisabled}
                            setSelectPaintingSizeAndPrice={setSelectPaintingSizeAndPrice}
                            setPersonTheme={setPersonTheme}
                            setPetTheme={setPetTheme}
                            personTheme={personTheme}
                            petTheme={petTheme}
                            complateStep1={complateStep1}
                            setComplateStep1={setComplateStep1}
                            complateStep2={complateStep2}
                            complateStep3={complateStep3}
                            complateStep4={complateStep4}
                            repeatStep2={repeatStep2}
                            repeatStep3={repeatStep3}
                            repeatStep4={repeatStep4}
                            showProgressBar={showProgressBar}
                            savedCardProccessComplete={savedCardProccessComplete}
                            setSavedCardPopup={setSavedCardPopup}
                            customSelectValueBlock={customSelectValueBlock}
                            setCustomSelectValueBlock={setCustomSelectValueBlock}
                        />
                    )}

                    {pathname === Routes.orderStep.replace(':id', '2') && (
                        <Step2
                            showProgressBar={showProgressBar}
                            setShowProgressBar={setShowProgressBar}
                            preview={preview}
                            setPreview={setPreview}
                            setRepeatStep2={setRepeatStep2}
                            setCombinePhotoPrice={setCombinePhotoPrice}
                            combinePhotoPrice={combinePhotoPrice}
                            setArtistAdvice={setArtistAdvice}
                            artistAdvice={artistAdvice}
                            setComments={setComments}
                            comments={comments}
                            savedCardPopup={savedCardPopup}
                            setSavedCardPopup={setSavedCardPopup}
                            setSavedCardProccessComplete={setSavedCardProccessComplete}
                            complateStep2={complateStep2}
                            complateStep3={complateStep3}
                            complateStep4={complateStep4}
                            repeatStep2={repeatStep2}
                            repeatStep3={repeatStep3}
                            repeatStep4={repeatStep4}
                            savedCardProccessComplete={savedCardProccessComplete}
                        />
                    )}
                    {pathname === Routes.orderStep.replace(':id', '3') && (
                        <Step3
                            setComplateStep2={setComplateStep2}
                            selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                            setSelectPaintingSizeAndPrice={setSelectPaintingSizeAndPrice}
                            selectedFrame={selectedFrame}
                            setSelectedFrame={setSelectedFrame}
                            setRepeatStep3={setRepeatStep3}
                            combinePhotoPrice={combinePhotoPrice}
                            videoCreated={videoCreated}
                            complateStep3={complateStep3}
                            personsCount={personsCount}
                            petsCount={petsCount}
                            personTheme={petTheme}
                            petTheme={petTheme}
                            expressService={expressService}
                            successCouponCode={successCouponCode}
                            successCouponId={successCouponId}
                            showProgressBar={showProgressBar}
                            complateStep2={complateStep2}
                            complateStep4={complateStep4}
                            repeatStep2={repeatStep2}
                            repeatStep3={repeatStep3}
                            repeatStep4={repeatStep4}
                            savedCardProccessComplete={savedCardProccessComplete}
                            setSavedCardPopup={setSavedCardPopup}
                            selectPaintingSize={selectPaintingSize}
                            setSelectPaintingSize={setSelectPaintingSize}
                            selectedPaintingFraming={selectedPaintingFraming}
                            setSelectedPaintingFraming={setSelectedPaintingFraming}
                            isNoteFadeList={isNoteFadeList}
                            setIsNoteFadeList={setIsNoteFadeList}
                            currentSlideMobile={currentSlideMobile}
                            setCurrentSlideMobile={setCurrentSlideMobile}
                            viewOrderSummary={viewOrderSummary}
                            setViewOrderSummary={setViewOrderSummary}
                        />
                    )}
                    {pathname === Routes.orderStep.replace(':id', '4') && (
                        <Step4
                            setComplateStep3={setComplateStep3}
                            selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                            selectedFrame={selectedFrame}
                            setRepeatStep4={setRepeatStep4}
                            setVideoCreated={setVideoCreated}
                            videoCreated={videoCreated}
                            combinePhotoPrice={combinePhotoPrice}
                            artistSign={artistSign}
                            setArtistSign={setArtistSign}
                            expressService={expressService}
                            successCouponCode={successCouponCode}
                            successCouponId={successCouponId}
                            complateStep2={complateStep2}
                            complateStep3={complateStep3}
                            complateStep4={complateStep4}
                            repeatStep2={repeatStep2}
                            repeatStep3={repeatStep3}
                            repeatStep4={repeatStep4}
                            showProgressBar={showProgressBar}
                            savedCardProccessComplete={savedCardProccessComplete}
                            setSavedCardPopup={setSavedCardPopup}
                            viewOrderSummary={viewOrderSummary}
                            setViewOrderSummary={setViewOrderSummary}
                            personsCount={personsCount}
                            petsCount={petsCount}
                        />
                    )}
                    {pathname === Routes.orderStep.replace(':id', 'checkout') && (
                        <Checkout
                            setComplateStep4={setComplateStep4}
                            selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                            selectedFrame={selectedFrame}
                            preview={preview}
                            setCombinePhotoPrice={setCombinePhotoPrice}
                            combinePhotoPrice={combinePhotoPrice}
                            setVideoCreated={setVideoCreated}
                            videoCreated={videoCreated}
                            artistSign={artistSign}
                            setArtistSign={setArtistSign}
                            artistAdvice={artistAdvice}
                            setExpressService={setExpressService}
                            expressService={expressService}
                            setComments={setComments}
                            comments={comments}
                            personTheme={personTheme}
                            petTheme={petTheme}
                            setFillingForm={setFillingForm}
                            fillingForm={fillingForm}
                            personsCount={personsCount}
                            petsCount={petsCount}
                            setSuccessCouponCode={setSuccessCouponCode}
                            successCouponCode={successCouponCode}
                            couponCode={couponCode}
                            setCouponCode={setCouponCode}
                            setSuccessCouponId={setSuccessCouponId}
                            successCouponId={successCouponId}
                            complateStep2={complateStep2}
                            complateStep3={complateStep3}
                            complateStep4={complateStep4}
                            repeatStep2={repeatStep2}
                            repeatStep3={repeatStep3}
                            repeatStep4={repeatStep4}
                            showProgressBar={showProgressBar}
                            savedCardProccessComplete={savedCardProccessComplete}
                            setSavedCardPopup={setSavedCardPopup}
                            clearOrderData={clearOrderData}
                        />
                    )}
                </div>
                {!isMobile && pathname !== Routes.orderStep.replace(':id', 'checkout') && (
                    <OrderStepFooter
                        complateStep2={complateStep2}
                        complateStep3={complateStep3}
                        showProgressBar={showProgressBar}
                        preview={preview}
                        selectPaintingSizeAndPrice={selectPaintingSizeAndPrice}
                        selectedFrame={selectedFrame}
                        repeatStep2={repeatStep2}
                        repeatStep3={repeatStep3}
                        complateStep4={complateStep4}
                        repeatStep4={repeatStep4}
                        personsCount={personsCount}
                        petsCount={petsCount}
                        setSavedCardPopup={setSavedCardPopup}
                        savedCardProccessComplete={savedCardProccessComplete}
                    />
                )}
            </OrderPageWrappCmp>
            <LoadingCover show={loading} />
        </>
    );
};

export default OrderStep;

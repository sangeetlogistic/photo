import { IMobileFooter } from './OrderStep.MobileFooter';
import { IMobileHeader } from './OrderStep.MobileHeader';

export interface IStep1 extends IMobileHeader, IMobileFooter {
    selectThemesAns: boolean;
    setSelectThemesAns: React.Dispatch<React.SetStateAction<boolean>>;
    selectThemesActive: boolean;
    setSelectThemesActive: React.Dispatch<React.SetStateAction<boolean>>;
    customThemeFliped: boolean;
    setCustomThemeFliped: React.Dispatch<React.SetStateAction<boolean>>;
    personsCount: number | null;
    setPersonsCount: React.Dispatch<React.SetStateAction<number | null>>;
    petsCount: number | null;
    setPetsCount: React.Dispatch<React.SetStateAction<null | number>>;
    selectThemesBtnDisabled: boolean;
    setSelectThemesBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    selectMediumAns: boolean;
    setSelectMediumAns: React.Dispatch<React.SetStateAction<boolean>>;
    selectMediumActive: boolean;
    setSelectMediumActive: React.Dispatch<React.SetStateAction<boolean>>;
    selectMediumBtnDisabled: boolean;
    setSelectMediumBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectPaintingSizeAndPrice: React.Dispatch<
        React.SetStateAction<{
            id: number;
            price: number;
            framingServiceAvailable: boolean;
            title: string;
            sizeid: number;
            sizeInText: string;
        } | null>
    >;
    setInitLoad?: React.Dispatch<React.SetStateAction<boolean>>;
    setPersonTheme?: any;
    setPetTheme?: any;
    personTheme?: any;
    petTheme?: any;
    complateStep1?: boolean;
    setComplateStep1?: React.Dispatch<React.SetStateAction<boolean>>;
    customSelectValueBlock: boolean;
    setCustomSelectValueBlock: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IStep2 extends IMobileHeader, IMobileFooter {
    showProgressBar: boolean;
    setShowProgressBar: React.Dispatch<React.SetStateAction<boolean>>;
    preview: { url: string; name: string }[];
    setPreview: React.Dispatch<
        React.SetStateAction<{ url: string; name: string }[]>
    >;
    setRepeatStep2: React.Dispatch<React.SetStateAction<boolean>>;
    setCombinePhotoPrice: (value: React.SetStateAction<undefined>) => void;
    combinePhotoPrice: number | undefined;
    setInitLoad?: React.Dispatch<React.SetStateAction<boolean>>;
    setArtistAdvice?: React.Dispatch<React.SetStateAction<boolean>>;
    artistAdvice?: boolean;
    setComments?: React.Dispatch<React.SetStateAction<string>>;
    comments?: string;
    savedCardPopup?: boolean;
    setSavedCardPopup?: React.Dispatch<React.SetStateAction<boolean>>;
    setSavedCardProccessComplete?: React.Dispatch<
        React.SetStateAction<boolean>
    >;
}

export interface IStep3 extends IMobileHeader, IMobileFooter {
    setComplateStep2: React.Dispatch<React.SetStateAction<boolean>>;
    selectPaintingSizeAndPrice: {
        id: number;
        price: number;
        framingServiceAvailable: boolean;
        title: string;
        sizeid: number;
        sizeInText: string;
    } | null;
    setSelectPaintingSizeAndPrice: React.Dispatch<
        React.SetStateAction<{
            id: number;
            price: number;
            framingServiceAvailable: boolean;
            title: string;
            sizeid: number;
            sizeInText: string;
        } | null>
    >;
    selectedFrame: {
        id?: number;
        title?: string;
        price: number;
        image?: string;
    } | null;
    setSelectedFrame: React.Dispatch<
        React.SetStateAction<{
            id?: number | undefined;
            title?: string | undefined;
            price: number;
            image?: string | undefined;
        } | null>
    >;
    setRepeatStep3: React.Dispatch<React.SetStateAction<boolean>>;
    combinePhotoPrice: undefined | number;
    videoCreated: undefined | number;
    complateStep3?: boolean;
    personsCount: number | null;
    petsCount: number | null;
    setInitLoad?: React.Dispatch<React.SetStateAction<boolean>>;
    personTheme?: any;
    petTheme?: any;
    expressService?: boolean;
    successCouponCode?: string;
    successCouponId?: {
        Cdata: number;
        discountIn: string;
        discountedAmount: string;
        message: string;
    } | null;
    showProgressBar: boolean;
    selectPaintingSize: boolean;
    setSelectPaintingSize: React.Dispatch<React.SetStateAction<boolean>>;
    selectedPaintingFraming: boolean;
    setSelectedPaintingFraming: React.Dispatch<React.SetStateAction<boolean>>;
    isNoteFadeList: any;
    setIsNoteFadeList: any;
    currentSlideMobile: null | number;
    setCurrentSlideMobile: any;
    viewOrderSummary: boolean;
    setViewOrderSummary: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IStep4 extends IMobileHeader, IMobileFooter {
    setComplateStep3: React.Dispatch<React.SetStateAction<boolean>>;
    selectPaintingSizeAndPrice: {
        id: number;
        price: number;
        framingServiceAvailable: boolean;
        title: string;
        sizeid: number;
        sizeInText: string;
    } | null;
    selectedFrame: {
        id?: number;
        title?: string;
        price: number;
        image?: string;
    } | null;
    setRepeatStep4: React.Dispatch<React.SetStateAction<boolean>>;
    setVideoCreated: (value: React.SetStateAction<undefined>) => void;
    videoCreated: number | undefined;
    combinePhotoPrice: number | undefined;
    setArtistSign: React.Dispatch<React.SetStateAction<boolean>>;
    artistSign: boolean;
    setInitLoad?: React.Dispatch<React.SetStateAction<boolean>>;
    expressService?: boolean;
    successCouponCode?: string;
    successCouponId?: {
        Cdata: number;
        discountIn: string;
        discountedAmount: string;
        message: string;
    } | null;
    viewOrderSummary: boolean;
    setViewOrderSummary: React.Dispatch<React.SetStateAction<boolean>>;
    personsCount: number | null;
    petsCount: number | null;
}

export interface ICheckout extends IMobileHeader, IMobileFooter {
    setComplateStep4: React.Dispatch<React.SetStateAction<boolean>>;
    selectPaintingSizeAndPrice: {
        id: number;
        price: number;
        framingServiceAvailable: boolean;
        title: string;
        sizeid: number;
        sizeInText: string;
    } | null;
    selectedFrame: {
        id?: number;
        title?: string;
        price: number;
        image?: string;
    } | null;
    preview: { url: string; name: string }[];
    setCombinePhotoPrice: (value: React.SetStateAction<undefined>) => void;
    combinePhotoPrice: number | undefined;
    setVideoCreated: (value: React.SetStateAction<undefined>) => void;
    videoCreated: number | undefined;
    setArtistSign: React.Dispatch<React.SetStateAction<boolean>>;
    artistSign: boolean;
    setInitLoad?: React.Dispatch<React.SetStateAction<boolean>>;
    artistAdvice?: boolean;
    setExpressService?: React.Dispatch<React.SetStateAction<boolean>>;
    expressService?: boolean;
    setComments?: React.Dispatch<React.SetStateAction<string>>;
    comments?: string;
    personTheme?: any;
    petTheme?: any;
    setFillingForm?: any;
    fillingForm?: any;
    personsCount?: number | null;
    petsCount?: number | null;
    setSuccessCouponCode?: React.Dispatch<React.SetStateAction<string>>;
    successCouponCode?: string;
    couponCode?: string;
    setCouponCode?: React.Dispatch<React.SetStateAction<string>>;
    setSuccessCouponId?: React.Dispatch<
        React.SetStateAction<{
            Cdata: number;
            discountIn: string;
            discountedAmount: string;
            message: string;
        } | null>
    >;
    successCouponId?: {
        Cdata: number;
        discountIn: string;
        discountedAmount: string;
        message: string;
    } | null;
    clearOrderData: () => void;
}

export interface IOrderStepFooter {
    complateStep2?: boolean;
    complateStep3?: boolean;
    complateStep4?: boolean;
    showProgressBar?: boolean;
    preview: { url: string; name: string }[];
    selectPaintingSizeAndPrice: {
        id: number;
        price: number;
        framingServiceAvailable: boolean;
        title: string;
        sizeid: number;
        sizeInText: string;
    } | null;
    selectedFrame: { id?: number; title?: string; price: number } | null;
    repeatStep2?: boolean;
    repeatStep3?: boolean;
    repeatStep4?: boolean;
    personsCount: number | null;
    petsCount: number | null;
    setSavedCardPopup?: React.Dispatch<React.SetStateAction<boolean>>;
    savedCardProccessComplete?: boolean;
}

export interface IOrderSummary {
    selectPaintingSizeAndPrice: {
        id: number;
        price: number;
        framingServiceAvailable?: boolean | undefined;
        title: string;
        sizeid: number;
        sizeInText: string;
    } | null;
    selectedFrame: {
        id?: number;
        title?: string;
        price: number;
        image?: string;
    } | null;
    combinePhotoPrice?: undefined | number;
    videoCreated?: undefined | number;
    expressService?: boolean;
    successCouponCode?: string;
    depositSection?: boolean;
    successCouponId?: {
        Cdata: number;
        discountIn: string;
        discountedAmount: string;
        message: string;
    } | null;
    personsCount: number | null;
    petsCount: number | null;
}

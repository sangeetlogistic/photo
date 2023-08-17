import moment from 'moment';
import { CouponCodeDiscount, depositDue } from '../features/OrderStep/OrderStep.constants';

export const convertBrToN = (content: string | undefined) => content && content.replace(/<br\s*[/]?>/gi, '\n');

export const convertPxToVw = (pxValue: string) => {
    const px = parseFloat(pxValue);
    const vw = (px / 1920) * 100;
    return vw.toFixed(3);
};

export const calculateFun = (
    paintingSizeAndPrice: any = 0,
    selectedFramePrice: any = 0,
    combinePhotoPrice: any = 0,
    videoCreated: any = 0,
    expressService: any = false,
    depositDueMake: any = true,
    successCouponCode: any = null,
) => {
    let total: number | string = Number(paintingSizeAndPrice + selectedFramePrice + combinePhotoPrice + videoCreated);

    let couponCodeAmount = 0;

    const expressServiceAmount = expressService ? total * 0.15 : 0;

    total += expressServiceAmount;

    if (successCouponCode && successCouponCode.discountIn === CouponCodeDiscount.PRICE) {
        couponCodeAmount = Number(successCouponCode.discountedAmount);
    } else if (successCouponCode && successCouponCode.discountIn === CouponCodeDiscount.PERCENTAGE) {
        couponCodeAmount = (successCouponCode.discountedAmount / 100) * total;
    }

    total -= couponCodeAmount;

    total = (total * (depositDueMake ? depositDue : 1)).toFixed(2);

    return total;
};

export const isLocalStorageValid = (key: string) => {
    const item = localStorage.getItem(key);
    if (!item) return false;

    const data = JSON.parse(item);
    const expirationDate = moment(data.expirationDate);
    const currentDate = moment();

    return currentDate.isBefore(expirationDate);
};

export const checkForDevice = () => {
    const windowWidth = window.innerWidth;
    return windowWidth <= 1440;
};

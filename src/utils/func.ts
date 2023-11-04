/* eslint-disable complexity */
import moment from 'moment';
import { CouponCodeDiscount, depositDue } from '../features/OrderStep/OrderStep.constants';
import { monthDayFormat } from '../constants/general';
import { basicPrice } from '../components/Layout/Header/Header.constants';

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

    total = total < 0 ? 0 : (total * (depositDueMake ? depositDue : 1)).toFixed(2);

    return total;
};

export const isLocalStorageValid = (key: string) => {
    const item = localStorage?.getItem(key);
    if (!item) return false;

    const data = JSON.parse(item);
    const expirationDate = moment(data.expirationDate);
    const currentDate = moment();

    return currentDate.isBefore(expirationDate);
};

export const checkForDevice = (windowSize: number) => {
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    return windowWidth < windowSize;
};

export const dateSeparation = (estimatedDays: number, futureSeprateDays: number) => {
    // Get the current date
    const currentDate = moment();

    // Calculate the date after estimatedDays days
    const futureDate = currentDate.clone().add(estimatedDays, 'days');
    const futureDateWith4Days = futureDate.clone().add(futureSeprateDays, 'days');

    // Format the dates if needed
    const formattedFutureDate = futureDate.format(monthDayFormat);
    const formattedFuture4Date = futureDateWith4Days.format(monthDayFormat);

    return { formattedFutureDate, formattedFuture4Date };
};

export const emailRegex = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const priceCalculatorMenu = (size_price: any, num_persons: any, num_pets: any) => {
    let priceCalc = 0;

    if ((num_persons === 1 && num_pets === 0) || (num_persons === 0 && num_pets === 1) || (num_persons === 0 && num_pets === 0)) {
        priceCalc = size_price;
        return priceCalc;
    }
    if (num_persons === 1 && num_pets === 1) {
        priceCalc = size_price + basicPrice;
        return priceCalc;
    }

    if (num_persons >= 2) {
        if (num_pets === 0) {
            const persons = (num_persons - 1) * basicPrice;
            priceCalc = size_price + persons;
            return priceCalc;
        }
        if (num_pets === 1) {
            const numOfPerson = num_persons * basicPrice;
            priceCalc = size_price + numOfPerson;
            return priceCalc;
        }
        if (num_pets > 1) {
            const persons = (num_persons - 1) * basicPrice;
            const pets = num_pets * basicPrice;
            priceCalc = size_price + persons + pets;
            return priceCalc;
        }
    }
    if (num_pets >= 2) {
        if (num_persons === 0) {
            const pets = (num_pets - 1) * basicPrice;
            priceCalc = size_price + pets;
            return priceCalc;
        }
        if (num_persons === 1) {
            const numOfPet = num_pets * basicPrice;
            priceCalc = size_price + numOfPet;
            return priceCalc;
        }
        if (num_persons > 1) {
            const pets = (num_pets - 1) * basicPrice;
            const persons = num_persons * basicPrice;
            priceCalc = size_price + pets + persons;
            return priceCalc;
        }
    }
    return null;
};

export const roundOff = (data: any) => Math.round(Number(data || 0) * 10) / 10;

export const getReadContentTime = (text: any) => {
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;

    const readLength = Math.ceil(words / wpm);
    return readLength;
};

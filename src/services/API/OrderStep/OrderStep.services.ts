/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const orderStepGetThemeObjMedium = async () => {
    const uri = API.orderStepGetThemeObjMedium.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const getSizeFrame = async (payload: any) => {
    const uri = API.getSizeFrame.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};
const saveOrder = async (payload: any) => {
    const uri = API.saveOrder.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};
const isValidCouponCode = async (payload: any) => {
    const uri = API.isValidCouponCode.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};
const addMember = async (payload: any) => {
    const uri = API.addMember.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};
const googleApplePay = async (payload: any) => {
    const uri = API.googleApplePay.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};

export default {
    orderStepGetThemeObjMedium,
    getSizeFrame,
    saveOrder,
    isValidCouponCode,
    addMember,
    googleApplePay,
};

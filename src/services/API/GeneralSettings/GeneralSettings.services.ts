/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const cookiePolicy = async () => {
    const uri = API.cookiePolicy.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const privacyPolicy = async () => {
    const uri = API.privacyPolicy.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const termsConditions = async () => {
    const uri = API.termsConditions.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const cCPAPrivacyNotice = async () => {
    const uri = API.cCPAPrivacyNotice.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const drawingPicture = async (payload: any) => {
    const uri = API.drawingPicture.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};
const getTotalRating = async () => {
    const uri = API.getTotalRating.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};

export default {
    cookiePolicy,
    privacyPolicy,
    termsConditions,
    cCPAPrivacyNotice,
    drawingPicture,
    getTotalRating,
};

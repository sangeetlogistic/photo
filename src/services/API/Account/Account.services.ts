/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getMyOrder = async () => {
    const uri = API.getMyOrder.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const updateStatus = async (payload: any) => {
    const uri = API.updateStatus.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};
const getAllCard = async () => {
    const uri = API.getAllCard.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const doRemainingPayment = async (payload: any) => {
    const uri = API.remainingPayment.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};
const doSaveAddress = async (payload: any) => {
    const uri = API.saveAddress.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};
const updateUser = async (payload: any) => {
    const uri = API.updateUser.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};
const userUnboxingVideo = async (payload: any) => {
    const uri = API.userUnboxingVideo.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};

export default {
    getMyOrder,
    updateStatus,
    getAllCard,
    doRemainingPayment,
    doSaveAddress,
    updateUser,
    userUnboxingVideo,
};

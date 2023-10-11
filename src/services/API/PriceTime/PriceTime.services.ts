/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getPriceTime = async () => {
    const uri = API.getPriceTime.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};
const sendGiftCard = async (payload: any) => {
    const uri = API.sendGiftCard.post;
    const response = await axiosInterceptor.post(uri, payload);
    return response;
};

export default {
    getPriceTime,
    sendGiftCard,
};

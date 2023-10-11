/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getFaqs = async () => {
    const uri = API.getFaqs.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};

export default {
    getFaqs,
};

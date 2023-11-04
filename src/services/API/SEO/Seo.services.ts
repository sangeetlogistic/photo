/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getSeoDetail = async (payload?: { slug: string } | undefined) => {
    const uri = API.seoDetail.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};

export default {
    getSeoDetail,
};

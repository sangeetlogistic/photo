/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getBlogDetail = async (payload: any) => {
    const uri = API.getGalleryDetail.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};

export default {
    getBlogDetail,
};

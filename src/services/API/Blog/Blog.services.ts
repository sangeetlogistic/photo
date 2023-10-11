/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getAllBlog = async (payload: any) => {
    const uri = API.getBlog.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};
const getBlogDetail = async (payload: any) => {
    const uri = API.detailBlog.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};

export default {
    getAllBlog,
    getBlogDetail,
};

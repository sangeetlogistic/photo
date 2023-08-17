/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getHomeDetail = async () => {
    const uri = API.getHomeDetail.get;
    const response = await axiosInterceptor.get(uri);
    return response;
};

export default { getHomeDetail };

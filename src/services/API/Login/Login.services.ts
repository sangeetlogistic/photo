/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getLoginLink = async (payload: any) => {
    const uri = API.getLoginLink.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};
const doLogin = async (payload: any) => {
    const uri = API.doLogin.get;
    const response = await axiosInterceptor.get(uri, { params: payload });
    return response;
};

export default { getLoginLink, doLogin };

/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getThemeDetail = async (payload: { themeName: string }) => {
    const { themeName } = payload;
    const params = {
        themeName,
    };

    const uri = API.getThemeDetail.get;
    const response = await axiosInterceptor.get(uri, { params });
    return response;
};

export default { getThemeDetail };

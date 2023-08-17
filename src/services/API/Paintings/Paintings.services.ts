/* eslint-disable import/no-anonymous-default-export */
import API from '../../../constants/API';
import { axiosInterceptor } from '../../../utils/requestClient';

const getMediumDetail = async (payload: { mediumName: string }) => {
    const { mediumName } = payload;
    const params = {
        mediumName,
    };

    const uri = API.getMediumDetail.get;
    const response = await axiosInterceptor.get(uri, { params });
    return response;
};

export default { getMediumDetail };

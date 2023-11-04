/* eslint-disable no-param-reassign */
import axios from 'axios';

import { LocalStorageKeys } from '../constants/keys';
import { API_SERVER } from '../constants/predicates';

export const axiosInterceptor = axios.create({
    baseURL: API_SERVER,
});

// Add a request interceptor
axiosInterceptor.interceptors.request.use(
    (config: any) => {
        if (typeof window !== 'undefined' && localStorage?.getItem(LocalStorageKeys.authUser)) {
            config.headers.Authorization = `Bearer ${localStorage?.getItem(LocalStorageKeys.authUser)}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

// Add a response interceptor
axiosInterceptor.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorCatch = error.response && error.response.status >= 400 && error.response.status < 500;

        if (!errorCatch) {
            // we are sorry, but something went wrong; Please try again later
        }
        return Promise.reject(error);
    },
);

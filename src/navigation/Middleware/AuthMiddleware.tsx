import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { storeWebToken } from '../../features/Account/Account.slice';

import { setLoginPopup } from '../../features/Login/Login.slice';
import { useLocalStorage } from '../../hooks';
import { Routes } from '../Routes';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const authToken = (dispatch: any) => {
    if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);

        const token = urlParams.get('token');
        dispatch(storeWebToken(token));
        const url = window.location.href;

        const modifiedUrl = url.split('?')[0];
        // Reflect the modified URL in the address bar
        window.history.replaceState(null, '', modifiedUrl);
        return token;
    }
    return false;
};

const AuthMiddleware = ({ children }: { children: any }) => {
    const localStorage = useLocalStorage();
    const dispatch = useAppDispatch();
    const route = useRouter();

    if (route.pathname === Routes.account && !(localStorage.getItem(LocalStorageKeys.authUser) || authToken(dispatch))) {
        dispatch(setLoginPopup(true));

        return route.push(Routes.home);
    }
    return children;
};

export default AuthMiddleware;

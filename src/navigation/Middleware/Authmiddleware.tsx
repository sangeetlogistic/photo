import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { storeWebToken } from '../../features/Account/Account.slice';

import { setLoginPopup } from '../../features/Login/Login.slice';
import { useLocalStorage } from '../../hooks';
import { Routes } from '../Routes';

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

const Authmiddleware = ({
    path,
    component: Component,
    layout: Layout,
    ...optProps
}: {
    path: string;
    layout: React.ElementType;
    component: React.ElementType;
}) => {
    const localStorage = useLocalStorage();
    const dispatch = useAppDispatch();

    return (
        <Route
            path={path}
            {...optProps}
            render={() => {
                if (path === Routes.account && !(localStorage.getItem(LocalStorageKeys.authUser) || authToken(dispatch))) {
                    dispatch(setLoginPopup(true));
                    return (
                        <Redirect
                            to={{
                                pathname: Routes.home,
                            }}
                        />
                    );
                }
                return (
                    Component && (
                        <Layout>
                            <Component />
                        </Layout>
                    )
                );
            }}
        />
    );
};

export default Authmiddleware;

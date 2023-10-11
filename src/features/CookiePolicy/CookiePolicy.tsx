/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

import { CommonPolicyCmp } from './CommonPolicy.Components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cookiePolicyAction, selectCookiePolicy, selectError, selectLoading } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import Toast from '../../components/Toast/Toast';
import LoadingCover from '../../components/LoadingCover';

const { Content } = Layout;
const CookiePolicy = () => {
    const dispatch = useAppDispatch();

    const cookiePolicy = useAppSelector(selectCookiePolicy);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(cookiePolicyAction());
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (error) setShow(true);
    }, [error]);

    return (
        <CommonPolicyCmp>
            <Helmet>
                <title>Cookie Policy</title>
            </Helmet>
            {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            <Content className="container">
                <div className="cookie_section">
                    <h1>COOKIES POLICY</h1>
                    <div className="editor_content_cookie">{parse(cookiePolicy?.data?.[0]?.description || '')}</div>
                </div>
            </Content>
            <LoadingCover show={loading} />
        </CommonPolicyCmp>
    );
};

export default CookiePolicy;

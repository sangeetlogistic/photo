/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

import { CommonPolicyCmp } from '../CookiePolicy/CommonPolicy.Components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cCPAPrivacyNoticeAction, selectCcPAPrivacy, selectError, selectLoading } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import Toast from '../../components/Toast/Toast';
import LoadingCover from '../../components/LoadingCover';

const { Content } = Layout;
const CCPA = () => {
    const dispatch = useAppDispatch();

    const ccPAPrivacy = useAppSelector(selectCcPAPrivacy);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(cCPAPrivacyNoticeAction());
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (error) setShow(true);
    }, [error]);

    return (
        <CommonPolicyCmp>
            <Helmet>
                <title>CCPA</title>
            </Helmet>
            {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            <Content className="container">
                <div className="cookie_section">
                    <h1>PRIVACY NOTICE FOR CALIFORNIA RESIDENTS (CCPA)</h1>
                    <div className="editor_content_cookie">{parse(ccPAPrivacy?.data?.[0]?.description || '')}</div>
                </div>
            </Content>
            <LoadingCover show={loading} />
        </CommonPolicyCmp>
    );
};

export default CCPA;

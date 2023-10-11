/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import parse from 'html-react-parser';
import moment from 'moment';
import { Helmet } from 'react-helmet';

import { CommonPolicyCmp } from '../CookiePolicy/CommonPolicy.Components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { privacyPolicyAction, selectPrivacyPolicy, selectError, selectLoading } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import Toast from '../../components/Toast/Toast';
import LoadingCover from '../../components/LoadingCover';

const { Content } = Layout;
const Privacy = () => {
    const dispatch = useAppDispatch();

    const privacyPolicy = useAppSelector(selectPrivacyPolicy);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(privacyPolicyAction());
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (error) setShow(true);
    }, [error]);

    return (
        <CommonPolicyCmp>
            <Helmet>
                <title>Privacy Policy</title>
            </Helmet>
            {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
            <Content className="container">
                <div className="cookie_section">
                    <h1>Privacy Policy</h1>
                    <div className="editor_content_cookie">
                        <p>Last updated: {moment(privacyPolicy?.data?.[0]?.updatedAt).format('MMMM DD, YYYY')}</p>
                        {parse(privacyPolicy?.data?.[0]?.description || '')}
                    </div>
                </div>
            </Content>
            <LoadingCover show={loading} />
        </CommonPolicyCmp>
    );
};

export default Privacy;

import React from 'react';
import { Alert, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import FilledButton from '../../components/FilledButton';
import LazyImage from '../../components/LazyImage';
import { Images } from '../../theme';
import { LoginPopUpCmp } from './Login.components';
import { getLoginLinkAction, selectedLoginPopup, selectedSuccessEmailSend, setLoginPopup, selectedLoading } from './Login.slice';
import LoadingCover from '../../components/LoadingCover';

const LoginPopup = () => {
    const dispatch = useAppDispatch();

    const loginPopup = useAppSelector(selectedLoginPopup);
    const successEmailSend = useAppSelector(selectedSuccessEmailSend);
    const loading = useAppSelector(selectedLoading);

    const onFinish = async (values: { email: string }) => {
        await dispatch(getLoginLinkAction({ email: values.email }));
    };

    const loginPopupContent = (
        <div className="login-popup-content">
            <LazyImage src={Images.LoginPopupImg} alt="" className="login-popup-img" />
            <div className="login-popup-wrap-block">
                <h4>Your Login email is on the way!</h4>
                <p>it can take a moment to arrive, please check your spam folder, before contacting support for additional assistance</p>
                {!successEmailSend && (
                    <Form onFinish={onFinish} autoComplete="off" layout="vertical" validateTrigger={['onSubmit']} className="login-form">
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please enter a valid email address.',
                                },
                            ]}
                        >
                            <Input placeholder="Enter Your Email" />
                        </Form.Item>

                        <FilledButton className="login-btn" htmlType="submit" block>
                            Get Login Link
                        </FilledButton>
                    </Form>
                )}
            </div>
            {successEmailSend && (
                <Alert
                    description="please check your email. you will soon receive an email with a login link."
                    type="success"
                    className="ptp_alertbox"
                />
            )}
        </div>
    );

    return (
        <>
            <LoginPopUpCmp
                onCancel={() => dispatch(setLoginPopup(false))}
                open={loginPopup}
                closable={false}
                content={loginPopupContent}
                className="p2p-login-popup"
            />
            <LoadingCover show={loading} />
        </>
    );
};

export default LoginPopup;

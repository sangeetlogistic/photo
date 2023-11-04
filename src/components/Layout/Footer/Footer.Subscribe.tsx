import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';

import { Images } from '../../../theme';
import { useAppDispatch } from '../../../app/hooks';
import { subscribeMemberAction } from '../../../services/API/GeneralSettings/GeneralSettings.slice';
import Toast from '../../Toast';

const Subscribe = () => {
    const [show, setShow] = useState(false);
    const [form] = Form.useForm();

    const dispatch = useAppDispatch();
    const onFinish = async (values: any) => {
        const payload = {
            name: values.username,
            email: values.email,
            tag: ['20% Footer'],
        };
        const result = await dispatch(subscribeMemberAction(payload));

        if (result.type === subscribeMemberAction.fulfilled.toString()) {
            setShow(true);
            form.resetFields();
        }
    };
    return (
        <div className="footer-subscribe">
            {show && <Toast show={show} setShow={setShow} message="User subscribe successfully" type="success" showIcon />}

            <p className="title text-center">Subscribe &amp; get 20 % off</p>
            <Form className="subscription-form" onFinish={onFinish} autoComplete="off" form={form}>
                <Row gutter={24}>
                    <Col className="gutter-row" xs={24} md={12}>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required.',
                                },
                            ]}
                        >
                            <Input placeholder="Enter Your  Name" />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" xs={24} md={12}>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'This field is required.',
                                },
                                {
                                    type: 'email',
                                    message: 'Please enter a valid email address.',
                                },
                            ]}
                        >
                            <Input placeholder="Enter your email here ..." />
                        </Form.Item>
                        <button className="f-subscription-btn" type="submit">
                            <img src={Images.FooterBtnArrow?.src} alt="" />
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Subscribe;

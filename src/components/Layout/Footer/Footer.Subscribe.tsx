import { Form, Input, Row, Col } from 'antd';
import React from 'react';
import { Images } from '../../../theme';
import LazyImage from '../../LazyImage';

const Subscribe = () => {
    const onFinish = (values: any) => {
        // console.log('Success:', values);
    };
    return (
        <div className="footer-subscribe">
            <h2 className="title text-center">Subscribe &amp; get 20 % off</h2>
            <Form className="subscription-form" onFinish={onFinish} autoComplete="off">
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
                            <LazyImage effect="opacity" src={Images.FooterBtnArrow} alt="" />
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Subscribe;

import React, { useState } from 'react';
import { Button, Card, Col, Form, Input, Row, Space } from 'antd';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ShippingAddressCmp } from './Account.component';
import { getMyOrderAction, selectedUserData, updateUserAction } from './Account.slice';
import PhoneNumber from '../../components/PhoneNumber';
import { TabActiveKey } from './Accout.constants';
import GoogleAutocomplete from '../../components/GoogleAutocomplete/GoogleAutocomplete';

const PersonalDetails = ({ handleChangeKey, status }: { handleChangeKey: (key: TabActiveKey) => void; status: boolean }) => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const userData = useAppSelector(selectedUserData);

    const [country, setCountry] = useState(getCountries().find((item: any) => item === userData?.countryName) || 'US');

    const handleCountryCode = (selectValue: any) => {
        setCountry(selectValue || undefined);
    };

    const initialValues = {
        name: userData?.name || '',
        surname: userData?.surname || '',
        country: userData?.country || '',
        state: userData?.state || '',
        streetAddress: userData?.streetAddress || '',
        additionalAddress: userData?.additionalAddress || '',
        city: userData?.city || '',
        zipCode: userData?.zipCode || '',
        countryCode: getCountries().find((item: any) => item === userData?.countryName) || 'US',
        phoneNumber: userData?.phoneNumber || '',
        email: userData?.email || '',
    };

    const onFinish = async (values: any) => {
        const payload = {
            ...values,
            countryCode: getCountryCallingCode(values.countryCode),
            countryName: values.countryCode,
            id: userData.id,
        };

        const result: any = await dispatch(updateUserAction(payload));
        if (result.type === updateUserAction.fulfilled.toString()) {
            await handleChangeKey(TabActiveKey.myOrder);
            dispatch(getMyOrderAction());
        }
    };

    const handleSetAddress = (data: any) => {
        // Extracting country, state, and city from the placed object
        const { countrySelect, state, city, zipCode, streetAddress } = data;

        form.setFieldsValue({ country: countrySelect, state, city, zipCode, streetAddress });
    };

    return (
        <Row>
            <Col xs={24} md={20} xl={15}>
                <Card className="personal-detail-card">
                    <ShippingAddressCmp className="shipping_address_form">
                        <Form form={form} name="basic" layout="vertical" initialValues={initialValues} autoComplete="off" onFinish={onFinish}>
                            <Row gutter={{ md: 24, xl: 92 }}>
                                <Col xs={24} md={12}>
                                    <h3 className="title-font">Personal information</h3>
                                    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your FirstName!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Surname"
                                            name="surname"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Surname!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    type: 'email',
                                                    message: 'Please input your Email!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <PhoneNumber label="Phone number" countryValue={country} handleCountryCode={handleCountryCode} />
                                    </Space>
                                </Col>
                                <Col xs={24} md={12}>
                                    <h3 className="title-font">Address Details</h3>
                                    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
                                        <Form.Item
                                            label="Country"
                                            name="country"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Country!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <GoogleAutocomplete
                                            Form={Form}
                                            handleSetAddress={handleSetAddress}
                                            label="Address"
                                            name="streetAddress"
                                            status={status}
                                        />
                                        <Row gutter={16}>
                                            <Col span={14} className="gutter-row">
                                                <Form.Item
                                                    label="City"
                                                    name="city"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your City!',
                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={10} className="gutter-row">
                                                <Form.Item
                                                    label="Zip Code"
                                                    name="zipCode"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Zipcode!',
                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Form.Item
                                            label="State"
                                            name="state"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your State!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Space>
                                </Col>
                            </Row>
                            <div className="save__address text-center">
                                <Button className="save_address-btn" htmlType="submit">
                                    Update Details
                                </Button>
                            </div>
                        </Form>
                    </ShippingAddressCmp>
                </Card>
            </Col>
        </Row>
    );
};

export default PersonalDetails;

/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { Col, Form, Input, message, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

import PhoneNumber from '../../components/PhoneNumber';
import FilledButton from '../../components/FilledButton';
import { ShippingAddressPopupCmp, ShippingAddressCmp } from './Account.component';
import ShippingAddressDetails from './Account.ShippingDetails';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMyOrderAction, remainingPaymentCardAction, saveAddressAction, selectedUserData } from './Account.slice';
import { GOOGLE_AUTOCOMPLETE_KEY } from '../../constants/predicates';

const ShippingAddressPopup = ({ setPaymentPopup, paymentPopup, setThankyouPopup }: any) => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const userData = useAppSelector(selectedUserData);

    const [shippingAddressDetail, setShippingAddressDetail] = useState(false);
    const [country, setCountry] = useState('');
    const [selectShippingData, setSelectShippingData] = useState<any>({
        address: null,
        validate: false,
    });
    const [isDefaultAddress, setIsDefaultAddress] = useState<string | null>(null);
    const [shippingValue, setShippingValue] = useState(0);
    const [activeButton, setActiveButton] = useState<null | number>(0);
    const [amountToShow, setAmountToShow] = useState<number | string | null>(null);

    const initialValues = {
        firstName: userData?.name || '',
        surName: userData?.surname || '',
        country: userData?.adress?.country || '',
        state: userData?.adress?.state || '',
        address: userData?.adress?.address || '',
        additionalAddress: userData?.adress?.additionalAddress || '',
        city: userData?.adress?.city || '',
        zipCode: userData?.adress?.zipCode || '',
        countryCode: getCountries().find((item: any) => item === userData?.countryCode) || 'IN',
        phoneNumber: userData?.phoneNumber || '',
        email: userData?.email || '',
    };

    useEffect(() => {
        if (userData && userData?.name && userData?.surname && userData?.adress?.address && userData?.adress?.city && userData?.adress?.country) {
            const data: string = `${userData.name},${userData.surname},${userData.adress?.address},${userData.adress?.city},${userData.adress?.country}`;
            setIsDefaultAddress(data);
        }

        if (userData?.adress?.address) {
            setSelectShippingData((prevState: any) => ({
                ...prevState,
                validate: true,
            }));
        }
    }, [userData]);

    const handleCountryCode = (selectValue: any) => {
        setCountry(selectValue || undefined);
    };

    const handlePayment = async (
        paymentId: string | undefined,
        paymentMethod?: string | undefined,
        paymentMode?: string | undefined,
        paymentIntent?: string | undefined,
    ) => {
        if (selectShippingData.validate) {
            const payload: any = {
                paymentMethod_id: paymentId,
                orderid: paymentPopup?.id,
                addressid: userData?.adress?.id,
                payment_method: paymentMethod,
                payment_mode: paymentMode || paymentMethod,
                paymentIntent,
            };

            if (shippingValue === 15) {
                payload.shippingType = 'express';
                payload.shippingPercentage = shippingValue;
            }
            if (activeButton) {
                payload.tipPercentage = activeButton;
            }

            const result: any = await dispatch(remainingPaymentCardAction(payload));
            if (result.type === remainingPaymentCardAction.fulfilled.toString()) {
                setPaymentPopup?.((prevState: any) => ({
                    ...prevState,
                    open: false,
                }));
                dispatch(getMyOrderAction());
                setThankyouPopup(true);
            }
        } else {
            message.error({
                content: 'Select Shipping Address',
                style: { margin: '12px' },
            });
        }
    };

    const onFinish = async (values: any) => {
        const data = `${values.firstName},${values.surName},${values.address},${values.city},${values.state}${values.country}`;

        const payload = {
            firstName: values.firstName,
            surName: values.surName,
            additionalAddress: values.additionalAddress,
            address: values.address,
            city: values.city,
            country: values.country,
            countryCode: getCountryCallingCode(values.countryCode),
            email: values.email,
            phoneNumber: values.phoneNumber,
            state: values.state,
            zipCode: values.zipCode,
        };

        setSelectShippingData({ address: payload, validate: true });
        setIsDefaultAddress(data);

        await dispatch(saveAddressAction(payload));
        await dispatch(getMyOrderAction());

        setShippingAddressDetail(false);
    };
    const onFinishFailed = (values: any) => {
        setSelectShippingData((prevState: any) => ({
            ...prevState,
            validate: false,
        }));
    };

    const handlePlaceSelected = (placed: any) => {
        // Extracting country, state, and city from the placed object
        const { address_components: addressComponents } = placed;
        let countrySelcet = '';
        let state = '';
        let city = '';
        let zipCode = '';

        addressComponents.forEach((component: any) => {
            if (component.types.includes('country')) {
                countrySelcet = component.long_name;
            }

            if (component.types.includes('administrative_area_level_1')) {
                state = component.long_name;
            }

            if (component.types.includes('locality')) {
                city = component.long_name;
            }

            if (component.types.includes('postal_code')) {
                zipCode = component.long_name;
            }
        });

        form.setFieldsValue({ country: countrySelcet, state, city, zipCode });
    };

    const ShippingAddressPopupContent = (
        <>
            {shippingAddressDetail ? (
                <ShippingAddressCmp className="shipping_address_form popup_padding">
                    <div className="d-flex justify-between">
                        <h3 className="title-font">SHIPPING ADDRESS</h3>
                        <FontAwesomeIcon icon={faXmark} size="xl" className="icon-red" onClick={() => setShippingAddressDetail(false)} />
                    </div>
                    <Form
                        form={form}
                        name="basic"
                        layout="vertical"
                        autoComplete="off"
                        initialValues={initialValues}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row gutter={36}>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Name"
                                    name="firstName"
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please input your Firstname!',
                                        },
                                    ]}
                                >
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Surname"
                                    name="surName"
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please input your Surname!',
                                        },
                                    ]}
                                >
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Address!',
                                        },
                                    ]}
                                >
                                    <ReactGoogleAutocomplete
                                        apiKey={GOOGLE_AUTOCOMPLETE_KEY}
                                        onPlaceSelected={handlePlaceSelected}
                                        className="ant-input"
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Additional Address Details"
                                    name="additionalAddress"
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please input your Address!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    label="Country"
                                    name="country"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
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
                            </Col>

                            <Col xs={24} md={12}>
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
                            <Col xs={24} md={12}>
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
                            <Col xs={24} md={12}>
                                <PhoneNumber label="Phone Number" countryValue={country} handleCountryCode={handleCountryCode} />
                            </Col>
                            <Col xs={24} md={12}>
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
                                    <Input disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className="save__address text-center">
                            <FilledButton className="save_address-btn" htmlType="submit">
                                Save Address
                            </FilledButton>
                        </div>
                    </Form>
                </ShippingAddressCmp>
            ) : (
                <ShippingAddressDetails
                    setShippingAddressDetail={setShippingAddressDetail}
                    paymentPopup={paymentPopup}
                    handlePayment={handlePayment}
                    isDefaultAddress={isDefaultAddress}
                    shippingValue={shippingValue}
                    setShippingValue={setShippingValue}
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                    amountToShow={amountToShow}
                    setAmountToShow={setAmountToShow}
                />
            )}
        </>
    );

    return (
        <>
            <ShippingAddressPopupCmp
                onCancel={() =>
                    setPaymentPopup?.((prevState: any) => ({
                        ...prevState,
                        open: false,
                    }))
                }
                open={paymentPopup.open}
                closable={false}
                content={ShippingAddressPopupContent}
            />
        </>
    );
};

export default ShippingAddressPopup;

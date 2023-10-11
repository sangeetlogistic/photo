/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import moment from 'moment';

import PhoneNumber from '../../components/PhoneNumber';
import FilledButton from '../../components/FilledButton';
import { ShippingAddressPopupCmp, ShippingAddressCmp } from './Account.component';
import ShippingAddressDetails from './Account.ShippingDetails';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMyOrderAction, remainingPaymentCardAction, saveAddressAction, selectedUserData } from './Account.slice';
import GoogleAutocomplete from '../../components/GoogleAutocomplete/GoogleAutocomplete';
import { useDeviceDetect } from '../../hooks';
import { dateSeparation } from '../../utils/func';
import { estimatedAccountDeliveryDays, estimatedAccountExpressDeliveryDays } from './Accout.constants';
import { monthDayFormat } from '../../constants/general';
import Toast from '../../components/Toast';
import { LocalStorageKeys } from '../../constants/keys';

const ShippingAddressPopup = ({ setPaymentPopup, paymentPopup, setThankyouPopup, status }: any) => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();

    const userData = useAppSelector(selectedUserData);
    const { isMobile } = useDeviceDetect();

    const [shippingAddressDetail, setShippingAddressDetail] = useState(false);
    const [country, setCountry] = useState('US');
    const [selectShippingData, setSelectShippingData] = useState<any>({
        address: null,
        validate: false,
    });
    const [isDefaultAddress, setIsDefaultAddress] = useState<string | null>(null);
    const [shippingValue, setShippingValue] = useState(0);
    const [activeButton, setActiveButton] = useState<null | number>(0);
    const [amountToShow, setAmountToShow] = useState<number | string | null>(null);
    const [initialValues, setInitialValues] = useState({});
    const [showError, setShowError] = useState(false);
    const [estimatedDeliveryDays, setEstimatedDeliveryDays] = useState<{ formattedFutureDate: string; formattedFuture4Date: string }>({
        formattedFutureDate: '',
        formattedFuture4Date: '',
    });

    useEffect(() => {
        const cName: any = getCountries().find((item: any) => item === userData?.countryName);
        setCountry(cName);

        const values = {
            firstName: userData?.name || '',
            surName: userData?.surname || '',
            country: userData?.adress?.country || '',
            state: userData?.adress?.state || '',
            address: userData?.adress?.address || '',
            additionalAddress: userData?.adress?.additionalAddress || '',
            city: userData?.adress?.city || '',
            zipCode: userData?.adress?.zipCode || '',
            countryCode: getCountries().find((item: any) => item === userData?.countryName) || 'US',
            phoneNumber: userData?.phoneNumber || '',
            email: userData?.email || '',
        };

        setInitialValues(values);
    }, [userData]);

    useEffect(() => {
        const payload = { activeButton, shippingValue, estimatedDeliveryDays, adressId: userData?.adress?.id };
        localStorage.setItem(LocalStorageKeys.remainingOrderDetail, JSON.stringify(payload));
    }, [activeButton, shippingValue, estimatedDeliveryDays, userData?.adress?.id]);

    useEffect(() => {
        const data: any = localStorage.getItem(LocalStorageKeys.remainingOrderDetail)
            ? JSON.parse(localStorage.getItem(LocalStorageKeys.remainingOrderDetail) || '')
            : '';
        if (data) {
            setShippingValue(data?.shippingValue);
            setActiveButton(data?.activeButton);
        }
    }, []);

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

    useEffect(() => {
        const dateRange = dateSeparation(
            shippingValue === 15 ? estimatedAccountExpressDeliveryDays : estimatedAccountDeliveryDays,
            shippingValue === 15 ? 3 : 2,
        );
        setEstimatedDeliveryDays(dateRange);
    }, [shippingValue]);

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
                estimated_delivery_startDate: moment(estimatedDeliveryDays.formattedFutureDate, monthDayFormat).format('YYYY-MM-DD'),
                estimated_delivery_endDate: moment(estimatedDeliveryDays.formattedFuture4Date, monthDayFormat).format('YYYY-MM-DD'),
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
            setShowError(true);
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
            countryName: values.countryCode,
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
    const handleSetAddress = (data: any) => {
        // Extracting country, state, and city from the placed object
        const { countrySelect, state, city, zipCode, streetAddress } = data;

        form.setFieldsValue({ country: countrySelect, state, city, zipCode, address: streetAddress });
    };

    const ShippingAddressPopupContent = (
        <>
            {shippingAddressDetail ? (
                <ShippingAddressCmp className="shipping_address_form popup_padding">
                    <div className="d-flex justify-between">
                        <h3 className="title-font">SHIPPING ADDRESS</h3>
                        {!isMobile && (
                            <FontAwesomeIcon icon={faXmark} size="xl" className="icon-red" onClick={() => setShippingAddressDetail(false)} />
                        )}
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
                                <GoogleAutocomplete Form={Form} handleSetAddress={handleSetAddress} label="Address" name="address" status={status} />
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
            {showError && <Toast show={showError} setShow={setShowError} message="Select Shipping Address" type="error" showIcon />}
            <ShippingAddressPopupCmp
                onCancel={() => {
                    if (shippingAddressDetail) {
                        setShippingAddressDetail(false);
                    } else {
                        setPaymentPopup?.((prevState: any) => ({
                            ...prevState,
                            open: false,
                        }));
                    }
                }}
                open={paymentPopup.open}
                closable={false}
                content={ShippingAddressPopupContent}
            />
        </>
    );
};

export default ShippingAddressPopup;

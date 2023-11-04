/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { Row, Col, Popover, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { getCountries } from 'react-phone-number-input';

import { ContactDetailCmp } from './OrderPage.component';
import CheckboxGroup from '../../components/CheckboxGroup';
import { useDeviceDetect, useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { expressServiceChargePer } from './OrderStep.constants';
import PhoneNumber from '../../components/PhoneNumber';

const estimateDeliveryContent = (
    <>
        <b>Please note that the date doesn&apos;t take into account</b>
        <br />
        <br />
        <p>
            1.) Modification requests you may submit after viewing the online proof. Each such modification request may delay the turnaround by 2-3
            days.
        </p>
        <br />
        <p>
            2.) The time we wait for you to approve the online proof that we send you or to complete the payment, so please check your emails
            regularly and try to respond as quickly as you can.
        </p>
    </>
);
const estimatedServiceContent = (
    <>
        {`If you choose the Express Service, we will start working on your order immediately, reducing the production time by several days! The cost of this service is an additional (+${expressServiceChargePer}%).`}
    </>
);
const ContactDetails = ({
    fillingForm,
    setFillingForm,
    setExpressService,
    expressService,
    formIns,
    Form,
    estimatedDeliveryDays,
    setValidPhoneNumber,
}: any) => {
    const [country, setCountry] = useState<any>('US');
    const localStorage = useLocalStorage();
    const { isMobile } = useDeviceDetect();

    const data: any = localStorage?.getItem(LocalStorageKeys.orderPageDetail)
        ? JSON.parse(localStorage?.getItem(LocalStorageKeys.orderPageDetail) || '')
        : '';
    const contectDetail: any = localStorage?.getItem(LocalStorageKeys.contectDetail)
        ? JSON.parse(localStorage?.getItem(LocalStorageKeys.contectDetail) || '')
        : '';
    const savedCardDetail = localStorage?.getItem(LocalStorageKeys.savedCardDetail)
        ? JSON.parse(localStorage?.getItem(LocalStorageKeys.savedCardDetail) || '')
        : '';

    useEffect(() => {
        if (savedCardDetail) {
            setFillingForm({
                ...savedCardDetail,
                countryCode: savedCardDetail?.countryCode || getCountries().filter((obj) => obj === 'US')[0],
            });
        }
    }, []);

    const handleExpressService = (e: CheckboxChangeEvent) => {
        setExpressService(e.target.checked);
    };

    const handleCountryCode = (selectValue: any) => {
        setCountry(selectValue || undefined);
        setFillingForm({
            ...fillingForm,
            countryCode: selectValue,
        });
    };
    const handlePhoneNumInput = (e: any) => {
        setFillingForm({
            ...fillingForm,
            phoneNumber: e,
        });
    };

    return (
        <ContactDetailCmp>
            <h4 className="checkout_contactDetails_title">CONTACT DETAILS</h4>

            <div className="checkout_contac_form">
                <Form
                    form={formIns}
                    name="basic"
                    layout="vertical"
                    initialValues={{
                        countryCode:
                            getCountries().find((item: any) => item === savedCardDetail?.countryCode) ||
                            contectDetail?.countryCode ||
                            data?.data?.fillingForm?.countryCode ||
                            getCountries().filter((obj) => obj === 'US')[0],
                        firstName: savedCardDetail?.firstName || data?.data?.fillingForm?.firstName || contectDetail?.firstName,
                        lastName: data?.data?.fillingForm?.lastName || contectDetail?.surName,
                        phoneNumber: savedCardDetail?.phoneNumber || data?.data?.fillingForm?.phoneNumber || contectDetail?.phoneNumber,
                        email: savedCardDetail?.email || data?.data?.fillingForm?.email || contectDetail?.email,
                    }}
                    autoComplete="off"
                >
                    <Row gutter={{ sm: 16, md: 24, xl: 62 }}>
                        <Col xs={24} md={12}>
                            <Form.Item name="firstName" rules={[{ required: true, message: '' }]}>
                                <Input
                                    placeholder="First Name"
                                    onChange={(e) =>
                                        setFillingForm({
                                            ...fillingForm,
                                            firstName: e.target.value,
                                        })
                                    }
                                    disabled={!!contectDetail}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item name="lastName" rules={[{ required: true, message: '' }]}>
                                <Input
                                    placeholder="Last Name"
                                    onChange={(e) =>
                                        setFillingForm({
                                            ...fillingForm,
                                            lastName: e.target.value,
                                        })
                                    }
                                    disabled={!!contectDetail}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={12}>
                            <PhoneNumber
                                countryValue={country}
                                handleCountryCode={handleCountryCode}
                                handlePhoneNumInput={handlePhoneNumInput}
                                disabled={!!contectDetail}
                                setValidPhoneNumber={setValidPhoneNumber}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                    {
                                        type: 'email',
                                        message: 'Enter Valid Email',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Email Address"
                                    onChange={(e) =>
                                        setFillingForm({
                                            ...fillingForm,
                                            email: e.target.value,
                                        })
                                    }
                                    disabled={!!contectDetail}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="estimate_detail-content-box">
                <div className="estimate_detail-left">
                    <div className="checkout_estimate_title">
                        <h3>ESTIMATED DELIVERY</h3>
                        <Popover
                            trigger={!isMobile ? 'hover' : 'click'}
                            content={estimateDeliveryContent}
                            arrowPointAtCenter={false}
                            overlayClassName="order-step-tooltip  estimate_tooltip"
                            showArrow={false}
                        >
                            <span className="que-icon">?</span>
                        </Popover>
                    </div>
                    <h4 className="date">
                        {estimatedDeliveryDays.formattedFutureDate} - {estimatedDeliveryDays.formattedFuture4Date}
                    </h4>
                    <p>Depending on the shipping method you will choose after approving the online proofing of your painting.</p>
                </div>
                <div className="estimate_detail-right">
                    <div className="checkout_estimate_title checkout_sooner_title">
                        <h3>Want it sooner?</h3>
                        <Popover
                            trigger={!isMobile ? 'hover' : 'click'}
                            content={estimatedServiceContent}
                            arrowPointAtCenter={false}
                            overlayClassName="order-step-tooltip"
                            showArrow={false}
                        >
                            <span className="que-icon">?</span>
                        </Popover>
                    </div>
                    <div className="d-flex items-center">
                        <CheckboxGroup checked={expressService} className="checkbox_wrapper" onChange={handleExpressService} />
                        <label className="text_check">{`Express Service (+${expressServiceChargePer}%)`}</label>
                    </div>
                </div>
            </div>
        </ContactDetailCmp>
    );
};

export default ContactDetails;

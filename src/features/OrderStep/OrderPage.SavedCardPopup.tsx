import React, { useState } from 'react';
import { Checkbox, Col, Form, Input, Row } from 'antd';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';

import { UserLoginPopupCmp } from './OrderPage.component';
import { LocalStorageKeys } from '../../constants/keys';
import { useLocalStorage } from '../../hooks';
import { addMemberAction } from './OrderStep.slice';
import PhoneNumber from '../../components/PhoneNumber/PhoneNumber';
import { useAppDispatch } from '../../app/hooks';
import FilledButton from '../../components/FilledButton/FilledButton';
import { Routes } from '../../navigation/Routes';
import { addMemberDebounce } from './OrderStep.constants';
import { useRouter } from 'next/router';

const SavedCardPopup = ({ savedCardPopup, setSavedCardPopup, setSavedCardProccessComplete }: any) => {
    const localStorage = useLocalStorage();
    const dispatch = useAppDispatch();
    const route = useRouter();

    const [isAgreeInformation, setIsAgreeInformation] = useState(true);
    const [country, setCountry] = useState('US');

    const onFinish = async (values: any) => {
        const payload = {
            email: values.email,
            firstName: values.firstName,
            countryCode: values.phoneNumber ? `+${getCountryCallingCode(values.countryCode)}` : undefined,
            phoneNumber: values.phoneNumber,
        };

        localStorage?.setItem(
            LocalStorageKeys.savedCardDetail,
            JSON.stringify({
                email: values.email,
                firstName: values.firstName,
                countryCode: values.phoneNumber ? values.countryCode : undefined,
                phoneNumber: values.phoneNumber,
            }),
        );

        const result = await dispatch(addMemberAction(payload));
        if (result.type === addMemberAction.fulfilled.toString()) {
            setTimeout(() => {
                setSavedCardPopup?.(false);
                setSavedCardProccessComplete?.(true);
                route.push(Routes.orderStep.replace(':id', '3'));
            }, addMemberDebounce);
        }
    };

    const onValuesChange = (values: { contactInformation: boolean }) => {
        setIsAgreeInformation(values?.contactInformation || true);
    };

    const handleCountryCode = (selectValue: any) => {
        setCountry(selectValue || undefined);
    };

    const savedCardPopupContent = (
        <div>
            <h2 className="main-title-popup">Please provide your email address</h2>
            <p className="subtitle-popup">so that we can send you a link to your saved card (in case you haven’t completed your order)</p>
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onValuesChange={onValuesChange}
                autoComplete="off"
                initialValues={{
                    countryCode: getCountries().filter((obj) => obj === 'US')[0],
                    contactInformation: true,
                }}
            >
                <Row gutter={24}>
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
                                    message: '',
                                },
                            ]}
                        >
                            <Input placeholder="Email *" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item name="firstName" rules={[{ required: true, message: '' }]}>
                            <Input placeholder="firstName *" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <PhoneNumber required={false} countryValue={country} handleCountryCode={handleCountryCode} />
                    </Col>
                    <Col>
                        <div className="d-flex items-center mt-2">
                            <Form.Item name="contactInformation" valuePropName="checked">
                                <Checkbox />
                            </Form.Item>
                            <span>
                                {' '}
                                By entering your contact information, you agree to join Photo2painting mailing list, in accordance with our Terms of
                                Use and Privacy Policy.
                            </span>
                        </div>
                        {!isAgreeInformation && <p className="text-primary text-sm">This field is required. Please check it.</p>}
                    </Col>
                </Row>

                <FilledButton htmlType="submit" block>
                    Submit
                </FilledButton>
            </Form>
            <div
                className="link_skip"
                onClick={async () => {
                    await setSavedCardPopup(false);
                    route.push(Routes.orderStep.replace(':id', '3'));
                }}
                role="button"
                tabIndex={0}
            >
                Skip
            </div>
        </div>
    );

    return (
        <UserLoginPopupCmp
            open={savedCardPopup}
            closable={false}
            onCancel={() => setSavedCardPopup(false)}
            content={savedCardPopupContent}
            className="provide_email_popup"
        />
    );
};

export default SavedCardPopup;

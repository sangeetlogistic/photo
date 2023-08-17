/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import parsePhoneNumber, { CountryCode, PhoneNumber as PhNumber } from 'libphonenumber-js';
import styled from 'styled-components';
import { MediaBreakpoints } from '../../theme';
import { CountryCodeName } from '../../constants/general';

interface IPhoneNumber {
    handleCountryCode?: (selectValue: any) => void;
    handlePhoneNumInput?: (e: any) => void;
    countryValue: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
}

const PhoneNumberCmp = styled.div`
    .position_select {
        position: absolute;
        z-index: 1;
        top: 0;
        width: 5rem;
        @media (min-width: ${`${MediaBreakpoints.upLg}px`}) {
            width: auto;
        }
    }

    .phone_num_input {
        padding-left: 100px;
        @media (min-width: ${`${MediaBreakpoints.upXl}px`}) {
            padding-left: 6.5vw !important;
        }
    }
`;

const PhoneNumber = ({ handleCountryCode, handlePhoneNumInput, countryValue, label, disabled, required = true }: IPhoneNumber) => {
    const [maxLenghtPhoneNumber, setMaxLenghtPhoneNumber] = useState(15);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;

        let maxLength = 15;
        if (countryValue === CountryCodeName.US) {
            maxLength = 10;
        } else if (countryValue === CountryCodeName.CA) {
            maxLength = 10;
        } else if (countryValue === CountryCodeName.AU) {
            maxLength = 9;
        } else if (countryValue === CountryCodeName.GB) {
            maxLength = 10;
        }
        setMaxLenghtPhoneNumber(maxLength);
        handlePhoneNumInput?.(inputValue);
    };

    return (
        <>
            <PhoneNumberCmp>
                <Form.Item name="countryCode" className="position_select">
                    <Select showSearch value={countryValue} onChange={handleCountryCode} className="ant-select" disabled={disabled}>
                        {getCountries().map((value: CountryCode) => (
                            <Select.Option key={value} value={value}>
                                {value} +{getCountryCallingCode(value)}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    dependencies={['countryCode']}
                    label={label || undefined}
                    name="phoneNumber"
                    rules={[
                        { required, message: '' },
                        ({ getFieldValue }: { getFieldValue: any }) => ({
                            validator(_: any, value: string) {
                                let info: PhNumber | undefined;
                                if (value) {
                                    info = parsePhoneNumber(value, getFieldValue('countryCode'));
                                }
                                if (value && info && info.isValid()) {
                                    return Promise.resolve();
                                }
                                if (!value && !required) {
                                    return Promise.resolve();
                                }
                                if (value) {
                                    return Promise.reject(new Error('Phone # doesn’t match country’s pattern'));
                                }
                                return Promise.resolve();
                            },
                        }),
                    ]}
                >
                    <Input
                        className="phone_num_input"
                        placeholder={`Phone Number${!required ? '(Optional)' : ''}`}
                        onChange={handleChange}
                        disabled={disabled}
                        maxLength={maxLenghtPhoneNumber}
                    />
                </Form.Item>
            </PhoneNumberCmp>
        </>
    );
};

export default PhoneNumber;

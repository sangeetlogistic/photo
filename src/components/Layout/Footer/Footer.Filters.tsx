import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { country, currency, language } from './Footer.data';

const { Option } = Select;

interface ICountryDropdown {
    countryDropdownOpen: boolean;
    isActiveCountryDropDown: boolean;
    selectedCountry: string;
    updatedCountry: string[];
}
interface ILanguageDropdown {
    languageDropdownOpen: boolean;
    isActiveLanguageDropDown: boolean;
    selectedLanguage: string;
    updatedLanguage: string[];
}
interface ICurrencyDropdown {
    currencyDropdownOpen: boolean;
    isActiveCurrencyDropDown: boolean;
    selectedCurrency: string;
    updatedCurrency: string[];
}

const Filters = () => {
    const [countryDropdown, setCountryDropdown] = useState<ICountryDropdown>({
        countryDropdownOpen: false,
        isActiveCountryDropDown: false,
        selectedCountry: country[0],
        updatedCountry: [],
    });

    const [languageDropdown, setLanguageDropdown] = useState<ILanguageDropdown>({
        languageDropdownOpen: false,
        isActiveLanguageDropDown: false,
        selectedLanguage: language[0],
        updatedLanguage: [],
    });

    const [currencyDropdown, setCurrencyDropdown] = useState<ICurrencyDropdown>({
        currencyDropdownOpen: false,
        isActiveCurrencyDropDown: false,
        selectedCurrency: currency[0],
        updatedCurrency: [],
    });

    // FOR COUNTRY
    useEffect(() => {
        const filteredOptions = country.filter((o) => !countryDropdown.selectedCountry.includes(o));

        setCountryDropdown((prev) => ({
            ...prev,
            updatedCountry: filteredOptions,
        }));
    }, [countryDropdown.selectedCountry]);

    // FOR LANGUAGE
    useEffect(() => {
        const filteredOptions = language.filter((o) => !languageDropdown.selectedLanguage.includes(o));

        setLanguageDropdown((prev) => ({
            ...prev,
            updatedLanguage: filteredOptions,
        }));
    }, [languageDropdown.selectedLanguage]);

    // FOR CURRENCY
    useEffect(() => {
        const filteredOptions = currency.filter((o) => !currencyDropdown.selectedCurrency.includes(o));

        setCurrencyDropdown((prev) => ({
            ...prev,
            updatedCurrency: filteredOptions,
        }));
    }, [currencyDropdown.selectedCurrency]);

    return (
        <div id="filters-section" className="footerd-dropdown-block">
            {/*  FOR COUNTRY  */}
            <div className="f-filter-block f-filter-block-1">
                <span className="f-label">Country</span>
                <Select
                    placement="topLeft"
                    popupClassName="footer-dropdown-popup"
                    open={countryDropdown.countryDropdownOpen}
                    getPopupContainer={() => document.getElementById('filters-section')!}
                    value={countryDropdown.selectedCountry}
                    onFocus={() => {
                        setCountryDropdown((prev) => ({
                            ...prev,
                            isActiveCountryDropDown: true,
                        }));
                    }}
                    onBlur={() => {
                        setCountryDropdown((prev) => ({
                            ...prev,
                            isActiveCountryDropDown: false,
                        }));
                    }}
                    onDropdownVisibleChange={(open) => {
                        setCountryDropdown((prev) => ({
                            ...prev,
                            countryDropdownOpen: open,
                            isActiveCountryDropDown: !countryDropdown.isActiveCountryDropDown,
                        }));
                    }}
                    suffixIcon={
                        <span
                            onClick={() => {
                                setCountryDropdown((prev) => ({
                                    ...prev,
                                    countryDropdownOpen: !countryDropdown.countryDropdownOpen,
                                    isActiveCountryDropDown: !countryDropdown.isActiveCountryDropDown,
                                }));
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    }
                    onChange={(value) =>
                        setCountryDropdown((prev) => ({
                            ...prev,
                            selectedCountry: value,
                        }))
                    }
                >
                    {countryDropdown.updatedCountry?.map((obj, index) => (
                        <Option key={index} value={obj}>
                            {obj}
                        </Option>
                    ))}
                </Select>
            </div>
            <div className="f-filter-block f-filter-block-2">
                {/*  FOR LANGUAGE  */}
                <span className="f-label">Language</span>
                <Select
                    placement="topLeft"
                    popupClassName="footer-dropdown-popup"
                    open={languageDropdown.languageDropdownOpen}
                    getPopupContainer={() => document.getElementById('filters-section')!}
                    value={languageDropdown.selectedLanguage}
                    onFocus={() => {
                        setLanguageDropdown((prev) => ({
                            ...prev,
                            isActiveLanguageDropDown: true,
                        }));
                    }}
                    onBlur={() => {
                        setLanguageDropdown((prev) => ({
                            ...prev,
                            isActiveLanguageDropDown: false,
                        }));
                    }}
                    onDropdownVisibleChange={(open) => {
                        setLanguageDropdown((prev) => ({
                            ...prev,
                            languageDropdownOpen: open,
                            isActiveLanguageDropDown: !languageDropdown.isActiveLanguageDropDown,
                        }));
                    }}
                    suffixIcon={
                        <span
                            onClick={() => {
                                setLanguageDropdown((prev) => ({
                                    ...prev,
                                    languageDropdownOpen: !languageDropdown.languageDropdownOpen,
                                    isActiveLanguageDropDown: !languageDropdown.isActiveLanguageDropDown,
                                }));
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    }
                    onChange={(value) =>
                        setLanguageDropdown((prev) => ({
                            ...prev,
                            selectedLanguage: value,
                        }))
                    }
                >
                    {languageDropdown.updatedLanguage?.map((obj, index) => (
                        <Option key={index} value={obj}>
                            {obj}
                        </Option>
                    ))}
                </Select>
            </div>
            <div className="f-filter-block f-filter-block-3">
                {/* FOR CURRENCY */}
                <span className="f-label">Currency</span>
                <Select
                    placement="topLeft"
                    popupClassName="footer-dropdown-popup"
                    open={currencyDropdown.currencyDropdownOpen}
                    getPopupContainer={() => document.getElementById('filters-section')!}
                    value={currencyDropdown.selectedCurrency}
                    onFocus={() => {
                        setCurrencyDropdown((prev) => ({
                            ...prev,
                            isActiveCurrencyDropDown: true,
                        }));
                    }}
                    onBlur={() => {
                        setCurrencyDropdown((prev) => ({
                            ...prev,
                            isActiveCurrencyDropDown: false,
                        }));
                    }}
                    onDropdownVisibleChange={(open) => {
                        setCurrencyDropdown((prev) => ({
                            ...prev,
                            currencyDropdownOpen: open,
                            isActiveCurrencyDropDown: !currencyDropdown.isActiveCurrencyDropDown,
                        }));
                    }}
                    suffixIcon={
                        <span
                            onClick={() => {
                                setCurrencyDropdown((prev) => ({
                                    ...prev,
                                    currencyDropdownOpen: !currencyDropdown.currencyDropdownOpen,
                                    isActiveCurrencyDropDown: !currencyDropdown.isActiveCurrencyDropDown,
                                }));
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                    }
                    onChange={(value) =>
                        setCurrencyDropdown((prev) => ({
                            ...prev,
                            selectedCurrency: value,
                        }))
                    }
                >
                    {currencyDropdown.updatedCurrency?.map((obj, index) => (
                        <Option key={index} value={obj}>
                            {obj}
                        </Option>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default Filters;

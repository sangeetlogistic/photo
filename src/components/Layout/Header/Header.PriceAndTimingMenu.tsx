/* eslint-disable complexity */
import React, { useState } from 'react';
import { InputNumber, Select } from 'antd';

import { paintingSize } from './Header.data';
import { basicPrice, maxRangeInput, minRangeInput } from './Header.constants';
import { Images } from '../../../theme';
import FilledButton from '../../FilledButton';
import LazyImage from '../../LazyImage';

const { Option } = Select;

const PriceAndTimingMenu = ({ title, mobileClassName }: { title?: string; mobileClassName?: string }) => {
    const [paintingSizeDropdownOpen, setPaintingSizeDropdownOpen] = useState(false);
    const [isActiveDropDown, setIsActiveDropDown] = useState(false);
    const [paintingSizePrice, setPaintingSizePrice] = useState<number>(179);
    const [amountPersonsAndPets, setAmountPersonsAndPets] = useState<number>(0);

    const [numPersons, setNumPersons] = useState<any>(0);
    const [numPets, setNumPets] = useState<any>(0);

    const handleClickIcon = (type: boolean) => {
        setIsActiveDropDown(type);
        setPaintingSizeDropdownOpen(!paintingSizeDropdownOpen);
    };

    const handlePersonsAmountChange = (value: number | null) => {
        setNumPersons(value);
        const total: any = priceCalculatorMenu(paintingSizePrice, value, numPets);
        setAmountPersonsAndPets(total);
    };
    const handlePetsAmountChange = (value: number | null) => {
        setNumPets(value);
        const total: any = priceCalculatorMenu(paintingSizePrice, numPersons, value);
        setAmountPersonsAndPets(total);
    };
    const handleChange = (value: number) => {
        setPaintingSizePrice(value);

        const total: any = priceCalculatorMenu(value, numPersons, numPets);
        setAmountPersonsAndPets(total);
    };

    const priceCalculatorMenu = (size_price: any, num_persons: any, num_pets: any) => {
        let priceCalc = 0;

        if ((num_persons === 1 && num_pets === 0) || (num_persons === 0 && num_pets === 1) || (num_persons === 0 && num_pets === 0)) {
            priceCalc = size_price;
            return priceCalc;
        }
        if (num_persons === 1 && num_pets === 1) {
            priceCalc = size_price + basicPrice;
            return priceCalc;
        }

        if (num_persons >= 2) {
            if (num_pets === 0) {
                const persons = (num_persons - 1) * basicPrice;
                priceCalc = size_price + persons;
                return priceCalc;
            }
            if (num_pets === 1) {
                const numOfPerson = num_persons * basicPrice;
                priceCalc = size_price + numOfPerson;
                return priceCalc;
            }
            if (num_pets > 1) {
                const persons = (num_persons - 1) * basicPrice;
                const pets = num_pets * basicPrice;
                priceCalc = size_price + persons + pets;
                return priceCalc;
            }
        }
        if (num_pets >= 2) {
            if (num_persons === 0) {
                const pets = (num_pets - 1) * basicPrice;
                priceCalc = size_price + pets;
                return priceCalc;
            }
            if (num_persons === 1) {
                const numOfPet = num_pets * basicPrice;
                priceCalc = size_price + numOfPet;
                return priceCalc;
            }
            if (num_persons > 1) {
                const pets = (num_pets - 1) * basicPrice;
                const persons = num_persons * basicPrice;
                priceCalc = size_price + pets + persons;
                return priceCalc;
            }
        }
        return null;
    };

    return (
        <div id="price-timing-filter" className={`mega-menu-container ${mobileClassName || ''}`}>
            <h2>{title || ''}</h2>
            <div className="mega-menu-shadow"></div>
            <div className="price-timing-menu-wrapper">
                <div className="price-row-1">
                    <div className="p-col p-col-1 pricing-size">
                        <div className="p-label">Painting Size</div>
                        <Select
                            placeholder="Select Size Value"
                            open={paintingSizeDropdownOpen}
                            popupClassName="select-painting-size"
                            getPopupContainer={() => document.getElementById('price-timing-filter')!}
                            className="p2p-painting-size-dropdown"
                            onFocus={() => {
                                setIsActiveDropDown(true);
                            }}
                            onBlur={() => {
                                setIsActiveDropDown(false);
                            }}
                            onDropdownVisibleChange={(open) => {
                                setPaintingSizeDropdownOpen(open);
                                setIsActiveDropDown(!isActiveDropDown);
                            }}
                            suffixIcon={
                                <span onClick={() => (isActiveDropDown ? handleClickIcon(false) : handleClickIcon(true))} role="button" tabIndex={0}>
                                    <LazyImage src={isActiveDropDown ? Images.IconArrowUp : Images.IconArrowDown} alt="" effect="opacity" />
                                </span>
                            }
                            onChange={handleChange}
                        >
                            {paintingSize.map((obj, index) => (
                                <Option key={index} value={obj.amount}>
                                    {obj.size}
                                </Option>
                            ))}
                        </Select>
                    </div>
                    <div className="p-col p-col-2 pricing-amount">
                        <div className="p-label">Amount of Persons</div>
                        <InputNumber
                            min={minRangeInput}
                            max={maxRangeInput}
                            defaultValue={0}
                            controls={{
                                upIcon: <LazyImage src={Images.IconArrowUp} alt="" effect="opacity" />,
                                downIcon: <LazyImage src={Images.IconArrowDown} alt="" effect="opacity" />,
                            }}
                            onChange={handlePersonsAmountChange}
                        />
                    </div>
                    <div className="p-col p-col-3 pricing-to-pet">
                        <div className="p-label">Amount of Pets</div>
                        <InputNumber
                            min={minRangeInput}
                            max={maxRangeInput}
                            defaultValue={0}
                            controls={{
                                upIcon: <LazyImage src={Images.IconArrowUp} alt="" effect="opacity" />,
                                downIcon: <LazyImage src={Images.IconArrowDown} alt="" effect="opacity" />,
                            }}
                            onChange={handlePetsAmountChange}
                        />
                    </div>
                    <div className="p-col p-col-4 exact-total">
                        <div className="p-label">Total Summary</div>
                        <div className="exact-total-wrap">
                            <span>Total :</span>
                            <span>$ {amountPersonsAndPets}</span>
                        </div>
                    </div>
                </div>
                <div className="price-row-2">
                    <FilledButton className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append text-uppercase" type="link">
                        Go to Price list
                        <span className="icon-append">
                            <LazyImage src={Images.IconRightArrowRound} alt="" effect="opacity" />
                        </span>
                    </FilledButton>
                </div>
            </div>
        </div>
    );
};

export default PriceAndTimingMenu;

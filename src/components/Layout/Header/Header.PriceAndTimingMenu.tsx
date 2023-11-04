import React, { useState } from 'react';
import { InputNumber, Select } from 'antd';

import { paintingSize } from './Header.data';
import { MenuType, maxRangeInput, minRangeInput } from './Header.constants';
import { Images } from '../../../theme';
import FilledButton from '../../FilledButton';
import { Routes } from '../../../navigation/Routes';
import { priceCalculatorMenu } from '../../../utils/func';
import { useRouter } from 'next/router';

const { Option } = Select;

const PriceAndTimingMenu = ({
    title,
    mobileClassName,
    showSubMenu,
    setShowSubMenu,
}: {
    title?: string;
    mobileClassName?: string;
    showSubMenu?: MenuType | null;
    setShowSubMenu?: React.Dispatch<React.SetStateAction<MenuType | null>>;
}) => {
    const route = useRouter();
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

    return (
        <div className={`mega-menu ${showSubMenu === MenuType.PricingAndTiming ? 'mega-menu-open' : ''} price-timing-mega-menu`}>
            <div id="price-timing-filter" className={`mega-menu-container ${mobileClassName || ''} `}>
                <h2>{title || ''}</h2>
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
                                    <span
                                        onClick={() => (isActiveDropDown ? handleClickIcon(false) : handleClickIcon(true))}
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <img src={isActiveDropDown ? Images.IconArrowUp?.src : Images.IconArrowDown?.src} alt="" />
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
                                    upIcon: <img src={Images.IconArrowUp?.src} alt="" />,
                                    downIcon: <img src={Images.IconArrowDown?.src} alt="" />,
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
                                    upIcon: <img src={Images.IconArrowUp?.src} alt="" />,
                                    downIcon: <img src={Images.IconArrowDown?.src} alt="" />,
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
                        <FilledButton
                            className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append text-uppercase"
                            type="link"
                            onClick={() => route.push(Routes.pricingTiming)}
                        >
                            Go to Price list
                            <span className="icon-append">
                                <span className="lazy-load-image-background">
                                    <img src={Images.IconRightArrowRound?.src} alt="" />
                                </span>
                            </span>
                        </FilledButton>
                    </div>
                </div>
            </div>
            <div className="menu-close-btn" role="button" tabIndex={0} onClick={() => setShowSubMenu?.(null)}>
                <img src={Images.MenuCloseIcon?.src} alt="" className="" width="" />
            </div>
        </div>
    );
};

export default PriceAndTimingMenu;

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-lines-per-function */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Collapse, Form, Popover, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import CustomerReview from '../../components/CustomerReview';
import FetuareInfo from './OrderStep.Step1.FetuareInfo';
import { OrderStep1Cmp, OrderStep1InfoBlockCmp } from './OrderPage.component';
import { Images } from '../../theme';
import FilledButton from '../../components/FilledButton';
import { ModalCloseIcon, PopularStar } from '../../assets/customSVG';
import { maxSelectCustomTheme, normalDebounce, OrderSteps, personThemObj, petThemObj, SelectThemes } from './OrderStep.constants';
import NumericInput from '../../components/NumericInput';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    clearError,
    clearStep3Detail,
    getSizeFrameAction,
    OrderStep,
    selectMediumItems as mediumItems,
    selectStep1Detail,
    selectStep3Detail,
    selectThemesItems as themesItems,
    setSelectMediumItems,
    setSelectThemesItems,
} from './OrderStep.slice';
import { IStep1 } from './OrderStep.types';
import { useDeviceDetect } from '../../hooks';
import { MobileOrderPageMainCmp } from './OrderPage.MobileComponent';
import MobileHeader from './OrderStep.MobileHeader';
import MobileStep1 from './OrderStep.MobileStep1';
import MobileFooter from './OrderStep.MobileFooter';
import { selectTotalRating } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import { roundOff } from '../../utils/func';

const { Panel } = Collapse;

const Step1 = ({
    selectThemesAns,
    setSelectThemesAns,
    selectThemesActive,
    setSelectThemesActive,
    customThemeFliped,
    setCustomThemeFliped,
    personsCount,
    setPersonsCount,
    petsCount,
    setPetsCount,
    selectThemesBtnDisabled,
    setSelectThemesBtnDisabled,
    selectMediumAns,
    setSelectMediumAns,
    selectMediumActive,
    setSelectMediumActive,
    selectMediumBtnDisabled,
    setSelectMediumBtnDisabled,
    setSelectPaintingSizeAndPrice,
    setPersonTheme,
    setPetTheme,
    personTheme,
    petTheme,
    complateStep1,
    setComplateStep1,
    complateStep2,
    complateStep3,
    complateStep4,
    repeatStep2,
    repeatStep3,
    repeatStep4,
    showProgressBar,
    savedCardProccessComplete,
    setSavedCardPopup,
    customSelectValueBlock,
    setCustomSelectValueBlock,
    selectPaintingSizeAndPrice,
}: IStep1) => {
    const [form] = Form.useForm();

    const dispatch = useAppDispatch();
    const { isMobile } = useDeviceDetect();

    const selectThemesItems = useAppSelector(themesItems);
    const selectMediumItems = useAppSelector(mediumItems);
    const step1Detail = useAppSelector(selectStep1Detail);
    const step3Detail = useAppSelector(selectStep3Detail);
    const totalRating = useAppSelector(selectTotalRating);

    const [validationMessage, setValidationMessage] = useState<
        | {
              persons?: string;
              pets?: string;
          }
        | undefined
    >(undefined);

    useEffect(() => {
        const persons = step1Detail?.themeObject?.filter((obj: any) => obj.thmObj === personThemObj)[0];
        setPersonTheme?.(persons);
        const pets = step1Detail?.themeObject?.filter((obj: any) => obj.thmObj === petThemObj)[0];
        setPetTheme?.(pets);
    }, [step1Detail]);

    useEffect(() => {
        dispatch(OrderStep(OrderSteps.step1));
        return () => {
            dispatch(clearError());
            setComplateStep1?.(true);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (validationMessage) {
                setValidationMessage(undefined);
            }
        }, normalDebounce);
        return () => clearTimeout(timer);
    }, [validationMessage]);

    useEffect(() => {
        form.setFieldsValue({
            persons: personsCount || 0,
            pets: petsCount || 0,
        });
    }, [personsCount, petsCount]);

    useEffect(() => {
        if (!isMobile && !selectPaintingSizeAndPrice && !complateStep1 && step3Detail?.size?.length > 0) {
            const populerSize = step3Detail?.size?.filter((size: any) => !size?.isFade);

            const populerRate = populerSize.find((size: any) => size?.size_id?.isPopular);

            if (populerRate) {
                setSelectPaintingSizeAndPrice({
                    id: Number(populerRate.id),
                    price: populerRate?.newprice || populerRate.price,
                    framingServiceAvailable: populerRate.isFrame,
                    title: `${populerRate?.size_id?.height}” x ${populerRate?.size_id?.width}”`,
                    sizeInText: `${populerRate?.size_id?.height}x${populerRate?.size_id?.width}`,
                    sizeid: populerRate?.size_id?.id,
                });
            } else if (populerSize) {
                setSelectPaintingSizeAndPrice({
                    id: Number(populerSize[0].id),
                    price: populerSize[0]?.newprice || populerSize[0].price,
                    framingServiceAvailable: populerSize[0].isFrame,
                    title: `${populerSize[0]?.size_id?.height}” x ${populerSize[0]?.size_id?.width}”`,
                    sizeInText: `${populerSize[0]?.size_id?.height}x${populerSize[0]?.size_id?.width}`,
                    sizeid: populerSize[0]?.size_id?.id,
                });
            } else {
                setSelectPaintingSizeAndPrice({
                    id: Number(step3Detail?.size[0].id),
                    price: step3Detail?.size[0]?.newprice || step3Detail?.size[0].price,
                    framingServiceAvailable: step3Detail?.size[0].isFrame,
                    title: `${step3Detail?.size[0]?.size_id?.height}” x ${step3Detail?.size[0]?.size_id?.width}”`,
                    sizeInText: `${step3Detail?.size[0]?.size_id?.height}x${step3Detail?.size[0]?.size_id?.width}`,
                    sizeid: step3Detail?.size[0]?.size_id?.id,
                });
            }
        }
    }, [step3Detail?.size]);

    useEffect(() => {
        if (!complateStep1 && selectThemesItems) {
            let payload = {};
            if (selectThemesItems?.theme === SelectThemes.custom) {
                if (personsCount || petsCount) {
                    payload = {
                        TotalPerson: personsCount || 0,
                        TotalPet: petsCount || 0,
                        isCustom: true,
                        themeObjPersonId: personTheme?.id,
                        themeObjPetId: petTheme?.id,
                    };
                }
            } else {
                payload = {
                    themeObjId: selectThemesItems?.id,
                    isCustom: false,
                };
            }
            if (Object.keys(payload).length !== 0) {
                dispatch(getSizeFrameAction(payload));
            }
        }
    }, [selectThemesItems, complateStep1]);

    useEffect(() => {
        if (selectThemesAns || selectMediumAns) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [selectThemesAns, selectMediumAns]);

    const validatePassword = (persons: any, pets: any) => {
        const personsString = persons !== null ? persons.toString() : '0';
        const petsString = pets !== null ? pets.toString() : '0';
        const total = Number(persons) + Number(pets);

        const errors: { persons?: string; pets?: string } = {};

        if (personsString === '0' && petsString === '0') errors.persons = 'Both values can not be 0';

        const upperCaseLettersReg = /[A-Z]/g;
        if (personsString.toString().match(upperCaseLettersReg)) errors.persons = 'Please enter a number';

        if (petsString.toString().match(upperCaseLettersReg)) errors.pets = 'Please enter a number';

        const lowerCaseLettersReg = /[a-z]/g;
        if (personsString.match(lowerCaseLettersReg)) errors.persons = 'Please enter a number';

        if (petsString.match(lowerCaseLettersReg)) errors.pets = 'Please enter a number';

        if (personsString < 0) errors.persons = 'Value must be greater then or equal to 0';

        if (petsString < 0) errors.pets = 'Value must be greater then or equal to 0';

        if (total > maxSelectCustomTheme) {
            errors.pets = `Value of total must be less then or equal to ${maxSelectCustomTheme}`;
        }

        return errors;
    };

    const handleThemes = (theme: any, selectedTheme?: SelectThemes, custom?: boolean) => (event: any) => {
        // For Themes
        setSelectThemesActive(false);
        dispatch(
            setSelectThemesItems({
                id: theme.id,
                theme: event?.target?.id || selectedTheme,
                title: theme.thmObj,
                image: !custom ? theme.objSelectImageUrl : Images.CustomActiveNavigation,
            }),
        );

        dispatch(clearStep3Detail());
        // Temp
        setSelectPaintingSizeAndPrice(null);

        // For Mediums
        if (!selectMediumItems) {
            setSelectMediumActive(true);
        }
        setSelectMediumBtnDisabled(false);

        if (!custom) setCustomThemeFliped(false);

        if (complateStep1) {
            let payload = {};
            if (selectedTheme === SelectThemes.custom) {
                payload = {
                    TotalPerson: personsCount || 0,
                    TotalPet: petsCount || 0,
                    isCustom: true,
                    themeObjPersonId: personTheme?.id,
                    themeObjPetId: petTheme?.id,
                };
            } else {
                payload = {
                    themeObjId: theme?.id,
                    isCustom: false,
                };
            }
            dispatch(getSizeFrameAction(payload));
            setComplateStep1?.(false);
        }
    };

    const handleMedium = (medium: any) => (event: any) => {
        // For Mediums
        setSelectMediumActive(false);
        dispatch(
            setSelectMediumItems({
                id: medium.id,
                medium: event?.target?.id,
                title: medium.name,
                hoverImage: medium.sliderHoverImageUrl,
                image: medium.sliderImageUrl,
            }),
        );

        // For Themes
        setSelectThemesBtnDisabled(false);
    };

    const handleThemeEditSelection = () => {
        // For Themes
        setSelectThemesActive(true);
        dispatch(setSelectThemesItems(null));

        // For Mediums
        setSelectMediumActive(false);
        if (selectMediumItems) setSelectMediumBtnDisabled(true);
    };

    const handleMediumEditSelection = () => {
        // For Mediums
        setSelectMediumActive(true);
        dispatch(setSelectMediumItems(null));

        // For Themes
        if (selectThemesItems) setSelectThemesBtnDisabled(true);
    };

    const handleCustomThemeSelection = () => {
        setCustomThemeFliped(true);
    };

    const onSubmitCustomInput = () => {
        const validationErrors = validatePassword(personsCount, petsCount);

        if (Object.keys(validationErrors).length === 0) {
            setValidationMessage(undefined);
            handleThemes('CUSTOM', SelectThemes.custom, true)(undefined);
            setCustomSelectValueBlock(false);
        } else {
            setValidationMessage(validationErrors);
        }
    };

    const handleCustomInputMinus = useCallback(
        (type: string) => {
            if (type === 'persons' && (personsCount || 0) > 0) {
                setPersonsCount((prev) => Number(prev) - 1);
            } else if (type === 'pets' && (petsCount || 0) > 0) {
                setPetsCount((prev) => Number(prev) - 1);
            }
        },
        [personsCount, petsCount],
    );

    const handleCustomInputPlus = useCallback(
        (type: string) => {
            if (type === 'persons' && (personsCount || 0) < maxSelectCustomTheme) {
                setPersonsCount((prev) => Number(prev) + 1);
            } else if (type === 'pets' && (petsCount || 0) < maxSelectCustomTheme) {
                setPetsCount((prev) => Number(prev) + 1);
            }
        },
        [personsCount, petsCount],
    );

    return (
        <>
            {!isMobile ? (
                <>
                    <OrderStep1Cmp className="order-inner-block step-1">
                        <Row className="step-1-row" gutter={{ sm: 16, md: 24, xl: 48 }} id="popover_error">
                            <Col className="gutter-row" span={24} md={12} xl={8}>
                                <div
                                    className={`order-select-setp-1-card order-select-theme ${selectThemesItems ? 'step-selected' : ''} ${
                                        selectThemesActive ? 'active' : ''
                                    }`}
                                >
                                    <h4 className="card-title">
                                        Select Themes
                                        <span className="icon" onClick={() => setSelectThemesAns(true)} tabIndex={0} role="button">
                                            <img src={Images.QuestionIcon} alt="" width="23" height="23" />
                                        </span>
                                    </h4>
                                    {selectThemesAns && (
                                        <div>
                                            <div className="theme-dialog active">
                                                <span className="icon-close" onClick={() => setSelectThemesAns(false)} tabIndex={0} role="button">
                                                    <ModalCloseIcon />
                                                </span>
                                                <p>
                                                    In the painting process, the most challenging parts of the painting are the details in the faces,
                                                    and they take a longer time. Please fill in the correct amount of people or pets so we can give an
                                                    accurate price quote for your painting.
                                                </p>
                                                <p>
                                                    Should there be no animals or people in the photo you are sending, then please select the type as
                                                    Landscape. This also should be chosen for boats, cars, airplanes, etc.
                                                </p>
                                            </div>
                                            <div
                                                className="theme-dialog-outer"
                                                onClick={() => {
                                                    if (selectThemesAns) {
                                                        setSelectThemesAns(false);
                                                    }
                                                }}
                                                role="button"
                                                tabIndex={0}
                                            ></div>
                                        </div>
                                    )}
                                    <div className="order-step-row">
                                        {step1Detail?.themeObject?.map((theme: any, index: number) => (
                                            <div className="order-step-col" key={index}>
                                                <label className="step-label" htmlFor={`theme${theme.id}`}>
                                                    <input
                                                        id={`theme${theme.id}`}
                                                        type="radio"
                                                        name="theme"
                                                        className="order-input-radio"
                                                        onChange={handleThemes(theme)}
                                                        checked={selectThemesItems?.theme === `theme${theme.id}`}
                                                    />
                                                    <figure className="step-img-block">
                                                        <img src={theme?.objDeselectImageUrl} alt="" className="img-view" width="60" height="60" />
                                                        <img
                                                            src={theme?.objSelectImageUrl}
                                                            alt=""
                                                            className="img-view-active"
                                                            width="60"
                                                            height="60"
                                                        />
                                                    </figure>
                                                    <p className="step-inn-label">{theme.thmObj}</p>
                                                </label>
                                            </div>
                                        ))}
                                        {step1Detail?.themeObject?.length > 0 && (
                                            <div className="order-step-col">
                                                <label
                                                    className={`step-label custom-label ${customThemeFliped ? 'flipped' : ''}`}
                                                    htmlFor={SelectThemes.custom}
                                                >
                                                    <div className="custom-front">
                                                        <input
                                                            id={SelectThemes.custom}
                                                            type="radio"
                                                            name="theme"
                                                            className="order-input-radio"
                                                            onClick={handleCustomThemeSelection}
                                                        />
                                                        <figure className="step-img-block">
                                                            <img
                                                                src={Images.OrderIconCustom}
                                                                alt=""
                                                                className="img-view custom_padding"
                                                                width="60"
                                                                height="60"
                                                            />
                                                            <img
                                                                src={Images.OrderIconCustomActive}
                                                                alt=""
                                                                className="img-view-active custom_padding"
                                                                width="60"
                                                                height="60"
                                                            />
                                                        </figure>
                                                        <p className="step-inn-label">CUSTOM</p>
                                                    </div>

                                                    <div className="custom-back">
                                                        <Form
                                                            name="basic"
                                                            autoComplete="off"
                                                            onFinish={onSubmitCustomInput}
                                                            initialValues={{
                                                                persons: '0',
                                                                pets: '0',
                                                            }}
                                                            form={form}
                                                        >
                                                            <div className="custom-fields">
                                                                <div className="custome-control-row">
                                                                    <p className="custom_title">PERSONS</p>
                                                                    <Popover
                                                                        placement="right"
                                                                        overlayClassName="message_error"
                                                                        content={validationMessage?.persons}
                                                                        open={!!validationMessage?.persons}
                                                                        getPopupContainer={() => document.getElementById('popover_error')!}
                                                                        showArrow={false}
                                                                    >
                                                                        <div className="custom-controls">
                                                                            <Form.Item name="persons">
                                                                                <NumericInput
                                                                                    id="custom-persons-input"
                                                                                    onChange={setPersonsCount}
                                                                                    className="custom-number"
                                                                                    value={personsCount}
                                                                                />
                                                                            </Form.Item>
                                                                            <i
                                                                                className="custom-icon-btn minus"
                                                                                onClick={() => handleCustomInputMinus('persons')}
                                                                                role="button"
                                                                                tabIndex={0}
                                                                            >
                                                                                <img
                                                                                    src={Images.BtnMinusIcon}
                                                                                    alt=""
                                                                                    width="25"
                                                                                    height="25"
                                                                                    className=""
                                                                                />
                                                                            </i>
                                                                            <i
                                                                                className="custom-icon-btn plus"
                                                                                onClick={() => handleCustomInputPlus('persons')}
                                                                                role="button"
                                                                                tabIndex={0}
                                                                            >
                                                                                <img
                                                                                    src={Images.BtnPlusIcon}
                                                                                    alt=""
                                                                                    width="25"
                                                                                    height="25"
                                                                                    className=""
                                                                                />
                                                                            </i>
                                                                        </div>
                                                                    </Popover>
                                                                </div>

                                                                <div className="custome-control-row">
                                                                    <p className="custom_title">PETS</p>
                                                                    <Popover
                                                                        placement="right"
                                                                        content={validationMessage?.pets}
                                                                        open={!!validationMessage?.pets}
                                                                        showArrow={false}
                                                                    >
                                                                        <div className="custom-controls">
                                                                            <Form.Item name="pets">
                                                                                <NumericInput
                                                                                    id="custom-pets-input"
                                                                                    onChange={setPetsCount}
                                                                                    className="custom-number"
                                                                                    value={petsCount}
                                                                                />
                                                                            </Form.Item>
                                                                            <i
                                                                                className="custom-icon-btn minus"
                                                                                onClick={() => handleCustomInputMinus('pets')}
                                                                                role="button"
                                                                                tabIndex={0}
                                                                            >
                                                                                <img
                                                                                    src={Images.BtnMinusIcon}
                                                                                    alt=""
                                                                                    width="25"
                                                                                    height="25"
                                                                                    className=""
                                                                                />
                                                                            </i>
                                                                            <i
                                                                                className="custom-icon-btn plus"
                                                                                onClick={() => handleCustomInputPlus('pets')}
                                                                                role="button"
                                                                                tabIndex={0}
                                                                            >
                                                                                <img
                                                                                    src={Images.BtnPlusIcon}
                                                                                    alt=""
                                                                                    width="25"
                                                                                    height="25"
                                                                                    className=""
                                                                                />
                                                                            </i>
                                                                        </div>
                                                                    </Popover>
                                                                </div>
                                                            </div>
                                                            <button type="submit" className="themes-custom-select-btn">
                                                                <span className="">Select</span>
                                                                <FontAwesomeIcon className="icon" icon={faCircleChevronRight} />
                                                            </button>
                                                        </Form>
                                                    </div>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <FilledButton className="btn-selected" onClick={handleThemeEditSelection} disabled={selectThemesBtnDisabled}>
                                    <span className="selected">CLICK TO EDIT</span>
                                    <span className="edit">Edit Selection</span>

                                    <i className="icon ">
                                        <img src={Images.OrderIconstepSelected} alt="" height="25" width="25" className="icon-selected" />
                                        <img src={Images.OrderIconstepEdit} alt="" height="25" width="25" className="icon-edit" />
                                    </i>
                                </FilledButton>
                            </Col>
                            <Col className="gutter-row" span={24} md={12} xl={8}>
                                <div
                                    className={`order-select-setp-1-card order-select-meium ${selectMediumActive ? 'active' : ''} ${
                                        selectMediumItems ? 'step-selected' : ''
                                    }`}
                                >
                                    <h4 className="card-title">
                                        Select Medium
                                        <span className="icon" onClick={() => setSelectMediumAns(true)} tabIndex={0} role="button">
                                            <img src={Images.QuestionIcon} alt="" width="23" height="23" />
                                        </span>
                                    </h4>
                                    {selectMediumAns && (
                                        <>
                                            <div className="theme-dialog-outer"></div>
                                            <div className="medium-dialog active">
                                                <span className="icon-close" onClick={() => setSelectMediumAns(false)} tabIndex={0} role="button">
                                                    <ModalCloseIcon />
                                                </span>
                                                <Collapse
                                                    accordion
                                                    ghost
                                                    className="step-accordion"
                                                    expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                                >
                                                    <Panel header="Oil Medium" key="1">
                                                        <div className="medium-collapse-content">
                                                            <Row
                                                                gutter={{
                                                                    md: 16,
                                                                    xl: 24,
                                                                }}
                                                            >
                                                                <Col className="gutter-row" md={8} xl={10}>
                                                                    <figure className="img-responsive">
                                                                        <img src={Images.StepMediumImg} alt="" className="" />
                                                                    </figure>
                                                                </Col>
                                                                <Col className="gutter-row" md={16} xl={14}>
                                                                    <p>
                                                                        <strong>Characteristics</strong>
                                                                        <br />
                                                                        Oil is the most popular medium and is the most vivid reflection of photos. All
                                                                        styles and techniques are available to the artist who paints in oil, whereas
                                                                        most other mediums are limited in their stylistic ranges. An oil painting is a
                                                                        natural heirloom you will be proud to have in the family for generations.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Material &amp; Framing:</strong> Oil is painted on canvas and doesn’t
                                                                        require protective glass.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Pros</strong>
                                                                    </p>
                                                                    <p>
                                                                        <strong>Lively colors&nbsp;</strong>– Oil materials allow artists to create a
                                                                        painting with the widest range of vivid colors.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Visual depth</strong>
                                                                        &nbsp;– Oil medium is known for the opportunity to create visual depth that is
                                                                        important for creating realistic portraits or landscape paintings.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Colors remain after drying&nbsp;</strong>– Unlike watercolors or
                                                                        acrylics, custom color paintings don’t lose the colors after drying. Instead,
                                                                        the beautiful colors their artists used to create oil painting from photo
                                                                        remain the same.
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Panel>
                                                    <Panel header="Acrylic Medium" key="2">
                                                        <div className="medium-collapse-content">
                                                            <Row
                                                                gutter={{
                                                                    md: 16,
                                                                    xl: 24,
                                                                }}
                                                            >
                                                                <Col className="gutter-row" md={8} xl={10}>
                                                                    <figure className="img-responsive">
                                                                        <img src={Images.acrylicMedium} alt="" className="" />
                                                                    </figure>
                                                                </Col>
                                                                <Col className="gutter-row" md={16} xl={14}>
                                                                    <p>
                                                                        <strong>Characteristics</strong>
                                                                        <br />
                                                                        Before you decide between oil and acrylic mediums, you should know that they
                                                                        often appear identical. The main advantages of choosing acrylics over oils are
                                                                        that they can sometimes appear somewhat more saturated in color. Acrylic is
                                                                        more vibrant than oil, therefore, some will prefer Acrylic as the medium for a
                                                                        landscape painting.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Material &amp; Framing:</strong> Acrylic is painted on canvas and
                                                                        doesn’t require protective glass.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Pros</strong>
                                                                    </p>
                                                                    <p>
                                                                        <strong>Colors change&nbsp;</strong>– As time goes by, the darker colors in
                                                                        acrylic paintings become lighter and less vivid. While this is the case with
                                                                        most mediums, acrylic changes color after drying too.
                                                                    </p>

                                                                    <p>
                                                                        <strong>Limitations of color&nbsp;</strong>– Unlike oil or watercolor, acrylic
                                                                        is available in limited colors. However, it doesn’t mean that custom acrylic
                                                                        paintings are always less colorful. .
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Panel>
                                                    <Panel header="Watercolor Medium" key="3">
                                                        <div className="medium-collapse-content">
                                                            <Row
                                                                gutter={{
                                                                    md: 16,
                                                                    xl: 24,
                                                                }}
                                                            >
                                                                <Col className="gutter-row" md={8} xl={10}>
                                                                    <figure className="img-responsive">
                                                                        <img src={Images.watercolorMedium} alt="" className="" />
                                                                    </figure>
                                                                </Col>
                                                                <Col className="gutter-row" md={16} xl={14}>
                                                                    <p>
                                                                        <strong>Characteristics</strong>
                                                                        <br />
                                                                        Watercolor is a very distinctive kind of painting medium. The transparent
                                                                        watercolor distinguishes your painting from all other mediums. The magic of
                                                                        color mixed with water gives the painting a soft, rustic, antique feeling.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Material &amp; Framing:</strong> Painted on paper and requires a
                                                                        protective glass when framed.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Works best for:&nbsp;</strong>Watercolor works very well for houses
                                                                        and outdoor / landscape.
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Panel>
                                                    <Panel header="Charcoal Medium" key="4">
                                                        <div className="medium-collapse-content">
                                                            <Row
                                                                gutter={{
                                                                    md: 16,
                                                                    xl: 24,
                                                                }}
                                                            >
                                                                <Col className="gutter-row" md={8} xl={10}>
                                                                    <figure className="img-responsive">
                                                                        <img src={Images.charcoalMedium} alt="" className="" />
                                                                    </figure>
                                                                </Col>
                                                                <Col className="gutter-row" md={16} xl={14}>
                                                                    <p>
                                                                        <strong>Characteristics</strong>
                                                                        <br />
                                                                        Artistic simpleness with black and white. While charcoals grant the lively
                                                                        drama of any black-and-white medium, they are usually far more high-contrast
                                                                        than pencil drawings. In fact, contrast is the very nature of charcoals. The
                                                                        darker blacks obtainable from charcoals give a certain drama that would be
                                                                        more subtle in other mediums. If you love black and white pictures, and seek
                                                                        to make a powerful statement, consider charcoals as your medium.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Material &amp; Framing:</strong> Painted on paper and requires a
                                                                        protective glass when framed.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Pros</strong>
                                                                    </p>
                                                                    <p>
                                                                        <strong>Shadows look very realistic&nbsp;</strong>- The charcoal medium is
                                                                        famous for creating realistic shadows and adding depth to the painting.
                                                                        Therefore, custom charcoal drawings look genuine and true to life.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Versatile paintings&nbsp;</strong>- Charcoal is considered one of the
                                                                        most versatile art mediums due to its ability to be smudged and blended. As a
                                                                        result, the charcoal medium is ideal for creating depth in black-and-white
                                                                        paintings.
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Panel>
                                                    <Panel header="Black Pencil Medium" key="5">
                                                        <div className="medium-collapse-content">
                                                            <Row
                                                                gutter={{
                                                                    md: 16,
                                                                    xl: 24,
                                                                }}
                                                            >
                                                                <Col className="gutter-row" md={8} xl={10}>
                                                                    <figure className="img-responsive">
                                                                        <img src={Images.blackPencilMedium} alt="" className="" />
                                                                    </figure>
                                                                </Col>
                                                                <Col className="gutter-row" md={16} xl={14}>
                                                                    <p>
                                                                        <strong>Characteristics</strong>
                                                                        <br />
                                                                        Pencils can go from very light to very deep in hue and depth. The fine lines
                                                                        of a sharpened pencil are nearly impossible to duplicate with a brush and
                                                                        completely unavailable for pastels or charcoal. Shading with pencils is one of
                                                                        the nicest characteristics this medium provides.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Material &amp; Framing:</strong> Painted on paper and requires
                                                                        protective glass when framed.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Pros</strong>
                                                                    </p>
                                                                    <p>
                                                                        <strong>Lasts for long&nbsp;</strong>- Pencil medium is known for its
                                                                        longevity and durability. Respectively, custom pencil portraits won’t be
                                                                        damaged over time and will remain just as you saw them for the first time.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Dries immediately&nbsp;</strong>- Unlike oil, watercolor, and other
                                                                        mediums that need plenty of time to dry, the pencil doesn’t need any time to
                                                                        dry. Therefore, your custom pencil drawings will be shipped once the painter
                                                                        finishes drawing.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Can be used on most surfaces&nbsp;</strong>- Pencil is used on all
                                                                        surfaces, including paper, canvas, wood, metal, and even concrete.
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Panel>
                                                    <Panel header="Color Pencil Medium" key="6">
                                                        <div className="medium-collapse-content">
                                                            <Row
                                                                gutter={{
                                                                    md: 16,
                                                                    xl: 24,
                                                                }}
                                                            >
                                                                <Col className="gutter-row" md={8} xl={10}>
                                                                    <figure className="img-responsive">
                                                                        <img src={Images.colorPencilMedium} alt="" className="" />
                                                                    </figure>
                                                                </Col>
                                                                <Col className="gutter-row" md={16} xl={14}>
                                                                    <p>
                                                                        <strong>Characteristics</strong>
                                                                        <br />
                                                                        Pencils can go from very light to very deep in hue and depth. The fine lines
                                                                        of a sharpened pencil are nearly impossible to duplicate with a brush and
                                                                        completely unavailable for pastels or charcoal. Shading with pencils is one of
                                                                        the nicest characteristics this medium provides.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Material &amp; Framing:</strong> Painted on paper and requires
                                                                        protective glass when framed.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Pros</strong>
                                                                    </p>
                                                                    <p>
                                                                        <strong>More vibrant colors&nbsp;</strong>- Color pencils allow artists to
                                                                        create various colors, from dark to light. As a result, the colors in color
                                                                        pencil drawings look super vibrant and lively.
                                                                    </p>
                                                                    <p>
                                                                        <strong>Dries immediately&nbsp;</strong>- While custom oil or watercolor
                                                                        paintings require some time to dry before the portrait is completely ready,
                                                                        there’s no such thing as a color pencil medium. In fact, colored pencil
                                                                        artworks drive immediately, meaning customers don’t have to wait for days.
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Panel>
                                                </Collapse>
                                            </div>
                                        </>
                                    )}
                                    <p className="mediums-desc">✹ All Mediums are priced equally</p>
                                    <div className="order-step-row">
                                        {step1Detail?.medium?.map((medium: any) => (
                                            <div className="order-step-col" key={medium.id}>
                                                <label className="step-label" htmlFor={`medium${medium.id}`}>
                                                    <input
                                                        id={`medium${medium.id}`}
                                                        type="radio"
                                                        name="medium"
                                                        className="order-input-radio"
                                                        onChange={handleMedium(medium)}
                                                        checked={selectMediumItems?.medium === `medium${medium.id}`}
                                                    />
                                                    <figure className="step-img-block medium-img-block">
                                                        <img src={medium.sliderImageUrl} alt="" className="img-view" width="60" height="60" />
                                                        <img
                                                            src={medium.sliderHoverImageUrl}
                                                            alt=""
                                                            className="img-view-active"
                                                            width="60"
                                                            height="60"
                                                        />
                                                    </figure>
                                                    {medium?.id === step1Detail?.popularMediumId && (
                                                        <div className="selection-popular">
                                                            <PopularStar />
                                                            <span className="">Popular</span>
                                                        </div>
                                                    )}
                                                    <p className="step-inn-label">{medium.name}</p>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <FilledButton className="btn-selected" onClick={handleMediumEditSelection} disabled={selectMediumBtnDisabled}>
                                    <span className="selected">CLICK TO EDIT</span>
                                    <span className="edit">Edit Selection</span>

                                    <i className="icon ">
                                        <img src={Images.OrderIconstepSelected} alt="" height="25" width="25" className="icon-selected" />
                                        <img src={Images.OrderIconstepEdit} alt="" height="25" width="25" className="icon-edit" />
                                    </i>
                                </FilledButton>
                            </Col>
                            <Col className="gutter-row" span={24} md={24} xl={8}>
                                <OrderStep1InfoBlockCmp className="order-step-1-info-block">
                                    <Row gutter={{ sm: 16, md: 24, xl: 48 }}>
                                        <Col md={12} xl={24} className="info-step-fetuare-block">
                                            <div className="info-step-top">
                                                <h4 className="info-icons-title">20% ADVANCE PAYMENT ONLY</h4>
                                                <p className="infoIcons-desc">✹ Remaining balance to be paid after painting approval</p>
                                            </div>
                                            <div className="info-step-fetuare-block-inner">
                                                <FetuareInfo />
                                            </div>
                                        </Col>
                                        <Col md={12} xl={24} className="info-step-customer-review">
                                            <CustomerReview
                                                className="customer-single-review-block"
                                                title="Excellent Customer Reviews"
                                                rate={roundOff(totalRating)}
                                            />
                                        </Col>
                                    </Row>
                                </OrderStep1InfoBlockCmp>
                            </Col>
                        </Row>
                    </OrderStep1Cmp>
                </>
            ) : (
                <MobileOrderPageMainCmp>
                    <MobileHeader
                        complateStep2={complateStep2}
                        complateStep3={complateStep3}
                        complateStep4={complateStep4}
                        repeatStep2={repeatStep2}
                        repeatStep3={repeatStep3}
                        repeatStep4={repeatStep4}
                    />
                    <MobileStep1
                        selectThemesAns={selectThemesAns}
                        setSelectThemesAns={setSelectThemesAns}
                        selectThemesActive={selectThemesActive}
                        personsCount={personsCount}
                        setPersonsCount={setPersonsCount}
                        petsCount={petsCount}
                        setPetsCount={setPetsCount}
                        selectThemesBtnDisabled={selectThemesBtnDisabled}
                        setSelectMediumAns={setSelectMediumAns}
                        selectMediumActive={selectMediumActive}
                        selectMediumBtnDisabled={selectMediumBtnDisabled}
                        handleThemeEditSelection={handleThemeEditSelection}
                        handleThemes={handleThemes}
                        handleCustomThemeSelection={handleCustomThemeSelection}
                        handleMediumEditSelection={handleMediumEditSelection}
                        selectMediumAns={selectMediumAns}
                        handleMedium={handleMedium}
                        onSubmitCustomInput={onSubmitCustomInput}
                        validationMessage={validationMessage}
                        handleCustomInputMinus={handleCustomInputMinus}
                        handleCustomInputPlus={handleCustomInputPlus}
                        form={form}
                        customSelectValueBlock={customSelectValueBlock}
                        setCustomSelectValueBlock={setCustomSelectValueBlock}
                    />
                    <MobileFooter
                        showProgressBar={showProgressBar}
                        savedCardProccessComplete={savedCardProccessComplete}
                        setSavedCardPopup={setSavedCardPopup}
                    />
                </MobileOrderPageMainCmp>
            )}
        </>
    );
};

export default Step1;

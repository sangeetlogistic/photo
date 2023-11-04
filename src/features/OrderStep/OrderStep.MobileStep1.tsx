/* eslint-disable complexity */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useRef } from 'react';
import { Button, Col, Collapse, Form, Popover, Row } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import CustomerReview from '../../components/CustomerReview';
import { OrderStep1Cmp, OrderStep1InfoBlockCmp } from './OrderPage.component';
import { Images } from '../../theme';
import FilledButton from '../../components/FilledButton';
import { ModalCloseIcon } from '../../assets/customSVG';
import { SelectThemes } from './OrderStep.constants';
import NumericInput from '../../components/NumericInput';
import { useAppSelector } from '../../app/hooks';
import { selectMediumItems as mediumItems, selectStep1Detail, selectThemesItems as themesItems } from './OrderStep.slice';
import { CustomSelectPersonsPetsThemeModal } from './OrderPage.MobileComponent';
import { selectTotalRating } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import { roundOff } from '../../utils/func';

const { Panel } = Collapse;

const MobileStep1 = ({
    selectThemesAns,
    setSelectThemesAns,
    selectThemesActive,
    personsCount,
    setPersonsCount,
    petsCount,
    setPetsCount,
    selectThemesBtnDisabled,
    setSelectMediumAns,
    selectMediumActive,
    selectMediumBtnDisabled,
    handleThemeEditSelection,
    handleThemes,
    handleCustomThemeSelection,
    handleMediumEditSelection,
    selectMediumAns,
    handleMedium,
    onSubmitCustomInput,
    validationMessage,
    handleCustomInputMinus,
    handleCustomInputPlus,
    form,
    customSelectValueBlock,
    setCustomSelectValueBlock,
}: any) => {
    const customSelectPersonsPetsThemeRef = useRef(null);

    const selectThemesItems = useAppSelector(themesItems);
    const selectMediumItems = useAppSelector(mediumItems);
    const step1Detail = useAppSelector(selectStep1Detail);
    const totalRating = useAppSelector(selectTotalRating);

    useEffect(() => {
        if (customSelectValueBlock) {
            document.body.classList.add('.no-scroll');
        } else {
            document.body.classList.remove('.no-scroll');
        }
    }, [customSelectValueBlock]);

    return (
        <OrderStep1Cmp className="mobile-order-inner-block step-1">
            <Row className="step-1-row" gutter={{ sm: 16, md: 24, lg: 48 }}>
                <Col className="gutter-row" span={24} md={9} lg={8}>
                    <div
                        className={`order-select-setp-1-card order-select-theme ${selectThemesItems ? 'step-selected' : ''} ${
                            selectThemesActive ? 'active' : ''
                        }`}
                    >
                        <div className="card-title-row">
                            <h4 className="card-title">
                                Select Themes
                                <span className="icon" onClick={() => setSelectThemesAns(true)} tabIndex={0} role="button">
                                    <img src={Images.QuestionIcon?.src} alt="" width="23" height="23" />
                                </span>
                            </h4>
                            <FilledButton className="btn-selected" onClick={handleThemeEditSelection} disabled={selectThemesBtnDisabled}>
                                <span className="selected">Edit</span>

                                <FontAwesomeIcon icon={faChevronRight} />
                            </FilledButton>
                        </div>

                        {selectThemesAns && (
                            <div>
                                <div className="theme-dialog active">
                                    <span className="icon-close" onClick={() => setSelectThemesAns(false)} tabIndex={0} role="button">
                                        <ModalCloseIcon />
                                    </span>
                                    <p>
                                        In the painting process, the most challenging parts of the painting are the details in the faces, and they
                                        take a longer time. Please fill in the correct amount of people or pets so we can give an accurate price quote
                                        for your painting. Should there be no animals or people in the photo you are sending, then please select the
                                        type as Landscape. This also should be chosen for boats, cars, airplanes, etc.
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
                        <div className={`order-selected-row ${selectThemesBtnDisabled ? 'pe_none' : ''}`} onClick={handleThemeEditSelection}>
                            <div className="order-step-col">
                                <div className="step-label">
                                    <figure className="step-img-block select_theme_image">
                                        <img src={selectThemesItems?.image} alt="" className="img-view-active" width="60" height="60" />
                                        {selectThemesItems?.theme === SelectThemes.custom && (
                                            <div className="output_text">
                                                <output>{personsCount || 0}</output>
                                                <output>{petsCount || 0}</output>
                                            </div>
                                        )}
                                    </figure>
                                    <p className="step-inn-label">{selectThemesItems?.title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-step-row">
                            {step1Detail?.themeObject?.map((theme: any, index: number) => (
                                <div className="order-step-col" key={index}>
                                    <label className="step-label" htmlFor={`theme${theme.id}`}>
                                        <input
                                            id={`theme${theme.id}`}
                                            type="radio"
                                            name="theme"
                                            className="order-input-radio"
                                            onChange={(event) => handleThemes(theme)(event)}
                                            checked={selectThemesItems?.theme === `theme${theme.id}`}
                                        />
                                        <figure className="step-img-block select_theme_image">
                                            <img src={theme?.objDeselectImageUrl} alt="" className="img-view" width="60" height="60" />
                                            <img
                                                src={theme?.objSelectImageUrl}
                                                alt={theme?.selectedImageAlt || ''}
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
                                    <label className="step-label custom-label" htmlFor={SelectThemes.custom}>
                                        <div className="custom-front" onClick={() => setCustomSelectValueBlock(true)} role="button" tabIndex={0}>
                                            <input
                                                id={SelectThemes.custom}
                                                type="radio"
                                                name="theme"
                                                className="order-input-radio"
                                                onClick={handleCustomThemeSelection}
                                            />
                                            <figure className="step-img-block">
                                                <img src={Images.OrderIconCustom?.src} alt="" className="img-view" width="60" height="60" />
                                                <img
                                                    src={Images.OrderIconCustomActive?.src}
                                                    alt=""
                                                    className="img-view-active"
                                                    width="60"
                                                    height="60"
                                                />
                                            </figure>
                                            <p className="step-inn-label">CUSTOM</p>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={24} md={9} lg={8}>
                    <div
                        className={`order-select-setp-1-card order-select-meium ${selectMediumActive ? 'active' : ''} ${
                            selectMediumItems ? 'step-selected' : ''
                        }`}
                    >
                        <div className="card-title-row">
                            <h4 className="card-title">
                                Select Medium
                                <span className="icon" onClick={() => setSelectMediumAns(true)} tabIndex={0} role="button">
                                    <img src={Images.QuestionIcon?.src} alt="" width="23" height="23" />
                                </span>
                            </h4>
                            <FilledButton className="btn-selected" onClick={handleMediumEditSelection} disabled={selectMediumBtnDisabled}>
                                <span className="selected">Edit</span>

                                <FontAwesomeIcon icon={faChevronRight} />
                            </FilledButton>
                        </div>
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
                                                            <img src={Images.StepMediumImg?.src} alt="" className="" />
                                                        </figure>
                                                    </Col>
                                                    <Col className="gutter-row" md={16} xl={14}>
                                                        <p>
                                                            <strong>Characteristics</strong>
                                                            <br />
                                                            Oil is the most popular medium and is the most vivid reflection of photos. All styles and
                                                            techniques are available to the artist who paints in oil, whereas most other mediums are
                                                            limited in their stylistic ranges. An oil painting is a natural heirloom you will be proud
                                                            to have in the family for generations.
                                                        </p>
                                                        <p>
                                                            <strong>Material &amp; Framing:</strong> Oil is painted on canvas and doesn’t require
                                                            protective glass.
                                                        </p>
                                                        <p>
                                                            <strong>Pros</strong>
                                                        </p>
                                                        <p>
                                                            <strong>Lively colors&nbsp;</strong>– Oil materials allow artists to create a painting
                                                            with the widest range of vivid colors.
                                                        </p>
                                                        <p>
                                                            <strong>Visual depth</strong>
                                                            &nbsp;– Oil medium is known for the opportunity to create visual depth that is important
                                                            for creating realistic portraits or landscape paintings.
                                                        </p>
                                                        <p>
                                                            <strong>Colors remain after drying&nbsp;</strong>– Unlike watercolors or acrylics, custom
                                                            color paintings don’t lose the colors after drying. Instead, the beautiful colors their
                                                            artists used to create oil painting from photo remain the same.
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
                                                            <img src={Images.acrylicMedium?.src} alt="" className="" />
                                                        </figure>
                                                    </Col>
                                                    <Col className="gutter-row" md={16} xl={14}>
                                                        <p>
                                                            <strong>Characteristics</strong>
                                                            <br />
                                                            Before you decide between oil and acrylic mediums, you should know that they often appear
                                                            identical. The main advantages of choosing acrylics over oils are that they can sometimes
                                                            appear somewhat more saturated in color. Acrylic is more vibrant than oil, therefore, some
                                                            will prefer Acrylic as the medium for a landscape painting.
                                                        </p>
                                                        <p>
                                                            <strong>Material &amp; Framing:</strong> Acrylic is painted on canvas and doesn’t require
                                                            protective glass.
                                                        </p>
                                                        <p>
                                                            <strong>Pros</strong>
                                                        </p>
                                                        <p>
                                                            <strong>Colors change&nbsp;</strong>– As time goes by, the darker colors in acrylic
                                                            paintings become lighter and less vivid. While this is the case with most mediums, acrylic
                                                            changes color after drying too.
                                                        </p>

                                                        <p>
                                                            <strong>Limitations of color&nbsp;</strong>– Unlike oil or watercolor, acrylic is
                                                            available in limited colors. However, it doesn’t mean that custom acrylic paintings are
                                                            always less colorful. .
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
                                                            <img src={Images.watercolorMedium?.src} alt="" className="" />
                                                        </figure>
                                                    </Col>
                                                    <Col className="gutter-row" md={16} xl={14}>
                                                        <p>
                                                            <strong>Characteristics</strong>
                                                            <br />
                                                            Watercolor is a very distinctive kind of painting medium. The transparent watercolor
                                                            distinguishes your painting from all other mediums. The magic of color mixed with water
                                                            gives the painting a soft, rustic, antique feeling.
                                                        </p>
                                                        <p>
                                                            <strong>Material &amp; Framing:</strong> Painted on paper and requires a protective glass
                                                            when framed.
                                                        </p>
                                                        <p>
                                                            <strong>Works best for:&nbsp;</strong>Watercolor works very well for houses and outdoor /
                                                            landscape.
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
                                                            <img src={Images.charcoalMedium?.src} alt="" className="" />
                                                        </figure>
                                                    </Col>
                                                    <Col className="gutter-row" md={16} xl={14}>
                                                        <p>
                                                            <strong>Characteristics</strong>
                                                            <br />
                                                            Artistic simpleness with black and white. While charcoals grant the lively drama of any
                                                            black-and-white medium, they are usually far more high-contrast than pencil drawings. In
                                                            fact, contrast is the very nature of charcoals. The darker blacks obtainable from
                                                            charcoals give a certain drama that would be more subtle in other mediums. If you love
                                                            black and white pictures, and seek to make a powerful statement, consider charcoals as
                                                            your medium.
                                                        </p>
                                                        <p>
                                                            <strong>Material &amp; Framing:</strong> Painted on paper and requires a protective glass
                                                            when framed.
                                                        </p>
                                                        <p>
                                                            <strong>Pros</strong>
                                                        </p>
                                                        <p>
                                                            <strong>Shadows look very realistic&nbsp;</strong>- The charcoal medium is famous for
                                                            creating realistic shadows and adding depth to the painting. Therefore, custom charcoal
                                                            drawings look genuine and true to life.
                                                        </p>
                                                        <p>
                                                            <strong>Versatile paintings&nbsp;</strong>- Charcoal is considered one of the most
                                                            versatile art mediums due to its ability to be smudged and blended. As a result, the
                                                            charcoal medium is ideal for creating depth in black-and-white paintings.
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
                                                            <img src={Images.blackPencilMedium?.src} alt="" className="" />
                                                        </figure>
                                                    </Col>
                                                    <Col className="gutter-row" md={16} xl={14}>
                                                        <p>
                                                            <strong>Characteristics</strong>
                                                            <br />
                                                            Pencils can go from very light to very deep in hue and depth. The fine lines of a
                                                            sharpened pencil are nearly impossible to duplicate with a brush and completely
                                                            unavailable for pastels or charcoal. Shading with pencils is one of the nicest
                                                            characteristics this medium provides.
                                                        </p>
                                                        <p>
                                                            <strong>Material &amp; Framing:</strong> Painted on paper and requires protective glass
                                                            when framed.
                                                        </p>
                                                        <p>
                                                            <strong>Pros</strong>
                                                        </p>
                                                        <p>
                                                            <strong>Lasts for long&nbsp;</strong>- Pencil medium is known for its longevity and
                                                            durability. Respectively, custom pencil portraits won’t be damaged over time and will
                                                            remain just as you saw them for the first time.
                                                        </p>
                                                        <p>
                                                            <strong>Dries immediately&nbsp;</strong>- Unlike oil, watercolor, and other mediums that
                                                            need plenty of time to dry, the pencil doesn’t need any time to dry. Therefore, your
                                                            custom pencil drawings will be shipped once the painter finishes drawing.
                                                        </p>
                                                        <p>
                                                            <strong>Can be used on most surfaces&nbsp;</strong>- Pencil is used on all surfaces,
                                                            including paper, canvas, wood, metal, and even concrete.
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
                                                            <img src={Images.colorPencilMedium?.src} alt="" className="" />
                                                        </figure>
                                                    </Col>
                                                    <Col className="gutter-row" md={16} xl={14}>
                                                        <p>
                                                            <strong>Characteristics</strong>
                                                            <br />
                                                            Pencils can go from very light to very deep in hue and depth. The fine lines of a
                                                            sharpened pencil are nearly impossible to duplicate with a brush and completely
                                                            unavailable for pastels or charcoal. Shading with pencils is one of the nicest
                                                            characteristics this medium provides.
                                                        </p>
                                                        <p>
                                                            <strong>Material &amp; Framing:</strong> Painted on paper and requires protective glass
                                                            when framed.
                                                        </p>
                                                        <p>
                                                            <strong>Pros</strong>
                                                        </p>
                                                        <p>
                                                            <strong>More vibrant colors&nbsp;</strong>- Color pencils allow artists to create various
                                                            colors, from dark to light. As a result, the colors in color pencil drawings look super
                                                            vibrant and lively.
                                                        </p>
                                                        <p>
                                                            <strong>Dries immediately&nbsp;</strong>- While custom oil or watercolor paintings require
                                                            some time to dry before the portrait is completely ready, there’s no such thing as a color
                                                            pencil medium. In fact, colored pencil artworks drive immediately, meaning customers don’t
                                                            have to wait for days.
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
                        <div className={`order-selected-row ${selectMediumBtnDisabled ? 'pe_none' : ''}`} onClick={handleMediumEditSelection}>
                            <div className="order-step-col">
                                <div className="step-label">
                                    <figure className="step-img-block">
                                        <img src={selectMediumItems?.image} alt="" className="img-view" width="60" height="60" />
                                        <img src={selectMediumItems?.hoverImage} alt="" className="img-view-active" width="60" height="60" />
                                    </figure>
                                    <p className="step-inn-label">{selectMediumItems?.title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-step-row">
                            {step1Detail?.medium?.map((medium: any) => (
                                <div className="order-step-col" key={medium.id}>
                                    <label className="step-label" htmlFor={`medium${medium.id}`}>
                                        <input
                                            id={`medium${medium.id}`}
                                            type="radio"
                                            name="medium"
                                            className="order-input-radio"
                                            onChange={(event) => handleMedium(medium)(event)}
                                            checked={selectMediumItems?.medium === `medium${medium.id}`}
                                        />
                                        <figure className="step-img-block medium-img-block">
                                            <img src={medium.sliderImageUrl} alt="" className="img-view" width="60" height="60" />
                                            <img src={medium.sliderHoverImageUrl} alt="" className="img-view-active" width="60" height="60" />
                                        </figure>
                                        <p className="step-inn-label">{medium.name}</p>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                {selectThemesItems && selectMediumItems && (
                    <Col className="gutter-row" span={24} md={6} lg={8}>
                        <OrderStep1InfoBlockCmp className="order-step-1-info-block">
                            <div className="info-step-customer-review">
                                <CustomerReview
                                    className="customer-single-review-block"
                                    title="Excellent Customer Reviews"
                                    rate={roundOff(totalRating)}
                                />
                            </div>
                        </OrderStep1InfoBlockCmp>
                    </Col>
                )}
            </Row>

            <CustomSelectPersonsPetsThemeModal>
                <div className={`bottom_drawer ${customSelectValueBlock ? 'modal_show' : ''}`}>
                    <div ref={customSelectPersonsPetsThemeRef} className="custom-back" tabIndex={0} role="button">
                        <div className="custom_details">
                            <div className="title-block">
                                <Button
                                    type="link"
                                    className="icon-close"
                                    icon={<CloseOutlined />}
                                    onClick={() => setCustomSelectValueBlock(false)}
                                />
                                <h3 className="">Custom Theme</h3>
                                <p className="">please provide details about either Person(s) or Pet(s) you want to have on the painting</p>
                            </div>
                            <Form form={form} autoComplete="off" onFinish={onSubmitCustomInput} initialValues={{ persons: '0', pets: '0' }}>
                                <div className="custom-fields">
                                    <div className="custome-control-row">
                                        <p className="custom_title text-uppercase">amount of persons</p>
                                        <Popover placement="right" content={validationMessage?.persons} open={!!validationMessage?.persons}>
                                            <div className="custom-controls">
                                                <i
                                                    className="custom-icon-btn minus"
                                                    onClick={() => handleCustomInputMinus('persons')}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <img src={Images.BtnMinusIcon?.src} alt="" width="25" height="25" className="" />
                                                </i>
                                                <Form.Item name="persons">
                                                    <NumericInput id="custom-persons-input" onChange={setPersonsCount} className="custom-number" />
                                                </Form.Item>

                                                <i
                                                    className="custom-icon-btn plus"
                                                    onClick={() => handleCustomInputPlus('persons')}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <img src={Images.BtnPlusIcon?.src} alt="" width="25" height="25" className="" />
                                                </i>
                                            </div>
                                        </Popover>
                                    </div>

                                    <div className="custome-control-row">
                                        <p className="custom_title text-uppercase">Amount of Pets?</p>
                                        <Popover placement="right" content={validationMessage?.pets} open={!!validationMessage?.pets}>
                                            <div className="custom-controls">
                                                <i
                                                    className="custom-icon-btn minus"
                                                    onClick={() => handleCustomInputMinus('pets')}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <img src={Images.BtnMinusIcon?.src} alt="" width="25" height="25" className="" />
                                                </i>
                                                <Form.Item name="pets">
                                                    <NumericInput id="custom-pets-input" onChange={setPetsCount} className="custom-number" />
                                                </Form.Item>

                                                <i
                                                    className="custom-icon-btn plus"
                                                    onClick={() => handleCustomInputPlus('pets')}
                                                    role="button"
                                                    tabIndex={0}
                                                >
                                                    <img src={Images.BtnPlusIcon?.src} alt="" width="25" height="25" className="" />
                                                </i>
                                            </div>
                                        </Popover>
                                    </div>
                                </div>
                                <div className="btn-row">
                                    <FilledButton htmlType="submit" color="primary" className="custom-select-btn" block>
                                        <span className="">Select</span>
                                    </FilledButton>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </CustomSelectPersonsPetsThemeModal>
        </OrderStep1Cmp>
    );
};

export default MobileStep1;

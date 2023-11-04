/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import moment from 'moment';
import { Col, Row } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../app/hooks';
import { Routes } from '../../navigation/Routes';
import { Images } from '../../theme';
import { dateMonthFormat } from '../../constants/general';
import { selectedSaveOrderData } from '../../features/OrderStep/OrderStep.slice';
import { ThankYouCmp, ThankYouWrap } from '../../features/Thankyou/Thankyou.components';
import { CouponCodeDiscount, PaymentWays, multipleCombinePhotosPrice } from '../../features/OrderStep/OrderStep.constants';
import HeaderLayoutCmp from '../../components/Layout/HeaderLayouts';
import SEO from '../../services/API/SEO';
import { statusCode } from '../../constants/statusCode';
import { SITE_URL } from '../../constants/predicates';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const Thankyou = ({ seoResult }: any) => {
    const route = useRouter();

    const saveOrderData = useAppSelector(selectedSaveOrderData);

    useEffect(() => {
        const onPageLoad = () => route.push(Routes.account);

        window.addEventListener('load', onPageLoad);
        return () => window.removeEventListener('load', onPageLoad);
    }, []);

    return (
        <>
            <Head>
                <link rel="canonical" href={`${SITE_URL}${route.asPath}`} key="canonical" />
                <title>{seoResult?.title}</title>
                <meta name="robots" content="noindex,nofollow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}${route.asPath}`} />
                <meta property="og:site_name" content={SITE_URL} />
                <meta property="og:updated_time" content={seoResult?.updatedAt} />
                <meta property="og:title" content={seoResult?.title} />
                <meta property="og:description" content={seoResult?.description || ''} />
                <meta name="description" content={seoResult?.description || ''} />
                <meta property="og:image" content={seoResult?.imageUrl || ''} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoResult?.title} />
                <meta name="twitter:description" content={seoResult?.description || ''} />
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>

            <HeaderLayoutCmp key={null} type="" props={undefined}>
                <ThankYouWrap>
                    <ThankYouCmp>
                        <Row className="thankyou-row">
                            <Col className="thankyou-col thankyou-box-col">
                                <img src={Images.ThankYouImg?.src} alt="" width="532" className="thank-you-img" />
                                <div className="thank-you-title-block ">
                                    <h3>Thank you!</h3>
                                    <p>
                                        Hi {saveOrderData?.user?.user?.name} {saveOrderData?.user?.user?.surname}, Congratulations on placing your
                                        order!
                                    </p>
                                </div>
                                <div className="next-step-block ">
                                    <h4 className="">next step</h4>
                                    <p className="">
                                        During the next 24 hours, you will receive an email asking you to approve your edited photo, before we start
                                        painting it. Please approve the edited photo as quickly as you can to avoid any delays with your painting.
                                    </p>
                                </div>
                            </Col>
                            <Col className="thankyou-col thankyou-detail-col">
                                <Row gutter={22}>
                                    <Col className="gutter-row thankyou-detail-col-1" xs={24} md={12}>
                                        <div className="thank-you-card order-detail">
                                            <h4>below are your order details</h4>
                                            <table className="order-table">
                                                <tbody>
                                                    <tr>
                                                        <th>Theme</th>
                                                        <td>
                                                            {!saveOrderData?.saveOrder?.saveOrder?.iscustom
                                                                ? saveOrderData?.saveOrder?.saveOrder?.themeName1
                                                                : 'Custom'}
                                                        </td>
                                                    </tr>
                                                    {saveOrderData?.saveOrder?.saveOrder?.iscustom ? (
                                                        <>
                                                            <tr>
                                                                <th>Persons</th>
                                                                <td>{saveOrderData?.saveOrder?.saveOrder?.theme1Total}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Pets</th>
                                                                <td>{saveOrderData?.saveOrder?.saveOrder?.theme2Total}</td>
                                                            </tr>
                                                        </>
                                                    ) : null}
                                                    <tr>
                                                        <th>Medium</th>
                                                        <td>{saveOrderData?.saveOrder?.saveOrder?.mediumName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Compilation portrait</th>
                                                        <td>
                                                            {saveOrderData?.saveOrder?.saveOrder?.combine_multiple_image_to_create_one
                                                                ? `$${multipleCombinePhotosPrice}`
                                                                : 'NO'}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Size </th>
                                                        <td>
                                                            <span className="ex-data">{saveOrderData?.saveOrder?.saveOrder?.sizeInText}</span>
                                                            <span>${saveOrderData?.saveOrder?.saveOrder?.size_price}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Frame</th>
                                                        <td>
                                                            <span className="ex-data">{saveOrderData?.saveOrder?.saveOrder?.frameName}</span>
                                                            <span>${saveOrderData?.saveOrder?.saveOrder?.frame_price}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Video of Painting</th>
                                                        <td>
                                                            <span>
                                                                {Number(saveOrderData?.saveOrder?.saveOrder?.how_my_video_created)
                                                                    ? `$${saveOrderData?.saveOrder?.saveOrder?.how_my_video_created_price}`
                                                                    : 'NO'}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>Express Service</th>
                                                        <td>
                                                            {saveOrderData?.saveOrder?.saveOrder?.service_type === 'Express service'
                                                                ? saveOrderData?.paymentObj?.couponObj
                                                                    ? `$${(
                                                                          Number(saveOrderData?.paymentObj?.total_payment) +
                                                                          Number(saveOrderData?.paymentObj?.discountedAmount) -
                                                                          ((Number(saveOrderData?.paymentObj?.total_payment) +
                                                                              Number(saveOrderData?.paymentObj?.discountedAmount)) *
                                                                              100) /
                                                                              (100 +
                                                                                  Number(
                                                                                      saveOrderData?.saveOrder?.saveOrder?.service_type_percentage,
                                                                                  ))
                                                                      ).toFixed(2)}`
                                                                    : `$${(
                                                                          saveOrderData?.paymentObj?.total_payment -
                                                                          (saveOrderData?.paymentObj?.total_payment * 100) /
                                                                              (100 +
                                                                                  Number(
                                                                                      saveOrderData?.saveOrder?.saveOrder?.service_type_percentage,
                                                                                  ))
                                                                      ).toFixed(2)}`
                                                                : 'NO'}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Subtotal</th>
                                                        <td>
                                                            {saveOrderData?.paymentObj?.couponObj ? (
                                                                <>
                                                                    <span className="discount-price">
                                                                        $
                                                                        {saveOrderData?.paymentObj?.total_payment <= 0
                                                                            ? (
                                                                                  Number(saveOrderData?.saveOrder?.saveOrder?.size_price || 0) +
                                                                                  Number(saveOrderData?.saveOrder?.saveOrder?.frame_price || 0) +
                                                                                  Number(
                                                                                      saveOrderData?.saveOrder?.saveOrder
                                                                                          ?.how_my_video_created_price || 0,
                                                                                  ) +
                                                                                  Number(
                                                                                      saveOrderData?.saveOrder?.saveOrder?.service_type_price || 0,
                                                                                  ) +
                                                                                  Number(
                                                                                      saveOrderData?.saveOrder?.saveOrder?.shipping_method_price || 0,
                                                                                  ) +
                                                                                  Number(
                                                                                      saveOrderData?.saveOrder?.saveOrder
                                                                                          ?.combine_multiple_image_to_create_one_price || 0,
                                                                                  )
                                                                              ).toFixed(2)
                                                                            : (
                                                                                  Number(saveOrderData?.paymentObj?.total_payment) +
                                                                                  Number(saveOrderData?.paymentObj?.discountedAmount)
                                                                              ).toFixed(2)}
                                                                    </span>
                                                                    ${saveOrderData?.paymentObj?.total_payment} (-
                                                                    {saveOrderData?.paymentObj?.couponObj?.discountType === CouponCodeDiscount.PRICE
                                                                        ? `$${saveOrderData?.paymentObj?.couponObj?.discountValue}`
                                                                        : `${saveOrderData?.paymentObj?.couponObj?.discountValue}%`}
                                                                    )
                                                                </>
                                                            ) : (
                                                                <>${saveOrderData?.paymentObj?.total_payment}</>
                                                            )}
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row thankyou-detail-col-2" xs={24} md={12}>
                                        <div className="thank-you-card order-info">
                                            <h4>billing information</h4>
                                            <table className="order-table">
                                                <tbody>
                                                    <tr>
                                                        <th>order number</th>
                                                        <td>{saveOrderData?.saveOrder?.saveOrder?.tracking_number}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>you paid</th>
                                                        <td>${saveOrderData?.paymentObj?.initial_payment_amount}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            outstanding balance
                                                            <span className="note">
                                                                (to be paid after your portrait is completed and approved by you)
                                                            </span>
                                                        </th>
                                                        <td>${saveOrderData?.paymentObj?.remaining_amount}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Payment Method</th>
                                                        <td style={{ width: '75px' }}>
                                                            {saveOrderData?.paymentObj?.payment_method === PaymentWays.stripe
                                                                ? saveOrderData?.paymentObj?.payment_mode
                                                                : saveOrderData?.paymentObj?.payment_method}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>promo Code applied</th>
                                                        <td>{saveOrderData?.paymentObj?.used_coupon_code_name || 'NO'}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Promo Code Amount</th>
                                                        <td>
                                                            {saveOrderData?.paymentObj?.couponObj ? (
                                                                saveOrderData?.paymentObj?.couponObj?.discountType === CouponCodeDiscount.PRICE ? (
                                                                    `$${saveOrderData?.paymentObj?.couponObj?.discountValue}`
                                                                ) : (
                                                                    `${saveOrderData?.paymentObj?.couponObj?.discountValue}%`
                                                                )
                                                            ) : (
                                                                <>NO</>
                                                            )}{' '}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="thank-you-card estimated-delivery-card">
                                            <i className="icon">
                                                <img src={Images.IconEstimateDelivery?.src} alt="" className="" width="53" height="53" />
                                            </i>
                                            <div className="estimated-delivery-data">
                                                <h4 className="">estimated delivery</h4>
                                                <p className="">
                                                    The painting will be at your door approximately on{' '}
                                                    <span className="d-block-date">
                                                        {moment
                                                            .utc(saveOrderData?.saveOrder?.saveOrder?.estimated_delivery_startDate)
                                                            .format(dateMonthFormat)}{' '}
                                                        -{' '}
                                                        {moment
                                                            .utc(saveOrderData?.saveOrder?.saveOrder?.estimated_delivery_endDate)
                                                            .format(dateMonthFormat)}
                                                        .
                                                    </span>{' '}
                                                    allow us extra time for delivery during high-volume order periods{' '}
                                                    <span className="">(2-4 days).</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="thank-you-card shipping-info-detail">
                                    <h4 className="">contact information</h4>
                                    <div className="shipping-detail-block ">
                                        <div className="shipping-detail-left ">
                                            <div className="shipping-detail-row">
                                                <span className="label">Name:</span>
                                                <span className="info">
                                                    {saveOrderData?.user?.user?.name} {saveOrderData?.user?.user?.surname}
                                                </span>
                                            </div>
                                            <div className="shipping-detail-row">
                                                <span className="label">Number:</span>
                                                <span className="info">
                                                    +{saveOrderData?.user?.user?.countryCode} {saveOrderData?.user?.user?.phoneNumber}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="shipping-detail-right ">
                                            <div className="shipping-detail-row">
                                                <span className="label">Email:</span>
                                                <span className="info">{saveOrderData?.user?.user?.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </ThankYouCmp>
                </ThankYouWrap>
            </HeaderLayoutCmp>
        </>
    );
};

export default Thankyou;

export const getServerSideProps = async (context) => {
    const slug = context.resolvedUrl.split('/')[1];

    let seoResult: any = '';
    try {
        const response = await SEO.getSeoDetail({ slug });
        if (response.status === statusCode.success) {
            seoResult = response?.data?.data;
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        seoResult = null;
    }

    return {
        props: {
            seoResult,
        },
    };
};

/* eslint-disable no-nested-ternary */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';

import { ViewOrderDetailPopupCmp } from './Account.component';
import { Images } from '../../theme';
import { dateMonthFormat } from '../../constants/general';
import { useAppSelector } from '../../app/hooks';
import { selectedUserData } from './Account.slice';
import { CouponCodeDiscount } from '../OrderStep/OrderStep.constants';

interface IViewOrderDetailPopup {
    viewOrderDetailPopup: {
        open: boolean;
        storeId: null | number;
        individualOrderData: any;
    };
    setViewOrderDetailPopup: React.Dispatch<
        React.SetStateAction<{
            open: boolean;
            storeId: null | number;
            individualOrderData: any;
        }>
    >;
}

const ViewOrderDetailPopup = ({ viewOrderDetailPopup, setViewOrderDetailPopup }: IViewOrderDetailPopup) => {
    const userData = useAppSelector(selectedUserData);

    const viewOrderDetailPopupContent = (
        <div className="account-orde-detail-wrap">
            <Row className="account-orde-detail-row">
                <Col className="account-orde-detail-col account-orde-detail-col-1" xs={24} md={12}>
                    <div className="account-order-card order-detail">
                        <h4>below are your order details</h4>
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <th>Theme</th>
                                    <td className="text-dark-gray">
                                        {!viewOrderDetailPopup.individualOrderData?.iscustom
                                            ? viewOrderDetailPopup.individualOrderData?.themeName1
                                            : 'Custom'}
                                    </td>
                                </tr>
                                {viewOrderDetailPopup.individualOrderData?.iscustom ? (
                                    <>
                                        <tr>
                                            <th>Persons</th>
                                            <td>{viewOrderDetailPopup.individualOrderData?.theme1Total}</td>
                                        </tr>
                                        <tr>
                                            <th>Pets</th>
                                            <td>{viewOrderDetailPopup.individualOrderData?.theme2Total}</td>
                                        </tr>
                                    </>
                                ) : null}
                                <tr>
                                    <th>Medium</th>
                                    <td className="text-dark-gray">{viewOrderDetailPopup.individualOrderData?.mediumName}</td>
                                </tr>
                                <tr>
                                    <th>Compilation portrait</th>
                                    <td>
                                        {viewOrderDetailPopup.individualOrderData?.combine_multiple_image_to_create_one
                                            ? `$${viewOrderDetailPopup.individualOrderData.combine_multiple_image_to_create_one_price}`
                                            : 'NO'}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Size </th>
                                    <td>
                                        <span className="ex-data">{viewOrderDetailPopup.individualOrderData?.sizeInText}</span>
                                        <span>${viewOrderDetailPopup.individualOrderData?.size_price}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Frame</th>
                                    <td>
                                        <span className="ex-data">{viewOrderDetailPopup.individualOrderData?.frameName}</span>
                                        <span>${viewOrderDetailPopup.individualOrderData?.frame_price}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Video of Painting</th>
                                    <td>
                                        <span>
                                            {Number(viewOrderDetailPopup.individualOrderData?.how_my_video_created)
                                                ? `$${viewOrderDetailPopup.individualOrderData?.how_my_video_created_price}`
                                                : 'NO'}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Express shipping</th>
                                    <td>
                                        {viewOrderDetailPopup.individualOrderData?.shipping_method === 'free'
                                            ? 'NO'
                                            : `$${viewOrderDetailPopup.individualOrderData?.shipping_method_price}`}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Express Service</th>
                                    <td>
                                        {viewOrderDetailPopup.individualOrderData?.service_type === 'Express service'
                                            ? viewOrderDetailPopup.individualOrderData?.couponType
                                                ? `$${(
                                                      Number(viewOrderDetailPopup.individualOrderData?.total_payment) +
                                                      Number(viewOrderDetailPopup.individualOrderData?.discountedAmount) -
                                                      ((Number(viewOrderDetailPopup.individualOrderData.total_payment) +
                                                          Number(viewOrderDetailPopup.individualOrderData?.discountedAmount)) *
                                                          100) /
                                                          (100 + Number(viewOrderDetailPopup.individualOrderData?.service_type_percentage))
                                                  ).toFixed(2)}`
                                                : `$${(
                                                      viewOrderDetailPopup.individualOrderData.total_payment -
                                                      (viewOrderDetailPopup.individualOrderData?.total_payment * 100) /
                                                          (100 + Number(viewOrderDetailPopup.individualOrderData?.service_type_percentage))
                                                  ).toFixed(2)}`
                                            : 'NO'}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>
                                        {viewOrderDetailPopup.individualOrderData?.discountedAmount ? (
                                            <>
                                                <span className="discount-price">
                                                    $
                                                    {(
                                                        Number(viewOrderDetailPopup.individualOrderData?.total_payment) +
                                                        Number(viewOrderDetailPopup.individualOrderData?.discountedAmount)
                                                    ).toFixed(2)}
                                                </span>
                                                ${viewOrderDetailPopup.individualOrderData?.total_payment} (-
                                                {viewOrderDetailPopup.individualOrderData?.couponType === CouponCodeDiscount.PRICE
                                                    ? `$${viewOrderDetailPopup?.individualOrderData?.discountedAmount}`
                                                    : `${viewOrderDetailPopup?.individualOrderData?.used_coupon_code_percentage}%`}
                                                )
                                            </>
                                        ) : (
                                            <>${viewOrderDetailPopup.individualOrderData?.total_payment}</>
                                        )}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </Col>
                <Col className="account-orde-detail-col account-orde-detail-col-2" xs={24} md={12}>
                    <div className="account-order-card order-info">
                        <h4>billing information</h4>
                        <table className="order-table">
                            <tbody>
                                <tr>
                                    <th>order number</th>
                                    <td className="text-dark-gray">{viewOrderDetailPopup.individualOrderData?.tracking_number}</td>
                                </tr>
                                <tr>
                                    <th>you paid</th>
                                    <td className="text-dark-gray">${viewOrderDetailPopup.individualOrderData?.initial_payment_amount}</td>
                                </tr>
                                <tr>
                                    <th>
                                        outstanding balance
                                        <span className="note">(to be paid after your portrait is completed and approved by you)</span>
                                    </th>
                                    <td className="text-dark-gray">${viewOrderDetailPopup.individualOrderData?.remaining_amount}</td>
                                </tr>
                                <tr>
                                    <th>Payment Method</th>
                                    <td className="text-dark-gray">{viewOrderDetailPopup.individualOrderData?.payment_method}</td>
                                </tr>
                                <tr>
                                    <th>promo Code applied</th>
                                    <td>{viewOrderDetailPopup.individualOrderData?.used_coupon_code_name || 'NO'}</td>
                                </tr>
                                <tr>
                                    <th>Promo Code Amount</th>
                                    <td>
                                        {viewOrderDetailPopup.individualOrderData?.couponType ? (
                                            viewOrderDetailPopup.individualOrderData?.couponType === CouponCodeDiscount.PRICE ? (
                                                `$${viewOrderDetailPopup.individualOrderData?.discountedAmount}`
                                            ) : (
                                                `${viewOrderDetailPopup.individualOrderData?.used_coupon_code_percentage}%`
                                            )
                                        ) : (
                                            <>NO</>
                                        )}{' '}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="account-order-card estimated-delivery-card">
                        <i className="icon">
                            <img src={Images.IconEstimateDelivery} alt="" className="" width="53" height="53" />
                        </i>
                        <div className="estimated-delivery-data">
                            <h4 className="">estimated delivery</h4>
                            <p className="">
                                The painting will be at your door approximately on{' '}
                                <span className="">
                                    {moment.utc(viewOrderDetailPopup.individualOrderData?.estimated_delivery_endDate).format(dateMonthFormat)}.
                                </span>
                            </p>
                            <p>
                                allow us extra time for delivery during high-volume order periods <span className="">(2-4 days).</span>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="account-order-card shipping-info-detail">
                <h4 className="">Contact Information</h4>
                <div className="shipping-detail-block ">
                    <div className="shipping-detail-left ">
                        <div className="shipping-detail-row">
                            <span className="label">Name:</span>
                            <span className="info">
                                {userData?.name} {userData?.surname}
                            </span>
                        </div>
                        <div className="shipping-detail-row">
                            <span className="label">Number:</span>
                            <span className="info">
                                +{userData?.countryCode} {userData?.phoneNumber}
                            </span>
                        </div>
                    </div>
                    <div className="shipping-detail-right ">
                        <div className="shipping-detail-row">
                            <span className="label">Email:</span>
                            <span className="info">{userData?.email}</span>
                        </div>
                        {viewOrderDetailPopup.individualOrderData?.status >= '9' && (
                            <div className="shipping-detail-row">
                                <span className="label">Address:</span>
                                <span className="info">
                                    {viewOrderDetailPopup.individualOrderData?.address}, {viewOrderDetailPopup.individualOrderData?.city},{' '}
                                    {viewOrderDetailPopup.individualOrderData?.state}, {viewOrderDetailPopup.individualOrderData?.country},{' '}
                                    {viewOrderDetailPopup.individualOrderData?.zipCode} {viewOrderDetailPopup.individualOrderData?.additionalAddress}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {viewOrderDetailPopup.open && (
                <ViewOrderDetailPopupCmp
                    onCancel={() =>
                        setViewOrderDetailPopup((prevState) => ({
                            ...prevState,
                            open: false,
                        }))
                    }
                    open={viewOrderDetailPopup.open}
                    closable={false}
                    content={viewOrderDetailPopupContent}
                />
            )}
        </div>
    );
};

export default ViewOrderDetailPopup;

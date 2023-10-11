import React, { useCallback } from 'react';
import _ from 'lodash';

import { useAppSelector } from '../../app/hooks';
import { OrderSummaryBlockCmp } from './OrderPage.component';
import { SelectThemes } from './OrderStep.constants';
import { selectMediumItems, selectThemesItems } from './OrderStep.slice';
import { IOrderSummary } from './OrderStep.types';
import { calculateFun } from '../../utils/func';

const OrderSummary = ({
    selectPaintingSizeAndPrice,
    selectedFrame,
    combinePhotoPrice,
    videoCreated,
    expressService,
    successCouponCode,
    depositSection,
    successCouponId,
    personsCount,
    petsCount,
}: IOrderSummary) => {
    const mediumItems = useAppSelector(selectMediumItems);
    const themesItems = useAppSelector(selectThemesItems);

    const calculateTotal = useCallback(
        (couponCodeAmount: any) =>
            selectPaintingSizeAndPrice &&
            selectedFrame &&
            calculateFun(
                selectPaintingSizeAndPrice.price,
                selectedFrame.price,
                combinePhotoPrice,
                videoCreated,
                expressService,
                true,
                couponCodeAmount,
            ),
        [selectPaintingSizeAndPrice, selectedFrame, combinePhotoPrice, videoCreated, expressService],
    );

    return (
        <OrderSummaryBlockCmp className="order-summary-block">
            <div>
                <h4 className="summary-title">Order Summary</h4>
                <div className="select-summery-details">
                    <div className="select-summery-item">
                        <p className="select-summery-text">Theme</p>
                        <p className="select-summery-text">
                            {themesItems?.theme === SelectThemes.custom
                                ? `${_.startCase(_.camelCase(themesItems?.theme))} ${personsCount || 0} ${petsCount || 0}`
                                : themesItems?.title}
                        </p>
                    </div>
                    <div className="select-summery-item">
                        <p className="select-summery-text">Medium</p>
                        <p className="select-summery-text">{mediumItems?.title}</p>
                    </div>
                    {combinePhotoPrice && (
                        <div className="select-summery-item">
                            <p className="select-summery-text">Compilation Portrait</p>
                            <p className="select-summery-text text-number">{combinePhotoPrice ? `$${combinePhotoPrice}` : 'NO'}</p>
                        </div>
                    )}
                    {depositSection && (
                        <div className="select-summery-item">
                            <p className="select-summery-text">Video Of Painting</p>
                            <p className="select-summery-text text-number">{videoCreated ? `$${videoCreated}` : 'NO'}</p>
                        </div>
                    )}
                    <div className="select-summery-item">
                        <p className="select-summery-text">Size {selectPaintingSizeAndPrice?.title}</p>
                        <p className="select-summery-text text-number">${selectPaintingSizeAndPrice?.price}</p>
                    </div>
                    <div className="select-summery-item frame">
                        <p className="select-summery-text">Frame {selectedFrame?.title}</p>
                        <p className="select-summery-text text-number ">${selectedFrame?.price}</p>
                    </div>
                </div>
                <div className="select-summery-item sub-total">
                    <p className="select-summery-text">SUBTOTAL</p>
                    <p className="select-summery-text text-number ">
                        $
                        {selectPaintingSizeAndPrice &&
                            selectedFrame &&
                            calculateFun(
                                selectPaintingSizeAndPrice.price,
                                selectedFrame.price,
                                combinePhotoPrice,
                                videoCreated,
                                expressService,
                                false,
                                successCouponId,
                            )}
                    </p>
                </div>
            </div>
            {/* {depositSection ? ( */}
            <div className="select-offer-pricing">
                <div className="select-offer-pricing--today">
                    <p className="text-data">20% deposit due today &nbsp;</p>{' '}
                    <p className="text-number depositdue-number">${calculateTotal(successCouponId)}</p>
                </div>
                <p className="note">✹ Remaining balance to be paid after painting approval</p>
            </div>
            {/* ) : ( */}
            {/* <div className="size-info-outer">
          <div className="size-info-left">
            <div className="sub-total-price-block ">
              <div className="sub-total-label">SUB TOTAL PRICE:</div>
              <span className="sub-total-price">{`$${calculateFun(
                selectPaintingSizeAndPrice?.price,
                selectedFrame?.price,
                combinePhotoPrice,
                videoCreated,
                expressService,
                false,
                successCouponCode,
              )}`}</span>
            </div>
            <div className="sub-info-block-inner">
              <h4 className="title">
                <span className="">20% DEPOSIT DUE TODAY &nbsp;</span>
                <span className="text-primary depositdue-number">
                  {`$${calculateTotal(successCouponCode)}`}
                </span>
              </h4>
              <p className="note">
                ✹ Remaining balance to be paid after painting approval
              </p>
            </div>
          </div>
        </div> */}
            {/* )} */}
        </OrderSummaryBlockCmp>
    );
};

export default OrderSummary;

import React from 'react';
import { Images } from '../../theme';
import LazyImage from '../LazyImage';
import Rating from '../Rating';
import { CustomerReviewCardCmp } from './CustomerReview.component';
import { ICustomerReview } from './CustomerReview.types';

const CustomerReview = (props: ICustomerReview) => {
    const { title, rate, totalReviews, className, footerLogo } = props;

    return (
        <CustomerReviewCardCmp className={className}>
            <div className="single-review-wrapper">
                <h2 className="single-reviwe-title">{title}</h2>
                <div className="customer-review-and-rate">
                    <div className="review-and-rate-wrap">
                        <span className="customer-rating">{rate}</span>
                        <Rating disabled defaultValue={rate} allowHalf />
                    </div>
                    <p className="total-review ">
                        <span className="total-review-label">Based on:</span>
                        {totalReviews} reviews
                    </p>
                </div>
            </div>
            <div className="single-review-btm-logo">
                <LazyImage
                    src={footerLogo ? Images.TrustpilotFooterLogo : Images.TrustpilotLogo}
                    alt=""
                    className=""
                    effect="opacity"
                    width="150"
                    height="40"
                />
            </div>
        </CustomerReviewCardCmp>
    );
};

export default CustomerReview;

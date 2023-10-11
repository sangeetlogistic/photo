import React from 'react';

import { Images } from '../../theme';
import Rating from '../Rating';
import { CustomerReviewCardCmp } from './CustomerReview.component';
import { ICustomerReview } from './CustomerReview.types';

const CustomerReview = (props: ICustomerReview) => {
    const { title, rate, className, footerLogo } = props;

    return (
        <CustomerReviewCardCmp className={className}>
            <div className="single-review-wrapper">
                <h2 className="single-reviwe-title">{title}</h2>
                <div className="customer-review-and-rate">
                    <div className="review-and-rate-wrap">
                        <span className="customer-rating">{rate}</span>
                        <Rating disabled value={rate} allowHalf />
                    </div>
                </div>
            </div>
            <div className="single-review-btm-logo">
                <span className="lazy-load-image-loaded">
                    <img src={footerLogo ? Images.TrustpilotFooterLogo?.src : Images.TrustpilotLogo?.src} alt="" className="" width="" height="" />
                </span>
                <span className="lazy-load-image-loaded">
                    <img src={footerLogo ? Images.YelpLogoReviewWhite?.src : Images.YelpLogoReview?.src} alt="" className="" width="" height="" />
                </span>
                <span className="lazy-load-image-loaded">
                    <img src={footerLogo ? Images.GoogleLogoReviewWhite?.src : Images.GoogleLogoReview?.src} alt="" className="" width="" height="" />
                </span>
            </div>
        </CustomerReviewCardCmp>
    );
};

export default CustomerReview;

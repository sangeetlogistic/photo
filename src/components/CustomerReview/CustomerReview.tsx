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
                <p className="single-reviwe-title">{title}</p>
                <div className="customer-review-and-rate">
                    <div className="review-and-rate-wrap">
                        <span className="customer-rating">{rate}</span>
                        <Rating disabled value={rate} allowHalf />
                    </div>
                </div>
            </div>
            <div className="single-review-btm-logo">
                <span className="lazy-load-image-loaded img-1">
                    <img
                        src={footerLogo ? Images.TrustpilotFooterLogo?.src : Images.TrustpilotLogo?.src}
                        alt=""
                        className="img-trust"
                        width=""
                        height=""
                    />
                </span>
                <span className="lazy-load-image-loaded img-2">
                    <img
                        src={footerLogo ? Images.YelpLogoReviewWhite?.src : Images.YelpLogoReview?.src}
                        alt=""
                        className="img-yelp"
                        width=""
                        height=""
                    />
                </span>
                <span className="lazy-load-image-loaded img-3">
                    <img
                        src={footerLogo ? Images.GoogleLogoReviewWhite?.src : Images.GoogleLogoReview?.src}
                        alt=""
                        className="img-google"
                        width=""
                        height=""
                    />
                </span>
            </div>
        </CustomerReviewCardCmp>
    );
};

export default CustomerReview;

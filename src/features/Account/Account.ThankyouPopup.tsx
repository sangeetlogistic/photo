import React from 'react';
import FilledButton from '../../components/FilledButton';
import LazyImage from '../../components/LazyImage';
import { Images } from '../../theme';
import { ThankYouPopupCmp } from './Account.component';

const ThankyouPopup = ({ setThankyouPopup }: any) => {
    const ThankyouPopupContent = (
        <div className="thank-you-popup-wrapper">
            <LazyImage src={Images.LoginPopupImg} alt="" effect="opacity" />
            <div className="thankyou-title-block">
                <h3>Thank you!</h3>
                <p>Hi George, Congratulations your order will be shipped soon!</p>
            </div>
            <div className="thankyou-next-block">
                <h5>next step</h5>
                <p>
                    During the next 24 hours, your order will be shipped to your shipping address, and you will receive confirmation email about it.
                    to track your order check your order details...
                </p>
            </div>
            <FilledButton color="primary" className="btn-review" onClick={() => setThankyouPopup(false)}>
                View My Orders
            </FilledButton>
        </div>
    );

    return <ThankYouPopupCmp onCancel={() => setThankyouPopup(false)} open closable={false} content={ThankyouPopupContent} />;
};

export default ThankyouPopup;

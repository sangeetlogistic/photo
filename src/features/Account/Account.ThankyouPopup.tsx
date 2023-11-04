import React from 'react';

import FilledButton from '../../components/FilledButton';
import { Images } from '../../theme';
import { ThankYouPopupCmp } from './Account.component';
import { useAppSelector } from '../../app/hooks';
import { selectedUserData } from './Account.slice';

const ThankyouPopup = ({ setThankyouPopup, thankyouPopup }: any) => {
    const userData = useAppSelector(selectedUserData);

    const ThankyouPopupContent = (
        <div className="thank-you-popup-wrapper">
            <img src={Images.LoginPopupImg?.src} alt="" />
            <div className="thankyou-title-block">
                <h3>Thank you!</h3>
                <p>
                    Hi {userData?.name || ''} {userData?.surname || ''}, Congratulations your order will be shipped soon!
                </p>
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

    return <ThankYouPopupCmp onCancel={() => setThankyouPopup(false)} open={thankyouPopup} closable={false} content={ThankyouPopupContent} />;
};

export default ThankyouPopup;

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js/pure';
import { STRIPE_PUBLIC_KEY } from '../../constants/predicates';
import ReturnPaymentPage from './ReturnPaymentPage';

loadStripe.setLoadParameters({ advancedFraudSignals: false });
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const ReturnPage = () => (
    <div>
        {stripePromise && (
            <Elements stripe={stripePromise}>
                <ReturnPaymentPage />
            </Elements>
        )}
    </div>
);

export default ReturnPage;

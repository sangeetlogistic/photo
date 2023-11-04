import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import Head from 'next/head';

import { STRIPE_PUBLIC_KEY } from '../../constants/predicates';
import ReturnPaymentPage from '../../features/ReturnPage/ReturnPaymentPage';

loadStripe.setLoadParameters({ advancedFraudSignals: false });
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const ReturnPage = () => (
    <>
        <Head>
            <meta name="robots" content="noindex,,nofollow" />
        </Head>
        <div>
            {stripePromise && (
                <Elements stripe={stripePromise}>
                    <ReturnPaymentPage />
                </Elements>
            )}
        </div>
    </>
);

export default ReturnPage;

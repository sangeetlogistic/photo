import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { Routes } from '../navigation/Routes';
import { Images } from '../theme';
import FilledButton from '../components/FilledButton';
import { FourZeroFourCmp } from '../features/NotFound/NotFound.component';

const ErrorPage = () => {
    const route = useRouter();

    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <FourZeroFourCmp>
                <div className="notfound-img">
                    <img src={Images.FourZeroFour?.src} alt="" />
                    <h1>Oops. Page Not Found.</h1>
                    <p>Sorry, the page you&apos;re looking for cannot be accessed</p>
                    <FilledButton className="back_button" onClick={() => route.push(Routes.home)}>
                        Go To Homepage
                    </FilledButton>
                </div>
            </FourZeroFourCmp>
        </>
    );
};

export default ErrorPage;

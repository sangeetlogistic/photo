import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useAppDispatch } from '../../app/hooks';
import { setNotShowingFooter } from '../../components/Layout/Layout.slice';
import { Routes } from '../../navigation/Routes';
import { FourZeroFourCmp } from './NotFound.component';
import { Images } from '../../theme';
import FilledButton from '../../components/FilledButton';
import { useRouter } from 'next/router';
const NotFound = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setNotShowingFooter(Routes.notFound));
    }, []);
    const history = useRouter();

    return (
        <FourZeroFourCmp>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className="notfound-img">
                <img src={Images.FourZeroFour} alt="" />
                <h1>Oops. Page Not Found.</h1>
                <p>Sorry, the page you&apos;re looking for cannot be accessed</p>
                <FilledButton className="back_button" onClick={() => history.push(Routes.home)}>
                    Go To Homepage
                </FilledButton>
            </div>
        </FourZeroFourCmp>
    );
};

export default NotFound;

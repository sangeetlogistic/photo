import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { setNotShowingFooter } from '../../components/Layout/Layout.slice';
import { Routes } from '../../navigation/Routes';

const NotFound = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setNotShowingFooter(Routes.notFound));
    }, []);

    return <div>NotFound</div>;
};

export default NotFound;

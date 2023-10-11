import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { getCountries } from 'react-phone-number-input';
import { Helmet } from 'react-helmet';

import PersonalDetails from './Account.PersonalDetails';
import MyOrder from './Account.MyOrder';
import { AccountMainCmp, AccountWrapCmp } from './Account.component';
import { Images } from '../../theme';
import FilledButton from '../../components/FilledButton';
import { Routes } from '../../navigation/Routes';
import {
    clearErrors,
    getMyOrderAction,
    selectedUserData,
    selectedWebToken,
    selectedError as selectedAccountError,
    clearOrderDataCardListData,
    selectedLoading,
} from './Account.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { doLoginLinkAction, selectedError } from '../Login/Login.slice';
import { useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/keys';
import LoadingCover from '../../components/LoadingCover';
import { TabActiveKey } from './Accout.constants';
import { GOOGLE_AUTOCOMPLETE_KEY } from '../../constants/predicates';
import Toast from '../../components/Toast';
import { useRouter } from 'next/router';

const keysToRemove = [
    LocalStorageKeys.authUser,
    LocalStorageKeys.orderPageDetail,
    LocalStorageKeys.contectDetail,
    LocalStorageKeys.expireOrder,
    LocalStorageKeys.savedCardDetail,
];

const scriptId = 'google-maps-api';
const Account = () => {
    const history = useRouter();
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();
    const authUser = localStorage.getItem(LocalStorageKeys.authUser);

    const webToken = useAppSelector(selectedWebToken);
    const loginError = useAppSelector(selectedError);
    const accountError = useAppSelector(selectedAccountError);

    const userData = useAppSelector(selectedUserData);

    const loading = useAppSelector(selectedLoading);

    const [status, setStatus] = useState(!!document.getElementById(scriptId));
    const [activekey, setActivekey] = useState<TabActiveKey>(TabActiveKey.myOrder);
    const [progress, setProgress] = useState(0);
    const [showError, setShowError] = useState(false);

    useEffect(
        () => () => {
            dispatch(clearOrderDataCardListData());
        },
        [],
    );

    useEffect(() => {
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_AUTOCOMPLETE_KEY}&libraries=places&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    }, []);

    window.initMap = () => {
        setStatus(true);
    };

    let intervalProgress: any;

    useEffect(() => {
        intervalProgress = setInterval(() => {
            setProgress((prev) => (prev + 1 < 100 ? prev + 1 : 100));
        }, 100);

        return () => {
            clearInterval(intervalProgress);
        };
    }, []);

    useEffect(() => {
        if (userData) {
            const payload = {
                firstName: userData?.name || '',
                surName: userData?.surname || '',
                countryCode: getCountries().find((item: any) => item === userData?.countryName) || 'US',
                phoneNumber: userData?.phoneNumber || '',
                email: userData?.email || '',
            };
            localStorage.setItem(LocalStorageKeys.contectDetail, JSON.stringify(payload));
        }
    }, [userData]);

    useEffect(() => {
        if (loginError || accountError) {
            setShowError(true);
        }

        return () => {
            dispatch(clearErrors());
        };
    }, [loginError, accountError]);

    useEffect(() => {
        (async () => {
            if (!authUser && webToken) {
                const result: any = await dispatch(doLoginLinkAction({ token: webToken }));

                if (result.type === doLoginLinkAction.fulfilled.toString()) {
                    await localStorage.setItem(LocalStorageKeys.authUser, result.payload.token);
                    await dispatch(getMyOrderAction());
                } else if (result.type === doLoginLinkAction.rejected.toString() && result.payload.code === 401) {
                    history.push(Routes.home);
                }
            } else if (authUser) {
                await dispatch(getMyOrderAction());
            }
        })();
    }, [webToken]);

    const handleChangeKey = (key: TabActiveKey) => {
        setActivekey(key);
    };

    const items = [
        {
            label: 'My Orders',
            key: TabActiveKey.myOrder,
            children: <MyOrder progress={progress} setProgress={setProgress} status={status} />,
        },
        {
            label: 'Personal Details',
            key: TabActiveKey.personalDetails,
            children: <PersonalDetails handleChangeKey={handleChangeKey} status={status} />,
        },
    ];

    const handleLogout = async () => {
        keysToRemove.forEach(async (key) => {
            await localStorage.removeItem(key);
        });

        history.push(Routes.home);
    };

    const onTabClick = (key: string) => {
        setActivekey(key as TabActiveKey);
    };

    return (
        <>
            <Helmet>
                <title>Account</title>
            </Helmet>

            {showError && (
                <Toast show={showError} setShow={setShowError} message={loginError?.message || accountError?.message} type="error" showIcon />
            )}

            <AccountMainCmp>
                <AccountWrapCmp>
                    <div className="account-data-block">
                        <div className="account-data-head">
                            <figure className="account-head-icon">
                                <img src={Images.AccountUserIcon} alt="" />
                            </figure>
                            <div className="account-head-right">
                                <div className="account-data-heade-title">
                                    <h3 className="">Hey,</h3>
                                    <h2 className="">{`${userData?.name || ''} ${userData?.surname || ''}!`}</h2>
                                </div>
                                <FilledButton color="primary" className="text-uppercase" onClick={handleLogout}>
                                    Logout
                                </FilledButton>
                            </div>
                        </div>
                        <div className="tab-tracking-block">
                            <Tabs activeKey={activekey} items={items} className="account-tab" onTabClick={onTabClick} />
                        </div>
                    </div>
                </AccountWrapCmp>
                <LoadingCover show={loading} />
            </AccountMainCmp>
        </>
    );
};

export default Account;

import React, { useEffect, useState } from 'react';
import { message, Tabs } from 'antd';
import { useHistory } from 'react-router-dom';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
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

const keysToRemove = [
    LocalStorageKeys.authUser,
    LocalStorageKeys.orderPageDetail,
    LocalStorageKeys.contectDetail,
    LocalStorageKeys.expireOrder,
    LocalStorageKeys.savedCardDetail,
];

const Account = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();
    const authUser = localStorage.getItem(LocalStorageKeys.authUser);

    const webToken = useAppSelector(selectedWebToken);
    const loginError = useAppSelector(selectedError);
    const accountError = useAppSelector(selectedAccountError);

    const userData = useAppSelector(selectedUserData);

    const loading = useAppSelector(selectedLoading);

    const [activekey, setActivekey] = useState<TabActiveKey>(TabActiveKey.myOrder);

    useEffect(
        () => () => {
            dispatch(clearOrderDataCardListData());
        },
        [],
    );

    useEffect(() => {
        if (userData) {
            const payload = {
                firstName: userData?.name || '',
                surName: userData?.surname || '',
                countryCode: getCountries().find((item: any) => getCountryCallingCode(item) === userData?.countryCode) || 'US',
                phoneNumber: userData?.phoneNumber || '',
                email: userData?.email || '',
            };
            localStorage.setItem(LocalStorageKeys.contectDetail, JSON.stringify(payload));
        }
    }, [userData]);

    useEffect(() => {
        if (loginError || accountError) {
            message.error(loginError?.message || accountError?.message);
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
                    history.replace(Routes.home);
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
            children: <MyOrder />,
        },
        {
            label: 'Personal Details',
            key: TabActiveKey.personalDetails,
            children: <PersonalDetails handleChangeKey={handleChangeKey} />,
        },
    ];

    const handleLogout = async () => {
        keysToRemove.forEach(async (key) => {
            await localStorage.removeItem(key);
        });

        history.replace(Routes.home);
    };

    const onTabClick = (key: string) => {
        setActivekey(key as TabActiveKey);
    };

    return (
        <>
            <Helmet>
                <title>Account</title>
            </Helmet>

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
                            {/* <div className="store-credit-balance-wrap">
              <div className="store-credit-balance">
                Store Credit Balance: <span className="balance">$ 199</span>
              </div>
              <HelpIcon className="icon">
                <img src={Images.HelpIcon} alt="" className="" />
              </HelpIcon>
            </div> */}
                        </div>
                    </div>
                </AccountWrapCmp>
                <LoadingCover show={loading} />
            </AccountMainCmp>
        </>
    );
};

export default Account;

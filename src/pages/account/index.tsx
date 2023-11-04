import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { getCountries } from 'react-phone-number-input';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { AccountMainCmp, AccountWrapCmp } from '../../features/Account/Account.component';
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
    storeWebToken,
} from '../../features/Account/Account.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { doLoginLinkAction, selectedError, setLoginPopup } from '../../features/Login/Login.slice';
import { useLocalStorage } from '../../hooks';
import { LocalStorageKeys } from '../../constants/keys';
import { TabActiveKey } from '../../features/Account/Account.constants';
import { GOOGLE_AUTOCOMPLETE_KEY, SITE_URL } from '../../constants/predicates';
import Toast from '../../components/Toast';
import HeaderLayoutCmp from '../../components/Layout/HeaderLayouts';
import SEO from '../../services/API/SEO';
import { statusCode } from '../../constants/statusCode';
import LoadingCover from '../../components/LoadingCover';

const PersonalDetails = dynamic(() => import('../../features/Account/Account.PersonalDetails'), { ssr: false });
const MyOrder = dynamic(() => import('../../features/Account/Account.MyOrder'), { ssr: false });

const keysToRemove = [
    LocalStorageKeys.authUser,
    LocalStorageKeys.orderPageDetail,
    LocalStorageKeys.contectDetail,
    LocalStorageKeys.expireOrder,
    LocalStorageKeys.savedCardDetail,
];

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { getTotalRatingAction } from '../../services/API/GeneralSettings/GeneralSettings.slice';
config.autoAddCss = false;

const authToken = (dispatch: any) => {
    if (typeof window !== 'undefined' && window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);

        const token = urlParams.get('token');
        dispatch(storeWebToken(token));
        const url = window.location.href;

        const modifiedUrl = url.split('?')[0];
        // Reflect the modified URL in the address bar
        window.history.replaceState(null, '', modifiedUrl);
        return token;
    }
    return false;
};

const scriptId = 'google-maps-api';
const Account = ({ seoResult }: any) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();

    const authUser = localStorage?.getItem(LocalStorageKeys.authUser);

    const webToken = useAppSelector(selectedWebToken);
    const loginError = useAppSelector(selectedError);
    const accountError = useAppSelector(selectedAccountError);
    const userData = useAppSelector(selectedUserData);
    const loading = useAppSelector(selectedLoading);

    const [status, setStatus] = useState(false);
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
        if (typeof window !== 'undefined') {
            setStatus(!!document?.getElementById(scriptId));
        }

        if (route?.asPath === Routes.account && !(localStorage?.getItem(LocalStorageKeys.authUser) || authToken(dispatch))) {
            dispatch(setLoginPopup(true));
            route?.push(Routes.home);
        }

        dispatch(getTotalRatingAction());
    }, []);

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

    if (typeof window !== 'undefined') {
        window.initMap = () => {
            setStatus(true);
        };
    }

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
            localStorage?.setItem(LocalStorageKeys.contectDetail, JSON.stringify(payload));
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
                    await localStorage?.setItem(LocalStorageKeys.authUser, result.payload.token);
                    await dispatch(getMyOrderAction());
                } else if (result.type === doLoginLinkAction.rejected.toString() && result.payload.code === 401) {
                    route.push(Routes.home);
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
            await localStorage?.removeItem(key);
        });

        route.push(Routes.home);
    };

    const onTabClick = (key: string) => {
        setActivekey(key as TabActiveKey);
    };
    return (
        <>
            <Head>
                <link rel="canonical" href={`${SITE_URL}${route.asPath}`} key="canonical" />
                <title>{seoResult?.title}</title>
                <meta name="robots" content="noindex,nofollow" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}${route.route}`} />
                <meta property="og:site_name" content={SITE_URL} />
                <meta property="og:updated_time" content={seoResult?.updatedAt} />
                <meta property="og:title" content={seoResult?.title} />
                <meta property="og:description" content={seoResult?.description || ''} />
                <meta name="description" content={seoResult?.description || ''} />
                <meta property="og:image" content={seoResult?.imageUrl || ''} />

                <meta name="twitter:title" content={seoResult?.title} />
                <meta name="twitter:description" content={seoResult?.description || ''} />
                <meta name="twitter:image" content={seoResult?.imageUrl} />
            </Head>
            <HeaderLayoutCmp key={null} type="" props={undefined}>
                {showError && (
                    <Toast show={showError} setShow={setShowError} message={loginError?.message || accountError?.message} type="error" showIcon />
                )}

                <AccountMainCmp>
                    <AccountWrapCmp>
                        <div className="account-data-block">
                            <div className="account-data-head">
                                <figure className="account-head-icon">
                                    <img src={Images.AccountUserIcon?.src} alt="" />
                                </figure>
                                <div className="account-head-right">
                                    <div className="account-data-heade-title">
                                        <h3 className="">Hey,</h3>
                                        {userData && <h2 className="">{`${userData?.name || ''} ${userData?.surname || ''}!`}</h2>}
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
                </AccountMainCmp>
            </HeaderLayoutCmp>
            <LoadingCover show={loading} />
        </>
    );
};

export default Account;

export const getServerSideProps = async (context) => {
    const slug = context.resolvedUrl.split('/')[1];
    const finalSlug = slug?.split('?')[0];

    let seoResult: any = '';
    try {
        const response = await SEO.getSeoDetail({ slug: finalSlug });
        if (response.status === statusCode.success) {
            seoResult = response?.data?.data;
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        seoResult = null;
    }

    return {
        props: {
            seoResult,
        },
    };
};

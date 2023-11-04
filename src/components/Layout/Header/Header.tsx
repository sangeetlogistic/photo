/* eslint-disable max-lines-per-function */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Images } from '../../../theme';
import { MainHeader } from './Header.component';
import MegaMenu from './Header.MegaMenu';
import { MenuType } from './Header.constants';
import FilledButton from '../../FilledButton';
import { useDeviceDetect, useHover, useLocalStorage } from '../../../hooks';
import { Routes } from '../../../navigation/Routes';
import MobileMegaMenu from './Header.MobileMegaMenu';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectIsAfterBeforeSliderMoving, selectMobileOpenMenu, setMobileOpenMenu } from '../Layout.slice';
import { setLoginPopup } from '../../../features/Login/Login.slice';
import LoginPopup from '../../../features/Login/Login.Popup';
import { LocalStorageKeys } from '../../../constants/keys';
import FAQ from './Header.FAQ';
import GalleryMenu from './Header.GalleryMenu';
import PriceAndTimingMenu from './Header.PriceAndTimingMenu';

const Header = () => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();

    const mobileOpenMenu = useAppSelector(selectMobileOpenMenu);
    const isAfterBeforeSliderMoving = useAppSelector(selectIsAfterBeforeSliderMoving);

    const { isMobile } = useDeviceDetect();

    const [showFixedBtn, setShowFixedBtn] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showPricing, setShowPricing] = useState(false);
    const [showHowItWorks, setShowHowItWorks] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState<MenuType | null>(null);

    const mobileMenu = useMemo(() => mobileOpenMenu.includes('mobileMegaMenu'), [mobileOpenMenu]);

    useEffect(() => {
        if (route.asPath) {
            dispatch(setMobileOpenMenu(['']));
            setShowSubMenu(null);
        }
    }, [route.asPath]);

    useEffect(() => {
        const handleScroll = () => {
            setShowFixedBtn(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const tagManagerArgs = {
            gtmId: 'GTM-MQBRL8R',
        };
        const tagFun = setTimeout(() => {
            TagManager.initialize(tagManagerArgs);

            TagManager.dataLayer({
                dataLayer: {
                    event: 'pageview',
                    pagePath: window.location.pathname,
                },
            });
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(tagFun);
        };
    }, [route.asPath]);

    useEffect(() => {
        if (isMobile) {
            if (mobileMenu || isAfterBeforeSliderMoving) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        }
    }, [mobileMenu, isAfterBeforeSliderMoving]);

    const handleUser = () => {
        if (localStorage?.getItem(LocalStorageKeys.authUser)) {
            route.push(Routes.account);
        } else {
            dispatch(setLoginPopup(true));
        }
    };

    const handleLink = (e: any) => {
        e.preventDefault();
    };

    const handleSubmenu = (submenu: MenuType) => {
        setShowSubMenu(submenu);
    };

    const mobileItems: MenuProps['items'] = [
        {
            className: 'mobile-user-icon',
            label: (
                <span onClick={handleUser} tabIndex={0} role="button">
                    <span className="lazy-load-image-background">
                        <img alt="" src={Images.IconMobileMenuUser?.src} width="30" height="30" />
                    </span>
                </span>
            ),
            key: 'mobileMenuUser',
        },
        {
            className: 'mobile-toggle-icon',
            label: <span className="mega-toggle-animated-box"></span>,
            key: 'mobileMegaMenu',
            popupClassName: 'mobile-mega-menu-1 mobile-mega-menu',
            children: [
                {
                    label: (
                        <MobileMegaMenu
                            showGallery={showGallery}
                            setShowGallery={setShowGallery}
                            showPricing={showPricing}
                            setShowPricing={setShowPricing}
                            showHowItWorks={showHowItWorks}
                            setShowHowItWorks={setShowHowItWorks}
                        />
                    ),
                    key: 'mobileMenu',
                    style: { height: '100%' },
                    className: 'mobile-mega-menu-li',
                },
            ],
            onTitleClick: (info) => dispatch(setMobileOpenMenu(mobileMenu ? [''] : [info.key])),
        },
    ];

    return (
        <>
            <MainHeader
                className={`header-top ${isMobile && mobileMenu ? 'mobile-menu-open' : ''} ${
                    showGallery || showPricing || showHowItWorks ? 'mobile-detail-menu' : ''
                }`}
                onMouseLeave={() => setShowSubMenu?.(null)}
            >
                <div className="header-container">
                    <button
                        className="mobile-menu-back-btn"
                        type="button"
                        onClick={() => {
                            setShowGallery(false);
                            setShowPricing(false);
                            setShowHowItWorks(false);
                        }}
                    >
                        <img src={Images.IconBackArrowBlack.src} alt="" className="" />
                    </button>
                    <div className="site-logo" onClick={() => route.push(Routes.home)} tabIndex={0} role="button">
                        <span className="lazy-load-image-loaded">
                            <img src={Images.LogoImg?.src} alt="" className="" width="172" height="42" />
                        </span>
                    </div>
                    {!isMobile ? (
                        <div className="p2p-menu">
                            <div className="p2p-menu-wrap">
                                <ul className="top-menu">
                                    <li className="top-nav-item" onMouseEnter={() => setShowSubMenu(null)}>
                                        <Link className={route.asPath === '/' ? 'active' : ''} href={Routes.home}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="top-nav-item dropdown-gallery" onMouseEnter={() => handleSubmenu(MenuType.Gallery)}>
                                        <Link
                                            className={`top-nav-link ${showSubMenu === MenuType.Gallery ? 'active' : ''}`}
                                            href={{ href: undefined }}
                                            onClick={handleLink}
                                        >
                                            Gallery
                                        </Link>
                                    </li>
                                    <li
                                        className="top-nav-item dropdown-pricetime"
                                        onMouseEnter={() => handleSubmenu(MenuType.PricingAndTiming)}
                                        onClick={() => route.push(Routes.pricingTiming)}
                                    >
                                        <Link
                                            className={`top-nav-link ${
                                                showSubMenu === MenuType.PricingAndTiming || route.asPath === '/pricing-timing' ? 'active' : ''
                                            }`}
                                            href={{ href: undefined }}
                                            onClick={handleLink}
                                        >
                                            Pricing &amp; Timing
                                        </Link>
                                    </li>
                                    <li
                                        className="top-nav-item dropdown-faq"
                                        onMouseEnter={() => handleSubmenu(MenuType.FAQ)}
                                        onClick={() => route.push(Routes.ourFaq)}
                                    >
                                        <Link
                                            className={`top-nav-link ${showSubMenu === MenuType.FAQ || route.asPath === '/our-faq' ? 'active' : ''}`}
                                            href={{ href: undefined }}
                                            onClick={handleLink}
                                        >
                                            HOW IT WORKS
                                        </Link>
                                    </li>
                                    <li className="top-nav-item">
                                        <Link className="user-icon" href={{ href: undefined }}>
                                            <span tabIndex={0} role="button" onClick={handleUser} className="lazy-load-image-background">
                                                <img alt="" src={Images.UserIconSvg?.src} width="14" height="21" />
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="top-nav-item get-started-btn-li">
                                        <FilledButton color="secondaryGRD" onClick={() => route.push(Routes.orderStep.replace(':id', '1'))}>
                                            GET STARTED
                                        </FilledButton>
                                    </li>
                                    <li className={`top-nav-item get-started-btn-li header-cta ${!showFixedBtn ? 'hide-getStartedCTA' : ''}`}>
                                        <FilledButton color="secondaryGRD" onClick={() => route.push(Routes.orderStep.replace(':id', '1'))}>
                                            GET STARTED
                                        </FilledButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="p2p-menu">
                            <div className="p2p-menu-mobile-wrap">
                                <Menu mode="horizontal" items={mobileItems} className="mobile-top-menu" openKeys={mobileOpenMenu} />
                            </div>
                        </div>
                    )}
                </div>

                <GalleryMenu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />
                <PriceAndTimingMenu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />
                <FAQ showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />
            </MainHeader>
            <LoginPopup />
        </>
    );
};

export default Header;

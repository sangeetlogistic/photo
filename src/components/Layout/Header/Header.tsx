/* eslint-disable max-lines-per-function */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagManager from 'react-gtm-module';
import { usePathname } from 'next/navigation';

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
import { selectedLoading, setLoginPopup } from '../../../features/Login/Login.slice';
import LoadingCover from '../../LoadingCover';
import LoginPopup from '../../../features/Login/Login.Popup';
import { LocalStorageKeys } from '../../../constants/keys';
import { useRouter } from 'next/router';

const Header = () => {
    const history = useRouter();
    const dispatch = useAppDispatch();
    const pathname = usePathname();

    const mobileOpenMenu = useAppSelector(selectMobileOpenMenu);
    const loading = useAppSelector(selectedLoading);
    const isAfterBeforeSliderMoving = useAppSelector(selectIsAfterBeforeSliderMoving);

    const { isMobile } = useDeviceDetect();

    const [openMenu, setOpenMenu] = useState<string[] | []>(['']);
    const [showFixedBtn, setShowFixedBtn] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showPricing, setShowPricing] = useState(false);
    const [showHowItWorks, setShowHowItWorks] = useState(false);

    const subMenuRef = useRef<any>(null);
    const menuRef = useRef<any>(null);

    const mobileMenu = useMemo(() => mobileOpenMenu.includes('mobileMegaMenu'), [mobileOpenMenu]);

    useHover(subMenuRef, () => {
        if (!menuRef?.current) {
            setOpenMenu(['']);
        }
    });

    useEffect(() => {
        if (pathname) {
            setOpenMenu(['']);
            dispatch(setMobileOpenMenu(['']));
        }
    }, [pathname]);

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
    }, [pathname]);

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
        if (localStorage.getItem(LocalStorageKeys.authUser)) {
            history.push(Routes.account);
        } else {
            dispatch(setLoginPopup(true));
        }
    };

    const items: MenuProps['items'] = [
        {
            label: 'Home',
            key: MenuType.Home,
            className: `${pathname === Routes.home ? 'p2p-menu-item-selected' : ''}`,
            onClick: (info) => history.push(Routes.home),
            onMouseEnter: (info) => setOpenMenu([info.key]),
        },
        {
            label: 'Gallery',
            key: MenuType.Gallery,
            popupClassName: 'gallery-mega-menu mega-menu',
            children: [
                {
                    label: <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} ref={subMenuRef} />,
                    key: 'galleryMenu',
                    style: { height: 'fit-content' },
                    className: 'gallery-mega-menu-li mega-menu-li',
                },
            ],
            onMouseEnter: (info) => setOpenMenu([info.key]),
        },
        {
            label: 'Pricing & Timing',
            key: MenuType.PricingAndTiming,
            popupClassName: 'price-timing-meage-menu mega-menu',
            children: [
                {
                    label: <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} ref={subMenuRef} />,
                    key: 'price&TimingMenu',
                    style: { height: 'fit-content' },
                    className: 'price-and-timing-mega-menu-li mega-menu-li',
                },
            ],
            onMouseEnter: (info) => setOpenMenu([info.key]),
            onTitleClick: () => history.push(Routes.pricingTiming),
        },
        {
            label: 'HOW IT WORKS',
            key: MenuType.FAQ,
            className: `${pathname === Routes.ourFaq ? 'p2p-menu-item-selected' : ''}`,
            popupClassName: 'how-it-work-meage-menu mega-menu',
            children: [
                {
                    label: <MegaMenu openMenu={openMenu} setOpenMenu={setOpenMenu} ref={subMenuRef} />,
                    key: 'faqMenu',
                    style: { height: 'fit-content' },
                    className: 'how-it-work-meage-menu-li mega-menu-li',
                },
            ],
            onMouseEnter: (info) => setOpenMenu([info.key]),
            onTitleClick: () => history.push(Routes.ourFaq),
        },
        {
            className: 'user-icon',
            label: (
                <span tabIndex={0} role="button" onClick={handleUser} className="lazy-load-image-background">
                    <img alt="" src={Images.UserIconSvg?.src} width="14" height="21" />
                </span>
            ),
            key: 'user',
        },
        {
            className: 'get-started-btn-li',
            label: (
                <FilledButton color="secondaryGRD" onClick={() => history.push(Routes.orderStep.replace(':id', '1'))}>
                    GET STARTED
                </FilledButton>
            ),
            key: 'getStarted',
        },
        {
            className: `get-started-btn-li header-cta ${!showFixedBtn ? 'hide-getStartedCTA' : ''}`,
            label: (
                <FilledButton color="secondaryGRD" onClick={() => history.push(Routes.orderStep.replace(':id', '1'))}>
                    GET STARTED
                </FilledButton>
            ),
            key: 'getStartedCTA',
        },
    ];

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
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <div className="site-logo" onClick={() => history.push(Routes.home)} tabIndex={0} role="button">
                        <span className="lazy-load-image-loaded">
                            <img src={Images.LogoImg?.src} alt="" className="" width="172" height="42" />
                        </span>
                    </div>
                    {!isMobile ? (
                        <div className="p2p-menu">
                            <div className="p2p-menu-wrap" ref={menuRef} onMouseLeave={() => setOpenMenu([''])}>
                                <Menu selectedKeys={['home']} mode="horizontal" items={items} className="top-menu" openKeys={openMenu} />
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
            </MainHeader>
            <LoginPopup />
            <LoadingCover show={loading} />
        </>
    );
};

export default Header;

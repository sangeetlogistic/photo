import React, { useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

import { paintingProcess } from '../../../constants/general';
import { Routes } from '../../../navigation/Routes';
import { Images } from '../../../theme';
import BannerVideo from '../../BannerVideo';
import { MenuType } from './Header.constants';

const GalleryMenu = ({ title, mobileClassName, hideVideo = false }: { title?: string; mobileClassName?: string; hideVideo?: boolean }) => {
    const [selectedMenuItemKey, setselectedMenuItemKey] = useState<any>([]);
    const onMenuItemClick = (item: any) => setselectedMenuItemKey([item.key]);

    return (
        <div className={`mega-menu-container ${mobileClassName || ''} `}>
            <h2>{title || ''}</h2>
            <div className="mega-menu-shadow"></div>
            <div className="mega-menu-video">
                {!hideVideo && paintingProcess && <BannerVideo bannerVideo={paintingProcess} poster={Images.TourPaintingVideoThumb?.src} />}
            </div>
            <div className="mega-menu-link-block">
                <h2 className="mega-menu-title">Our Themes</h2>
                <Menu
                    className="mega-menu-link-1"
                    items={[
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customIndividualPortraits}>
                                    Individual Portraits
                                </Link>
                            ),
                            key: 'individualPortraits',
                        },
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customChildrenPortraits}>
                                    Children Portraits
                                </Link>
                            ),
                            key: 'childrenPortraits',
                        },
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customCouplePortraits}>
                                    Couple Portraits
                                </Link>
                            ),
                            key: 'couplePortraits',
                        },
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customFamilyPortraits}>
                                    Family Portraits
                                </Link>
                            ),
                            key: 'familyPortraits',
                        },
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customCatPortraits}>
                                    Cat Portraits
                                </Link>
                            ),
                            key: 'catPortraits',
                        },
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customDogPortraits}>
                                    Dog Portraits
                                </Link>
                            ),
                            key: 'dogPortraits',
                        },
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customPetPortraits}>
                                    Pet Portraits
                                </Link>
                            ),
                            key: 'petPortraits',
                        },
                        {
                            label: (
                                <Link className="mega-menu-link-text" href={Routes.customLandscapePortraits}>
                                    Landscape Portraits
                                </Link>
                            ),
                            key: 'landscapePortraits',
                        },
                    ]}
                    selectedKeys={selectedMenuItemKey}
                    onClick={onMenuItemClick}
                />

                <h2 className="mega-menu-title">We paint in</h2>
                <Menu
                    className="mega-menu-link-2"
                    items={[
                        {
                            label: (
                                <Link href={Routes.customOilPaintings}>
                                    <figure className="mega-menu-link-icon">
                                        <span className="lazy-load-image-loaded">
                                            <img src={Images.PaintingTypeOil?.src} alt="" className="" />
                                        </span>
                                    </figure>
                                    <span className="mega-menu-link-text">Oil</span>
                                </Link>
                            ),
                            key: 'oil',
                        },
                        {
                            label: (
                                <Link href={Routes.customAcrylicPaintings}>
                                    <figure className="mega-menu-link-icon">
                                        <span className="lazy-load-image-loaded">
                                            <img src={Images.PaintingTypeAcrilic?.src} alt="" className="" />
                                        </span>
                                    </figure>
                                    <span className="mega-menu-link-text">Acrylic</span>
                                </Link>
                            ),
                            key: 'acrylic',
                        },
                        {
                            label: (
                                <Link href={Routes.customColorPencilPaintings}>
                                    <figure className="mega-menu-link-icon">
                                        <span className="lazy-load-image-loaded">
                                            <img src={Images.PaintingTypeColoredPencil?.src} alt="" className="" />
                                        </span>
                                    </figure>
                                    <span className="mega-menu-link-text">Color Pencil</span>
                                </Link>
                            ),
                            key: 'colorPencil',
                        },
                        {
                            label: (
                                <Link href={Routes.customCharcoalPaintings}>
                                    <figure className="mega-menu-link-icon">
                                        <span className="lazy-load-image-loaded">
                                            <img src={Images.PaintingTypeCharcoal?.src} alt="" className="" />
                                        </span>
                                    </figure>
                                    <span className="mega-menu-link-text">Charcoal</span>
                                </Link>
                            ),
                            key: 'charcoal',
                        },
                        {
                            label: (
                                <Link href={Routes.customWatercolorPaintings}>
                                    <figure className="mega-menu-link-icon">
                                        <span className="lazy-load-image-loaded">
                                            <img src={Images.PaintingTypeWatercolor?.src} alt="" className="" />
                                        </span>
                                    </figure>
                                    <span className="mega-menu-link-text">Watercolor</span>
                                </Link>
                            ),
                            key: 'watercolor',
                        },
                        {
                            label: (
                                <Link href={Routes.customPencilDrawingsPaintings}>
                                    <figure className="mega-menu-link-icon">
                                        <span className="lazy-load-image-loaded">
                                            <img src={Images.PaintingTypeBlackPencil?.src} alt="" className="" />
                                        </span>
                                    </figure>
                                    <span className="mega-menu-link-text">Black Pencil</span>
                                </Link>
                            ),
                            key: 'blackPencil',
                        },
                    ]}
                    selectedKeys={selectedMenuItemKey}
                    onClick={onMenuItemClick}
                />
            </div>
        </div>
    );
};

export default GalleryMenu;

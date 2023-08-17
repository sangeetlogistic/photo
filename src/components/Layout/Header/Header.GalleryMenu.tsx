import React, { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

import { paintingProcess } from '../../../constants/general';
import { Routes } from '../../../navigation/Routes';
import { Images } from '../../../theme';
import BannerVideo from '../../BannerVideo';
import LazyImage from '../../LazyImage';

const GalleryMenu = ({ title, mobileClassName, hideVideo = false }: { title?: string; mobileClassName?: string; hideVideo?: boolean }) => {
    const history = useHistory();

    const [selectedMenuItemKey, setselectedMenuItemKey] = useState<any>([]);
    const onMenuItemClick = (item: any) => setselectedMenuItemKey([item.key]);

    return (
        <div className={`mega-menu-container ${mobileClassName || ''}`}>
            <h2>{title || ''}</h2>
            <div className="mega-menu-shadow"></div>
            <div className="mega-menu-video">
                {!hideVideo && paintingProcess && <BannerVideo bannerVideo={paintingProcess} poster={Images.TourPaintingVideoThumb} />}
            </div>
            <div className="mega-menu-link-block">
                <h2 className="mega-menu-title">Our Themes</h2>
                <Menu
                    className="mega-menu-link-1"
                    items={[
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customIndividualPortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Individual Portraits
                                </span>
                            ),
                            key: 'individualPortraits',
                        },
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customChildrenPortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Children Portraits
                                </span>
                            ),
                            key: 'childrenPortraits',
                        },
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customCouplePortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Couple Portraits
                                </span>
                            ),
                            key: 'couplePortraits',
                        },
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customFamilyPortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Family Portraits
                                </span>
                            ),
                            key: 'familyPortraits',
                        },
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customCatPortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Cat Portraits
                                </span>
                            ),
                            key: 'catPortraits',
                        },
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customDogPortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Dog Portraits
                                </span>
                            ),
                            key: 'dogPortraits',
                        },
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customPetPortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Pet Portraits
                                </span>
                            ),
                            key: 'petPortraits',
                        },
                        {
                            label: (
                                <span
                                    className="mega-menu-link-text"
                                    onClick={() => history.push(Routes.customLandscapePortraits)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    Landscape Portraits
                                </span>
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
                                <span onClick={() => history.push(Routes.customOilPaintings)} role="button" tabIndex={0}>
                                    <figure className="mega-menu-link-icon">
                                        <LazyImage effect="opacity" src={Images.PaintingTypeOil} alt="" className="" />
                                    </figure>
                                    <span className="mega-menu-link-text">Oil</span>
                                </span>
                            ),
                            key: 'oil',
                        },
                        {
                            label: (
                                <span onClick={() => history.push(Routes.customAcrylicPaintings)} role="button" tabIndex={0}>
                                    <figure className="mega-menu-link-icon">
                                        <LazyImage effect="opacity" src={Images.PaintingTypeAcrilic} alt="" className="" />
                                    </figure>
                                    <span className="mega-menu-link-text">Acrylic</span>
                                </span>
                            ),
                            key: 'acrylic',
                        },
                        {
                            label: (
                                <span onClick={() => history.push(Routes.customColorPencilPaintings)} role="button" tabIndex={0}>
                                    <figure className="mega-menu-link-icon">
                                        <LazyImage effect="opacity" src={Images.PaintingTypeColoredPencil} alt="" className="" />
                                    </figure>
                                    <span className="mega-menu-link-text">Color Pencil</span>
                                </span>
                            ),
                            key: 'colorPencil',
                        },
                        {
                            label: (
                                <span onClick={() => history.push(Routes.customCharcoalPaintings)} role="button" tabIndex={0}>
                                    <figure className="mega-menu-link-icon">
                                        <LazyImage effect="opacity" src={Images.PaintingTypeCharcoal} alt="" className="" />
                                    </figure>
                                    <span className="mega-menu-link-text">Charcoal</span>
                                </span>
                            ),
                            key: 'charcoal',
                        },
                        {
                            label: (
                                <span onClick={() => history.push(Routes.customWatercolorPaintings)} role="button" tabIndex={0}>
                                    <figure className="mega-menu-link-icon">
                                        <LazyImage effect="opacity" src={Images.PaintingTypeWatercolor} alt="" className="" />
                                    </figure>
                                    <span className="mega-menu-link-text">Watercolor</span>
                                </span>
                            ),
                            key: 'watercolor',
                        },
                        {
                            label: (
                                <span onClick={() => history.push(Routes.customPencilDrawingsPaintings)} role="button" tabIndex={0}>
                                    <figure className="mega-menu-link-icon">
                                        <LazyImage effect="opacity" src={Images.PaintingTypeBlackPencil} alt="" className="" />
                                    </figure>
                                    <span className="mega-menu-link-text">Black Pencil</span>
                                </span>
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

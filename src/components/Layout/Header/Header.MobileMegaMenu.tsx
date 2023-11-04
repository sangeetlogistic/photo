import React from 'react';

import GalleryMenu from './Header.MobileGalleryMenu';
import PriceAndTimingMenu from './Header.MobilePriceAndTimingMenu';
import { MenuType } from './Header.constants';
import BannerVideo from '../../BannerVideo';
import { paintingProcess } from '../../../constants/general';
import { Images } from '../../../theme';
import MobileFAQ from './Header.MobileFAQ';

const MobileMegaMenu = ({
    showGallery,
    setShowGallery,
    showPricing,
    setShowPricing,
    showHowItWorks,
    setShowHowItWorks,
}: {
    showGallery: boolean;
    setShowGallery: React.Dispatch<React.SetStateAction<boolean>>;
    showPricing: boolean;
    setShowPricing: React.Dispatch<React.SetStateAction<boolean>>;
    showHowItWorks: boolean;
    setShowHowItWorks: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
    <>
        {!showGallery && !showPricing && !showHowItWorks && (
            <div className="mobile-menu-list">
                <div className="mobile-menu-link" onClick={() => setShowGallery(true)} tabIndex={0} role="button">
                    {MenuType.Gallery.toUpperCase()}
                    <i className="icon-next">
                        <img src={Images.IconChevronRightBlack.src} alt="" className="" />
                    </i>
                </div>
                <div className="mobile-menu-link" onClick={() => setShowPricing(true)} tabIndex={0} role="button">
                    {MenuType.PricingAndTiming.toUpperCase()}
                    <i className="icon-next">
                        <img src={Images.IconChevronRightBlack.src} alt="" className="" />
                    </i>
                </div>
                <div className="mobile-menu-link" onClick={() => setShowHowItWorks(true)} tabIndex={0} role="button">
                    {MenuType.HOWITWORKS.toUpperCase()}
                    <i className="icon-next">
                        <img src={Images.IconChevronRightBlack.src} alt="" className="" />
                    </i>
                </div>
                <div className="mega-menu-video">
                    {paintingProcess && <BannerVideo bannerVideo={paintingProcess} poster={Images.TourPaintingVideoThumb?.src} />}
                </div>
            </div>
        )}
        {showGallery && (
            <GalleryMenu hideVideo title={MenuType.Gallery.toUpperCase()} mobileClassName="mobile-mega-menu-container mobile-mega-menu-gallery" />
        )}
        {showPricing && (
            <PriceAndTimingMenu
                title={MenuType.PricingAndTiming.toUpperCase()}
                mobileClassName="mobile-mega-menu-container mobile-mega-menu-pricing"
            />
        )}
        {showHowItWorks && <MobileFAQ title={MenuType.HOWITWORKS.toUpperCase()} mobileClassName="mobile-mega-menu-container mobile-mega-menu-faq" />}
    </>
);

export default MobileMegaMenu;

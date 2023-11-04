import React, { forwardRef, useMemo } from 'react';

import { MenuType } from './Header.constants';
import GalleryMenu from './Header.GalleryMenu';
import { Images } from '../../../theme';
import PriceAndTimingMenu from './Header.PriceAndTimingMenu';
import FAQ from './Header.FAQ';

interface IMegaMenu {
    openMenu: string[];
    setOpenMenu: React.Dispatch<React.SetStateAction<[] | string[]>>;
}

const MegaMenu = forwardRef((props: IMegaMenu, ref: any) => {
    const { openMenu, setOpenMenu } = props;

    const menuItems = useMemo(() => {
        if (openMenu.includes(MenuType.Gallery)) {
            return <GalleryMenu />;
        }
        if (openMenu.includes(MenuType.PricingAndTiming)) {
            return <PriceAndTimingMenu />;
        }
        if (openMenu.includes(MenuType.FAQ)) {
            return <FAQ />;
        }
        return undefined;
    }, []);

    const closeMenu = () => {
        setOpenMenu(['']);
    };

    return (
        <div ref={ref}>
            {menuItems}
            <div className="menu-close-btn" onClick={closeMenu} role="button" tabIndex={0}>
                <img src={Images.MenuCloseIcon?.src} alt="" className="" width="" />
            </div>
        </div>
    );
});

export default MegaMenu;

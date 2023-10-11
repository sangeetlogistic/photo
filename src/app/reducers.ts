import { combineReducers } from '@reduxjs/toolkit';
// import { connectRouter } from 'connected-react-router';
import LayoutSlice from '../components/Layout/Layout.slice';
import AccountSlice from '../features/Account/Account.slice';
import HomeSlice from '../features/Home/Home.slice';
import LoginSlice from '../features/Login/Login.slice';
import OrderStepSlice from '../features/OrderStep/OrderStep.slice';
import PaintingsSlice from '../features/Paintings/Paintings.slice';
import PortraitsSlice from '../features/Portraits/Portraits.slice';
import BlogSlice from '../features/Blog/Blog.slice';
import gallerySlice from '../features/Gallery/Gallery.slice';
import pricingTimingSlice from '../features/PricingTiming/PricingTiming.slice';
import settingSlice from '../services/API/GeneralSettings/GeneralSettings.slice';
import faqSlice from '../features/Faq/Faq.slice';

const createRootReducer = () =>
    combineReducers({
        home: HomeSlice,
        layout: LayoutSlice,
        orderStep: OrderStepSlice,
        portraits: PortraitsSlice,
        paintings: PaintingsSlice,
        login: LoginSlice,
        account: AccountSlice,
        blog: BlogSlice,
        gallery: gallerySlice,
        pricingTiming: pricingTimingSlice,
        settings: settingSlice,
        faq: faqSlice,
        // router: connectRouter(history),
    });

export default createRootReducer;

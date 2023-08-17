import Faq from '../features/Faq/Loadable';
import Paintings from '../features/Paintings/Loadable';
import Portraits from '../features/Portraits/Loadable';
import Home from '../features/Home';
import { Routes } from './Routes';
import OrderStep from '../features/OrderStep/Loadable';
import NotFound from '../features/NotFound/Loadable';
import Thankyou from '../features/Thankyou/Loadable';
import Account from '../features/Account/Loadable';
import AboutUs from '../features/AboutUs/Loadable';
import Privacy from '../features/Privacy/Loadable';
import CCPA from '../features/CCPA/Loadable';
import Blog from '../features/Blog/Loadable';
import TermsCondition from '../features/Terms&Condition/Loadable';
import CookiePolicy from '../features/CookiePolicy/Loadable';
import PricingTiming from '../features/PricingTiming/Loadable';
import GalleryTheme from '../features/GalleryTheme/Loadable';
import GalleryMedium from '../features/GalleryMedium/Loadable';

export const LayoutScreens = {
    CustomIndividualPortraits: {
        path: Routes.customIndividualPortraits,
        component: Portraits,
    },
    CustomChildrenPortraits: {
        path: Routes.customChildrenPortraits,
        component: Portraits,
    },
    CustomCouplePortraits: {
        path: Routes.customCouplePortraits,
        component: Portraits,
    },
    CustomFamilyPortraits: {
        path: Routes.customFamilyPortraits,
        component: Portraits,
    },
    CustomCatPortraits: {
        path: Routes.customCatPortraits,
        component: Portraits,
    },
    CustomDogPortraits: {
        path: Routes.customDogPortraits,
        component: Portraits,
    },
    CustomPetPortraits: {
        path: Routes.customPetPortraits,
        component: Portraits,
    },
    CustomLandscapePortraits: {
        path: Routes.customLandscapePortraits,
        component: Portraits,
    },
    CustomOilPaintings: {
        path: Routes.customOilPaintings,
        component: Paintings,
    },
    CustomAcrylicPaintings: {
        path: Routes.customAcrylicPaintings,
        component: Paintings,
    },
    CustomColorPencilPaintings: {
        path: Routes.customColorPencilPaintings,
        component: Paintings,
    },
    CustomCharcoalPaintings: {
        path: Routes.customCharcoalPaintings,
        component: Paintings,
    },
    CustomWatercolorPaintings: {
        path: Routes.customWatercolorPaintings,
        component: Paintings,
    },
    CustomPencilDrawingsPaintings: {
        path: Routes.customPencilDrawingsPaintings,
        component: Paintings,
    },
    Faq: { path: Routes.ourFaq, component: Faq },
    AboutUs: { path: Routes.aboutUs, component: AboutUs },
    Privacy: { path: Routes.privacy, component: Privacy },
    CCPA: { path: Routes.ccpa, component: CCPA },
    Blog: { path: Routes.blog, component: Blog },
    TermsCondition: { path: Routes.termsCondition, component: TermsCondition },
    CookiePolicy: { path: Routes.cookiePolicy, component: CookiePolicy },
    PricingTiming: { path: Routes.pricingTiming, component: PricingTiming },
    GalleryTheme: { path: Routes.galleryTheme, component: GalleryTheme },
    GalleryMedium: { path: Routes.galleryMedium, component: GalleryMedium },
    Home: {
        path: Routes.home,
        component: Home,
        exact: true,
    },
};

export const NonLayoutScreens = {
    NotFound: { path: Routes.notFound, component: NotFound },
};

export const HeaderScreens = {
    OrderStep: { path: Routes.orderStep, component: OrderStep },
    Thankyou: { path: Routes.thankYou, component: Thankyou },
    Account: { path: Routes.account, component: Account },
};

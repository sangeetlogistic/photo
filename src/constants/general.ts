import { Routes } from '../navigation/Routes';

export const homeHeroVideo = 'https://media.image2painting.com/staging/upload/home_video/hero.mp4';

// Header Video
export const paintingProcess = 'https://media.image2painting.com/staging/upload/video/4461685607754446.mp4';
export const faqVideo = 'https://media.image2painting.com/staging/upload/video/4491685607603449.mp4';

export const portraitsGallery = [
    Routes.customIndividualPortraits,
    Routes.customChildrenPortraits,
    Routes.customCouplePortraits,
    Routes.customFamilyPortraits,
    Routes.customCatPortraits,
    Routes.customDogPortraits,
    Routes.customPetPortraits,
    Routes.customLandscapePortraits,
    Routes.drawingPortrait,
];
export const sketchGallery = [
    Routes.customOilPaintings,
    Routes.customAcrylicPaintings,
    Routes.customColorPencilPaintings,
    Routes.customCharcoalPaintings,
    Routes.customWatercolorPaintings,
    Routes.customPencilDrawingsPaintings,
];

export const separateNotToGoNoFound = [
    Routes.customIndividualPortraits,
    Routes.customChildrenPortraits,
    Routes.customCouplePortraits,
    Routes.customFamilyPortraits,
    Routes.customCatPortraits,
    Routes.customDogPortraits,
    Routes.customPetPortraits,
    Routes.customLandscapePortraits,
    Routes.drawingPortrait,
    Routes.customOilPaintings,
    Routes.customAcrylicPaintings,
    Routes.customColorPencilPaintings,
    Routes.customCharcoalPaintings,
    Routes.customWatercolorPaintings,
    Routes.customPencilDrawingsPaintings,
];

export const MobileHeaderHeight = '70px';
export const PagePdngTopEqualHeaderHeight = '5.521vw';
export const parallaxTranslateY: [string, string] = ['30px', '-30px'];
export const debounceTime = 500;
export const delayTimeForSpeed = 5000;
export const countingForMb = 1024;
export const uploadDocumentSizeLimit = 15;
export const dateFormat = 'YYYY-MM-DD';
export const dateMonthFormat = 'MMMM DD';
export const monthDayFormat = 'MMMM D';

export const awsImagePath = 'staging/upload/userOrderImagePath/';
export const awsVideoPath = 'staging/upload/userUnboxingVideoPath/';
export const TTL = 24 * 60 * 60 * 1000;
export const windowSize = 1400;

export enum CountryCodeName {
    US = 'US',
    CA = 'CA',
    AU = 'AU',
    GB = 'GB',
}

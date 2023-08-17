import { Routes } from '../../navigation/Routes';

export const getClassByRoute: { [x: string]: string } = {
    [Routes.home]: 'home-page',
    [Routes.customIndividualPortraits]: 'custom-individual-portraits-page',
    [Routes.customOilPaintings]: 'custom-oil-paintings-page',
    [Routes.ourFaq]: 'our-faq-page',
};

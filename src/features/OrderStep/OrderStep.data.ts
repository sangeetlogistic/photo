import { Images } from '../../theme';
import { PaintingSize, SelectMedium, SelectThemes } from './OrderStep.constants';

export const framePreview = [
    {
        image: Images.OrderPaintingImgBg,
        className: 'f-s-bg',
    },
    {
        image: Images.OrderPaintingImgLight,
        className: 'f-s-light',
    },
    {
        image: Images.OrderPaintingImg8X10,
        className: 'f-painting _8X10',
        drowingSize: PaintingSize.size8x10,
    },
    {
        image: Images.OrderPaintingImg11X14,
        className: 'f-painting _11X14',
        drowingSize: PaintingSize.size11x14,
    },
    {
        image: Images.OrderPaintingImg12X16,
        className: 'f-painting _12X16',
        drowingSize: PaintingSize.size12x16,
    },
    {
        image: Images.OrderPaintingImg16X20,
        className: 'f-painting _16X20',
        drowingSize: PaintingSize.size16x20,
    },
    {
        image: Images.OrderPaintingImg20X24,
        className: 'f-painting _20X24',
        drowingSize: PaintingSize.size20x24,
    },
    {
        image: Images.OrderPaintingImg24X30,
        className: 'f-painting _24X30',
        drowingSize: PaintingSize.size24x30,
    },
    {
        image: Images.OrderPaintingImg24X36,
        className: 'f-painting _24X36',
        drowingSize: PaintingSize.size24x36,
    },
    {
        image: Images.OrderPaintingImg30X40,
        className: 'f-painting _30X40',
        drowingSize: PaintingSize.size30x40,
    },
    {
        image: Images.OrderPaintingImg36X48,
        className: 'f-painting _36X48',
        drowingSize: PaintingSize.size36x48,
    },
    {
        image: Images.OrderPaintingImg48X72,
        className: 'f-painting _48X72',
        drowingSize: PaintingSize.size48x72,
    },
];

export const orderStepTheme = [
    {
        id: SelectThemes.person1,
        image: Images.OrderIcon1Person,
        activeImage: Images.OrderIcon1PersonActive,
        content: '1 Person',
    },
    {
        id: SelectThemes.person2,
        image: Images.OrderIcon2Person,
        activeImage: Images.OrderIcon2PersonActive,
        content: '2 Person',
    },
    {
        id: SelectThemes.pet1,
        image: Images.OrderIcon1Pet,
        activeImage: Images.OrderIcon1PetActive,
        content: '1 Pet',
    },
    {
        id: SelectThemes.person1pet1,
        image: Images.OrderIcon1Person1Pet,
        activeImage: Images.OrderIcon1Person1PetActive,
        content: '1 Person & 1 Pet',
    },
    {
        id: SelectThemes.landscapehouse,
        image: Images.OrderIconLandscapeHouse,
        activeImage: Images.OrderIconLandscapeHouseActive,
        content: 'Landscape / House',
    },
];

export const orderStepMedium = [
    {
        id: SelectMedium.acrylic,
        image: Images.OrderIconAcrylic,
        activeImage: Images.OrderIconAcrylicActive,
        content: 'Acrylic',
        popular: false,
    },
    {
        id: SelectMedium.watercolor,
        image: Images.OrderIconWaterColor,
        activeImage: Images.OrderIconWaterColorActive,
        content: 'Watercolor',
        popular: true,
    },
    {
        id: SelectMedium.charcoal,
        image: Images.OrderIconWaterCharcoal,
        activeImage: Images.OrderIconWaterCharcoalActive,
        content: 'Charcoal',
        popular: false,
    },
    {
        id: SelectMedium.oil,
        image: Images.OrderIconWaterOil,
        activeImage: Images.OrderIconWaterOilActive,
        content: 'Oil',
        popular: true,
    },
    {
        id: SelectMedium.blackpencil,
        image: Images.OrderIconWaterBlackPencil,
        activeImage: Images.OrderIconWaterBlackPencilActive,
        content: 'Black Pencil',
        popular: false,
    },
    {
        id: SelectMedium.colorpencil,
        image: Images.OrderIconWaterColorkPencil,
        activeImage: Images.OrderIconWaterColorkPencilActive,
        content: 'Color Pencil',
        popular: false,
    },
];

export const paintingSizeList = [
    {
        id: PaintingSize.size8x10,
        paintingSize: '8” x 10”',
        paintingRate: 179,
        framingServiceAvailable: true,
    },
    {
        id: PaintingSize.size11x14,
        paintingSize: '11” x 14”',
        paintingRate: 219,
        framingServiceAvailable: true,
    },
    {
        id: PaintingSize.size12x16,
        paintingSize: '12” x 16”',
        paintingRate: 249,
        framingServiceAvailable: true,
    },
    {
        id: PaintingSize.size16x20,
        paintingSize: '16” x 20”',
        paintingRate: 309,
        popularStar: true,
        framingServiceAvailable: true,
    },
    {
        id: PaintingSize.size20x24,
        paintingSize: '20” x 24”',
        paintingRate: 339,
        popularStar: true,
        framingServiceAvailable: true,
    },
    {
        id: PaintingSize.size24x30,
        paintingSize: '24” x 30”',
        paintingRate: 369,
        framingServiceAvailable: true,
    },
    {
        id: PaintingSize.size24x36,
        paintingSize: '24” x 36”',
        paintingRate: 399,
        framingServiceAvailable: false,
    },
    {
        id: PaintingSize.size30x40,
        paintingSize: '30” x 40”',
        paintingRate: 469,
        framingServiceAvailable: false,
    },
    {
        id: PaintingSize.size36x48,
        paintingSize: '36” x 48”',
        paintingRate: 569,
        framingServiceAvailable: false,
    },
    {
        id: PaintingSize.size48x72,
        paintingSize: '48” x 72”',
        paintingRate: 779,
        framingServiceAvailable: false,
    },
];

export const frameList = [
    {
        id: 'FrameTube',
        amount: 0,
        image: Images.OrderFrameTube,
        content: 'Delivered In Tube',
    },
    {
        id: 'FrameRed',
        amount: 75,
        image: Images.FrameRed,
        content: 'Red',
    },
    {
        id: 'FrameBlue',
        amount: 70,
        image: Images.FrameBlue,
        content: 'Blue',
    },
    {
        id: 'FrameSilver',
        amount: 59,
        image: Images.FrameSilver,
        content: 'Silver',
    },
    {
        id: 'FrameHoney',
        amount: 62,
        image: Images.FrameHoney,
        content: 'Honey',
    },
    {
        id: 'FrameBlack',
        amount: 55,
        image: Images.FrameBlack,
        content: 'Black',
    },
    {
        id: 'FrameBrown',
        amount: 75,
        image: Images.FrameBrown,
        content: 'Brown',
    },
    {
        id: 'FrameCreamyWhite',
        amount: 55,
        image: Images.FrameCreamyWhite,
        content: 'Creamy White',
    },
];

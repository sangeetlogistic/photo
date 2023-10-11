export enum SelectThemes {
    person1 = '1person',
    person2 = '2person',
    pet1 = '1pet',
    person1pet1 = '1person1pet',
    landscapehouse = 'landscapehouse',
    custom = 'custom',
}

export enum SelectMedium {
    acrylic = 'acrylic',
    watercolor = 'watercolor',
    charcoal = 'charcoal',
    oil = 'oil',
    blackpencil = 'blackpencil',
    colorpencil = 'colorpencil',
}

export enum OrderSteps {
    step1 = 'STEP1',
    step2 = 'STEP2',
    step3 = 'STEP3',
    step4 = 'STEP4',
    checkout = 'CHECKOUT',
}

export enum PaintingSize {
    size8x10 = '8x10',
    size11x14 = '11x14',
    size12x16 = '12x16',
    size16x20 = '16x20',
    size20x24 = '20x24',
    size24x30 = '24x30',
    size24x36 = '24x36',
    size30x40 = '30x40',
    size36x48 = '36x48',
    size48x72 = '48x72',
}

export const maxSelectCustomTheme = 20;

export const successPage = ['1', '2', '3', '4', 'checkout'];
export const depositDue = 0.2;
export const multipleCombinePhotosPrice = 29;
export const videoCreatedPrice = 69;

export const personThemObj = '1 PERSON' || 'PERSON 1';
export const petThemObj = '1 PET' || 'PET 1';
export const maxLengthForComments = 200;
export const expressServiceChargePer = 15;
export const addMemberDebounce = 1000;
export const normalDebounce = 3000;

export enum CouponCodeDiscount {
    PRICE = 'price',
    PERCENTAGE = 'percentage',
}

export enum PaymentWays {
    stripe = 'stripe',
    creditCard = 'Credit Card',
    googlePay = 'googlePay',
    applePay = 'applePay',
    affirm = 'affirm',
    payPal = 'paypal',
}

export const estimatedDays = 22;
export const estimatedDaysWithExpress = 18;
export const sperationDays = 4;

const API = {
    getHomeDetail: {
        get: 'home/get-home-detail',
    },
    getThemeDetail: {
        get: 'get-theme-detail',
    },
    getMediumDetail: {
        get: 'get-medium-detail',
    },
    orderStepGetThemeObjMedium: {
        get: 'get-themeObj-medium',
    },
    getSizeFrame: {
        get: 'get-size-frame',
    },
    saveOrder: {
        post: 'save-order',
    },
    getLoginLink: {
        get: 'get-login-link',
    },
    doLogin: {
        get: 'auth/login',
    },
    getMyOrder: {
        get: 'get-my-order',
    },
    isValidCouponCode: {
        get: 'isValidCouponCode',
    },
    updateStatus: {
        post: 'update-status',
    },
    getAllCard: {
        get: 'all-card',
    },
    remainingPayment: {
        post: 'pay-remaining',
    },
    saveAddress: {
        post: 'save/address',
    },
    addMember: {
        post: 'add/member',
    },
    googleApplePay: {
        get: 'paymentintent',
    },
    updateUser: {
        post: 'user/update',
    },
    getBlog: {
        get: 'allblog',
    },
    detailBlog: {
        get: 'blog',
    },
    userUnboxingVideo: {
        post: 'uservideo',
    },
    zipPay: {
        post: 'zip/initiate',
    },
    getGalleryDetail: {
        get: 'get-gallery-detail',
    },
    getPriceTime: {
        get: 'get-price-time',
    },
    sendGiftCard: {
        post: 'sendgiftcard',
    },
    cookiePolicy: {
        get: 'cookie-policy',
    },
    privacyPolicy: {
        get: 'privacy-policy',
    },
    termsConditions: {
        get: 'terms-and-conditions',
    },
    cCPAPrivacyNotice: {
        get: 'ccpa-privacy-notice',
    },
    getFaqs: {
        get: 'how-it-work',
    },
    drawingPicture: {
        get: 'get-drawing-of-picture-detail',
    },
    getTotalRating: {
        get: 'get-trust-pilot-rating',
    },
};

export default API;

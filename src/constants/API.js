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
};

export default API;

/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import AccountServices from '../../services/API/Account/Account.services';

export interface ErrorType {
    message: any;
}

export const getMyOrderAction = createAsyncThunk('account/getMyOrderAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await AccountServices.getMyOrder();

        if (response.status === statusCode.success) {
            return response.data;
        }
        return rejectWithValue({
            message: response.message,
            code: response.code,
        } as ErrorType);
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue({
            message: err.response.data.message,
            code: err.response.data.code,
        } as ErrorType);
    }
});
export const updateStatusAction = createAsyncThunk('account/updateStatusAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await AccountServices.updateStatus(payload);

        if (response.status === statusCode.success) {
            return response.data;
        }
        return rejectWithValue({
            message: response.message,
            code: response.code,
        } as ErrorType);
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue({
            message: err.response.data.message,
            code: err.response.data.code,
        } as ErrorType);
    }
});
export const getAllCardAction = createAsyncThunk('account/getAllCardAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await AccountServices.getAllCard();

        if (response.status === statusCode.success) {
            return response.data;
        }
        return rejectWithValue({
            message: response.message,
            code: response.code,
        } as ErrorType);
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue({
            message: err.response.data.message,
            code: err.response.data.code,
        } as ErrorType);
    }
});
export const remainingPaymentCardAction = createAsyncThunk('account/remainingPaymentCardAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await AccountServices.doRemainingPayment(payload);

        if (response.status === statusCode.success) {
            return response.data;
        }
        return rejectWithValue({
            message: response.message,
            code: response.code,
        } as ErrorType);
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue({
            message: err.response.data.message,
            code: err.response.data.code,
        } as ErrorType);
    }
});
export const saveAddressAction = createAsyncThunk('account/saveAddressAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await AccountServices.doSaveAddress(payload);

        if (response.status === statusCode.success) {
            return response.data;
        }
        return rejectWithValue({
            message: response.message,
            code: response.code,
        } as ErrorType);
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue({
            message: err.response.data.message,
            code: err.response.data.code,
        } as ErrorType);
    }
});
export const updateUserAction = createAsyncThunk('account/updateUserAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await AccountServices.updateUser(payload);

        if (response.status === statusCode.success) {
            return response.data;
        }
        return rejectWithValue({
            message: response.message,
            code: response.code,
        } as ErrorType);
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue({
            message: err.response.data.message,
            code: err.response.data.code,
        } as ErrorType);
    }
});
export const userUnboxingVideoAction = createAsyncThunk('account/userUnboxingVideoAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await AccountServices.userUnboxingVideo(payload);

        if (response.status === statusCode.success) {
            return response.data;
        }
        return rejectWithValue({
            message: response.message,
            code: response.code,
        } as ErrorType);
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        return rejectWithValue({
            message: err.response.data.message,
            code: err.response.data.code,
        } as ErrorType);
    }
});

export interface AccountState {
    loading: boolean;
    error: any;
    webToken: string | null;
    userData: any;
    myOrderData: any;
    cardListData: any;
    remainingPaymentError: any;
}

const initialState: AccountState = {
    loading: false,
    error: null,
    webToken: null,
    userData: null,
    myOrderData: null,
    cardListData: null,
    remainingPaymentError: null,
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        storeWebToken: (state, action) => {
            state.webToken = action.payload;
        },
        clearErrors: (state) => {
            state.error = null;
            state.remainingPaymentError = null;
        },
        clearOrderDataCardListData: (state) => {
            state.myOrderData = null;
            state.cardListData = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMyOrderAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMyOrderAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.myOrderData = action.payload.artRecord;
                state.userData = action.payload.user;
            })
            .addCase(getMyOrderAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(updateStatusAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateStatusAction.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(updateStatusAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(getAllCardAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllCardAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.cardListData = action.payload?.cardListData?.data;
            })
            .addCase(getAllCardAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(remainingPaymentCardAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(remainingPaymentCardAction.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(remainingPaymentCardAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.remainingPaymentError = action.payload;
                } else {
                    state.remainingPaymentError = action.error as ErrorType;
                }
            })
            .addCase(saveAddressAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveAddressAction.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(saveAddressAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(updateUserAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserAction.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(updateUserAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(userUnboxingVideoAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { storeWebToken, clearErrors, clearOrderDataCardListData } = accountSlice.actions;

export const selectedError = (state: RootState) => state.account.error;
export const selectedLoading = (state: RootState) => state.account.loading;
export const selectedWebToken = (state: RootState) => state.account.webToken;
export const selectedUserData = (state: RootState) => state.account.userData;
export const selectedMyOrderData = (state: RootState) => state.account.myOrderData;
export const selectedCardListData = (state: RootState) => state.account.cardListData;
export const selectedRemainingPaymentError = (state: RootState) => state.account.remainingPaymentError;

export default accountSlice.reducer;

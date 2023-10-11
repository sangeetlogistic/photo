/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import LoginServices from '../../services/API/Login/Login.services';

export interface ErrorType {
    message: any;
}

export const getLoginLinkAction = createAsyncThunk('login/getLoginLinkAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await LoginServices.getLoginLink(payload);

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
export const doLoginLinkAction = createAsyncThunk('login/doLoginLinkAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await LoginServices.doLogin(payload);

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
            code: err.response.status,
        } as ErrorType);
    }
});

export interface LoginState {
    loading: boolean;
    error: any;
    loginPopup: boolean;
    successEmailSend: boolean;
}

const initialState: LoginState = {
    loading: false,
    error: null,
    loginPopup: false,
    successEmailSend: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginPopup: (state, action) => {
            state.loginPopup = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLoginLinkAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLoginLinkAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.successEmailSend = true;
            })
            .addCase(getLoginLinkAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(doLoginLinkAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(doLoginLinkAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(doLoginLinkAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { setLoginPopup, clearError } = loginSlice.actions;

export const selectedLoading = (state: RootState) => state.login.loading;
export const selectedError = (state: RootState) => state.login.error;
export const selectedLoginPopup = (state: RootState) => state.login.loginPopup;
export const selectedSuccessEmailSend = (state: RootState) => state.login.successEmailSend;

export default loginSlice.reducer;

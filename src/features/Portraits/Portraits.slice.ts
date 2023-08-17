/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import PortraitsServices from '../../services/API/Portraits/Portraits.services';

export interface ErrorType {
    message: string;
}

export const getThemeDetailAction = createAsyncThunk<
    string,
    { themeName: string },
    {
        rejectValue: ErrorType;
    }
>('portraits/getThemeDetailAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await PortraitsServices.getThemeDetail(payload);
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

export interface HomeState {
    loading: boolean;
    error:
        | {
              message: string;
              code?: number;
          }
        | undefined
        | null;
    themeDetail: any;
}

const initialState: HomeState = {
    loading: false,
    error: null,
    themeDetail: undefined,
};

export const portraitSlice = createSlice({
    name: 'portraits',
    initialState,
    reducers: {
        clearThemeDetail: (state) => {
            state.themeDetail = undefined;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getThemeDetailAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getThemeDetailAction.fulfilled, (state, action: any) => {
                state.themeDetail = action.payload.Theme;
                state.loading = false;
                state.error = null;
            })
            .addCase(getThemeDetailAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { clearThemeDetail } = portraitSlice.actions;

export const selectLoading = (state: RootState) => state.portraits.loading;
export const selectError = (state: RootState) => state.portraits.error;
export const selectThemeDetail = (state: RootState) => state.portraits.themeDetail;

export default portraitSlice.reducer;

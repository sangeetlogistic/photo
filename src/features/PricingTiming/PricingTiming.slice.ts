/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

import { statusCode } from '../../constants/statusCode';
import PriceTimeServices from '../../services/API/PriceTime';

export interface ErrorType {
    message: any;
}

export const getPriceTimeAction = createAsyncThunk('priceTiming/getPriceTimeAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await PriceTimeServices.getPriceTime();
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
export const sendGiftCardAction = createAsyncThunk('priceTiming/sendGiftCardAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await PriceTimeServices.sendGiftCard(payload);
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

export interface GalleryState {
    loading: boolean;
    error:
        | {
              message: string;
          }
        | undefined
        | null;
    price: any;
    size: any;
    themeObject: any;
    serviceAndShipping: any;
    giftCardDetail: any;
}

const initialState: GalleryState = {
    loading: false,
    error: null,
    price: null,
    size: null,
    themeObject: null,
    serviceAndShipping: null,
    giftCardDetail: null,
};

export const pricingTimingSlice = createSlice({
    name: 'pricingTiming',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPriceTimeAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPriceTimeAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.price = action.payload.PriceList.price;
                state.size = action.payload.PriceList.size;
                state.themeObject = action.payload.PriceList.themeObject;
                state.serviceAndShipping = action.payload.serviceAndshipping;
            })
            .addCase(getPriceTimeAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(sendGiftCardAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendGiftCardAction.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.giftCardDetail = action.payload.data;
            })
            .addCase(sendGiftCardAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const selectLoading = (state: RootState) => state.pricingTiming.loading;
export const selectError = (state: RootState) => state.pricingTiming.error;
export const selectPrice = (state: RootState) => state.pricingTiming.price;
export const selectSize = (state: RootState) => state.pricingTiming.size;
export const selectThemeObject = (state: RootState) => state.pricingTiming.themeObject;
export const selectServiceAndShipping = (state: RootState) => state.pricingTiming.serviceAndShipping;
export const selectGiftCardDetail = (state: RootState) => state.pricingTiming.giftCardDetail;

export default pricingTimingSlice.reducer;

/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import HomeServices from '../../services/API/Home';

export interface ErrorType {
    message: any;
}

/**
 * Home
 */
export const getHomeDetailAction = createAsyncThunk('home/getHomeDetailAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await HomeServices.getHomeDetail();
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

export interface HomeState {
    loading: boolean;
    error:
        | {
              message: string;
          }
        | undefined
        | null;
    homeDetail: any;
}

const initialState: HomeState = {
    loading: false,
    error: null,
    homeDetail: undefined,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        clearHomeDetail: (state) => {
            state.homeDetail = undefined;
            state.error = null;
        },
        setHomeDetail: (state, action) => {
            state.homeDetail = action.payload.detail;
            state.error = action.payload.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getHomeDetailAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHomeDetailAction.fulfilled, (state, action) => {
                state.homeDetail = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getHomeDetailAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { clearHomeDetail, setHomeDetail } = homeSlice.actions;

export const selectLoading = (state: RootState) => state.home.loading;
export const selectError = (state: RootState) => state.home.error;
export const selectHomeDetail = (state: RootState) => state.home.homeDetail;

export default homeSlice.reducer;

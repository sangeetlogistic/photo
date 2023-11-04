/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import GalleryServices from '../../services/API/Gallery';

export interface ErrorType {
    message: any;
}

export const getGalleryAction = createAsyncThunk('gallery/getGalleryAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await GalleryServices.getBlogDetail(payload);
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
            data: err.response.data,
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
    galleryData: any;
    filteredOptions: any;
    sliderData: any;
    totalGalleryRecord: number;
    administratorDisabled: { message: string } | null;
    galleryDataLength: any;
    result: any;
}

const initialState: HomeState = {
    loading: false,
    error: null,
    galleryData: [],
    filteredOptions: [],
    sliderData: [],
    totalGalleryRecord: 0,
    administratorDisabled: null,
    galleryDataLength: [],
    result: [],
};

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        clearGalleryData: (state) => {
            state.galleryData = [];
            state.galleryDataLength = [];
            state.totalGalleryRecord = 0;
            state.result = [];
        },
        setResult: (state, action) => {
            state.result = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setGalleryDetail: (state, action) => {
            state.galleryData = action?.payload?.detail?.Gallery;

            state.galleryDataLength = action?.payload?.detail?.Gallery;

            state.filteredOptions = action.payload.detail?.FilteredOptions;
            state.sliderData = action.payload.detail?.sliderData;
            state.totalGalleryRecord = action.payload.detail?.totalGalleryRecord;
            state.error = action?.payload?.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getGalleryAction.pending, (state) => {
                state.error = null;
            })
            .addCase(getGalleryAction.fulfilled, (state, action) => {
                if (action?.payload?.Gallery) {
                    state.galleryData = action?.payload?.Gallery;

                    state.galleryDataLength =
                        state.galleryDataLength.length !== action?.payload?.totalGalleryRecord
                            ? [...state.galleryDataLength, ...action?.payload?.Gallery]
                            : action?.payload?.Gallery;

                    state.filteredOptions = action.payload.FilteredOptions;
                    state.sliderData = action.payload.sliderData;
                    state.totalGalleryRecord = action.payload.totalGalleryRecord;
                } else {
                    state.administratorDisabled = action.payload;
                }
                state.error = null;
            })
            .addCase(getGalleryAction.rejected, (state, action: any) => {
                state.filteredOptions = action?.payload?.data?.FilteredOptions;
                state.sliderData = action?.payload?.data?.sliderData;
                state.totalGalleryRecord = action?.payload?.data?.totalGalleryRecord;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { clearGalleryData, setResult, setLoading, setGalleryDetail } = gallerySlice.actions;

export const selectLoading = (state: RootState) => state.gallery.loading;
export const selectError = (state: RootState) => state.gallery.error;
export const selectGalleryData = (state: RootState) => state.gallery.galleryData;
export const selectFilteredOptions = (state: RootState) => state.gallery.filteredOptions;
export const selectSliderData = (state: RootState) => state.gallery.sliderData;
export const selectTotalGalleryRecord = (state: RootState) => state.gallery.totalGalleryRecord;
export const selectAdministratorDisabled = (state: RootState) => state.gallery.administratorDisabled;
export const selectGalleryDataLength = (state: RootState) => state.gallery.galleryDataLength;
export const selectResult = (state: RootState) => state.gallery.result;

export default gallerySlice.reducer;

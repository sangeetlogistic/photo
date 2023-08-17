/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import PaintingsServices from '../../services/API/Paintings/Paintings.services';

export interface ErrorType {
    message: string;
}

export const getMediumDetailAction = createAsyncThunk<
    string,
    { mediumName: string },
    {
        rejectValue: ErrorType;
    }
>('paintings/getMediumDetailAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await PaintingsServices.getMediumDetail(payload);
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
    mediumDetail: any;
}

const initialState: HomeState = {
    loading: false,
    error: null,
    mediumDetail: undefined,
};

export const paintingSlice = createSlice({
    name: 'paintings',
    initialState,
    reducers: {
        clearMediumDetail: (state) => {
            state.mediumDetail = undefined;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMediumDetailAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMediumDetailAction.fulfilled, (state, action: any) => {
                state.mediumDetail = action.payload.Medium;
                state.loading = false;
                state.error = null;
            })
            .addCase(getMediumDetailAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { clearMediumDetail } = paintingSlice.actions;

export const selectLoading = (state: RootState) => state.paintings.loading;
export const selectError = (state: RootState) => state.paintings.error;
export const selectMediumDetail = (state: RootState) => state.paintings.mediumDetail;

export default paintingSlice.reducer;
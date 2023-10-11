/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { statusCode } from '../../constants/statusCode';
import FaqServices from '../../services/API/Faq/Faq.services';
import { RootState } from '../../app/store';

export interface ErrorType {
    message: string;
    code?: number;
}

export const getFaqAction = createAsyncThunk('faq/getFaqAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await FaqServices.getFaqs();

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

// Define a type for the slice state
interface FaqState {
    loading: boolean;
    error:
        | {
              message: string;
              code?: number;
          }
        | undefined
        | null;
    faqs: any;
}

// Define the initial state using that type
const initialState: FaqState = {
    loading: false,
    error: null,
    faqs: null,
};

export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFaqAction.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(getFaqAction.fulfilled, (state, action) => {
                state.faqs = action.payload.data;
                state.error = null;
                state.loading = false;
            })
            .addCase(getFaqAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const selectLoading = (state: RootState) => state.faq.loading;
export const selectError = (state: RootState) => state.faq.error;
export const selectFaqs = (state: RootState) => state.faq.faqs;

export default faqSlice.reducer;

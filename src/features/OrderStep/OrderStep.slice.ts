/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import OrderStepServices from '../../services/API/OrderStep/OrderStep.services';
import { OrderSteps } from './OrderStep.constants';

export interface ErrorType {
    message: string;
    code?: number;
}

export const getOrderStepThemeObjMedium = createAsyncThunk('orderStep/getOrderStepThemeObjMedium', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await OrderStepServices.orderStepGetThemeObjMedium();

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

export const getSizeFrameAction = createAsyncThunk('orderStep/getSizeFrameAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await OrderStepServices.getSizeFrame(payload);

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

export const saveOrderAction = createAsyncThunk('orderStep/saveOrderAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await OrderStepServices.saveOrder(payload);

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
export const isValidCouponCodeAction = createAsyncThunk('orderStep/isValidCouponCodeAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await OrderStepServices.isValidCouponCode(payload);

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
export const addMemberAction = createAsyncThunk('orderStep/addMemberAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await OrderStepServices.addMember(payload);

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
export const googleApplePayAction = createAsyncThunk('orderStep/googleApplePayAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await OrderStepServices.googleApplePay(payload);

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

export interface OrderStepState {
    loading: boolean;
    error:
        | {
              message: string;
              code?: number;
          }
        | undefined
        | null;
    saveOrderError:
        | {
              message: string;
              code?: number;
          }
        | undefined
        | null;
    step: OrderSteps;
    selectThemesItems: {
        id: number;
        theme: string;
        title: string;
        image: string;
    } | null;
    selectMediumItems: {
        id: number;
        medium: string;
        title: string;
        image: string;
        hoverImage: string;
    } | null;
    uploadFiles: any[];
    selectedImagesForTheme: string;
    selectedImagesForMedium: string;
    step1Detail: any;
    step3Detail: any;
    saveOrderData: any;
    selectSize: { painting: boolean; frame: boolean };
    isValidCode: {
        message: string;
        discountedAmount: string;
        Cdata: string;
        discountIn: string;
    } | null;
    couponLoading: boolean;
}

const initialState: OrderStepState = {
    loading: false,
    error: null,
    saveOrderError: null,
    step: OrderSteps.step1,
    selectThemesItems: null,
    selectMediumItems: null,
    uploadFiles: [],
    selectedImagesForTheme: '',
    selectedImagesForMedium: '',
    step1Detail: undefined,
    step3Detail: undefined,
    saveOrderData: null,
    selectSize: { painting: true, frame: false },
    isValidCode: null,
    couponLoading: false,
};

export const OrderStepSlice = createSlice({
    name: 'orderStep',
    initialState,
    reducers: {
        setSelectSize: (state, action) => {
            state.selectSize = action.payload;
        },
        setSelectedImagesForTheme: (state, action) => {
            state.selectedImagesForTheme = action.payload;
        },
        setSelectedImagesForMedium: (state, action) => {
            state.selectedImagesForMedium = action.payload;
        },
        OrderStep: (state, action) => {
            state.step = action.payload;
        },
        setSelectThemesItems: (state, action) => {
            state.selectThemesItems = action.payload;
        },
        setSelectMediumItems: (state, action) => {
            state.selectMediumItems = action.payload;
        },
        addFiles: (state, action) => {
            const addFiles = action.payload.files;
            const currentDocuments = [...state.uploadFiles, ...addFiles];
            state.uploadFiles = currentDocuments;
        },
        removeFiles: (state, action) => {
            const { payload } = action;

            const tempVar = state.uploadFiles;
            const newArray: any = [];
            tempVar.map(async (uploadDoducment: any, index: any) => {
                if (index !== payload.index) {
                    newArray[index] = uploadDoducment;
                }
            });
            state.uploadFiles = newArray.filter((item: any) => item !== null);
        },
        clearCreateFiles: (state) => {
            state.uploadFiles = [];
        },
        clearError: (state) => {
            state.error = null;
        },
        clearStep3Detail: (state) => {
            state.step3Detail = undefined;
        },
        clearThemeAndMedium: (state) => {
            state.selectThemesItems = null;
            state.selectMediumItems = null;
        },
        clearSaveOrderError: (state) => {
            state.saveOrderError = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrderStepThemeObjMedium.pending, (state) => {
                state.error = null;
            })
            .addCase(getOrderStepThemeObjMedium.fulfilled, (state, action) => {
                state.step1Detail = action.payload;

                state.error = null;
            })
            .addCase(getOrderStepThemeObjMedium.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(getSizeFrameAction.pending, (state) => {})
            .addCase(getSizeFrameAction.fulfilled, (state, action: any) => {
                state.step3Detail = action.payload;
            })
            .addCase(getSizeFrameAction.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(saveOrderAction.pending, (state, action: any) => {
                state.loading = true;
            })
            .addCase(saveOrderAction.fulfilled, (state, action: any) => {
                state.loading = false;
                state.saveOrderData = action.payload;
            })
            .addCase(saveOrderAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.saveOrderError = action.payload;
                } else {
                    state.saveOrderError = action.error as ErrorType;
                }
            })
            .addCase(isValidCouponCodeAction.pending, (state, action: any) => {
                state.couponLoading = true;
            })
            .addCase(isValidCouponCodeAction.fulfilled, (state, action: any) => {
                state.couponLoading = false;
                state.isValidCode = action.payload;
            })
            .addCase(isValidCouponCodeAction.rejected, (state, action: any) => {
                state.couponLoading = false;
            })
            .addCase(addMemberAction.pending, (state, action: any) => {
                state.loading = true;
            })
            .addCase(addMemberAction.fulfilled, (state, action: any) => {
                state.isValidCode = action.payload;
                state.loading = false;
            })
            .addCase(addMemberAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const {
    OrderStep,
    setSelectThemesItems,
    setSelectMediumItems,
    addFiles,
    clearCreateFiles,
    removeFiles,
    setSelectedImagesForTheme,
    setSelectedImagesForMedium,
    clearError,
    clearStep3Detail,
    clearThemeAndMedium,
    setSelectSize,
    clearSaveOrderError,
} = OrderStepSlice.actions;

export const selectLoading = (state: RootState) => state.orderStep.loading;
export const selectError = (state: RootState) => state.orderStep.error;
export const selectSaveOrderError = (state: RootState) => state.orderStep.saveOrderError;
export const selectOrderStep = (state: RootState) => state.orderStep.step;
export const selectThemesItems = (state: RootState) => state.orderStep.selectThemesItems;
export const selectMediumItems = (state: RootState) => state.orderStep.selectMediumItems;
export const selectUploadFiles = (state: RootState) => state.orderStep.uploadFiles;
export const selectedImagesForTheme = (state: RootState) => state.orderStep.selectedImagesForTheme;
export const selectedImagesForMedium = (state: RootState) => state.orderStep.selectedImagesForMedium;
export const selectStep1Detail = (state: RootState) => state.orderStep.step1Detail;
export const selectStep3Detail = (state: RootState) => state.orderStep.step3Detail;
export const selectedSize = (state: RootState) => state.orderStep.selectSize;
export const selectedSaveOrderData = (state: RootState) => state.orderStep.saveOrderData;
export const selectedIsValidCode = (state: RootState) => state.orderStep.isValidCode;
export const selectedCouponLoading = (state: RootState) => state.orderStep.couponLoading;

export default OrderStepSlice.reducer;

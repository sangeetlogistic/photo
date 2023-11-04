/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import GeneralSettingsServices from './GeneralSettings.services';
import { statusCode } from '../../../constants/statusCode';

export interface ErrorType {
    message: string;
    code?: number;
}

export const cookiePolicyAction = createAsyncThunk('settings/cookiePolicyAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await GeneralSettingsServices.cookiePolicy();

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
export const getTotalRatingAction = createAsyncThunk('settings/getTotalRatingAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await GeneralSettingsServices.getTotalRating();

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
export const privacyPolicyAction = createAsyncThunk('settings/privacyPolicyAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await GeneralSettingsServices.privacyPolicy();

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
export const termsConditionsAction = createAsyncThunk('settings/termsConditionsAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await GeneralSettingsServices.termsConditions();

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
export const cCPAPrivacyNoticeAction = createAsyncThunk('settings/cCPAPrivacyNoticeAction', async (payload, { rejectWithValue }) => {
    try {
        const response: any = await GeneralSettingsServices.cCPAPrivacyNotice();

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
export const drawingPictureAction = createAsyncThunk('settings/drawingPictureAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await GeneralSettingsServices.drawingPicture(payload);

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
export const subscribeMemberAction = createAsyncThunk('settings/subscribeMemberAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await GeneralSettingsServices.subscribeMember(payload);

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
interface SettingState {
    loading: boolean;
    error:
        | {
              message: string;
              code?: number;
          }
        | undefined
        | null;
    cookiePolicy: any;
    privacyPolicy: any;
    termsConditions: any;
    cCPAPrivacy: any;
    drawDetail: any;
    totalRating: number | undefined;
    recentBlogs: any;
    recentBlogDraw: any;
    headerFAQs: any;
}

// Define the initial state using that type
const initialState: SettingState = {
    loading: false,
    error: null,
    cookiePolicy: '',
    privacyPolicy: '',
    termsConditions: '',
    cCPAPrivacy: '',
    drawDetail: undefined,
    totalRating: undefined,
    recentBlogs: null,
    recentBlogDraw: undefined,
    headerFAQs: undefined,
};

export const settingSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTotalRating: (state, action) => {
            state.totalRating = action.payload;
        },
        setRecentBlogs: (state, action) => {
            state.recentBlogs = action.payload;
        },
        setHeaderFAQs: (state, action) => {
            state.headerFAQs = action.payload;
        },
        setCcpaDetail: (state, action) => {
            state.cCPAPrivacy = action.payload.detail;
            state.error = action.payload.error;
        },
        setCookieDetail: (state, action) => {
            state.cookiePolicy = action.payload.detail;
            state.error = action.payload.error;
        },
        setDrawDetail: (state, action) => {
            state.drawDetail = action.payload.detail;
            state.recentBlogDraw = action.payload.recentBlog;
            state.error = action.payload.error;
        },
        setPrivacyDetail: (state, action) => {
            state.privacyPolicy = action.payload.detail;
            state.error = action.payload.error;
        },
        setTermDetail: (state, action) => {
            state.termsConditions = action.payload.detail;
            state.error = action.payload.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(cookiePolicyAction.pending, (state) => {
                state.error = null;
            })
            .addCase(cookiePolicyAction.fulfilled, (state, action) => {
                state.cookiePolicy = action.payload;
                state.error = null;
            })
            .addCase(cookiePolicyAction.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(privacyPolicyAction.pending, (state) => {
                state.error = null;
            })
            .addCase(privacyPolicyAction.fulfilled, (state, action) => {
                state.privacyPolicy = action.payload;
                state.error = null;
            })
            .addCase(privacyPolicyAction.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(termsConditionsAction.pending, (state) => {
                state.error = null;
            })
            .addCase(termsConditionsAction.fulfilled, (state, action) => {
                state.termsConditions = action.payload;
                state.error = null;
            })
            .addCase(termsConditionsAction.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(cCPAPrivacyNoticeAction.pending, (state) => {
                state.error = null;
            })
            .addCase(cCPAPrivacyNoticeAction.fulfilled, (state, action) => {
                state.cCPAPrivacy = action.payload;
                state.error = null;
            })
            .addCase(cCPAPrivacyNoticeAction.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(drawingPictureAction.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(drawingPictureAction.fulfilled, (state, action) => {
                state.drawDetail = action.payload;
                state.recentBlogDraw = action.payload.recentBlog;
                state.error = null;
            })
            .addCase(drawingPictureAction.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(getTotalRatingAction.pending, (state) => {
                state.error = null;
            })
            .addCase(getTotalRatingAction.fulfilled, (state, action) => {
                state.totalRating = action.payload.trustPilotTotalRating;
                state.recentBlogs = action.payload.recentBlog;
                state.headerFAQs = action.payload.faqOnHover;
                state.error = null;
            })
            .addCase(getTotalRatingAction.rejected, (state, action: any) => {
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(subscribeMemberAction.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(subscribeMemberAction.fulfilled, (state, action) => {
                state.error = null;
                state.loading = false;
            })
            .addCase(subscribeMemberAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { setTotalRating, setRecentBlogs, setHeaderFAQs, setCcpaDetail, setCookieDetail, setDrawDetail, setPrivacyDetail, setTermDetail } =
    settingSlice.actions;

export const selectLoading = (state: RootState) => state.settings.loading;
export const selectError = (state: RootState) => state.settings.error;
export const selectCookiePolicy = (state: RootState) => state.settings.cookiePolicy;
export const selectPrivacyPolicy = (state: RootState) => state.settings.privacyPolicy;
export const selectTermsConditions = (state: RootState) => state.settings.termsConditions;
export const selectCcPAPrivacy = (state: RootState) => state.settings.cCPAPrivacy;
export const selectDrawDetail = (state: RootState) => state.settings.drawDetail;
export const selectTotalRating = (state: RootState) => state.settings.totalRating;
export const selectRecentBlog = (state: RootState) => state.settings.recentBlogs;
export const selectRecentBlogDraw = (state: RootState) => state.settings.recentBlogDraw;
export const selectHeaderFAQs = (state: RootState) => state.settings.headerFAQs;

export default settingSlice.reducer;

/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { statusCode } from '../../constants/statusCode';
import BlogServices from '../../services/API/Blog/Blog.services';

export interface ErrorType {
    message: any;
}

export const getBlogAction = createAsyncThunk('blog/getBlogAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await BlogServices.getAllBlog(payload);

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

export const blogDetailAction = createAsyncThunk('blog/blogDetailAction', async (payload: any, { rejectWithValue }) => {
    try {
        const response: any = await BlogServices.getBlogDetail(payload);

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

export interface BlogState {
    loading: boolean;
    error: any;
    blogList: any;
    filteredBlogTag: any;
    totalRecord: number;
    content: any;
}

const initialState: BlogState = {
    loading: false,
    error: null,
    blogList: [],
    filteredBlogTag: [],
    totalRecord: 0,
    content: null,
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        clearBlogList: (state) => {
            state.blogList = null;
        },
        setBlogDetail: (state, action) => {
            state.blogList = action.payload.detail.data;
            state.error = action.payload.error;
            state.filteredBlogTag = action.payload.detail.filteredBlogTag;
            state.totalRecord = action.payload.detail.totalRecord;
        },
        setBlogContent: (state, action) => {
            state.blogList = action.payload.detail;
            state.error = action.payload.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlogAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBlogAction.fulfilled, (state, action) => {
                state.loading = false;
                state.blogList = state.blogList ? [...state.blogList, ...action.payload.data] : action.payload.data;
                state.filteredBlogTag = action.payload.filteredBlogTag;
                state.totalRecord = action.payload.totalRecord;
                state.error = null;
            })
            .addCase(getBlogAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            })
            .addCase(blogDetailAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(blogDetailAction.fulfilled, (state, action) => {
                state.loading = false;
                state.content = action.payload;
                state.error = null;
            })
            .addCase(blogDetailAction.rejected, (state, action: any) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error as ErrorType;
                }
            });
    },
});

export const { clearBlogList, setBlogDetail, setBlogContent } = blogSlice.actions;

export const selectedLoading = (state: RootState) => state.blog.loading;
export const selectedError = (state: RootState) => state.blog.error;
export const selectedBlogList = (state: RootState) => state.blog.blogList;
export const selectedFilteredBlogTag = (state: RootState) => state.blog.filteredBlogTag;
export const selectedTotalRecord = (state: RootState) => state.blog.totalRecord;
export const selectedContent = (state: RootState) => state.blog.content;

export default blogSlice.reducer;

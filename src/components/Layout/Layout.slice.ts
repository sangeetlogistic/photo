/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export interface LayoutState {
    loading: boolean;
    error:
        | {
              message: string;
              code?: string;
          }
        | undefined
        | null;
    mobileOpenMenu: string[];
    isAfterBeforeSliderMoving: boolean;
    notShowingFooter: string[];
}

const initialState: LayoutState = {
    loading: false,
    error: null,
    mobileOpenMenu: [''],
    isAfterBeforeSliderMoving: false,
    notShowingFooter: [],
};

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setMobileOpenMenu: (state, action) => {
            state.mobileOpenMenu = action.payload;
        },
        setIsAfterBeforeSliderMoving: (state, action) => {
            state.isAfterBeforeSliderMoving = action.payload;
        },
        setNotShowingFooter: (state, action) => {
            const temp = state.notShowingFooter;
            state.notShowingFooter = [...temp, action.payload];
        },
    },
});

export const { setMobileOpenMenu, setIsAfterBeforeSliderMoving, setNotShowingFooter } = layoutSlice.actions;

export const selectLoading = (state: RootState) => state.layout.loading;
export const selectError = (state: RootState) => state.layout.error;
export const selectMobileOpenMenu = (state: RootState) => state.layout.mobileOpenMenu;
export const selectIsAfterBeforeSliderMoving = (state: RootState) => state.layout.isAfterBeforeSliderMoving;
export const selectNotShowingFooter = (state: RootState) => state.layout.notShowingFooter;

export default layoutSlice.reducer;

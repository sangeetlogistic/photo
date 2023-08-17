import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import LayoutSlice from '../components/Layout/Layout.slice';
import AccountSlice from '../features/Account/Account.slice';
import HomeSlice from '../features/Home/Home.slice';
import LoginSlice from '../features/Login/Login.slice';
import OrderStepSlice from '../features/OrderStep/OrderStep.slice';
import PaintingsSlice from '../features/Paintings/Paintings.slice';
import PortraitsSlice from '../features/Portraits/Portraits.slice';

const createRootReducer = (history: any) =>
    combineReducers({
        home: HomeSlice,
        layout: LayoutSlice,
        orderStep: OrderStepSlice,
        portraits: PortraitsSlice,
        paintings: PaintingsSlice,
        login: LoginSlice,
        account: AccountSlice,
        router: connectRouter(history),
    });

export default createRootReducer;

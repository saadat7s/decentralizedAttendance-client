import { configureStore } from "@reduxjs/toolkit";
import adminSlice from './features/adminSlice';
import classSlice from './features/classSlice';
export const store = configureStore({
    reducer: {
        admin: adminSlice,
        class: classSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
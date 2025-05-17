import { configureStore } from "@reduxjs/toolkit";
import adminSlice from './features/adminSlice';
import userSlice from "./features/userSlice";
import authSlice from './features/authSlice';
import studentSlice from './features/studentSlice';
import teacherSlice from "./features/teachersSlice";
import classSlice from "./features/classSlice";
import sessionSlice from "./features/sessionSlice"
import dashboardSlice from "./features/dashboardSlice";


export const store = configureStore({
    reducer: {
        admin: adminSlice,
        user: userSlice,
        auth: authSlice,
        student: studentSlice,
        teacher: teacherSlice,
        class: classSlice,
        session: sessionSlice,
        dashboard: dashboardSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
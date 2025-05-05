import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance, { authAxiosInstance } from "../../utils/axios/axiosInstance"
import { getUserProfile, setAuthenticated } from "./userSlice";
import axios from "axios";

const initialState = {

    loading: false,
    message: '',
    error: ''
}

export const userLogin = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'admin/adminLogin',
    async (data: any, { rejectWithValue, dispatch }) => {
        try {
            // Use the auth axios instance that doesn't have the token interceptor
            const response = await authAxiosInstance.post('/api/auth/login', data);
            
            if (response.status === 200) {
                localStorage.setItem('x_auth_token', response.data.token)
                dispatch(getUserProfile());
                return response.data;
            }
            return response.data;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)

export const logoutUser = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'auth/logoutUser',
    async (data: any, { rejectWithValue, dispatch }) => {
        try {
            const response = await axiosInstance.get('/auth/logout');
            data.navigate('/')
            localStorage.removeItem('x_auth_token');
            dispatch(setAuthenticated(false))
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        // login builder
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            const token = action.payload?.token;
            const role = action.payload?.role;
            localStorage.setItem('x_auth_token', token);
            localStorage.setItem('role', role);
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.error = action.payload?.message!;
            state.loading = false;
        })

        // logout builder
        builder.addCase(logoutUser.pending, state => {
            state.loading = true;
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.loading = false;
            localStorage.removeItem('x_auth_token');
            state.message = action.payload?.message;
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })
    },
})

export default authSlice.reducer;
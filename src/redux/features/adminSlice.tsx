import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axios/axiosInstance"
import { setUserProfile } from "./userSlice";
import axios from "axios";


const initialState = {
    name: '',

    loading: false,
    message: '',
    error: ''
}




export const adminLogin = createAsyncThunk<any, { email: string, password: string }, { rejectValue: { message: string } }>(
    'admin/adminLogin',
    async (data: any, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                dispatch(setUserProfile(response.data.user));
                return response.data;
            }
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    }
)

export const registerStudent = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'admin/registerStudent',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/admin/registerStudent', data);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    })


const adminSlice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(adminLogin.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(adminLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            const token = action.payload?.token;
            localStorage.setItem('x_auth_token', token);
        })
        builder.addCase(adminLogin.rejected, (state, action) => {
            state.error = action.payload?.message!;
        })

        builder.addCase(registerStudent.pending, state => {
            state.loading = true;
        })
        builder.addCase(registerStudent.fulfilled, (state, action) => {
            state.message = action.payload?.msg;
        })
        builder.addCase(registerStudent.rejected, (state, action) => {
            state.error = action.payload?.message!;
        })
    },
})

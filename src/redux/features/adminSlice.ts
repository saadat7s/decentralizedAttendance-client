import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axios/axiosInstance"
import { getUserProfile, setUserProfile } from "./userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const initialState = {
    name: '',

    loading: false,
    message: '',
    error: ''
}



// TODO: move all the authentication to auth slice


export const registerStudent = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'admin/registerStudent',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/admin/registerStudent', data);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    })


const adminSlice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {

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

export default adminSlice.reducer;

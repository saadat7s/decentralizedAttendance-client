import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axiosInstance";

const initialState = {
    allTeachers: [],

    loading: false,
    message: '',
    error: ''
}

// register teacher call
const registerTeacher = createAsyncThunk<any, { fullName: string, email: string, password: string, faculty: string, designation: string, officeLocation: string }, { rejectValue: { message: string } }>(
    'teacher/getAllTeachers',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/admin/register-teacher', data)
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    }
)

const teacherSlice = createSlice({
    name: 'teacher',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        // register teacher builder
        builder.addCase(registerTeacher.pending, state => {
            state.loading = true;
        })
        builder.addCase(registerTeacher.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        })
        builder.addCase(registerTeacher.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })
    },
})

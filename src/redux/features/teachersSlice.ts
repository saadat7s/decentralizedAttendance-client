import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axiosInstance";
import toast from "react-hot-toast";
import { endSession } from "./sessionSlice";

const initialState = {
    allTeachers: [],

    loading: false,
    message: '',
    error: ''
}

// register teacher call
export const registerTeacher = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'teacher/registerTeacher',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/admin/registerTeacher', data.values)
            data.formikHelpers.resetForm();
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    }
)

export const getAllTeachers = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    'teacher/getAllTeachers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/admin/getAllTeachers');
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)

export const finalizeAttendance = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'teacher/finalizeAttendance',
    async (data: any, { rejectWithValue, dispatch }) => {
        try {
            const response = await axiosInstance.patch('/teacher/finalize-attendance', data);
            dispatch(endSession()) //end the session state locally to save api call
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message });
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
            toast.success(state.message);
        })
        builder.addCase(registerTeacher.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
            toast.error(state.error);
        })

        // get all teachers builder
        builder.addCase(getAllTeachers.pending, state => {
            state.loading = true;
        })
        builder.addCase(getAllTeachers.fulfilled, (state, action) => {
            state.loading = false;
            state.allTeachers = action.payload?.teachers;
            state.message = action.payload?.message;
        })
        builder.addCase(getAllTeachers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })

        // finalize attendance builder
        builder.addCase(finalizeAttendance.pending, state => {
            state.loading = true;
        })
        builder.addCase(finalizeAttendance.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        })
        builder.addCase(finalizeAttendance.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })
    },
})

export default teacherSlice.reducer;
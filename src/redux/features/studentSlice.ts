import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axios/axiosInstance"
import toast from "react-hot-toast";

const initialState = {
    students: [],

    loading: false,
    message: '',
    error: ''
}
export const addStudent = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'student/addStudent',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/admin/registerStudent', data);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)

export const getAllStudents = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    'student/getAllStudents',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/admin/getAllStudents');
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)

const studentSlice = createSlice({
    name: 'student',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        // add student builder
        builder.addCase(addStudent.pending, state => {
            state.loading = true;
        })
        builder.addCase(addStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            toast.success(state.message);
        })
        builder.addCase(addStudent.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
            toast.error(state.error);
        })

        // get all students builder
        builder.addCase(getAllStudents.pending, state => {
            state.loading = true;
        })
        builder.addCase(getAllStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            state.students = action.payload?.students;
        })
    },
}
)

export default studentSlice.reducer;
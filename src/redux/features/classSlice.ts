import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axios/axiosInstance"
import toast from "react-hot-toast";

const initialState = {
    classes: [],

    loading: false,
    message: '',
    error: ''
}

export const registerClass = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'class/registerClass',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/admin/createClass', data.values);
            data.formikHelpers.resetForm();
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message });
        }
    }
)

export const editClass = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'class/editClass',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put('/admin/editClass', data.values);
            data.formikHelpers.resetForm();
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    }
)

export const getAllClasses = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    'class/getAllClasses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/admin/get-all-classes');
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    }
)


const classSlice = createSlice({
    name: 'class',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        // register class builder
        builder.addCase(registerClass.pending, state => {
            state.loading = true;
        })
        builder.addCase(registerClass.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        })
        builder.addCase(registerClass.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })

        // edit class builder
        builder.addCase(editClass.pending, state => {
            state.loading = true;
        })
        builder.addCase(editClass.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        })
        builder.addCase(editClass.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })

        // all class builder
        builder.addCase(getAllClasses.pending, state => {
            state.loading = true;
        })
        builder.addCase(getAllClasses.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            state.classes = action.payload?.classes;
        })
        builder.addCase(getAllClasses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })
    },
})

export default classSlice.reducer;
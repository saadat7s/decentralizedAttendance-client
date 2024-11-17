import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axios/axiosInstance"

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
            const response = await axiosInstance.post('/class/registerClass', data);
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
            const response = await axiosInstance.put('/class/editClass', data);
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
    },
})

export default classSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios/axiosInstance';
import toast from 'react-hot-toast';

// created an initial state to keep track
const initialState = {
    allSessions: [],

    loading: false,
    message: '',
    error: ''
}
// create session 
export const createSession = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'teacher/createSession',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/admin/create-session', data.values)
            data.formikHelpers.resetForm();
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    }
)
// get all sesssions
export const getAllSessions = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    'teacher/getAllSessions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/admin/get-all-sessions');
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)



const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {},
    extraReducers(builder) {
        // create session builder
        builder.addCase(createSession.pending, state => {
            state.loading = true;
        })
        builder.addCase(createSession.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            toast.success(state.message);
        })
        builder.addCase(createSession.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
            toast.error(state.error);
        })
        // get all sessions builder
        builder.addCase(getAllSessions.pending, state => {
            state.loading = true;
        })
        builder.addCase(getAllSessions.fulfilled, (state, action) => {
            state.loading = false;
            state.allSessions = action.payload?.sessions;
            state.message = action.payload?.message;
        })
        builder.addCase(getAllSessions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })
    },
});

export default sessionSlice.reducer;


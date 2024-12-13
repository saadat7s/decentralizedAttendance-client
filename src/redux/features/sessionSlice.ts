import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios/axiosInstance';
import toast from 'react-hot-toast';


interface SessionState {
    allSessions: [];
    session: any
    loading: boolean;
    message: string;
    error: string;
}

const initialState: SessionState = {
    allSessions: [],
    session: {},
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

//  getSessionsByClass async thunk
export const getSessionsByClass = createAsyncThunk<any, string, { rejectValue: { message: string } }>(
    'student/getSessionsByClass',
    async (classId: string, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/teacher/get-sessions-by-class/${classId}`);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.response?.data?.message || 'Error fetching sessions' });
        }
    }
);

//  getSessionsByClass async thunk
export const startSessionById = createAsyncThunk<any, string, { rejectValue: { message: string } }>(
    'student/startSessionById',
    async (sessionId: string, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(`/teacher/start-session-upon-selection/${sessionId}`);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.response?.data?.message || 'Error starting session' });
        }
    }
);



const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        toggleStudentAttendance: (state, action) => {
            if (state.session?.attendance?.includes(action.payload)) {
                state.session.attendance = state.session?.attendance?.filter((std: string) => std !== action.payload);
                console.log(state.session)
            }
            else {
                state.session?.attendance?.push(action.payload)
                console.log(state.session)
            }
        },
        endSession: (state) => {
            state.session.ended = true;
        }
    },
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


        // get sessions by class builder
        builder.addCase(getSessionsByClass.pending, state => {
            state.loading = true;
        })
        builder.addCase(getSessionsByClass.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            state.allSessions = action.payload?.sessions || [];
        })
        builder.addCase(getSessionsByClass.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
            toast.error(state.error);
        })

        // start a session
        builder.addCase(startSessionById.pending, state => {
            state.loading = true;
        })
        builder.addCase(startSessionById.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            state.session = action.payload?.session;
            toast.success(state.message);
        })
        builder.addCase(startSessionById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
            toast.error(state.error);
        })
    },
},
);

export default sessionSlice.reducer;
export const { toggleStudentAttendance, endSession } = sessionSlice.actions


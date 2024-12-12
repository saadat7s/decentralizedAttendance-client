import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axios/axiosInstance"
import toast from "react-hot-toast";



interface StudentState {
    students: [];
    loading: boolean;
    message: string;
    error: string;
}

const initialState: StudentState = {
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

//  getStudentsByClass async thunk
export const getStudentsByClass = createAsyncThunk<any, string, { rejectValue: { message: string } }>(
    'student/getStudentsByClass',
    async (classId: string, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/teacher/get-students-by-class/${classId}`);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.response?.data?.message || 'Error fetching students' });
        }
    }
);

export const markAttendance = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'student/markAttendance',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/student/markAttendance', data);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message });
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

        // get students by class builder
        builder.addCase(getStudentsByClass.pending, state => {
            state.loading = true;
        })
        builder.addCase(getStudentsByClass.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            state.students = action.payload?.students || [];
        })
        builder.addCase(getStudentsByClass.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
            toast.error(state.error);
        })

        // mark student attendance
        builder.addCase(markAttendance.pending, state => {
            state.loading = true;
        })
        builder.addCase(markAttendance.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        })
        builder.addCase(markAttendance.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })
    },
}
)

export default studentSlice.reducer;
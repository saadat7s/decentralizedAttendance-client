import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axiosInstance";

interface classType {
    id: string,
    name: string
}

interface ClassState {
    classes: classType[];
    loading: boolean;
    message: string;
    error: string;
}

const initialState: ClassState = {
    classes: [],
    loading: false,
    message: '',
    error: ''
};

// Register a class
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
);

// Edit a class
export const editClass = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'class/editClass',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put('/admin/editClass', data.values);
            data.formikHelpers.resetForm();
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message });
        }
    }
);

// Get all classes
export const getAllClasses = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    'class/getAllClasses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/admin/get-all-classes');
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message });
        }
    }
);


export const getAssignedClasses = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    '/class/getAssignedClasses',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/teacher/get-assigned-classes');
            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
)






const classSlice = createSlice({
    name: 'class',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {

        // Get assigned classes
        builder
            .addCase(getAssignedClasses.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAssignedClasses.fulfilled, (state, action) => {
                state.loading = false;
                state.classes = action.payload?.classes;
                state.message = action.payload?.message;
            })
            .addCase(getAssignedClasses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred';
            });

        // Register class
        builder.addCase(registerClass.pending, state => {
            state.loading = true;
        });
        builder.addCase(registerClass.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        });
        builder.addCase(registerClass.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
        });

        // Edit class
        builder.addCase(editClass.pending, state => {
            state.loading = true;
        });
        builder.addCase(editClass.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        });
        builder.addCase(editClass.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
        });

        // Get all classes
        builder.addCase(getAllClasses.pending, state => {
            state.loading = true;
        });
        builder.addCase(getAllClasses.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
            state.classes = action.payload?.classes;
        });
        builder.addCase(getAllClasses.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
        });

    },
});

export default classSlice.reducer;

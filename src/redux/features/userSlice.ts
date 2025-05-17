import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../utils/axios/axiosInstance"


const initialState = {
    userProfile: <any>{},

    isAuthenticated: false,
    token: '',
    loading: false,
    message: '',
    error: ''
}

export const getUserProfile = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    'user/getUserProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = axiosInstance.get('/auth/login/user-profile');
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error?.message })
        }
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userProfile = action.payload;
            if (state.userProfile?.email) {
                state.isAuthenticated = true;
            }
        },
        clearUserProfile: (state) => {
            state.userProfile = {};
            console.log("User Profile Cleared", state.userProfile)
            state.isAuthenticated = false;
        },
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    },
    extraReducers(builder) {
        // get user profile builder
        builder.addCase(getUserProfile.pending, state => {
            state.loading = true;
        })
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.userProfile = action.payload?.user
            state.isAuthenticated = true;
            state.loading = false;
        })
        builder.addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
        })
    },
})

export default userSlice.reducer;
export const { setUserProfile, setAuthenticated, clearUserProfile } = userSlice.actions;
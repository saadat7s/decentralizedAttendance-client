// src/redux/features/dashboardSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios/axiosInstance";
import axios from "axios"; // Import standard axios for a direct request

interface DashboardStats {
    teachers: number;
    students: number;
    classes: number;
    sessions: number;
}

interface DashboardState {
    stats: DashboardStats;
    loading: boolean;
    error: string | null;
}

const initialState: DashboardState = {
    stats: {
        teachers: 0,
        students: 0,
        classes: 0,
        sessions: 0
    },
    loading: false,
    error: null,
};

// Try using standard axios instead of your custom instance
export const fetchDashboardStats = createAsyncThunk(
    'dashboard/fetchStats',
    async (_, { rejectWithValue }) => {
        try {
            console.log('Fetching dashboard stats...');

            // Try a direct axios call instead of the custom instance
            const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}/admin/get-dashboard-stats`, {
            });
            return response.data;            
        } catch (error: any) {
            console.error('Error fetching dashboard stats:', error);
            return rejectWithValue({
                message: error.response?.data?.message || 'Failed to fetch dashboard statistics',
                error: error
            });
        }
    }
);

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        // Add a reducer to manually set stats (useful for testing)
        setStats: (state, action: PayloadAction<DashboardStats>) => {
            state.stats = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardStats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDashboardStats.fulfilled, (state, action) => {
                state.loading = false;
                // Make sure this matches the structure in your API response
                state.stats = action.payload.data;
            })
            .addCase(fetchDashboardStats.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                // Using message instead of error
                state.error = action.payload?.message || 'Unknown error';
            });
    }
});

export const { setStats } = dashboardSlice.actions;
export default dashboardSlice.reducer;
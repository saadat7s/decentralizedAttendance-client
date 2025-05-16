import React, { useEffect } from 'react';
import { Button, Divider, Stack } from '@mui/material';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/PageHeader';
import AdminSidebar from './AdminSidebar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getAllSessions } from '../redux/features/sessionSlice';
import RenderTable from '../components/RenderTable';
import RenderSessionsTableBody from '../components/RenderSessionsTableBody';
import withAuth from '../utils/withAuth';

function AdminDashboardSessions() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { allSessions, loading, error } = useSelector((state: RootState) => state.session);

    useEffect(() => {
        {
            dispatch(getAllSessions());
        }
    }, [])

    return (
        <Wrapper>
            <AdminSidebar />
            <Stack flexGrow={1} gap={2} py={2} px={4}>
                <PageHeader
                    actions={
                        <Button variant="contained" onClick={() => navigate('./create-session')}>
                            Create Session
                        </Button>
                    }
                />
                <Divider />

                {loading ? (
                    <p>Loading sessions...</p>
                ) : error ? (
                    <p style={{ color: 'red' }}>Error: {error}</p>
                ) : (
                    <RenderTable
                        tableLabels={['#', 'Class Name', 'Session Name', 'Date']}
                    >
                        <RenderSessionsTableBody tableData={allSessions} />
                    </RenderTable>
                )}
            </Stack>
        </Wrapper>
    );
}

export default withAuth(AdminDashboardSessions);

import { Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'

function AdminDashboardStudents() {
    return (
        <Stack flexGrow={1} gap={3}>
            <Sidebar />

            <Stack flexGrow={1} alignItems={'center'} justifyContent={'center'}>
                <Typography variant='h3'>
                    Students
                </Typography>
            </Stack>
        </Stack>
    )
}

export default AdminDashboardStudents
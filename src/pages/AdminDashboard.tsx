import { Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'

function AdminDashboard() {
    return (
        <Stack flexGrow={1} gap={3}>
            <Sidebar />

            <Stack flexGrow={1} alignItems={'center'} justifyContent={'center'}>
                <Typography variant='h3'>
                    Dashboard
                </Typography>
            </Stack>
        </Stack>
    )
}

export default AdminDashboard
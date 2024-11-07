import { Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'

function AdminDashboardClasses() {
    return (
        <Stack flexGrow={1} gap={3}>
            <Sidebar />

            <Stack flexGrow={1} alignItems={'center'} justifyContent={'center'}>
                <Typography variant='h3'>
                    Classes
                </Typography>
            </Stack>
        </Stack>
    )
}

export default AdminDashboardClasses
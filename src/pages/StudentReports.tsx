import { Stack } from '@mui/material'
import React from 'react'
import StudentNavbar from '../components/Student/StudentNavbar'
import Home from '../components/Student/Home'
import withAuth from '../utils/withAuth'
import Reports from '../components/Student/Reports'

function StudentReports() {
    return (
        <Stack
            width={'100vw'}
            height={'100vh'}
            gap={5}
            bgcolor={'secondary.300'}
        >
            <StudentNavbar />

            <Reports />

        </Stack>
    )
}

export default withAuth(StudentReports)
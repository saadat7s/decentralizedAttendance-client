import { Stack } from '@mui/material'
import React from 'react'
import StudentNavbar from '../components/Student/StudentNavbar'
import Home from '../components/Student/Home'
import withAuth from '../utils/withAuth'

function StudentHome() {
    return (
        <Stack
            width={'100vw'}
            height={'100vh'}
            gap={5}
            bgcolor={'secondary.300'}
        >
            <StudentNavbar />

            <Home />

        </Stack>
    )
}

export default withAuth(StudentHome)
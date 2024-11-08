import { Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'

function AdminDashboardClasses() {
    return (
        <Wrapper>

            <Sidebar />

            <Stack flexGrow={1} gap={2} p={2}>

                <Stack alignItems={'end'}>
                    <Button sx={{ width: 'fit-content' }} variant='contained' color='error'>
                        Logout
                    </Button>
                </Stack>
                <Divider />

                <PageHeader
                    title='Classes'
                    actions={
                        <Button variant='contained' >
                            Add a Class
                        </Button>
                    }
                />

            </Stack>

        </Wrapper>
    )
}

export default AdminDashboardClasses
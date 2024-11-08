import { Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'
import ProfileMenu from '../components/ProfileMenu'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'

function AdminDashboard() {
    return (
        <Wrapper>

            <Sidebar />

            <Stack flexGrow={1} p={2} gap={2}>

                <Stack alignItems={'end'}>
                    <Button sx={{ width: 'fit-content' }} variant='contained' color='error'>
                        Logout
                    </Button>
                </Stack>
                <Divider />

                <PageHeader
                    actions={null}
                    title='Dashboard'
                />
            </Stack>

        </Wrapper>
    )
}

export default AdminDashboard
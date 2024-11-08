import { Button, Divider, Stack, } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'

function AdminDashboardStudents() {
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
                    title='Students'
                    actions={
                        <Button variant='contained' >
                            Add a Student
                        </Button>
                    }
                />


            </Stack>

        </Wrapper>

    )
}

export default AdminDashboardStudents
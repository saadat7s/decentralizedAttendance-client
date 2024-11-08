import { Button, Divider, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import PageHeader from '../components/PageHeader'
import Wrapper from '../components/Wrapper'
import RenderTable from '../components/RenderTable'

function AdminDashboardTeacher() {
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
                    title='Teachers'
                    actions={
                        <Button variant='contained' >
                            Add a Teacher
                        </Button>
                    }
                />

                <RenderTable
                    tableLabels={['#', 'Name', 'Program', 'Class']}
                    tableData={[]}
                />

            </Stack>

        </Wrapper>

    )
}

export default AdminDashboardTeacher
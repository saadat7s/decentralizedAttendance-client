import { Button, Divider, IconButton, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import PageHeader from '../components/PageHeader'
import Wrapper from '../components/Wrapper'
import RenderTable from '../components/RenderTable'
import { Add } from '@mui/icons-material'

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
                        <IconButton>
                            <Add sx={{ color: 'primary.contrastText' }} />
                        </IconButton>
                    }
                />

                <RenderTable
                    tableLabels={['#', 'Name', 'Program', 'Class']}
                    tableData={[]}
                />

            </Stack>

            <Stack
                p={4}
                border={'1px solid'}
                borderColor={'primary.contrastText'}
                borderRadius={3}
            >

            </Stack>

        </Wrapper>

    )
}

export default AdminDashboardTeacher
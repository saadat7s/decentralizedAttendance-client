import { Button, Divider, Stack, } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import RenderTable from '../components/RenderTable'

function AdminDashboardClasses() {
    const navigate = useNavigate();
    return (
        <Wrapper>

            <AdminSidebar />

            <Stack flexGrow={1} gap={2} py={2} px={4}>

                <PageHeader
                    actions={
                        <Button variant='contained' onClick={() => navigate('./add-class')}>
                            Add a Class
                        </Button>
                    }
                />

                <Divider />

                <RenderTable
                    tableLabels={['#', 'Course Name', 'Course ID', 'Teacher', 'Students']}
                    tableData={[]}

                />
            </Stack>

        </Wrapper>
    )
}

export default AdminDashboardClasses
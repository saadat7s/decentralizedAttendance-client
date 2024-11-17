import { Button, Divider, Stack, } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import RenderTable from '../components/RenderTable'

function AdminDashboardStudents() {
    const navigate = useNavigate();
    return (
        <Wrapper>

            <AdminSidebar />

            <Stack flexGrow={1} gap={2} py={2} px={4}>

                <PageHeader
                    actions={
                        <Button variant='contained' onClick={() => navigate('./add-student')} >
                            Add a Student
                        </Button>
                    }
                />

                <Divider />

                <RenderTable
                    tableLabels={['#', 'Name', 'Roll No', 'Department', 'Semester', 'Program', 'Batch', 'Courses']}
                    tableData={[]}
                />


            </Stack>

        </Wrapper>

    )
}

export default AdminDashboardStudents
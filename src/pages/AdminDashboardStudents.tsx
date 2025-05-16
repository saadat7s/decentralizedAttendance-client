import { Button, Divider, Stack, } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import RenderTable from '../components/RenderTable'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { getAllStudents } from '../redux/features/studentSlice'
import withAuth from '../utils/withAuth'
import RenderStudentTableBody from '../components/RenderStudentTableBody'

function AdminDashboardStudents() {
    const navigate = useNavigate();
    const { students } = useSelector((state: RootState) => state.student);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getAllStudents())
    }, [])
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
                >

                    <RenderStudentTableBody
                        tableData={students}
                    />
                </RenderTable>


            </Stack>

        </Wrapper>

    )
}

export default withAuth(AdminDashboardStudents)
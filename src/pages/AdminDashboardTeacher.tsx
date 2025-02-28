import { Button, Divider, IconButton, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import PageHeader from '../components/PageHeader'
import Wrapper from '../components/Wrapper'
import RenderTable from '../components/RenderTable'
import { Add } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import SimpleModal from '../components/SimpleModal'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import withAuth from '../utils/withAuth'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { getAllTeachers } from '../redux/features/teachersSlice'
import RenderTeacherTableBody from '../components/RenderTeacherTableBody'

function AdminDashboardTeacher() {
    const navigate = useNavigate()
    const { allTeachers } = useSelector((state: RootState) => state.teacher)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (allTeachers.length === 0) {
            dispatch(getAllTeachers());
        }
    }, [])

    return (
        <Wrapper>

            <AdminSidebar />

            <Stack flexGrow={1} gap={2} py={2} px={4}>


                <PageHeader
                    actions={
                        <Button variant='contained' onClick={() => navigate('./add-teacher')}>
                            Add Teacher
                        </Button>
                    }
                />

                <Divider />

                <RenderTable
                    tableLabels={['#', 'Name', 'Designation', 'Faculty', 'Office Location', 'Courses']}
                >
                    <RenderTeacherTableBody
                        tableData={allTeachers}
                    />
                </RenderTable>

            </Stack>

        </Wrapper>

    )
}

export default withAuth(AdminDashboardTeacher)
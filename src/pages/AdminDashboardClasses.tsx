import { Button, Divider, Stack, } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import RenderTable from '../components/RenderTable'
import withAuth from '../utils/withAuth'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { useEffect } from 'react'
import { getAllClasses } from '../redux/features/classSlice'
import RenderClassesTableBody from '../components/RenderClassesTableBody'

function AdminDashboardClasses() {
    const navigate = useNavigate();
    const { classes } = useSelector((state: RootState) => state.class)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (classes.length === 0) {
            dispatch(getAllClasses());
        }
    }, [])
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
                >
                    <RenderClassesTableBody
                        tableData={classes}
                    />
                </RenderTable>
            </Stack>

        </Wrapper>
    )
}

export default withAuth(AdminDashboardClasses)
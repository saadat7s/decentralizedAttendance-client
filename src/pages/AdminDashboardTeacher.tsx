import { Button, Divider, IconButton, Stack } from '@mui/material'
import Sidebar from '../components/Sidebar'
import PageHeader from '../components/PageHeader'
import Wrapper from '../components/Wrapper'
import RenderTable from '../components/RenderTable'
import { Add } from '@mui/icons-material'
import { useState } from 'react'
import SimpleModal from '../components/SimpleModal'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

function AdminDashboardTeacher() {
    const navigate = useNavigate()

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
                    tableLabels={['#', 'Name', 'Program', 'Class']}
                    tableData={[]}
                />

            </Stack>

        </Wrapper>

    )
}

export default AdminDashboardTeacher
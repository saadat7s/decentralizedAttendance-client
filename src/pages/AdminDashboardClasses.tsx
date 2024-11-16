import { Button, Divider, Stack, } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

function AdminDashboardClasses() {
    const navigate = useNavigate();
    return (
        <Wrapper>

            <AdminSidebar />

            <Stack flexGrow={1} py={2} px={4}>

                <PageHeader
                    actions={
                        <Button variant='contained' onClick={() => navigate('./add-class')}>
                            Add a Class
                        </Button>
                    }
                />

            </Stack>

        </Wrapper>
    )
}

export default AdminDashboardClasses
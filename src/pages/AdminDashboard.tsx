import { Button, Divider, Stack, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { AccountBalance, CastForEducation, Face2, School } from '@mui/icons-material'
import EmptyDashboardCard from '../components/EmptyDashboardCard'
import AdminSidebar from './AdminSidebar'

function AdminDashboard() {
    return (
        <Wrapper>

            <AdminSidebar />

            <Stack p={2} gap={2}>

                <Stack alignItems={'end'}>
                    <Button sx={{ width: 'fit-content' }} variant='contained' color='error'>
                        Logout
                    </Button>
                </Stack>
                <Divider />

                {/* <PageHeader
                    actions={null}
                    title='Dashboard'
                /> */}

                <Stack
                    gap={3}
                    px={2}
                    py={2}
                    flexGrow={1}
                >
                    <Stack>
                        <Typography variant='h4' color='secondary.200' fontWeight={'bold'}>
                            Welcome to your dashboard, Admin
                        </Typography>
                    </Stack>

                    <Stack>
                        <EmptyDashboardCard
                            to='/admin/dashboard/students'
                            title='Add Students'
                            subtitle='Create rich course content and coaching products for your students.
                        When you give them a pricing plan, they’ll appear on your site!'
                            icon={
                                <School color='primary' sx={{ bgcolor: 'secondary.100', p: 0.5, borderRadius: 2 }} />
                            }
                        />

                        <EmptyDashboardCard
                            to='/admin/dashboard/teachers'
                            title='Add Teachers'
                            subtitle='Create rich course content and coaching products for your students.
                        When you give them a pricing plan, they’ll appear on your site!'
                            icon={
                                <Face2 color='primary' sx={{ bgcolor: 'secondary.100', p: 0.5, borderRadius: 2 }} />
                            }
                        />

                        <EmptyDashboardCard
                            to='/admin/dashboard/classes'
                            title='Add Class'
                            subtitle='Create rich course content and coaching products for your students.
                        When you give them a pricing plan, they’ll appear on your site!'
                            icon={
                                <AccountBalance color='primary' sx={{ bgcolor: 'secondary.100', p: 0.5, borderRadius: 2 }} />
                            }
                        />

                    </Stack>
                </Stack>
            </Stack>

        </Wrapper>
    )
}

export default AdminDashboard
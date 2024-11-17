import { Button, Divider, Stack, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { AccountBalance, CastForEducation, Face2, School } from '@mui/icons-material'
import EmptyDashboardCard from '../components/EmptyDashboardCard'
import AdminSidebar from './AdminSidebar'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import withAuth from '../utils/withAuth'

function AdminDashboard() {
    const { userProfile } = useSelector((state: RootState) => state.user)
    return (
        <Wrapper>

            <AdminSidebar />

            <Stack p={2} gap={2} flexGrow={1}>

                <Stack alignItems={'end'}>
                    {userProfile?.name &&
                        <Button sx={{ width: 'fit-content' }} variant='contained' color='error'>
                            Logout
                        </Button>
                    }
                </Stack>
                <Divider />

                {/* <PageHeader
                    actions={null}
                    title='Dashboard'
                /> */}

                <Stack
                    direction={'row'}
                    gap={2}
                >


                    <Stack
                        gap={3}
                        px={2}
                        py={2}
                        flexGrow={1}
                    >
                        <Stack>
                            <Typography variant='h4' color='secondary.200' fontWeight={'bold'}>
                                Welcome to your dashboard, {userProfile?.name}
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

                    <Stack
                        gap={2}
                        border={'1px solid'}
                        borderColor={'secondary.100'}
                        borderRadius={3}
                        flexGrow={1}
                        p={4}
                        divider={<Divider />}
                    >
                        <Stack>
                            <Typography variant='h5' color='secondary.200' fontWeight={'bold'}>
                                Teachers
                            </Typography>
                            <Typography>
                                15
                            </Typography>
                        </Stack>

                        <Stack>
                            <Typography variant='h5' color='secondary.200' fontWeight={'bold'}>
                                Students
                            </Typography>
                            <Typography>
                                15
                            </Typography>
                        </Stack>

                        <Stack>
                            <Typography variant='h5' color='secondary.200' fontWeight={'bold'}>
                                Classes
                            </Typography>
                            <Typography>
                                15
                            </Typography>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>

        </Wrapper>
    )
}

export default withAuth(AdminDashboard)
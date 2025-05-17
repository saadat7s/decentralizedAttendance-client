import { Button, Divider, Stack, Typography } from '@mui/material'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import { AccountBalance, CastForEducation, Face2, School } from '@mui/icons-material'
import EmptyDashboardCard from '../components/EmptyDashboardCard'
import AdminSidebar from './AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import withAuth from '../utils/withAuth'
import { useEffect } from 'react'
import { fetchDashboardStats } from '../redux/features/dashboardSlice'


function AdminDashboard() {
    const { userProfile } = useSelector((state: RootState) => state.user)
    const { stats: { classes, sessions, students, teachers } } = useSelector((state: RootState) => state.dashboard)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchDashboardStats());
    }, [])
    return (
        <Wrapper>

            <AdminSidebar />

            <Stack p={2} gap={2} flexGrow={1}>

                <PageHeader
                    actions={
                        null
                    }
                />
                <Divider />

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
                                subtitle='You are able to Register Students'
                                icon={
                                    <School color='primary' sx={{ bgcolor: 'secondary.100', p: 0.5, borderRadius: 2 }} />
                                }
                            />

                            <EmptyDashboardCard
                                to='/admin/dashboard/teachers'
                                title='Add Teachers'
                                subtitle='You are able to Register Teachers'
                                icon={
                                    <Face2 color='primary' sx={{ bgcolor: 'secondary.100', p: 0.5, borderRadius: 2 }} />
                                }
                            />

                            <EmptyDashboardCard
                                to='/admin/dashboard/classes'
                                title='Add Class'
                                subtitle='You can create a class, assign an instructor to it and add the students to it to get going.'
                                icon={
                                    <AccountBalance color='primary' sx={{ bgcolor: 'secondary.100', p: 0.5, borderRadius: 2 }} />
                                }

                                
                            />

                            <EmptyDashboardCard
                                to='/admin/dashboard/sessions'
                                title='Add Session'
                                subtitle='You can create a session, which lets you schedule a class.'
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
                                {teachers}
                            </Typography>
                        </Stack>

                        <Stack>
                            <Typography variant='h5' color='secondary.200' fontWeight={'bold'}>
                                Students
                            </Typography>
                            <Typography>
                                {students}
                            </Typography>
                        </Stack>

                        <Stack>
                            <Typography variant='h5' color='secondary.200' fontWeight={'bold'}>
                                Classes
                            </Typography>
                            <Typography>
                                {classes}
                            </Typography>
                        </Stack>

                        <Stack>
                            <Typography variant='h5' color='secondary.200' fontWeight={'bold'}>
                                Sessions
                            </Typography>
                            <Typography>
                                {sessions}
                            </Typography>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>

        </Wrapper>
    )
}

export default withAuth(AdminDashboard)
export {};

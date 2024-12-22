import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import LandingProfileCards from '../components/LandingProfileCards';
import Navbar from '../components/Navbar';
import NavItemsRegular from '../components/NavItemsRegular';
import { ElectricBolt, Extension, RecordVoiceOver, School, Security, SupervisedUserCircle, Thunderstorm, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const bannerImage = 'banner-bg.jpg';
const attendanceImage = 'attendanceData.png';
const adminImage = 'admin-profile.png';
const teacherImage = 'teacher-profile.png';
const studentImage = 'student-profile.png';

function LandingPage() {
    const navigate = useNavigate()
    return (
        <Stack
            gap={5}
        >
            {/* Navbar */}
            <Stack
                justifyContent={'space-between'}
                gap={3}
                direction={'row'}
                px={15}
                py={5}
            >

                {/* Logo */}
                <Stack>
                    <Typography lineHeight={1} variant='caption' fontWeight={'900'} sx={{ textTransform: 'uppercase' }}>
                        Decentralized
                    </Typography>
                    <Typography lineHeight={1} variant='caption' fontWeight={'900'} sx={{ textTransform: 'uppercase' }}>
                        Attendance
                    </Typography>
                    <Typography lineHeight={1} variant='caption' fontWeight={'900'} sx={{ textTransform: 'uppercase' }}>
                        System
                    </Typography>
                </Stack>

                {/* Nav buttons */}
                <Stack
                    direction={'row'}
                    gap={1}
                >
                    <Button variant='contained'>
                        Login
                    </Button>

                    <Button variant='contained'>
                        Register
                    </Button>

                </Stack>
            </Stack>

            {/* Banner */}
            <Stack
                px={15}
                py={5}
                gap={2}
            >
                <Typography variant='h3' fontWeight={'900'} textAlign={'center'}>
                    Attendance System,
                </Typography>
                <Typography variant='h3' fontWeight={'900'} textAlign={'center'}>
                    Revolutionized!
                </Typography>

                <Typography variant='body2' textAlign={'center'} color='secondary.200'>
                    Experience the future of attendance tracking with blockchain technology – secure, tamper-proof, and transparent.
                </Typography>

                <Stack alignItems={"center"}>
                    <Button sx={{
                        width: 'fit-content'
                    }}>
                        Learn more
                    </Button>
                </Stack>
            </Stack>

            {/* App screenshot */}

            <Stack
                px={15}
                py={5}
                bgcolor={'ActiveBorder'}
                gap={5}
            >
                <img
                    src='adminDashboard.png'
                    width={'100%'}
                    height={'100%'}
                    style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14 }}
                    alt='a screenshot of the app'
                />

            </Stack>


            <Grid container spacing={5} alignItems="start" px={15} py={5}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" fontWeight="bold" color="primary.main" gutterBottom>
                        The Challenge
                    </Typography>
                    <Stack spacing={2}>
                        <Typography variant="body1" color="text.primary">
                            Traditional attendance systems are plagued with inefficiencies like data manipulation, proxy attendance,
                            and lack of transparency.
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            Our decentralized blockchain-based solution ensures that attendance data is immutable, secure, and always
                            accessible, restoring trust and reliability.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} display="flex" justifyContent="center">
                    <img
                        src={attendanceImage}
                        alt="Attendance Data Visualization"
                        style={{
                            maxWidth: '100%',
                            borderRadius: 12,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        }}
                    />
                </Grid>
            </Grid>


            <Stack spacing={5} textAlign="center" py={10} px={15}>
                <Typography variant="h4" fontWeight="bold" color="primary.main">
                    Why Choose Decentralized Attendance System?
                </Typography>
                <Grid container spacing={3}>
                    {[
                        { title: 'Immutable Data', description: 'Blockchain technology ensures attendance records cannot be altered.', icon: <Security htmlColor='white' /> },
                        { title: 'Real-Time Tracking', description: 'Monitor attendance data in real-time from anywhere.', icon: <ElectricBolt htmlColor='white' /> },
                        { title: 'Transparent Records', description: 'Stakeholders have full visibility of attendance status.', icon: <Visibility htmlColor='white' /> },
                        { title: 'Effortless Integration', description: 'Seamlessly integrates with existing systems and workflows.', icon: <Extension htmlColor='white' /> },
                    ].map((feature, idx) => (
                        <Grid item xs={12} sm={6} md={3} key={idx}>
                            <Box
                                sx={{
                                    bgcolor: 'primary.100',
                                    p: 3,
                                    borderRadius: 5,
                                    boxShadow: 3,
                                    transition: '0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                {feature.icon}
                                <Typography variant="h6" fontWeight="bold" color="primary.contrastText" gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="secondary.100">
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Stack>


            <Stack direction="row" spacing={5} justifyContent="center" flexWrap="wrap" px={15} py={10} bgcolor={'ActiveBorder'}>
                {[
                    {
                        title: 'Admin Profile',
                        subtitle:
                            'Admins have the power to manage users, create sessions, and ensure attendance record integrity.',
                        image: <SupervisedUserCircle sx={{ fontSize: '100px' }} />,
                        link: '/admin/login'
                    },
                    {
                        title: 'Teacher Profile',
                        subtitle: 'Teachers can track and manage attendance in real-time using our blockchain technology.',
                        image: <RecordVoiceOver sx={{ fontSize: '100px' }} />,
                        link: '/teacher/login'
                    },
                    {
                        title: 'Student Profile',
                        subtitle: 'Students can view and verify their attendance history anytime with full transparency.',
                        image: <School sx={{ fontSize: '100px' }} />,
                        link: '/student/login'
                    },
                ].map((profile, idx) => (
                    <LandingProfileCards
                        key={idx}
                        title={profile.title}
                        subtitle={profile.subtitle}
                        image={profile.image}
                        children={
                            <Button
                                onClick={() => navigate(profile.link)}
                                variant="contained"
                                size="medium"
                                sx={{
                                    fontWeight: 'bold',
                                    px: 3,
                                    py: 1,
                                }}
                            >
                                {profile.title === 'Admin Profile' ? 'Login / Register' : 'Login'}
                            </Button>
                        }
                    />
                ))}
            </Stack>


        </Stack>

    );
}

export default LandingPage;

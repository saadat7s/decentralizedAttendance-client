import { useEffect } from 'react';
import { Button, Stack, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import TeacherNavbar from './TeacherNavbar';
import { getAllAttendance } from '../../redux/features/teachersSlice';

function Details() {
    const { attendanceSummary } = useSelector((state: RootState) => state.teacher);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser({ navigate }));
    };

    useEffect(() => {
        dispatch(getAllAttendance());
    }, []);

    return (
        <Stack
            width={'100vw'}
            height={'100vh'}
            gap={5}
            bgcolor={'secondary.300'}
        >
            <TeacherNavbar />

            <Typography
                variant='h5'
                textAlign={'center'}
                fontWeight={'bold'}
            >
                Attendance Summary
            </Typography>

            <Stack
                bgcolor={'background.default'}
                gap={2}
                p={2}
                flexGrow={1}
                mx={2}
                alignItems={'center'}
                sx={{
                    borderRadius: '12px 12px 0 0',
                    overflowX: 'auto',
                }}
            >
                {attendanceSummary.length === 0 ? (
                    <Typography color="text.secondary">
                        No attendance data available
                    </Typography>
                ) : (
                    <Table component={Paper} sx={{ minWidth: 650, width: '80%' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Class Name</strong></TableCell>
                                <TableCell><strong>Course ID</strong></TableCell>
                                <TableCell><strong>Sessions Count</strong></TableCell>
                                <TableCell><strong>Last Session</strong></TableCell>
                                <TableCell><strong>Attendance Rate</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {attendanceSummary.map((summary: any, index) => (
                                <TableRow key={index}>
                                    <TableCell>{summary.className}</TableCell>
                                    <TableCell>{summary.courseId}</TableCell>
                                    <TableCell>{summary.sessionsCount}</TableCell>
                                    <TableCell>{new Date(summary.lastSession).toLocaleDateString()}</TableCell>
                                    <TableCell>{summary.attendanceRate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}

                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleLogout}
                    sx={{ mt: 2 }}
                >
                    Logout
                </Button>
            </Stack>
        </Stack>
    );
}

export default Details;

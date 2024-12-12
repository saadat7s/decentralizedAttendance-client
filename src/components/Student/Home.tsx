import { Button, Stack, Typography, TableBody, TableCell, TableRow, Table } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RenderTableHead from '../RenderTableHead'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { getStudentsClassesDetails } from '../../redux/features/classSlice'
import { getAllSessions } from '../../redux/features/sessionSlice'
import dayjs from 'dayjs'
import { markAttendance } from '../../redux/features/studentSlice'

function Home() {
    const { userProfile } = useSelector((state: RootState) => state.user);
    const { classes } = useSelector((state: RootState) => state.class)
    const [refreshData, setRefreshData] = useState(0);

    const dispatch = useDispatch<AppDispatch>();

    function markStudentAttendance(sessionId: string) {
        dispatch(markAttendance({ sessionId: sessionId }))
    }
    useEffect(() => {
        dispatch(getStudentsClassesDetails(userProfile?.courses));
        setRefreshData(0);
    }, [refreshData])

    return (
        <>
            <Typography
                variant='h5'
                textAlign={'center'}
                fontWeight={'bold'}
            >
                Student Attendance
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
                }}
            >
                <Stack
                    width={'100%'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    gap={2}
                >
                    <Typography
                        variant='h5'
                    >
                        {userProfile.name}
                    </Typography>
                    <Button
                        variant='text'
                        onClick={() => setRefreshData((previous) => previous + 1)}
                    >
                        Refresh
                    </Button>
                </Stack>

                <Table
                    sx={{
                        width: '60vw'
                    }}
                >

                    <RenderTableHead
                        labels={['Course ID', 'Course', 'Teacher Name', 'Date', 'Time', 'Actions']}
                    />

                    <TableBody>
                        {classes.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center">No data available</TableCell>
                            </TableRow>
                        ) : (
                            classes.map((row: any, index) => {

                                const sessionTime = dayjs(row?.session?.date).format('HH:MM A').toString()
                                const sessionDate = dayjs(row?.session?.date).format('DD MMMM YYYY').toString();

                                return (
                                    <TableRow key={row._id}>
                                        <TableCell>{row.courseId}</TableCell>
                                        <TableCell>{row.courseName}</TableCell>
                                        <TableCell>{row.teacher.name}</TableCell>
                                        <TableCell>{sessionDate}</TableCell>
                                        <TableCell>{sessionTime}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant={row?.attendance?.includes(userProfile?._id) ? 'contained' : 'text'}
                                                size='small'

                                                //checks if the session is started or the student has marked their attendance
                                                //if marked or session ended then disabled
                                                disabled={(row?.session?.isStarted ? row?.attendance?.includes(userProfile?._id) ? true : false : true)}
                                                onClick={() => markStudentAttendance(row?.session?._id)}
                                            >
                                                {row?.attendance?.includes(userProfile?._id) ? 'Marked' : 'Present'}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                            )
                        )}
                    </TableBody>

                </Table>

            </Stack>
        </>
    )
}

export default Home
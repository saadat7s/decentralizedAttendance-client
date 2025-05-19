import { Button, Stack, Typography, TableBody, TableCell, TableRow, Table, Tab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RenderTableHead from '../RenderTableHead'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { getStudentsClassesDetails } from '../../redux/features/classSlice'
import { getAllSessions } from '../../redux/features/sessionSlice'
import dayjs from 'dayjs'
import { getStudentReports, markAttendance } from '../../redux/features/studentSlice'

function Reports() {
    const { userProfile } = useSelector((state: RootState) => state.user);
    const [refreshData, setRefreshData] = useState(0);
    const { studentAttendance } = useSelector((state: RootState) => state.student)

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getStudentsClassesDetails(userProfile?.courses));
        dispatch(getStudentReports());
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

                {Object.keys(studentAttendance).length === 0 ? (
                    <Typography
                        variant='h5'
                        textAlign={'center'}
                        fontWeight={'bold'}
                        color={'text.secondary'}
                        sx={{
                            fontSize: '1.2rem'
                        }}
                    >
                        No attendance data available
                    </Typography>
                ) : Object.keys(studentAttendance).map((key, index) => {
                    const row = (studentAttendance as Record<string, any>)[key];
                    return row?.sessions.map((each: any) => {
                        return (
                            <Stack
                                border={'1px solid #ccc'}
                                borderRadius={'12px'}
                                key={index}
                            >

                                <Table
                                    sx={{
                                        width: '60vw'
                                    }}
                                >

                                    <RenderTableHead
                                        labels={['Class', 'CourseID', 'Session', "Date", 'Attendance',]}
                                    />
                                    <TableBody>
                                        <TableRow key={index}>
                                            <TableCell>{row.className}</TableCell>
                                            <TableCell>{row.courseId}</TableCell>
                                            <TableCell>{each.sessionName}</TableCell>
                                            <TableCell>{dayjs(each.date).format('DD/MM/YYYY hh:mm A')}</TableCell>
                                            <TableCell>{each.isPresent ? "Present" : "Absemt"}</TableCell>
                                            <TableCell>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Stack p={2}>
                                    <Typography fontSize={"12px"}>
                                        Total Sessions: {row.totalSessions}
                                    </Typography>
                                    <Typography fontSize={"12px"}>
                                        Present: {row.presentCount}
                                    </Typography>
                                    <Typography fontSize={"12px"}>
                                        Attendance: {row.attendancePercentage}%
                                    </Typography>
                                </Stack>
                            </Stack>
                        )
                    })
                }
                )}
            </Stack>
        </>
    )
}

export default Reports

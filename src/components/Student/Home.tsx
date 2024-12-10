import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Wrapper from '../Wrapper'
import Navbar from '../Navbar'
import StudentNavbar from './StudentNavbar'
import RenderTableHead from '../RenderTableHead'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { getStudentsClassesDetails } from '../../redux/features/classSlice'
import RenderStudentClasses from './RenderStudentClasses'

function Home() {
    const { userProfile } = useSelector((state: RootState) => state.user);
    const { classes } = useSelector((state: RootState) => state.class)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getStudentsClassesDetails(userProfile?.courses));
        console.log(classes);
    }, [userProfile])

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
                >
                    <Typography
                        variant='h5'
                    >
                        {userProfile.name}
                    </Typography>
                </Stack>

                <RenderTableHead
                    labels={['Course', 'Teacher Name', 'Classroom', 'Section', 'Actions']}
                />

                <RenderStudentClasses
                    tableData={classes}
                />

            </Stack>
        </>
    )
}

export default Home
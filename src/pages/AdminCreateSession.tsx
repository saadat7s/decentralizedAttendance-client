import React, { useEffect } from 'react';
import { Button, Divider, MenuItem, Stack, TextField, Typography } from '@mui/material';
import Wrapper from '../components/Wrapper';
import PageHeader from '../components/PageHeader';
import AdminSidebar from './AdminSidebar';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { createSession } from '../redux/features/sessionSlice';
import withAuth from '../utils/withAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CreateSession from '../components/Admin/CreateSession';
import { getAllClasses } from '../redux/features/classSlice';


interface SessionForm {
    classId: string;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
}

function AdminCreateSession() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {classes} = useSelector((state: RootState) => state.class)

    const formik = useFormik<SessionForm>({
        initialValues: {
            classId: '',
            name: '',
            date: '',
            startTime: '',
            endTime: '',
        },
        validate: (values) => {
            const errors: Record<string, string> = {};
            if (!values.classId) errors.classId = 'Class ID is required';
            if (!values.name) errors.name = 'Session name is required';
            if (!values.date) errors.date = 'Date is required';
            if (!values.startTime) errors.startTime = 'Start time is required';
            if (!values.endTime) errors.endTime = 'End time is required';
            return errors;
        },
        onSubmit(values, formikHelpers) {
            dispatch(createSession({ values, formikHelpers }));
        },
    });

    useEffect(() => {
dispatch(getAllClasses())
    }, [dispatch])

    return (
        <Wrapper>
            <AdminSidebar />
            <Stack flexGrow={1} gap={3} py={2} px={4}>
                <PageHeader
                    actions={
                        <Button variant="outlined" onClick={() => navigate(-1)}>
                            Back to Sessions
                        </Button>
                    }
                />
                <Divider />
                <Stack gap={3} flexGrow={1}>
                    <Typography variant="h4" color="secondary.main" fontWeight="bold">
                        Create a New Session
                    </Typography>
                    <Typography variant="subtitle2" color="secondary.contrastText">
                        Fill out the form to create a session for a class.
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack gap={3}>
                            
                <TextField
                        select
                        fullWidth
                        variant='filled'
                        name='classId'
                        label='Class'
                        placeholder='Class-1'
                        onChange={formik.handleChange}
                        error={formik.touched.classId && Boolean(formik.errors.classId)}
                        helperText={formik.touched.classId && formik.errors.classId}

                    >
                        {classes.length > 0 &&
                            classes.map((cls) => {
                                return (
                                    <MenuItem value={cls._id} key={cls._id}>
                                        {cls.teacher.name} - {cls.courseName} 
                                    </MenuItem>

                                )
                            })
                        }
                    </TextField>
                            <TextField
                                fullWidth
                                variant="filled"
                                name="name"
                                label="Session Name"
                                placeholder="Enter Session Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                name="date"
                                type="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.date && formik.errors.date)}
                                helperText={formik.touched.date && formik.errors.date}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                name="startTime"
                                type="time"
                                value={formik.values.startTime}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.startTime && formik.errors.startTime)}
                                helperText={formik.touched.startTime && formik.errors.startTime}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                name="endTime"
                                type="time"
                                value={formik.values.endTime}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.endTime && formik.errors.endTime)}
                                helperText={formik.touched.endTime && formik.errors.endTime}
                            />
                            <Stack alignItems="end">
                                <Button type="submit" variant="contained">
                                    Create Session
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>
            </Stack>
        </Wrapper>
    );
}

export default withAuth(AdminCreateSession);

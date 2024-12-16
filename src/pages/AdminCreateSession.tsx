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
import { DatePicker, DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';


interface SessionForm {
    classId: string;
    name: string;
    dateTime: string;
    // startTime: string;
    // endTime: string;
}

function AdminCreateSession() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { classes } = useSelector((state: RootState) => state.class)

    const formik = useFormik<SessionForm>({
        initialValues: {
            classId: '',
            name: '',
            dateTime: '',
            // startTime: '',
            // endTime: '',
        },
        validate: (values) => {
            const errors: Record<string, string> = {};
            if (!values.classId) errors.classId = 'Class ID is required';
            if (!values.name) errors.name = 'Session name is required';
            if (!values.dateTime) errors.dateTime = 'Date is required';
            // if (!values.startTime) errors.startTime = 'Start time is required';
            // if (!values.endTime) errors.endTime = 'End time is required';
            return errors;
        },
        onSubmit(values, formikHelpers) {
            dispatch(createSession({ values, formikHelpers }));
        },
    });

    useEffect(() => {
        dispatch(getAllClasses())
    }, [])
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
                                fullWidth
                                variant="filled"
                                name="classId"
                                label="Class ID"
                                select
                                placeholder="Enter Class ID"
                                value={formik.values.classId}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.classId && formik.errors.classId)}
                                helperText={formik.touched.classId && formik.errors.classId}
                            >
                                {classes.map((_class: any) => {
                                    return (
                                        <MenuItem value={_class._id} key={_class.courseId}>
                                            {_class.courseId} - {_class.courseName}
                                        </MenuItem>
                                    )
                                })}
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
                            {/* <TextField
                                fullWidth
                                variant="filled"
                                label={'Date'}
                                name="date"
                                type="datetime-local"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.date && formik.errors.date)}
                                helperText={formik.touched.date && formik.errors.date}
                            /> */}

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    label="Date & Time"
                                    value={formik.values.dateTime === '' ? dayjs() : dayjs(formik.values.dateTime)}
                                    // defaultValue={dayjs(new Date())}
                                    onChange={(d) => formik.setFieldValue('dateTime', d)}
                                    minDate={dayjs()}
                                    slotProps={{
                                        textField: {
                                            variant: 'filled',
                                            error: formik.touched.dateTime && Boolean(formik.errors.dateTime),
                                            helperText: formik.touched.dateTime && formik.errors.dateTime,
                                            onBlur: formik.handleBlur,
                                        },
                                    }}
                                />
                            </LocalizationProvider>


                            {/* <TextField
                                fullWidth
                                variant="filled"
                                name="startTime"
                                type="time"
                                label='Start Time'
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
                                label='End Time'
                                value={formik.values.endTime}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.endTime && formik.errors.endTime)}
                                helperText={formik.touched.endTime && formik.errors.endTime}
                            /> */}
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

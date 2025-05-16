import React, { useEffect } from 'react';
import { Button, Divider, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
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
import { getAllClasses } from '../redux/features/classSlice';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

// Session name options
const SESSION_NAMES = Array.from({ length: 8 }, (_, i) => `Lecture ${i + 1}`);

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
                            {/* Class Dropdown */}
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
                                <MenuItem value="">
                                    <em>Select a class</em>
                                </MenuItem>
                                {classes.map((_class: any) => (
                                    <MenuItem value={_class._id} key={_class.courseId}>
                                        {_class.courseId} - {_class.courseName}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* Session Name Dropdown (Lecture 1-8) */}
                            <FormControl
                                fullWidth
                                variant="filled"
                                error={Boolean(formik.touched.name && formik.errors.name)}
                            >
                                <InputLabel>Session Name</InputLabel>
                                <Select
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <MenuItem value="">
                                        <em>Select a session</em>
                                    </MenuItem>
                                    {SESSION_NAMES.map((sessionName) => (
                                        <MenuItem key={sessionName} value={sessionName}>
                                            {sessionName}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {formik.touched.name && formik.errors.name && (
                                    <Typography variant="caption" color="error">
                                        {formik.errors.name}
                                    </Typography>
                                )}
                            </FormControl>

                            {/* Date and Time Picker */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    label="Date & Time"
                                    value={formik.values.dateTime === '' ? dayjs() : dayjs(formik.values.dateTime)}
                                    onChange={(d) => formik.setFieldValue('dateTime', d)}
                                    minDate={dayjs()}
                                    slotProps={{
                                        textField: {
                                            variant: 'filled',
                                            error: formik.touched.dateTime && Boolean(formik.errors.dateTime),
                                            helperText: formik.touched.dateTime && formik.errors.dateTime,
                                            onBlur: formik.handleBlur,
                                            fullWidth: true
                                        },
                                    }}
                                />
                            </LocalizationProvider>

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
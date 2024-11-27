import React from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';

function CreateSession({ formik }: { formik: any }) {
    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack gap={3} flexGrow={1}>
                <Stack>
                    <Typography
                        variant="h4"
                        color="secondary.main"
                        fontWeight="bold"
                    >
                        Create a New Session
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="secondary.contrastText"
                    >
                        Fill out the form to create a session for a class.
                    </Typography>
                </Stack>
                <TextField
                    fullWidth
                    variant="filled"
                    name="classId"
                    label="Class ID"
                    placeholder="Enter Class ID"
                    value={formik.values.classId}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.classId && formik.errors.classId)}
                    helperText={formik.touched.classId && formik.errors.classId}
                />
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
                <Stack direction="row" gap={2}>
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
                </Stack>
                <Stack alignItems="end">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: 'fit-content' }}
                    >
                        Create Session
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
}

export default CreateSession;

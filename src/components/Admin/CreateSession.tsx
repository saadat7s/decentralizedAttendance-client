import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

// Session name options
const SESSION_NAMES = Array.from({ length: 8 }, (_, i) => `Lecture ${i + 1}`);

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

                {/* Class ID Dropdown */}
                <TextField
                    fullWidth
                    variant="filled"
                    name="classId"
                    label="Class ID"
                    select
                    placeholder="Enter Class ID"
                    value={formik.values.classId || ''}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.classId && formik.errors.classId)}
                    helperText={formik.touched.classId && formik.errors.classId}
                >
                    <MenuItem value="">
                        <em>Select a class</em>
                    </MenuItem>
                    {/* Your class items here - kept original structure */}
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
                        value={formik.values.name || ''}
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

                {/* Date Picker */}
                <TextField
                    fullWidth
                    variant="filled"
                    name="date"
                    label="Date"
                    type="date"
                    value={formik.values.date || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.date && formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                {/* Time Pickers */}
                <Stack direction="row" gap={2}>
                    <TextField
                        fullWidth
                        variant="filled"
                        name="startTime"
                        label="Start Time"
                        type="time"
                        value={formik.values.startTime || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.startTime && formik.errors.startTime)}
                        helperText={formik.touched.startTime && formik.errors.startTime}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        name="endTime"
                        label="End Time"
                        type="time"
                        value={formik.values.endTime || ''}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.endTime && formik.errors.endTime)}
                        helperText={formik.touched.endTime && formik.errors.endTime}
                        InputLabelProps={{
                            shrink: true,
                        }}
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
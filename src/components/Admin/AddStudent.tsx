import { Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';

// Department options
const DEPARTMENTS = [
    'Software Engineering',
    'AI',
    'Data Science',
    'Cyber Security',
    'Computer Games Development',
    'Computer Science'
];

// Semester options (1-8)
const SEMESTERS = Array.from({ length: 8 }, (_, i) => i + 1);

// Program types
const PROGRAM_TYPES = ['Bachelors', 'Masters'];

// Admission years (2021-2025)
const ADMISSION_YEARS = Array.from({ length: 5 }, (_, i) => 2021 + i);

function AddStudent({ formik }: { formik: any }) {
    const { loading } = useSelector((state: RootState) => state.student);

    // Update batch whenever admission year changes
    useEffect(() => {
        if (formik.values.admissionYear) {
            const graduationYear = Number(formik.values.admissionYear) + 4;
            formik.setFieldValue('batch', `${formik.values.admissionYear}-${graduationYear}`);
        }
    }, [formik.values.admissionYear]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack gap={3} flexGrow={1}>
                <Stack>
                    <Typography variant="h4" color="secondary.main" fontWeight={'bold'}>
                        Add a Student
                    </Typography>
                    <Typography variant="subtitle2" color="secondary.contrastText">
                        Fill up the form to add a student.
                    </Typography>
                </Stack>

                <TextField
                    fullWidth
                    variant="filled"
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <Stack direction={'row'} gap={2}>
                    <TextField
                        fullWidth
                        variant="filled"
                        name="email"
                        label="Email Address"
                        placeholder="johndoe@email.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        fullWidth
                        variant="filled"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Stack>

                <Stack direction={'row'} gap={2}>
                    <TextField
                        fullWidth
                        variant="filled"
                        name="rollNumber"
                        label="Roll Number"
                        placeholder="123456"
                        value={formik.values.rollNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.rollNumber && formik.errors.rollNumber)}
                        helperText={formik.touched.rollNumber && formik.errors.rollNumber}
                    />

                    {/* Department Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.department && formik.errors.department)}
                    >
                        <InputLabel>Department</InputLabel>
                        <Select
                            name="department"
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {DEPARTMENTS.map((dept) => (
                                <MenuItem key={dept} value={dept}>
                                    {dept}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.department && formik.errors.department && (
                            <Typography variant="caption" color="error">
                                {formik.errors.department}
                            </Typography>
                        )}
                    </FormControl>

                    {/* Semester Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.semester && formik.errors.semester)}
                    >
                        <InputLabel>Semester</InputLabel>
                        <Select
                            name="semester"
                            value={formik.values.semester}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {SEMESTERS.map((sem) => (
                                <MenuItem key={sem} value={sem}>
                                    {sem.toString().padStart(2, '0')}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.semester && formik.errors.semester && (
                            <Typography variant="caption" color="error">
                                {formik.errors.semester}
                            </Typography>
                        )}
                    </FormControl>
                </Stack>

                <Stack direction={'row'} gap={2}>
                    {/* Program Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.program && formik.errors.program)}
                    >
                        <InputLabel>Program</InputLabel>
                        <Select
                            name="program"
                            value={formik.values.program}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {PROGRAM_TYPES.map((prog) => (
                                <MenuItem key={prog} value={prog}>
                                    {prog} {formik.values.department ? `in ${formik.values.department}` : ''}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.program && formik.errors.program && (
                            <Typography variant="caption" color="error">
                                {formik.errors.program}
                            </Typography>
                        )}
                    </FormControl>

                    {/* Admission Year Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.admissionYear && formik.errors.admissionYear)}
                    >
                        <InputLabel>Admission Year</InputLabel>
                        <Select
                            name="admissionYear"
                            value={formik.values.admissionYear}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {ADMISSION_YEARS.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.admissionYear && formik.errors.admissionYear && (
                            <Typography variant="caption" color="error">
                                {formik.errors.admissionYear}
                            </Typography>
                        )}
                    </FormControl>

                    {/* Batch field (auto-calculated) */}
                    <TextField
                        fullWidth
                        variant="filled"
                        name="batch"
                        label="Batch"
                        placeholder="2022 - 2026"
                        value={formik.values.batch}
                        InputProps={{
                            readOnly: true,
                        }}
                        disabled
                        error={Boolean(formik.touched.batch && formik.errors.batch)}
                        helperText={formik.touched.batch && formik.errors.batch}
                    />
                </Stack>

                <Stack alignItems={'end'}>
                    <Button type="submit" variant="contained" sx={{ width: 'fit-content' }}>
                        {loading ? <CircularProgress size={'12px'} /> : 'Add Student'}
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
}

export default AddStudent;
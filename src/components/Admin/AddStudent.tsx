import { Button, CircularProgress, Stack, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function AddStudent({ formik }: { formik: any }) {
    const { loading } = useSelector((state: RootState) => state.student);

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

                    <TextField
                        fullWidth
                        variant="filled"
                        name="department"
                        label="Department"
                        placeholder="Computer Science"
                        value={formik.values.department}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.department && formik.errors.department)}
                        helperText={formik.touched.department && formik.errors.department}
                    />

                    <TextField
                        fullWidth
                        variant="filled"
                        name="semester"
                        label="Semester"
                        placeholder="3"
                        value={formik.values.semester}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.semester && formik.errors.semester)}
                        helperText={formik.touched.semester && formik.errors.semester}
                    />
                </Stack>

                <Stack direction={'row'} gap={2}>
                    <TextField
                        fullWidth
                        variant="filled"
                        name="program"
                        label="Program"
                        placeholder="BS CS"
                        value={formik.values.program}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.program && formik.errors.program)}
                        helperText={formik.touched.program && formik.errors.program}
                    />

                    <TextField
                        fullWidth
                        variant="filled"
                        name="admissionYear"
                        label="Admission Year"
                        placeholder="2022"
                        value={formik.values.admissionYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(formik.touched.admissionYear && formik.errors.admissionYear)}
                        helperText={formik.touched.admissionYear && formik.errors.admissionYear}
                    />

                    <TextField
                        fullWidth
                        variant="filled"
                        name="batch"
                        label="Batch"
                        placeholder="2022 - 2026"
                        value={formik.values.batch}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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

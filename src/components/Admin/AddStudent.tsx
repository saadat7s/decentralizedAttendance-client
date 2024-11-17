import { Button, Stack, TextField, Typography } from '@mui/material'



function AddStudent({ formik }: { formik: any }) {

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack gap={3} flexGrow={1}>
                <Stack>
                    <Typography
                        variant='h4'
                        color='secondary.main'
                        fontWeight={'bold'}
                    >
                        Add a Student
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        color='secondary.contrastText'
                    >
                        Fill up the form to add a student.
                    </Typography>
                </Stack>

                <TextField
                    fullWidth
                    variant='filled'
                    name='fullName'
                    label='Full Name'
                    placeholder='Jhon Doe'
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <Stack direction={'row'} gap={2}>

                    <TextField
                        fullWidth
                        variant='filled'
                        name='email'
                        label='Email Address'
                        placeholder='johndoe@email.com'
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='password'
                        label='Password'
                        type='password'
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                </Stack>

                <Stack direction={'row'} gap={2}>

                    <TextField
                        fullWidth
                        variant='filled'
                        name='rollNumber'
                        label='Roll Number'
                        placeholder='123456'
                        onChange={formik.handleChange}
                        error={formik.touched.rollNumber && Boolean(formik.errors.rollNumber)}
                        helperText={formik.touched.rollNumber && formik.errors.rollNumber}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='department'
                        label='Department'
                        placeholder='Computer Science'
                        onChange={formik.handleChange}
                        error={formik.touched.department && Boolean(formik.errors.department)}
                        helperText={formik.touched.department && formik.errors.department}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='semester'
                        label='Semester'
                        placeholder='3'
                        onChange={formik.handleChange}
                        error={formik.touched.semester && Boolean(formik.errors.semester)}
                        helperText={formik.touched.semester && formik.errors.semester}
                    />

                </Stack>

                <Stack direction={'row'} gap={2}>

                    <TextField
                        fullWidth
                        variant='filled'
                        name='program'
                        label='Program'
                        placeholder='BS CS'
                        onChange={formik.handleChange}
                        error={formik.touched.program && Boolean(formik.errors.program)}
                        helperText={formik.touched.program && formik.errors.program}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='admissionYear'
                        label='Admission Year'
                        placeholder='2022'
                        onChange={formik.handleChange}
                        error={formik.touched.admissionYear && Boolean(formik.errors.admissionYear)}
                        helperText={formik.touched.admissionYear && formik.errors.admissionYear}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='batch'
                        label='Batch'
                        placeholder='2022 - 2026'
                        onChange={formik.handleChange}
                        error={formik.touched.batch && Boolean(formik.errors.batch)}
                        helperText={formik.touched.batch && formik.errors.batch}
                    />

                </Stack>

                <Stack alignItems={'end'} >
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ width: 'fit-content' }}
                    >
                        Add Student
                    </Button>
                </Stack>
            </Stack>
        </form >
    )
}

export default AddStudent
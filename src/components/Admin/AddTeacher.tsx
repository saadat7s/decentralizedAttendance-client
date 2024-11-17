import { Button, Stack, TextField, Typography } from '@mui/material'


function AddTeacher({ formik }: { formik: any }) {

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack gap={3} flexGrow={1}>
                <Stack>
                    <Typography
                        variant='h4'
                        color='secondary.main'
                        fontWeight={'bold'}
                    >
                        Add a Teacher
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        color='secondary.contrastText'
                    >
                        Fill up the form to add a teacher.
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
                        name='faculty'
                        label='Faculty'
                        placeholder='Mathematics'
                        onChange={formik.handleChange}
                        error={formik.touched.faculty && Boolean(formik.errors.faculty)}
                        helperText={formik.touched.faculty && formik.errors.faculty}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='designation'
                        label='Designation'
                        placeholder='Assistant Professor'
                        onChange={formik.handleChange}
                        error={formik.touched.designation && Boolean(formik.errors.designation)}
                        helperText={formik.touched.designation && formik.errors.designation}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='officeLocation'
                        label='Office Location'
                        placeholder='Room 201'
                        onChange={formik.handleChange}
                        error={formik.touched.officeLocation && Boolean(formik.errors.officeLocation)}
                        helperText={formik.touched.officeLocation && formik.errors.officeLocation}
                    />

                </Stack>

                <Stack alignItems={'end'} >
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ width: 'fit-content' }}
                    >
                        Add Teacher
                    </Button>
                </Stack>
            </Stack>
        </form >
    )
}

export default AddTeacher
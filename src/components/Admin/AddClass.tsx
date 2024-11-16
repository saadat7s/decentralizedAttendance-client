import { Button, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material'

function AddClass({ formik }: { formik: any }) {

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack gap={3} flexGrow={1}>
                <Stack>
                    <Typography
                        variant='h4'
                        color='secondary.main'
                        fontWeight={'bold'}
                    >
                        Add a Class
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        color='secondary.contrastText'
                    >
                        Fill up the form to register a class.
                    </Typography>
                </Stack>
                <Stack direction={'row'} gap={2}>

                    <TextField
                        fullWidth
                        variant='filled'
                        name='courseName'
                        label='Course Name'
                        placeholder='Data Structures'
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.courseName && formik.errors.courseName)}
                        helperText={formik.touched.courseName && formik.errors.courseName}
                    />


                    <TextField
                        fullWidth
                        variant='filled'
                        name='courseId'
                        label='Course ID'
                        placeholder='CS201'
                        onChange={formik.handleChange}
                        error={formik.touched.courseId && Boolean(formik.errors.courseId)}
                        helperText={formik.touched.courseId && formik.errors.courseId}
                    />
                </Stack>


                <Stack direction={'row'} gap={2}>

                    <TextField
                        select
                        fullWidth
                        variant='filled'
                        name='faculty'
                        label='Faculty'
                        placeholder='CS'
                        defaultValue={'Mathematics'}
                        onChange={formik.handleChange}
                        error={formik.touched.teacherId && Boolean(formik.errors.teacherId)}
                        helperText={formik.touched.teacherId && formik.errors.teacherId}

                    >
                        <MenuItem value='Mathematics'>
                            Mathematics
                        </MenuItem>
                        <MenuItem value='Engineering'>
                            Engineering
                        </MenuItem>
                        <MenuItem value='CS'>
                            Computer Science
                        </MenuItem>

                    </TextField>

                    {formik.values.faculty &&
                        <TextField
                            select
                            fullWidth
                            variant='filled'
                            name='teacherId'
                            label='Teacher'
                            placeholder='Teacher-1'
                            onChange={formik.handleChange}
                            error={formik.touched.teacherId && Boolean(formik.errors.teacherId)}
                            helperText={formik.touched.teacherIdm && formik.errors.teacherId}

                        >
                            <MenuItem>
                                Teacher-1
                            </MenuItem>
                            <MenuItem>
                                Teacher-2
                            </MenuItem>
                        </TextField>
                    }

                    <TextField
                        fullWidth
                        variant='filled'
                        name='studentIds'
                        label='Students'
                        placeholder='Student-1, Student-2'
                        onChange={formik.handleChange}
                        error={formik.touched.studentIds && Boolean(formik.errors.studentIds)}
                        helperText={formik.touched.studentIds && formik.errors.studentIds}
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

export default AddClass
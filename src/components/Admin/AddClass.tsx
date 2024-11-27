import { Button, Checkbox, FormControl, InputLabel, ListItemText, Menu, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function AddClass({ formik }: { formik: any }) {
    const { allTeachers } = useSelector((state: RootState) => state.teacher)
    const { students } = useSelector((state: RootState) => state.student)
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
                        {allTeachers.length > 0 &&
                            allTeachers.map((teacher: any) => {
                                return (
                                    <MenuItem value={teacher?.user._id}>
                                        {teacher.user.name}
                                    </MenuItem>

                                )
                            })
                        }
                    </TextField>
                </Stack>

                <FormControl fullWidth variant="filled" error={formik.touched.studentIds && Boolean(formik.errors.studentIds)}>
                    <InputLabel>Students</InputLabel>
                    <Select
                        fullWidth
                        variant="filled"
                        name="studentIds"
                        label="Students"
                        placeholder='Select Students'
                        multiple
                        value={formik.values.studentIds}
                        onChange={(e) => formik.setFieldValue('studentIds', e.target.value)}
                        renderValue={(selected) => {
                            if (selected.length === 0) return 'Select Students';


                            const selectedNames = selected.map((studentId: string) => {
                                const student: any = students.find((s: any) => s.user._id === studentId);
                                return student ? student?.user?.name : '';
                            });

                            return selectedNames.join(', ');
                        }}
                        error={formik.touched.studentIds && Boolean(formik.errors.studentIds)}
                    >
                        {students.map((student: { _id: string, user: any, rollNumber: any }) => {
                            return (
                                <MenuItem key={student.user._id} value={student?.user._id}>
                                    <Checkbox checked={formik.values.studentIds.indexOf(student.user._id) > -1} />
                                    <ListItemText primary={`${student?.rollNumber} - ${student?.user.name}`} />
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>

                <Stack alignItems={'end'} >
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ width: 'fit-content' }}
                    >
                        Add Class
                    </Button>
                </Stack>
            </Stack>
        </form >
    )
}

export default AddClass
import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';

// Course options with corresponding IDs for Faculty of AI and Computer Science
const COURSES = [
    { name: 'Data Structures', id: 'CS 222' },
    { name: 'Algorithms', id: 'CS 301' },
    { name: 'Artificial Intelligence', id: 'AI 310' },
    { name: 'Machine Learning', id: 'AI 410' },
    { name: 'Deep Learning', id: 'AI 450' },
    { name: 'Computer Networks', id: 'CS 330' },
    { name: 'Operating Systems', id: 'CS 340' },
    { name: 'Database Systems', id: 'CS 350' },
    { name: 'Software Engineering', id: 'SE 310' },
    { name: 'Web Development', id: 'SE 330' },
    { name: 'Mobile App Development', id: 'SE 340' },
    { name: 'Computer Vision', id: 'AI 420' },
    { name: 'Natural Language Processing', id: 'AI 430' },
    { name: 'Cybersecurity', id: 'CS 360' },
    { name: 'Data Mining', id: 'DS 320' }
];

// Department options (same as we used previously)
const DEPARTMENTS = [
    'Software Engineering',
    'AI',
    'Data Science',
    'Cyber Security',
    'Computer Games Development',
    'Computer Science'
];

function AddClass({ formik }: { formik: any }) {
    const { allTeachers } = useSelector((state: RootState) => state.teacher);
    const { students } = useSelector((state: RootState) => state.student);

    // Auto-update courseId when courseName changes
    useEffect(() => {
        if (formik.values.courseName) {
            const selectedCourse = COURSES.find(course => course.name === formik.values.courseName);
            if (selectedCourse) {
                formik.setFieldValue('courseId', selectedCourse.id);
            }
        }
    }, [formik.values.courseName]);

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
                    {/* Course Name Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.courseName && formik.errors.courseName)}
                    >
                        <InputLabel>Course Name</InputLabel>
                        <Select
                            name="courseName"
                            value={formik.values.courseName || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <MenuItem value="">
                                <em>Select a course</em>
                            </MenuItem>
                            {COURSES.map((course) => (
                                <MenuItem key={course.name} value={course.name}>
                                    {course.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.courseName && formik.errors.courseName && (
                            <Typography variant="caption" color="error">
                                {formik.errors.courseName}
                            </Typography>
                        )}
                    </FormControl>

                    {/* Course ID Field (Automatically filled) */}
                    <TextField
                        fullWidth
                        variant='filled'
                        name='courseId'
                        label='Course ID'
                        value={formik.values.courseId || ''}
                        InputProps={{
                            readOnly: true,
                        }}
                        disabled
                        error={formik.touched.courseId && Boolean(formik.errors.courseId)}
                        helperText={formik.touched.courseId && formik.errors.courseId}
                    />
                </Stack>

                <Stack direction={'row'} gap={2}>
                    {/* Department Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.faculty && formik.errors.faculty)}
                    >
                        <InputLabel>Department</InputLabel>
                        <Select
                            name="faculty"
                            value={formik.values.faculty || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {DEPARTMENTS.map((dept) => (
                                <MenuItem key={dept} value={dept}>
                                    {dept}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.faculty && formik.errors.faculty && (
                            <Typography variant="caption" color="error">
                                {formik.errors.faculty}
                            </Typography>
                        )}
                    </FormControl>

                    {/* Teacher Selection Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.teacherId && formik.errors.teacherId)}
                    >
                        <InputLabel>Teacher</InputLabel>
                        <Select
                            name="teacherId"
                            value={formik.values.teacherId || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <MenuItem value="">
                                <em>Select a teacher</em>
                            </MenuItem>
                            {allTeachers.length > 0 &&
                                allTeachers.map((teacher: any) => (
                                    <MenuItem key={teacher?.user._id} value={teacher?.user._id}>
                                        {teacher.user.name}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                        {formik.touched.teacherId && formik.errors.teacherId && (
                            <Typography variant="caption" color="error">
                                {formik.errors.teacherId}
                            </Typography>
                        )}
                    </FormControl>
                </Stack>

                {/* Students Multi-Select Dropdown */}
                <FormControl
                    fullWidth
                    variant="filled"
                    error={Boolean(formik.touched.studentIds && formik.errors.studentIds)}
                >
                    <InputLabel>Students</InputLabel>
                    <Select
                        fullWidth
                        variant="filled"
                        name="studentIds"
                        label="Students"
                        multiple
                        value={formik.values.studentIds || []}
                        onChange={(e) => formik.setFieldValue('studentIds', e.target.value)}
                        renderValue={(selected) => {
                            if (!selected || selected.length === 0) return 'Select Students';

                            const selectedNames = selected.map((studentId: string) => {
                                const student: any = students.find((s: any) => s.user._id === studentId);
                                return student ? student?.user?.name : '';
                            });

                            return selectedNames.join(', ');
                        }}
                    >
                        {students.map((student: { _id: string, user: any, rollNumber: any }) => (
                            <MenuItem key={student.user._id} value={student?.user._id}>
                                <Checkbox checked={(formik.values.studentIds || []).indexOf(student.user._id) > -1} />
                                <ListItemText primary={`${student?.rollNumber} - ${student?.user.name}`} />
                            </MenuItem>
                        ))}
                    </Select>
                    {formik.touched.studentIds && formik.errors.studentIds && (
                        <Typography variant="caption" color="error">
                            {formik.errors.studentIds}
                        </Typography>
                    )}
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
        </form>
    );
}

export default AddClass;
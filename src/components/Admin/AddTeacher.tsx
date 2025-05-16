import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

// Department options (same as in AddStudent)
const DEPARTMENTS = [
    'Software Engineering',
    'AI',
    'Data Science',
    'Cyber Security',
    'Computer Games Development',
    'Computer Science'
];

// Designation options
const DESIGNATIONS = [
    'Professor',
    'Associate Professor',
    'Assistant Professor',
    'Lecturer',
    'Research Associate',
    'Lab Instructor'
];

// Office Location options (101-501)
const generateOfficeLocations = () => {
    const locations = [];
    for (let floor = 1; floor <= 5; floor++) {
        // Start at x01 for each floor (101, 201, etc.)
        const baseRoomNumber = floor * 100 + 1;

        // Add 10 offices per floor (101-110, 201-210, etc.)
        for (let room = 0; room < 2; room++) {
            locations.push(`${baseRoomNumber + room}`);
        }
    }
    return locations;
};

const OFFICE_LOCATIONS = generateOfficeLocations();

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
                    name='name'
                    label='Full Name'
                    placeholder='John Doe'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <Stack direction={'row'} gap={2}>
                    <TextField
                        fullWidth
                        variant='filled'
                        name='email'
                        label='Email Address'
                        placeholder='johndoe@email.com'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        fullWidth
                        variant='filled'
                        name='password'
                        label='Password'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Stack>

                <Stack direction={'row'} gap={2}>
                    {/* Department Dropdown (replacing Faculty field) */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.faculty && formik.errors.faculty)}
                    >
                        <InputLabel>Department</InputLabel>
                        <Select
                            name="faculty"  // Keeping 'faculty' field name for backend compatibility
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

                    {/* Designation Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.designation && formik.errors.designation)}
                    >
                        <InputLabel>Designation</InputLabel>
                        <Select
                            name="designation"
                            value={formik.values.designation || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            {DESIGNATIONS.map((designation) => (
                                <MenuItem key={designation} value={designation}>
                                    {designation}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.designation && formik.errors.designation && (
                            <Typography variant="caption" color="error">
                                {formik.errors.designation}
                            </Typography>
                        )}
                    </FormControl>

                    {/* Office Location Dropdown */}
                    <FormControl
                        fullWidth
                        variant="filled"
                        error={Boolean(formik.touched.officeLocation && formik.errors.officeLocation)}
                    >
                        <InputLabel>Office Location</InputLabel>
                        <Select
                            name="officeLocation"
                            value={formik.values.officeLocation || ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <MenuItem value="">
                                <em>Select an office</em>
                            </MenuItem>
                            {OFFICE_LOCATIONS.map((room) => (
                                <MenuItem key={room} value={`Room ${room}`}>
                                    Room {room}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.officeLocation && formik.errors.officeLocation && (
                            <Typography variant="caption" color="error">
                                {formik.errors.officeLocation}
                            </Typography>
                        )}
                    </FormControl>
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
        </form>
    );
}

export default AddTeacher;
import React from 'react'
import AddStudent from '../components/Admin/AddStudent'
import { Button, Divider, Stack } from '@mui/material'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import Sidebar from '../components/Sidebar'
import { FormikErrors, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { registerStudent } from '../redux/features/adminSlice'
import toast from 'react-hot-toast'


interface StudentForm {
    name: string,
    email: string,
    password: string,
    rollNumber: number,
    department: string,
    semester: number,
    program: string,
    admissionYear: number,
    batch: string
}

function AdminAddStudent() {
    const navigation = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik<StudentForm>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rollNumber: 0,
            department: '',
            semester: 0,
            program: '',
            admissionYear: 0,
            batch: ''
        },
        validate(values) {
            const errors: FormikErrors<StudentForm> = {};
            if (!values.name) {
                errors.name = 'Full Name cannot be empty.'
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'A valid email is required.'
            }
            if (!values.password || values.password.length < 6) {
                errors.password = 'Password cannot be less than 5 characters.'
            }
            if (!values.rollNumber) {
                errors.rollNumber = 'Roll Number cannot be empty.'
            }
            if (!values.department) {
                errors.department = 'Department cannot be empty.'
            }
            if (!values.semester) {
                errors.semester = 'Semester cannot be empty.'
            }
            if (!values.program) {
                errors.program = 'Program cannot be empty.'
            }
            if (!values.admissionYear) {
                errors.admissionYear = 'Admission year cannot be empty.'
            }
            if (!values.batch) {
                errors.batch = 'Batch cannot be empty.'
            }
            console.log(errors)
            return errors;
        },
        onSubmit(values, formikHelpers) {
            toast.promise(
                dispatch(registerStudent(values))
                    .unwrap(), {
                loading: 'Loading...',
                success: () => {
                    formikHelpers.resetForm();
                    return 'Student registered successfully.'
                },
                error: 'Could not register a student.'
            }
            )
        },
    })


    return (
        <Wrapper>
            <AdminSidebar />

            <Stack flexGrow={1} gap={3} py={2} px={4}>

                {/* this component works like a navbar, actions can be buttons or any reactnode */}
                <PageHeader
                    actions={
                        <React.Fragment>
                            <Button variant='outlined' onClick={() => navigation('/admin/dashboard/students')} >
                                All Students
                            </Button>
                        </React.Fragment>
                    }
                />
                <Divider />
                <AddStudent formik={formik} />
            </Stack>
        </Wrapper>
    )
}

export default AdminAddStudent
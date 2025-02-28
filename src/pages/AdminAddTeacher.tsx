import React from 'react'
import Wrapper from '../components/Wrapper'
import Sidebar from '../components/Sidebar'
import AddTeacher from '../components/Admin/AddTeacher'
import PageHeader from '../components/PageHeader'
import { Button, Divider, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import AdminSidebar from './AdminSidebar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { registerTeacher } from '../redux/features/teachersSlice'
import withAuth from '../utils/withAuth'
import toast from 'react-hot-toast'

interface TeacherForm {
    name: string,
    email: string,
    password: string,
    faculty: string,
    designation: string,
    officeLocation: string
}

function AdminAddTeacher() {
    const navigation = useNavigate()
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik<TeacherForm>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            faculty: '',
            designation: '',
            officeLocation: ''
        },
        validate(values) {
            const errors: any = {};
            if (!values.name) {
                errors.name = 'Full Name cannot be empty.'
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'A valid email is required.'
            }
            if (!values.password || values.password.length < 5) {
                errors.password = 'Password cannot be less than 5 characters.'
            }
            if (!values.designation) {
                errors.designation = 'Designation cannot be empty.'
            }
            if (!values.officeLocation) {
                errors.officeLocation = 'Office Location cannot be empty.'
            }
            if (!values.faculty) {
                errors.faculty = 'Faculty cannot be empty.'
            }

            console.log(errors)
            return errors;
        },
        onSubmit(values, formikHelpers) {
            console.log(values)
            dispatch(registerTeacher({ values, formikHelpers }))

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
                            <Button variant='outlined' onClick={() => navigation('/admin/dashboard/teachers')} >
                                All Teachers
                            </Button>
                        </React.Fragment>
                    }
                />
                <Divider />
                <AddTeacher formik={formik} />
            </Stack>
        </Wrapper>
    )
}

export default withAuth(AdminAddTeacher)
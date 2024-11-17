import React from 'react'
import Wrapper from '../components/Wrapper'
import Sidebar from '../components/Sidebar'
import AddTeacher from '../components/Admin/AddTeacher'
import PageHeader from '../components/PageHeader'
import { Button, Divider, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import AdminSidebar from './AdminSidebar'

interface TeacherForm {
    fullName: string,
    email: string,
    password: string,
    faculty: string,
    designation: string,
    officeLocation: string
}

function AdminAddTeacher() {
    const navigation = useNavigate()

    const formik = useFormik<TeacherForm>({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            faculty: '',
            designation: '',
            officeLocation: ''
        },
        validate(values) {
            const errors: any = {};
            if (!values.fullName) {
                errors.fullName = 'Full Name cannot be empty.'
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

export default AdminAddTeacher
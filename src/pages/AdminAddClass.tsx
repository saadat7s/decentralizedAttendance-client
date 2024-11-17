import React from 'react'
import AddStudent from '../components/Admin/AddStudent'
import { Button, Divider, Stack } from '@mui/material'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import Sidebar from '../components/Sidebar'
import { FormikErrors, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import AddClass from '../components/Admin/AddClass'
import AdminSidebar from './AdminSidebar'


interface ClassForm {
    courseName: string,
    courseId: string,
    teacherId: string,
    studentIds: string[]
}

function AdminAddClass() {
    const navigation = useNavigate();

    const formik = useFormik<ClassForm>({
        initialValues: {
            courseId: '',
            courseName: '',
            teacherId: '',
            studentIds: []
        },
        validate(values) {
            const errors: FormikErrors<ClassForm> = {};
            if (!values.courseName) {
                errors.courseName = 'Course Name cannot be empty.'
            }
            if (!values.courseId) {
                errors.courseId = 'Course ID cannot be empty.'
            }
            if (values.studentIds.length === 0) {
                errors.studentIds = 'Roll Number cannot be empty.'
            }

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
                            <Button variant='outlined' onClick={() => navigation('/admin/dashboard/students')} >
                                All Students
                            </Button>
                        </React.Fragment>
                    }
                />
                <Divider />
                <AddClass formik={formik} />
            </Stack>
        </Wrapper>
    )
}

export default AdminAddClass
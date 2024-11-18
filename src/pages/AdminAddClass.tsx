import React, { useEffect, useMemo } from 'react'
import AddStudent from '../components/Admin/AddStudent'
import { Button, Divider, Stack } from '@mui/material'
import Wrapper from '../components/Wrapper'
import PageHeader from '../components/PageHeader'
import Sidebar from '../components/Sidebar'
import { FormikErrors, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import AddClass from '../components/Admin/AddClass'
import AdminSidebar from './AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import withAuth from '../utils/withAuth'
import { getAllTeachers } from '../redux/features/teachersSlice'
import { getAllStudents } from '../redux/features/studentSlice'
import { registerClass } from '../redux/features/classSlice'
import toast from 'react-hot-toast'


interface ClassForm {
    courseName: string,
    courseId: string,
    teacherId: any[],
    studentIds: any[]
}

function AdminAddClass() {
    const navigation = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { allTeachers } = useSelector((state: RootState) => state.teacher);
    const { students } = useSelector((state: RootState) => state.student);
    const { error } = useSelector((state: RootState) => state.class);

    const formik = useFormik<ClassForm>({
        initialValues: {
            courseId: '',
            courseName: '',
            teacherId: allTeachers ?? [],
            studentIds: []
        },
        enableReinitialize: true,
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
            toast.promise(
                dispatch(registerClass({ values, formikHelpers }))
                    .unwrap(), {
                loading: 'Loading...',
                success: 'Class added successfully.',
                error: error || 'Could not add a class.'
            }
            )
        },
    })

    useEffect(() => {
        if (allTeachers.length === 0) {
            dispatch(getAllTeachers());
        }
        if (students.length === 0) {
            dispatch(getAllStudents())
        }
    }, [])


    return (
        <Wrapper>

            <AdminSidebar />

            <Stack flexGrow={1} gap={3} py={2} px={4}>

                {/* this component works like a navbar, actions can be buttons or any reactnode */}
                <PageHeader
                    actions={
                        <React.Fragment>
                            <Button variant='outlined' onClick={() => navigation('/admin/dashboard/classes')} >
                                Add a Class
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

export default withAuth(AdminAddClass)
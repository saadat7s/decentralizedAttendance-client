import { FormikErrors, useFormik } from 'formik';
import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import { Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { adminLogin } from '../redux/features/adminSlice';

interface AdminLoginValues {
    email: string;
    password: string;
}

function AdminLogin() {
    const { isAuthenticated, userProfile } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const formik = useFormik<AdminLoginValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrors<AdminLoginValues> = {};

            // Email validation
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            // Password validation
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            }
            console.log(errors)
            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            console.log('Form Submitted:', values);
            dispatch(adminLogin(values))
        },
    });

    useEffect(() => {
        if (isAuthenticated) {
            if (userProfile?.role === 'admin')
                navigate('/admin/dashboard')
        }
    }, [isAuthenticated])

    return (
        <LoginForm
            title='Welcome, Log in with your Admin Credentials'
            subtitle='It is our great pleasure to have you on board'
            formik={formik}
            actions={
                <Stack direction={'row'} gap={1} justifyContent={'center'}>
                    <Typography color='secondary.contrastText' variant='body2'>
                        Don't have an account?
                    </Typography>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <Typography
                            color='primary.main'
                            fontWeight={'bold'}
                            variant='body2'
                            sx={{
                                cursor: 'pointer',
                                borderBottom: '1px solid transparent',
                                transition: 'all 0.2s ease',
                                ':hover': {
                                    borderColor: 'primary.main',
                                },
                            }}
                        >
                            Sign up
                        </Typography>
                    </Link>
                </Stack>
            }
        />
    );
}

export default AdminLogin;

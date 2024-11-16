import { FormikErrors, useFormik } from 'formik';
import React from 'react';
import LoginForm from './LoginForm';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface AdminLoginValues {
    email: string;
    password: string;
}

function AdminLogin() {
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
            // Simulating async request
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    });

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

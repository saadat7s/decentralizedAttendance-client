import { FormikErrors, useFormik } from 'formik';
import LoginForm from '../LoginForm';
import React, { useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import toast from 'react-hot-toast';
import { userLogin } from '../../redux/features/authSlice';
import { getUserProfile } from '../../redux/features/userSlice';

interface TeacherLoginValues {
    email: string;
    password: string;
}

function TeacherLogin() {
    const { isAuthenticated, userProfile } = useSelector((state: RootState) => state.user);
    const { error, message } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const formik = useFormik<TeacherLoginValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrors<TeacherLoginValues> = {};

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
            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            toast.promise(
                dispatch(userLogin(values))
                    .unwrap()
                    .then((data) => {
                        // Store JWT token in localStorage
                        localStorage.setItem('x_auth_token', data.token);
                        navigate('/teacher/home');
                    })
                    .finally(() => setSubmitting(false)),
                {
                    loading: 'Loading...',
                    success: 'Authenticated successfully',
                    error: error || 'Login failed',
                }
            );
        },
    });

    useEffect(() => {
        const token = localStorage.getItem('x_auth_token');
        if (token) {
            dispatch(getUserProfile());
        }
        if (isAuthenticated && userProfile?.role === 'teacher') {
            navigate('/teacher/home');
        }
    }, [isAuthenticated, userProfile, dispatch, navigate]);

    return (
        <LoginForm
            title="Welcome, Log in with your Teacher Credentials"
            subtitle="It is our great pleasure to have you on board"
            formik={formik}
            actions={
                <Stack direction={'row'} gap={1} justifyContent={'center'}>
                    <Typography color="secondary.contrastText" variant="body2">
                        Don't have an account?
                    </Typography>
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <Typography
                            color="primary.main"
                            fontWeight={'bold'}
                            variant="body2"
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

export default TeacherLogin;
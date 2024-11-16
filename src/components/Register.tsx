import { Button, Stack, TextField, Typography } from '@mui/material'
import { Formik, FormikValues } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Stack
            flexGrow={1}
            width={'100vw'}
            height={'100vh'}
            gap={5}
            bgcolor={'background.default'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Typography variant='h5' fontWeight={'bold'} color={'secondary.contrastText'}>
                Welcome, Log in with your Admin Credentials
            </Typography>

            <Stack
                bgcolor={'background.paper'}
                p={10}
                maxWidth={600}
                gap={3}
            >

                <Typography>It is our great pleasure to have you on board</Typography>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors: FormikValues = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        dirty,
                        isValid
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Stack
                                gap={3}
                            >
                                {/* inputs */}
                                <Stack gap={1}>
                                    <TextField
                                        variant='filled'
                                        name='email'
                                        type='email'
                                        onChange={handleChange}
                                        label="Email"
                                        placeholder='admin@email.com'
                                    />
                                    <TextField
                                        variant='filled'
                                        name='password'
                                        onChange={handleChange}
                                        label="Password"
                                        type='password'
                                    />
                                </Stack>

                                {/* buttons */}
                                <Button
                                    variant='contained'
                                    type='submit'
                                    disabled={!(dirty && isValid)}
                                >
                                    Login
                                </Button>

                                {/* links */}
                                <Stack direction={'row'} gap={1} justifyContent={'center'}>
                                    <Typography color='secondary.contrastText' variant='body2'>
                                        Already have an account?
                                    </Typography>
                                    <Link to={'/signup'} style={{ textDecoration: 'none' }}>
                                        <Typography
                                            color='primary.main'
                                            fontWeight={'bold'}
                                            variant='body2'
                                            sx={{
                                                cursor: 'pointer',
                                                borderBottom: '1px solid',
                                                borderColor: 'transparent',
                                                transition: 'all 0.2s ease',
                                                ':hover': {
                                                    borderColor: 'primary.main'
                                                }
                                            }}
                                        >
                                            Sign up
                                        </Typography>
                                    </Link>
                                </Stack>
                            </Stack>
                        </form>
                    )}
                </Formik>
            </Stack>
        </Stack>
    )
}

export default Login
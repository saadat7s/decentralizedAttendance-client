import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function LoginForm({ title, subtitle, formik, actions }: { title: string, subtitle: string | null, formik: any, actions: React.ReactNode }) {
    const [showPassword, setShowPassword] = useState(false);
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
                {title}
            </Typography>

            <Stack
                bgcolor={'background.paper'}
                border={'1px solid'}
                borderColor={'secondary.100'}
                borderRadius={3}
                p={10}
                maxWidth={600}
                gap={3}
                boxShadow={20}
            >

                <Typography>{subtitle}</Typography>

                <form onSubmit={formik.handleSubmit}>
                    <Stack
                        gap={3}
                    >
                        {/* inputs */}
                        <Stack gap={1}>
                            <TextField
                                variant='filled'
                                name='email'
                                type='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                label="Email"
                                placeholder='admin@email.com'
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                            <TextField
                                variant='filled'
                                name='password'
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Stack>

                        {/* buttons */}
                        <Button
                            variant='contained'
                            type='submit'
                            disabled={!(formik.dirty && formik.isValid)}
                        >
                            Login
                        </Button>

                        {actions}
                    </Stack>
                </form>

            </Stack>
        </Stack>
    )
}

export default LoginForm
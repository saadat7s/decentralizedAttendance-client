import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { logoutUser } from '../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';

function PageHeader({ actions }: { actions: React.ReactNode | null }) {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    function logoutHandler() {
        localStorage.removeItem('x_auth_token')
        dispatch(logoutUser({ navigate }))
        navigate('/')
    }
    return (
        <Stack
            direction={'row'}
            gap={2}
            py={2}
            px={4}
            borderRadius={2}
            // bgcolor={'secondary.100'}
            // boxShadow={2}
            justifyContent={'space-between'}
        >

            <Stack
                borderRadius={4}
                direction={'row'}
                gap={1}
                justifyContent={'space-between'}
            >

                <Stack direction={'row'} gap={1}>
                    {actions}
                </Stack>
            </Stack>

            <Stack alignItems={'end'}>
                <Button
                    onClick={logoutHandler}
                    sx={{ width: 'fit-content' }}
                    variant='contained'
                    color='error'
                >
                    Logout
                </Button>
            </Stack>

        </Stack>
    )
}

export default PageHeader
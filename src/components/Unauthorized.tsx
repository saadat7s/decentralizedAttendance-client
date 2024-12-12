import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

function Unauthorized() {
    return (
        <Stack
            justifyContent={'center'}
            alignItems={'center'}
            width={'100vw'}
            height={'100vh'}
        >
            <Typography
                variant='h1'
            >
                401
            </Typography>
            <Typography
                variant='h5'
            >
                Unauthorized
            </Typography>
        </Stack>
    )
}

export default Unauthorized
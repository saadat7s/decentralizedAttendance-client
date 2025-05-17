import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPageNav() {
    return (
        <Stack
            justifyContent={'space-between'}
            gap={3}
            direction={'row'}
            px={15}
            py={5}
        >

            {/* Logo */}
            <Link to={'/'} style={{ textDecoration: 'none', color: "black" }}>
                <Stack>
                    <Typography lineHeight={1} variant='caption' fontWeight={'900'} sx={{ textTransform: 'uppercase' }}>
                        Decentralized
                    </Typography>
                    <Typography lineHeight={1} variant='caption' fontWeight={'900'} sx={{ textTransform: 'uppercase' }}>
                        Attendance
                    </Typography>
                    <Typography lineHeight={1} variant='caption' fontWeight={'900'} sx={{ textTransform: 'uppercase' }}>
                        System
                    </Typography>
                </Stack>
            </Link>

            {/* Nav buttons */}
            <Stack
                direction={'row'}
                gap={1}
            >
                <Button variant='contained'>
                    Login
                </Button>

                <Button variant='contained'>
                    Register
                </Button>

            </Stack>
        </Stack>
    )
}

export default LandingPageNav
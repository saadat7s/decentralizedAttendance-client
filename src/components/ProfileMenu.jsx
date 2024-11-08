import { ArrowUpward, KeyboardArrowUp, Logout, Person } from '@mui/icons-material'
import { Button, IconButton, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavItem from './NavItem';

function ProfileMenu() {
    const [show, setShow] = useState(false);
    return (
        <Stack position={'relative'} width={'fit-content'}>
            <Button
                sx={{
                    border: '1px solid',
                    borderColor: 'secondary.100',
                    borderRadius: 2,
                    px: 2,
                    display: 'flex',
                    gap: 1
                }}
                onClick={() => setShow(!show)}
            >
                <Person sx={{ color: 'secondary.contrastText' }} />
                <Typography color={'secondary.contrastText'} textTransform={'capitalize'}>
                    Username
                </Typography>
                <KeyboardArrowUp sx={{ color: 'secondary.contrastText', transform: !show ? 'rotate(180deg)' : '', transition: 'all 0.3s ease' }} />

            </Button>

            <Stack
                position={'absolute'}
                top={45}
                bgcolor={'primary.contrastText'}
                border={'1px solid'}
                width={'100%'}
                borderColor={'secondary.100'}
                borderRadius={2}
                overflow={'hidden'}
                p={1}
                sx={{
                    opacity: show ? 1 : 0,
                    transition: 'all 0.3s ease'
                }}
            >
                <MenuItem sx={{ borderRadius: 2, display: 'flex', gap: 2 }}>
                    <Person />
                    <Typography>
                        Profile
                    </Typography>
                </MenuItem>

                <MenuItem sx={{ borderRadius: 2, display: 'flex', gap: 2 }}>
                    <Logout />
                    <Typography>
                        Logout
                    </Typography>
                </MenuItem>

            </Stack>
        </Stack>
    )
}

export default ProfileMenu
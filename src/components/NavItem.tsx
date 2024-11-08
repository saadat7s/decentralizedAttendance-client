import { Home } from '@mui/icons-material'
import { MenuItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function NavItem({ link, label, icon }: { link: string, label: string, icon: React.ReactNode }) {
    const location = useLocation();
    const navigate = useNavigate();
    const activePath = location.pathname === link;
    return (
        <MenuItem
            onClick={() => navigate(link)}
            sx={{
                color: 'primary.contrastText',
                bgcolor: activePath ? 'primary.main' : '',
                py: 1,
                border: '1px solid',
                borderColor: 'transparent',
                borderRadius: 3,
                ":hover": {
                    border: '1px solid',
                    borderColor: 'primary.contrastText',
                    bgcolor: 'primary.main'
                },
                transition: 'all 0.2s ease'
            }}
        >
            <Stack

                alignItems={'center'}
                justifyContent={'start'}
                flexGrow={1}
                direction={'row'}
                gap={2}
            >
                {icon}
                <Typography>
                    {label}
                </Typography>

            </Stack>
        </MenuItem>
    )
}

export default NavItem
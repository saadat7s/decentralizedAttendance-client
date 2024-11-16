import { School } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function EmptyDashboardCard({ title, subtitle, to, icon }: { title: string, subtitle: string, icon: React.ReactNode, to: string }) {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <Stack
                direction={'row'}
                gap={2}
                p={2}
                borderRadius={3}
                alignItems={'start'}
                sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    ':hover': {
                        bgcolor: 'primary.main',
                        ' h6,p': { color: 'white' }
                    }
                }}
            >
                {icon}
                <Stack
                    gap={0}
                >
                    <Typography variant='h6' color='secondary.contrastText' sx={{ transition: 'all 0.3s ease' }}>
                        {title}
                    </Typography>
                    <Typography variant='body2' color='secondary.200' sx={{ transition: 'all 0.3s ease' }}>
                        {subtitle}
                    </Typography>
                </Stack>
            </Stack>
        </Link>
    )
}

export default EmptyDashboardCard
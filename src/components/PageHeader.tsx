import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function PageHeader({ title, actions }: { title: string, actions: React.ReactNode | null }) {
    return (
        <Stack
            bgcolor={'secondary.main'}
            p={3}
            borderRadius={4}
            direction={'row'}
            gap={1}
            justifyContent={'space-between'}
        >
            <Typography variant='h4' color='primary.contrastText'>
                {title}
            </Typography>

            <Stack direction={'row'} gap={1}>
                {actions}
            </Stack>
        </Stack>
    )
}

export default PageHeader
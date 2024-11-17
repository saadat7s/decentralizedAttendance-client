import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function PageHeader({ actions }: { actions: React.ReactNode | null }) {
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
                <Button sx={{ width: 'fit-content' }} variant='contained' color='error'>
                    Logout
                </Button>
            </Stack>

        </Stack>
    )
}

export default PageHeader
import { Stack } from '@mui/material'
import React from 'react'
import Wrapper from './Wrapper'
import NavItemsRegular from './NavItemsRegular'

function Navbar({ children }: { children: React.ReactNode }) {
    return (
        <Stack
            direction={'row'}
            height={'fit-content'}
            bgcolor={'background.paper'}
            px={8}
            py={2}
        >
            <Stack
                direction={'row'}
                width={'100%'}
                justifyContent={'center'}
                gap={2}
            >
                {children}
            </Stack>
        </Stack>
    )
}

export default Navbar
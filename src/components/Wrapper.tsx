import { Stack } from '@mui/material'
import React from 'react'

function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <Stack direction={'row'} gap={3} width={'100vw'} height={'100vh'}>
            {children}
        </Stack>
    )
}

export default Wrapper
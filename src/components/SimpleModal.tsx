import { Modal, Stack } from '@mui/material'
import React, { SetStateAction } from 'react'

function SimpleModal({ open, setOpen, children }: { open: boolean, setOpen: React.Dispatch<SetStateAction<boolean>>, children: React.ReactNode }) {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Stack width={'100vw'} height={'100vh'} alignItems={'center'} justifyContent={'center'}>
                <Stack bgcolor={'secondary.100'} p={3} gap={3} borderRadius={2}>
                    {children}
                </Stack>
            </Stack>
        </Modal>
    )
}

export default SimpleModal
import { Home, MeetingRoom, RecordVoiceOver, School } from '@mui/icons-material'
import { Divider, Stack, Typography } from '@mui/material'

import NavItem from './NavItem'


function Sidebar({ username, children }: { username: string, children: React.ReactNode }) {
    return (
        <Stack
            gap={2}
            height={'100%'}
            bgcolor={'secondary.main'}
            position={'relative'}
        >
            <Stack alignItems={'center'} p={3} >
                <Stack overflow={'hidden'} bgcolor={'ActiveBorder'} borderRadius={100}>
                    <img src='/defaultPfp.png' alt='logo' style={{ maxWidth: 100, maxHeight: 'auto' }} />
                </Stack>
                <Typography variant='h6' color='primary.contrastText'>
                    {username}
                </Typography>
            </Stack>

            <Divider sx={{ borderColor: 'primary.contrastText' }} />

            <Stack gap={1} px={5}>
                {/* all the nav items */}
                {children}
            </Stack>

        </Stack >
    )
}

export default Sidebar
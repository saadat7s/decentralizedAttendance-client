import { Home, MeetingRoom, RecordVoiceOver, School } from '@mui/icons-material'
import { Divider, Stack, Typography } from '@mui/material'

import NavItem from './NavItem'


function Sidebar() {
    return (
        <Stack
            gap={2}
            width={'30vw'}
            height={'100%'}
            bgcolor={'secondary.main'}
            position={'relative'}
        >
            <Stack alignItems={'center'} p={3} >
                <Stack overflow={'hidden'}>
                    <img src='/logo192.png' alt='logo' style={{ maxWidth: 100, maxHeight: 'auto' }} />
                </Stack>
                <Typography variant='h6' color='primary.contrastText'>
                    Username
                </Typography>
            </Stack>

            <Divider sx={{ borderColor: 'primary.contrastText' }} />

            <Stack gap={1} px={5}>

                <NavItem link={'/dashboard'} label={'Dashboard'} icon={<Home />} />
                <NavItem link={'/dashboard/teachers'} label={'Teachers'} icon={<RecordVoiceOver />} />
                <NavItem link={'/dashboard/students'} label={'Students'} icon={<School />} />
                <NavItem link={'/dashboard/classes'} label={'Classes'} icon={<MeetingRoom />} />

            </Stack>

        </Stack >
    )
}

export default Sidebar
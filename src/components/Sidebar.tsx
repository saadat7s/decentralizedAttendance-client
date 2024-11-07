import { Home, Image, MeetingRoom, RecordVoiceOver, School } from '@mui/icons-material'
import { Divider, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavItem from './NavItem'
const logo = '/logo192.png'


function Sidebar() {
    return (
        <Stack gap={2} width={'30vw'} position={'fixed'} height={'100%'} bgcolor={'secondary.main'}>
            <Stack alignItems={'center'} p={3} >
                <Image
                    href={logo}
                    sx={{
                        width: 100,
                        height: 100
                    }}
                />
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
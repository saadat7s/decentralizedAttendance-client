import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Wrapper from '../Wrapper'
import Navbar from '../Navbar'
import TeacherNavbar from './TeacherNavbar'

function Home() {
    return (
        <Stack
            width={'100vw'}
            height={'100vh'}
            gap={5}
            bgcolor={'secondary.300'}
        >
            <TeacherNavbar />

            <Typography
                variant='h5'
                textAlign={'center'}
                fontWeight={'bold'}
            >
                Attendance List
            </Typography>

            <Stack
                bgcolor={'background.default'}
                gap={2}
                p={2}
                flexGrow={1}
                mx={2}
                alignItems={'center'}
                sx={{
                    borderRadius: '12px 12px 0 0',
                }}
            >
                <Stack
                    alignItems={'end'}
                    width={'100%'}
                >
                    <Button variant='text' sx={{ textTransform: 'capitalize' }}>
                        Refresh
                    </Button>
                </Stack>

                <Button variant='contained' size='small' sx={{ width: 'fit-content', bgcolor: 'gray', px: 10 }}>
                    Start Session
                </Button>

                <Stack gap={3} width={700} height={'70%'} alignItems={'start'}>
                    <TextField
                        size='small'
                        label='Section'
                        placeholder='CS-II'
                        select
                        sx={{
                            width: 150,
                        }}
                    >
                        <MenuItem>
                            CS-I
                        </MenuItem>
                        <MenuItem>
                            SE-II
                        </MenuItem>
                    </TextField>
                </Stack>

                <Button variant='contained'>
                    Confirm
                </Button>

            </Stack>
        </Stack>
    )
}

export default Home
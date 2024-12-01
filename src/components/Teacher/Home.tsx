// src/pages/Home.tsx
import React from 'react';
import { Button, MenuItem, Stack, TextField, Typography} from '@mui/material';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';  
import TeacherNavbar from './TeacherNavbar';

function Home() {
  const dispatch = useDispatch<AppDispatch>(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch(logoutUser({ navigate })); 
  };

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

        <Button 
          variant="outlined" 
          color="error" 
          onClick={handleLogout}
          sx={{ mt: 2 }}
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
}

export default Home;

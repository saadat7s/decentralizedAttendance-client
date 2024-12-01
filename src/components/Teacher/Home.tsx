// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import TeacherNavbar from './TeacherNavbar';
import { getAssignedClasses } from '../../redux/features/classSlice';
import { getStudentsByClass } from '../../redux/features/studentSlice';

function Home() {
  const [selectClass, setSelectedClass] = useState('');
  const { classes } = useSelector((state: RootState) => state.class);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser({ navigate }));
  };

  useEffect(() => {
    if (classes.length === 0) {
      dispatch(getAssignedClasses())
    }
    dispatch(getStudentsByClass(selectClass));

  }, [selectClass])

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
            label='Class'
            placeholder='CS-II'
            select
            sx={{
              minWidth: 300,
            }}
            onChange={(e) => {
              setSelectedClass(e.target.value)
              console.log(e.target.value);
            }}
          >
            {classes.length > 0 && classes.map((c) => {
              return (
                <MenuItem value={c.id}>
                  {c.name}
                </MenuItem>
              )
            })}
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

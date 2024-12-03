// src/components/Teacher/Home.tsx

import React, { useEffect, useState } from 'react';
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import TeacherNavbar from './TeacherNavbar';
import { getAssignedClasses } from '../../redux/features/classSlice';
import { getStudentsByClass } from '../../redux/features/studentSlice';
import { getSessionsByClass, startSessionById } from '../../redux/features/sessionSlice';

// Define a local interface for students specific to Home
interface HomeStudentType {
  id: string;
  studentName: string;
  rollNumber: string;
}

// Define a local interface for sessions specific to Home
interface HomeSessionType {
  id: string;
  sessionName: string;
  sessionDate: string;
}

function Home() {
  const [selectClass, setSelectedClass] = useState('');
  const [selectSession, setSelectedSession] = useState('');
  const { allSessions} = useSelector((state: RootState) => state.session);
  const { classes } = useSelector((state: RootState) => state.class);
  const { students, loading, error } = useSelector((state: RootState) => state.student);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser({ navigate }));
  };

  useEffect(() => {
    if (classes.length === 0) {
      dispatch(getAssignedClasses());
    }
  }, [dispatch, classes]);
  

  useEffect(() => {
    if (selectClass) {
      dispatch(getStudentsByClass(selectClass)); 
    }
  }, [selectClass, dispatch]);

  useEffect(() => {
    if (selectClass) {
      dispatch(getSessionsByClass(selectClass));  
    }
  }, [selectClass, dispatch]);

  useEffect(() => {
    if (selectSession) {
      dispatch(startSessionById(selectSession));  
    }
  }, [selectSession, dispatch]);

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

        <Stack gap={3} width={700} height={'10%'} alignItems={'start'}>
          <TextField
            size='small'
            label='Class'
            placeholder='CS-II'
            select
            sx={{
              minWidth: 300,
            }}
            onChange={(e) => {
              setSelectedClass(e.target.value);
              console.log(e.target.value);
            }}
          >
            {classes.length > 0 && classes.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack gap={2} width={700} height={'30%'} alignItems={'start'}>
          <TextField
            size='small'
            label='Sessions'
            placeholder='Lecture'
            select
            sx={{
              minWidth: 300,
            }}
            onChange={(e) => {
              setSelectedSession(e.target.value);
            }}
          >
            {allSessions.length > 0 && allSessions.map((s: HomeSessionType) => (
              <MenuItem key={s.id} value={s.id}>
                {s.sessionName}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        {loading && <Typography>Loading students...</Typography>} 
        {error && <Typography color="error">{error}</Typography>}  

        <Stack direction="row" spacing={5}>
          {students.length > 0 && students.map((student: HomeStudentType) => (
            <div key={student.id}>
              <Typography>{student.studentName}</Typography>
              <Typography>{student.rollNumber}</Typography>

            </div>
          ))}
        </Stack>

        <Button
          variant="contained"
          // color=""
          // onClick={}
          sx={{ mt: 2 }}
        >
          Confirm
        </Button>

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

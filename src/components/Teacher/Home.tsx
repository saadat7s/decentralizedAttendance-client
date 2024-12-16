// src/components/Teacher/Home.tsx

import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/features/authSlice';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/store';
import TeacherNavbar from './TeacherNavbar';
import { getAssignedClasses } from '../../redux/features/classSlice';
import { getStudentsByClass } from '../../redux/features/studentSlice';
import { getSessionsByClass, startSessionById, toggleStudentAttendance } from '../../redux/features/sessionSlice';
import { finalizeAttendance } from '../../redux/features/teachersSlice';

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
  const { allSessions, session } = useSelector((state: RootState) => state.session);
  const { classes } = useSelector((state: RootState) => state.class);
  const { students, loading, error } = useSelector((state: RootState) => state.student);
  const { userProfile } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('x_auth_token')
    navigate('/');
    dispatch(logoutUser({ navigate }));
  };

  function StudentAttendanceHandler(studentId: string) {
    if (!session.ended) {
      dispatch(toggleStudentAttendance(studentId))
    }

  }

  function refreshSession() {
    dispatch(startSessionById(selectSession));
  }

  function FinalizeAttendance() {
    dispatch(finalizeAttendance({ students: session?.attendance, sessionId: session._id }));
  }
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
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={3}
          width={'100%'}
        >
          <Typography variant='h5'>
            {userProfile?.name}
          </Typography>
          <Button variant='text' sx={{ textTransform: 'capitalize' }} onClick={refreshSession}>
            Refresh
          </Button>
        </Stack>

        <Stack
          direction={'row'}
          gap={5}
          justifyContent={'space-between'}
        >
          <Stack gap={3} width={700} alignItems={'start'}>
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

          <Stack
            gap={0}
          >
            <Typography variant='body2'>
              Total Students: {students.length}
            </Typography>
            <Typography variant='body2'>
              Present: {session?.attendance?.length}
            </Typography>
            <Typography variant='body2'>
              Absent: {students.length - session?.attendance?.length}
            </Typography>
          </Stack>
        </Stack>


        {loading && <Typography>Loading students...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        <Stack direction="row" spacing={5}>
          {students.length > 0 && students.map((student: HomeStudentType) => (
            <Box
              key={student.id}
              onClick={() => StudentAttendanceHandler(student.id)}
              sx={{
                cursor: 'pointer'
              }}
            >
              <Stack
                direction={'row'}
                gap={3}
                alignItems={'center'}
                p={1}
                borderRadius={3}
                bgcolor={session?.attendance?.includes(student.id) ? 'lightgreen' : 'secondary.300'}
              >
                <Typography>{student.rollNumber}</Typography>
                <Typography>{student.studentName}</Typography>
                <Checkbox
                  disabled={session.ended}
                  value={student.id}
                  sx={{ p: 0 }}
                  checked={session?.attendance?.includes(student.id) || false}

                />
              </Stack>
            </Box>
          ))}
        </Stack>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          disabled={(session.ended || !session._id)}
          onClick={FinalizeAttendance}
        >
          {session.ended ? 'Ended' : 'Confirm'}
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

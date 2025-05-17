import React from 'react'
import Navbar from '../Navbar'
import NavItemsRegular from '../NavItemsRegular'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/features/authSlice';
import { AppDispatch } from '../../redux/store';

function StudentNavbar() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    function logoutHandler() {
        dispatch(logoutUser({ navigate }))
    }
    return (
        <>
            <Navbar>

                <NavItemsRegular title='Home' link='/student/home' />
                <NavItemsRegular title='Reports' link='/student/reports' />
                <Button
                    onClick={logoutHandler}
                    sx={{ width: 'fit-content' }}
                    variant='contained'
                    color='error'>Logout</Button>
            </Navbar>
        </>
    )
}

export default StudentNavbar
import React from 'react'
import Home from '../components/Teacher/Home'
import withAuth from '../utils/withAuth'

function TeacherHome() {
    return (
        <Home />
    )
}

export default withAuth(TeacherHome)
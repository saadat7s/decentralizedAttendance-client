import React from 'react'
import Navbar from '../Navbar'
import NavItemsRegular from '../NavItemsRegular'

function StudentNavbar() {
    return (
        <>
            <Navbar>

                <NavItemsRegular title='Home' link='/student/home' />
                <NavItemsRegular title='Reports' link='/student/reports' />

            </Navbar>
        </>
    )
}

export default StudentNavbar
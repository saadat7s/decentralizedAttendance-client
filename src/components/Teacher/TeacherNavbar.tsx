import React from 'react'
import Navbar from '../Navbar'
import NavItemsRegular from '../NavItemsRegular'

function TeacherNavbar() {
    return (
        <>
            <Navbar>

                <NavItemsRegular title='Home' link='/teacher/home' />
                <NavItemsRegular title='Details' link='/teacher/details' />

            </Navbar>
        </>
    )
}

export default TeacherNavbar
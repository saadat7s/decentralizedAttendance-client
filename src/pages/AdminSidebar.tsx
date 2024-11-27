import React from 'react'
import Sidebar from '../components/Sidebar'
import NavItem from '../components/NavItem'
import { Home, MeetingRoom, RecordVoiceOver, School, Schedule } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

function AdminSidebar() {
    const { userProfile } = useSelector((state: RootState) => state.user)
    return (
        <Sidebar
            username={userProfile?.name}
        >
            <NavItem link={'/admin/dashboard'} label={'Dashboard'} icon={<Home />} />
            <NavItem link={'/admin/dashboard/students'} label={'Students'} icon={<School />} />
            <NavItem link={'/admin/dashboard/teachers'} label={'Teachers'} icon={<RecordVoiceOver />} />
            <NavItem link={'/admin/dashboard/classes'} label={'Classes'} icon={<MeetingRoom />} />
            <NavItem link={'/admin/dashboard/sessions'} label={'Sessions'} icon={<Schedule />} />

        </Sidebar>
    )
}

export default AdminSidebar
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboardTeacher from './pages/AdminDashboardTeacher';
import AdminDashboardStudents from './pages/AdminDashboardStudents';
import AdminDashboardClasses from './pages/AdminDashboardClasses';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Register from './components/Register';
import AdminLogin from './components/Admin/AdminLogin';
import AdminAddTeacher from './pages/AdminAddTeacher';
import AdminAddStudent from './pages/AdminAddStudent';
import AdminAddClass from './pages/AdminAddClass';
import TeacherLogin from './components/Teacher/TeacherLogin';
import TeacherHome from './pages/TeacherHome';
import AdminDashboardSessions from './pages/AdminDashboardSessions';
import AdminCreateSession from './pages/AdminCreateSession';
import StudentHome from './pages/StudentHome';
import Login from './components/Student/Login';


function App() {
  return (
    //react redux provider
    <Provider store={store}>
      {/* react router dom */}
      <BrowserRouter>
        <Routes>

          {/* admin routes */}
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/dashboard/teachers' element={<AdminDashboardTeacher />} />
          <Route path='/admin/dashboard/teachers/add-teacher' element={<AdminAddTeacher />} />
          <Route path='/admin/dashboard/students' element={<AdminDashboardStudents />} />
          <Route path='/admin/dashboard/students/add-student' element={<AdminAddStudent />} />
          <Route path='/admin/dashboard/classes' element={<AdminDashboardClasses />} />
          <Route path='/admin/dashboard/classes/add-class' element={<AdminAddClass />} />
          <Route path="/admin/dashboard/sessions" element={<AdminDashboardSessions />} />
          <Route path="/admin/dashboard/sessions/create-session" element={<AdminCreateSession />} />


          <Route path='/admin/login' element={<AdminLogin />} />

          <Route path='/teacher/login' element={<TeacherLogin />} />
          <Route path='/teacher/home' element={<TeacherHome />} />
          <Route path='/teacher/details' element={<TeacherHome />} />
          <Route path='/teacher/students' element={<TeacherHome />} />

          <Route path='/student/login' element={<Login />} />
          <Route path='/student/home' element={<StudentHome />} />
          <Route path='/student/reports' element={<TeacherHome />} />


          <Route path='/signup' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

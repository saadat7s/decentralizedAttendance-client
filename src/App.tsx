import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboardTeacher from './pages/AdminDashboardTeacher';
import AdminDashboardStudents from './pages/AdminDashboardStudents';
import AdminDashboardClasses from './pages/AdminDashboardClasses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/dashboard/teachers' element={<AdminDashboardTeacher />} />
        <Route path='/dashboard/students' element={<AdminDashboardStudents />} />
        <Route path='/dashboard/classes' element={<AdminDashboardClasses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

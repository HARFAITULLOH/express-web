import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Account, Dashboard, DashboardBody, Home, Login, MainApp, Register, Service, Tracking, Add, Confirm, Update } from '../../pages';

const Routess = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<MainApp />}>
            <Route path="/" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardBody />} />
            <Route path="tracking" element={<Tracking />} />
            <Route path="account" element={<Account />} />
            <Route path="add" element={<Add />} />
            <Route path="add/confirm" element={<Confirm />} />
            <Route path="update" element={<Update />} />
          </Route>
        </Routes>
    </Router>
  )
};

export default Routess;
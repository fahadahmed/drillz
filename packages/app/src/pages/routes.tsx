import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AddHabit, Dashboard, Login, Register } from '.';
import { AppContainer, AppContext } from '../components';

function AppRoutes() {
  const { currentUser } = useContext(AppContext);
  return (
    <Router>
      <AppContainer authenticated={currentUser ? true : false}>
        <Routes>
          {!currentUser && (
            <>
              <Route path="/sign-up" element={<Register />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/" element={<Navigate to="/sign-in" />} />
            </>
          )}
          {currentUser && (
            <>
              <Route path="/add-habit" element={<AddHabit />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </>
          )}
          <Route path="*" element={<Navigate to={currentUser ? '/dashboard' : '/sign-in'} />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default AppRoutes;

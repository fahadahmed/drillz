import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Register, Dashboard, Login } from '.';
import { AppContainer, AppContext } from '../components';

function AppRoutes() {
  const { currentUser } = useContext(AppContext);
  return (
    <AppContainer>
      <Router>
        <Routes>
          {!currentUser && (
            <>
              <Route path="/sign-up" element={<Register />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/" element={<Navigate to="/sign-in" />} />
            </>
          )}
          {currentUser && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="*" element={<Navigate to={currentUser ? '/dashboard' : '/sign-in'} />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { Register, Dashboard } from '.';
import { AppContainer, AppProvider } from '../components';

function AppRoutes() {
  return (
    <AppProvider>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </AppContainer>
    </AppProvider>
  );
}

export default AppRoutes;

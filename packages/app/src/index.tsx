import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime';
import AppRoutes from './pages/routes';
import { AppProvider } from './components/AppProvider';

ReactDOM.render(
  <AppProvider>
    <AppRoutes />
  </AppProvider>,
  document.querySelector('#root'),
);

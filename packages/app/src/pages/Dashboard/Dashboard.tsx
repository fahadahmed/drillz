import React from 'react';
import { auth } from '../../config/firebase';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={() => auth.signOut()}>
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;

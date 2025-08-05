import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const loggedInUserEmail = 'sayan@example.com'; // Dummy email, could be dynamic in real app

  return (
    <div>
      <Dashboard userEmail={loggedInUserEmail} />
    </div>
  );
}

export default App;

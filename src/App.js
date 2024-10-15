import './App.css';
import React from 'react';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Form Handling and Validation</h1>
      <UserForm /> {/* Rendering the UserForm component */}
      </header>
    </div>
  );
}

export default App;

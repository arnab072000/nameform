//import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    setFullName(`${capitalizedFirstName} ${capitalizedLastName}`);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="firstName">
            First Name:
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => handleFirstNameChange(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="lastName">
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => handleLastNameChange(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
        >
          Submit
        </button>
      </form>

      {fullName && (
        <div>
          <h2>Full Name: {fullName}</h2>
        </div>
      )}
    </div>
  );
};

export default App;

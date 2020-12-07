import React from 'react';
import './assets/styles/global.css';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/Routes';

function App() {
  return (
      <>
        <ToastContainer />
        <Routes/>
      </>
  );
}

export default App;

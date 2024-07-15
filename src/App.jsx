import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Topbar/Topbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
      <Home></Home>
    </div>
  );
}

export default App;

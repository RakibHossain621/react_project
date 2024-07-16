import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;

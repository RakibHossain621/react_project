import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx';
import Location from './Components/Location/Location.jsx';
import Blog from './Components/Blog/Blog.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'location',
        element: <Location />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'Contact us',
        element: <ContactUs/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

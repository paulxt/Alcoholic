import React from 'react';
import ReactDOM from 'react-dom/client';

import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import AboutPage from './components/pages/AboutPage';
import ServicePage from './components/pages/ServicePage';
import Contact from './components/pages/Contact';
// import ReactGA from 'react-ga';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/project1",
    element: <Project1 />,
  },
  {
    path: "/project2",
    element: <Project2 />,
  },
  {
    path: "/project3",
    element: <Project3 />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

// ReactGA.initialize('G-J0GT4G8XVN');
// ReactGA.pageview(window.location.pathname + window.location.search);
// ReactGA.event({
//   category: 'Button',
//   action: 'Click',
//   label: 'Contact Us'
// }); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


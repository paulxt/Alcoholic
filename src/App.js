import React, {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Helmet
import Header2 from './components/Header/Header2';
import Footer from './components/Footer/Footer';

//Route Component
import Home from './components/pages/Home';
import AboutPage from './components/pages/AboutPage';
import Service from './components/pages/ServicePage';
import Contact from './components/pages/Contact';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';

//GA4
import ReactGA from 'react-ga4';
const TRACKING_ID = "G-J0GT4G8XVN"; // your Measurement ID


function App() {

  // Theme
  // const [theme, setTheme] = useState('light-theme');
  // const toggleTheme = () => {
  //   theme === '' ? setTheme('light-theme') : setTheme('');
  // }
  // useEffect(() => {
  //   document.body.className = theme
  // }, [theme]);

  /*********** Language ************/
  const [language, setLanguage] = useState({});
  const toggleLanguage = async (e) => {
    e.preventDefault();
    await setLanguage((prev) => 
      prev === "Chinese" ? "English" : "Chinese");
  }
  useEffect(() => {
    document.body.className = language
  }, [language]);

  const router = [
    {
      path: "/",
      element: <Home language={language} />
    },
    {
      path: "/about",
      element: <AboutPage language={language} />
    },
    {
      path: "/service",
      element: <Service language={language} />
    },
    {
      path: "/contact",
      element: <Contact language={language} />
    },
    {
      path: "/project1",
      element: <Project1 language={language} />
    },
    {
      path: "/project2",
      element: <Project2 language={language} />
    },
    {
      path: "/project3",
      element: <Project3 language={language} />
    },
  ]

  //GA4 function
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
    ReactGA.send({ hitType: "pageview", page: "/about", title: "ABOUT" });
    ReactGA.send({ hitType: "pageview", page: "/contact", title: "CONTACT" });
    ReactGA.send({ hitType: "pageview", page: "/service", title: "SERVICE" });
    ReactGA.send({ hitType: "pageview", page: "/Project1", title: "PROJECT1" });
    ReactGA.send({ hitType: "pageview", page: "/project2", title: "PROJECT2" });
    ReactGA.send({ hitType: "pageview", page: "/project3", title: "PROJECT3" });
}, [])


  return (
    <Router>
      <Header2 language={language} toggleLanguage={toggleLanguage}/>
      <Routes>
        {
          router.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))
        }
      </Routes>
      <Footer language={language} />
    </Router>
  );
}

export default App;


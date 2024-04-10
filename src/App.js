import React, {useState, useEffect} from 'react';

import './App.css';

import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Team from './components/UI/Team';
// import Blog from './components/UI/Blog';
import Testimonial from './components/UI/Testimonial';
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer';
import Projects from './components/UI/Projects';


function App() {

  const [theme, setTheme] = useState('light-theme');
  const [language, setLanguage] = useState('Chinese');

  const toggleLanguage = () => {
    language === 'Chinese' ? setLanguage('English') : setLanguage('Chinese');
  }

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('');
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme]);


  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
      <Hero theme={theme} language={language}/>
      <Counter language={language}/>
      <Services language={language} />
      <About language={language}/>
      {/* <Team language={language} /> */}
      <Projects language={language} theme={theme} />
      {/* <Blog language={language}/> */}
      <Testimonial language={language}/>
      <Newsletter language={language}/>
      <Footer language={language} />
    </>
  );
}

export default App;


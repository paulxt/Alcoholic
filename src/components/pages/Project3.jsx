import React, { useState, useEffect } from 'react'
// import ProjectHeader from '../UI/ProjectHeader';
import Project3Content from '../UI/Project3Content';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Project3 = () => {

    const [theme, setTheme] = useState('light-theme');
    const toggleTheme = () => {
        theme === '' ? setTheme('light-theme') : setTheme('');
    }

    const [language, setLanguage] = useState("Chinese");

    const toggleLanguage = () => {
        language === 'Chinese' ? setLanguage('English') : setLanguage('Chinese');
    }


    useEffect(() => {
        document.body.className = theme
    }, [theme]);

    return (
        <>
            {/* <ProjectHeader language={language} toggleLanguage={toggleLanguage} /> */}
            <Header theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
            <Project3Content theme={theme} language={language} />
            <Footer theme={theme} />
        </>
    )
}

export default Project3
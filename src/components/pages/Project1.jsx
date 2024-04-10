import React, { useState, useEffect } from 'react'

import ProjectHeader from '../UI/ProjectHeader';
import Project1Content from '../UI/Project1Content';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Project1 = () => {
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
            <Project1Content theme={theme} language={language} />
            <Footer theme={theme} />
        </>
    )
}

export default Project1
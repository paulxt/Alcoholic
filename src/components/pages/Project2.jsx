import React, {useState, useEffect} from 'react'

import '../../styles/project2.css';

import ProjectHeader from '../UI/ProjectHeader';
import Project2Content from '../UI/Project2Content';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

    
const Project2 = () => {

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
    }, [theme])

    return (
        <>
            {/* <ProjectHeader language={language} toggleLanguage={toggleLanguage} /> */}
            <Header theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
            <Project2Content theme={theme} language={language} />
            <Footer theme={theme} />
        </>
        
    )
}

export default Project2
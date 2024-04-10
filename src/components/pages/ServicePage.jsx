import React, {useState,useEffect} from 'react'

import Header from '../Header/Header';
import ServiceContent from '../UI/ServiceContent';
import Footer from '../Footer/Footer';

const Service = () => {

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
            <ServiceContent theme={theme} language={language} />
            <Footer />
        </>
        
    )
}

export default Service
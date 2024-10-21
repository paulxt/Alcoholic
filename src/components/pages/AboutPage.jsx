import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutContent from '../UI/AboutUI/AboutContent';


const AboutPage = ({language}) => {

    return (
        <div className="about-page mt-5">
            <AboutContent language={language} />
        </div>
    )
}

export default AboutPage
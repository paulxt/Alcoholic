import React from 'react';

import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from '../UI/HomeUI/Hero';
import Counter from '../UI/HomeUI/Counter';
import Services from '../UI/ServiceUI/Services';
import About from '../UI/AboutUI/About';
// import Team from '../UI/ContactUI/Team';
// import Blog from '../UI/Blog';
import Testimonial from '../UI/ContactUI/Testimonial';
import Newsletter from '../UI/HomeUI/Newsletter';
import Projects from '../UI/ProjectUI/Projects';


function Home ({language}) {

return (
        <div className='home mt-5'>
            <Hero language={language}/>
            <Counter language={language}/>
            <Services language={language} />
            <About language={language}/>
            <Projects language={language}/>
            <Testimonial language={language}/>
            <Newsletter language={language}/>
        </div>
    );
}

export default Home;


import React, { useRef, useEffect, useState } from 'react'
import '../../styles/projectheader.css';


const nav_link = [
    {
        path: '/project1',
        display:'Art | Design',
    },
    {
        path: '/project2',
        display:'Social Media',
    },
    {
        path: '/project3',
        display:'Ad Optimization',
    },

]

const ProjectHeader = ({language, toggleLanguage}) => {
    return (
        <>
            <header className='project-header'>
                <div className="container">
                    <div className='simple-wrapper'>
                        <div className='logo'>
                            <h2><a href="/">Alcoholic</a></h2>
                        </div>

                        {/* navigation */}
                        <div className="navigation">
                            <ul className="menu">
                                {
                                    nav_link.map((item, index) => (
                                        <li className="project-menu_item" key={index}>
                                            <a href={item.path} className="project-menu_link">{item.display}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="language_mode">
                            <span onClick={toggleLanguage}>
                                {
                                    language === 'Chinese' ?(<span>English</span>)
                                        : (<span>Chinese</span>)
                                }
                            </span>
                        </div>
                    </div>
                    
                </div>

                
            </header>
        </>
    )
}

export default ProjectHeader
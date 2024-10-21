import React, {useRef, useEffect} from 'react';

// import logoImg from '../../images/LOGO.png';
import './header.css';

const nav_link = [
    // {
    //     path: '#home',
    //     display:'Home'
    // },

    {
        path: '#about',
        display:'About'
    },

    {
        path: '#service',
        display:'Service'
    },

    {
        path: '#projects',
        display:'Projects'
    },
    {
        path: '#newsletter',
        display:'Contact'
    },
]

const Header = ({ theme, toggleTheme, language, toggleLanguage }) => {
    
    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header_shrink');
        } else {
            headerRef.current.classList.remove('header_shrink');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc)

        return () => window.removeEventListener('scroll', headerFunc)
    }, []);

    const handleClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    }

    const toggleMenu = () => menuRef.current.classList.toggle('menu_active');

    return (
        <header className="header" ref={headerRef}  >
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <h2><a href='/#'>Alcoholic</a></h2>
                    </div>

                    {/* navigation */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu">
                            {/* {
                                nav_link.map((item, index) => (
                                    <li className="menu_item" key={index}>
                                        <a href={item.path} onClick={handleClick} className="menu_link">{item.display}</a>
                                    </li>
                                ))
                            } */}
                            <li className="menu_item">
                                <a href="/about" className="menu_link">
                                    About
                                </a>
                            </li>
                            <li className="menu_item">
                                <a href="/service" className="menu_link">
                                    Service
                                </a>
                            </li>
                            <li className="menu_item">
                                <a href="/contact" className="menu_link">
                                    Contact
                                </a>
                            </li>
                            {/* Project Dropdown */}
                            <div className="dropdown">
                                <button class="dropbtn">Project</button>
                                <div class="dropdown-content">
                                    <a href="/project1" >Art & Design</a>
                                    <a href="/project2" >Social Media</a>
                                    <a href="/project3" >Ad Optimization</a>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="mode_group">
                        {/* light mode */}
                        <div className="light_mode">
                            <span onClick={toggleTheme}>
                                {
                                    theme === 'light-theme' ?
                                        (<span><i class="ri-moon-line"></i>Dark</span>)
                                        : (<span><i class="ri-sun-line"></i>Light</span>)
                                }
                            </span>
                        </div>

                        {/* Chinese Version */}
                        <div className="language_mode">
                            <span onClick={toggleLanguage}>
                                {
                                    language === 'Chinese' ?(<span>English</span>)
                                        : (<span>Chinese</span>)
                                }
                            </span>
                        </div>
                    </div>
                    

                    <span className="mobile_menu" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </header>
    )
}

export default Header
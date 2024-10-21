// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import './header2.css';

//image

// Hook
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const Header2 = ({ language, toggleLanguage}) => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container className='my-1'>
                    <Navbar.Brand href="/">
                        <h2><a href='/#'>Alcoholic</a></h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>關於環法</Nav.Link> */}
                        <Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('press')}>{language === 'Chinese'? "關於我們" : "ABOUT"}</Nav.Link>
                        <Nav.Link href="/service" className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>{language === 'Chinese' ? "服務項目" : "SERVICE"}</Nav.Link>
                        <Nav.Link href="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>{language === 'Chinese' ? "聯絡我們" : "CONTACT"}</Nav.Link>
                        <NavDropdown title={language === 'Chinese'? "案例分享" : "PROJECT"} id="nav-dropdown">
                            <NavDropdown.Item href='/project1' eventKey="1.1">{language === 'Chinese'? "藝術｜設計" : "Art & Design"}</NavDropdown.Item>
                            <NavDropdown.Item href='/project2' eventKey="1.2">{language === 'Chinese'? "社群媒體" : "Social Media"}</NavDropdown.Item>
                            <NavDropdown.Item href='/project3' eventKey="1.3">{language === 'Chinese'? "廣告優化" : "Ad Optimization"}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <span className="navbar-text">
                        {/* <div className="social-icon">
                            <a href="https://www.facebook.com/letapesunmoonlake/?locale=zh_TW" target='_blank' rel='noreferrer noopener'><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/letapesunmoonlake/" target='_blank' rel='noreferrer noopener'><img src={navIcon3} alt="" /></a>
                        </div> */}
                        <HashLink to='mailto:alcoholicmarketing@gmail.com' target='_blank'>
                            <button className="vvd"><span>Contact NOW!</span></button>
                        </HashLink>
                    </span>
                    <div className="language">
                        <span onClick={toggleLanguage}>
                            {
                                language === "Chinese" ? "ENGLISH"
                                    : "中文"
                            }
                        </span>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header2
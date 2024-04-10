
import React from 'react';

import './footer.css'

const Footer = () => {

    // const quickLinks01 = [
    //     {
    //         path: '#',
    //         display: 'Marketing',
    //     },
    //     {
    //         path: '#',
    //         display: 'Analytics',
    //     },
    //     {
    //         path: '#',
    //         display: 'Commerce',
    //     },
    // ];

    // const quickLinks02 = [
    //     {
    //         path: '#',
    //         display: 'Pricing',
    //     },
    //     {
    //         path: '#',
    //         display: 'Documentation',
    //     },
    //     {
    //         path: '#',
    //         display: 'Guides',
    //     },
    // ];

    // const quickLinks03 = [
    //     {
    //         path: '#about',
    //         display: 'About',
    //     },
    //     {
    //         path: '#',
    //         display: 'Job',
    //     },
    //     {
    //         path: '#blog',
    //         display: 'Blog',
    //     },
    // ];

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_logo">
                        <h2>Alcoholic International</h2>
                        {/* <p className="description">Grow with us</p> */}

                        <p className="small_text description">
                            Alcoholic is a company dedicating to promote your brand. Filled with talented and creative people. Join us!
                        </p>
                    </div>

                    <div className="footer_information">
                        <div className='contact-information'>
                            <h3 className='name'>Contact-us</h3>
                            <p className='sales_manager'></p>
                            <p><span className='highlight'>phone</span>: +886-928-207-569</p>
                            <p><span className='highlight'>email</span>: alcoholicmarketing@gmail.com</p>
                        </div>

                        <div className="social_media">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=61557430722727" target='_blank'>
                                <i class="ri-facebook-box-fill"></i>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/alcoholic.inc_/" target='_black'>
                                <i class="ri-instagram-fill"></i>
                            </a>
                            {/* Mail */}
                            <a href="mailto:alcoholicmarketing@gmail.com" target='_blank'>
                                <i class="ri-mail-fill"></i>
                            </a>
                        </div>
                    </div>

                    

                    {/* <div className="footer_quick-links">
                        <h3 className="quick_links-title">Solutions</h3>
                        <ul className="quick_links">
                            {
                                quickLinks01.map((item, index) => (
                                    <li className="quick_link-item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div> */}

                    {/* <div className="footer_quick-links">
                        <h3 className="quick_links-title">Support</h3>
                        <ul className="quick_links">
                            {
                                quickLinks02.map((item, index) => (
                                    <li className="quick_link-item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div> */}

                    {/* <div className="footer_quick-links">
                        <h3 className="quick_links-title">Company</h3>
                        <ul className="quick_links">
                            {
                                quickLinks03.map((item, index) => (
                                    <li className="quick_link-item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div> */}
                </div>

                <p className="copyright">
                    Copyright ©{year}, developed by Alcoholic Inc. All rights reserved.{" "}
                </p>
            </div>
        </footer>
    )
}

export default Footer
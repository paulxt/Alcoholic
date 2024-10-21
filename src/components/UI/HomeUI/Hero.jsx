import React from 'react';
import '../../../styles/hero.css';

// import heroDarkImg from '../../images/hero-img.png';
// import lightImg from '../../images/light-hero-bg.jpg';
import heroGIF from '../../../images/heroGIF.gif';
import heroDarkGIF from '../../../images/heroDarkGIF.gif';

const Hero = ({theme, language}) => {
    return language === 'English' ? (
        <section className="hero_section" id='home'>
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <div>
                            <h2 className='hero_content-title'>We are Creating Perfect</h2>
                            <h2 className='hero_content-title'>Digital Product To</h2>
                            <h2 className="highlight">Promote your Brand</h2>
                        </div>
                        <p className="description">
                        <span className='highlight'><strong>Youth</strong></span>｜We have young and creative team with talent and experiences in marketing to help you get with trend. <br/>
                        <span className='highlight'><strong>Professional</strong></span>｜With varied and extensive customer genre, we can accurately grasping industry trends and competitive analysis. <br/>
                        <span className='highlight'><strong>Design</strong></span>｜Creating customized artistic designs and marketing strategies, with long-term and short-term professional strategic planning.<br/>
                        <span className='highlight'><strong>Innovative</strong></span>｜Thinking Innovative, Creative, and Service, guiding multiple brand enterprises to create advantages.
                        </p>                    
                        <div className="hero_btns">
                            <a href='/contact'><button className="primary_btn">Let's Contact</button></a>
                            <a href='/service'><button className="secondary_btn">Our Services</button></a>
                        </div>
                    </div>

                    <div className="hero_img">
                        <img className='hero_image' src={theme === 'light-theme' ? heroGIF : heroDarkGIF} alt="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <section className="hero_section" id='home'>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div>
                        <h2>致力於為客戶設計</h2>
                        <h2>有質感的品牌藝術行銷</h2>
                        <h2 className="highlight">打造產品美學優勢</h2>
                    </div>
                    <p className="description">
                    <span className='highlight'><strong>Youth</strong></span>｜年輕化團隊，專業行銷經驗與藝術能力，結合最新潮流趨勢 <br/>
                    <span className='highlight'><strong>Professional</strong></span>｜客戶類型多元、廣泛，精準掌握產業脈動與競業分析 <br/>
                    <span className='highlight'><strong>Design</strong></span>｜打造客製化藝術設計與行銷方案，長短期專業策略佈局 <br/>
                    <span className='highlight'><strong>Innovative</strong></span>｜創新、創意服務思維，輔導多間品牌企業創造優勢
                    </p>
                    <div className="hero_btns">
                        <a href='/contact'><button className="primary_btn">Let's Contact</button></a>
                        <a href='/service'><button className="secondary_btn">Our Services</button></a>
                    </div>
                </div>

                <div className="hero_img">
                    <img src={theme === 'light-theme' ? heroGIF : heroDarkGIF} alt="hero-img" />
                    {/* <img src={theme === 'light-theme' ? lightImg : heroDarkImg} alt="hero-img" /> */}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
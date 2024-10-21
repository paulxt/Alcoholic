import React from 'react';

import '../../../styles/about.css';

import AboutImg from '../../../images/about-us.jpg';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';


const chooseData = [
    {
        icon: 'ri-bubble-chart-line',
        title: 'Out with the old-school Marketing Mindset',
        desc: 'Breaking from old marketing concepts.Finding your marketing efforts ineffective? Pursuing SEO rankings is no longer the sole objective! The trend now lies in brand community management born from aesthetics.',
    },
    {
        icon: 'ri-team-line',
        title: 'Comprehensive Integration of Artistic Design',
        desc: 'Inject artistic elements into your brand, physical and online store, product, and social media platforms to create a unique OMO system, virtual and reality aesthetic impressions, enhancing the sensory experience for consumers.',
    },
    {
        icon: 'ri-hand-heart-line',
        title: 'Must-had for Successful Business in the New Era',
        desc: "Different aesthetic elements to target different age, capturing the visual attention of future consumer generations towards 'beauty', and positioning as a leading brand in industry transformation.",
    },
]

const chooseDataCN = [
    {
        icon: 'ri-bubble-chart-line',
        title: '舊式行銷思維OUT',
        desc: '拋開舊有行銷觀念、粉絲經營成長緩慢？追求社群媒體按讚數？行銷成果都沒效？追求SEO排名不再是唯一目的！從美感而生的品牌社群經營才是趨勢',
    },
    {
        icon: 'ri-team-line',
        title: '全方位整合藝術設計',
        desc: '為你的品牌、實體網路店面與系列產品、社群平台注入藝術元素，打造獨一無二的線上線下、虛實美學印象，升級消費者五感體驗。',
    },
    {
        icon: 'ri-hand-heart-line',
        title: '新時代成功企業必備元素',
        desc: '針對不同年齡層客群傳遞不同美學元素，鎖定未來消費世代對「美」的影像注意力，站上產業轉型領導品牌。',
    },
]

const About = ({language}) => {
    return language === 'English' ? (
        <section id="about">
            <div className="container">
                <motion.div
                    className="about_wrapper"
                    variants={fadeIn('right', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <div className="about_content">
                        <h6 className='subtitle'>The Trend of Marketing Across Eras.</h6>
                        <h2>Let brand aesthetics capture the </h2>
                        <h2 className='highlight'>hearts of consumers.</h2>
                        <p className='description about_content-desc'>
                        For a brand to possess a unique brand image, it must have artistic sensibilities. Alcoholic can guarantee to create a one-of-a-kind brand aesthetic for you, allowing you to stand out from the crowd of numerous brands.
                        </p>

                        <div className='choose_item-wrapper'>
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose_us-item">
                                        <span className="choose_us-icon">
                                            <i class={item.icon}></i>
                                        </span>
                                        <div>
                                            <h4 className='choose_us-title'><span className='highlight'>{item.title}</span></h4>
                                            <p className='description'>{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <motion.div
                        className="about_img"
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <img src={AboutImg} alt="about image" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    ) : (
        <section id="about">
            <div className="container">
                <div className="about_wrapper">
                    <motion.div
                        className="about_content"
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h6 className='subtitle'>跨時代行銷趨勢</h6>
                        <h2>讓品牌美感抓住<span className='highlight'>消費者的心</span></h2>
                        <p className='description about_content-desc'>
                            對於一個品牌想要擁有一個獨樹一格的品牌形象，就必須要有藝術的細胞，這點Alcoholic可以保證為您打造一個獨一無二的品牌美感，讓您從眾多品牌中脫穎而出。
                        </p>

                        <div className='choose_item-wrapper'>
                            {
                                chooseDataCN.map((item, index) => (
                                    <div className="choose_us-item">
                                        <span className="choose_us-icon">
                                            <i class={item.icon}></i>
                                        </span>
                                        <div>
                                            <h4 className='choose_us-title'><span className='highlight'>{item.title}</span></h4>
                                            <p className='description'>{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>

                    <motion.div
                        className="about_img"
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <img src={AboutImg} alt="about image" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
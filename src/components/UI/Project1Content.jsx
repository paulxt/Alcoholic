import React, { useState } from 'react'

import '../../styles/project1.css';

import coverImg from '../../images/coverImg.jpg';

import senseMarketingImg from '../../images/sense-marketing-image.jpg';

import brandingMainImg from '../../images/branding-mainImg.png';
import brandingImages1 from '../../images/branding-images-1.png';
import brandingImages2 from '../../images/branding-images-2.png';

import characterDesign1 from '../../images/character_design-1.png';
import characterDesign2 from '../../images/character_design-2.png';
import characterDesign3 from '../../images/character_design-3.png';
import characterDesign4 from '../../images/character_design-4.png';
import characterDesign5 from '../../images/character_design-5.png';
import characterDesign6 from '../../images/character_design-6.png';

import packageDesignImg from '../../images/package-design-img.jpg';

import socialDesignImg from '../../images/social_design-image.png';
import socialDesignDesImg from '../../images/social_design-des-image.png';

import olympic1 from '../../images/olympic-1.png';
import olympic2 from '../../images/olympic-2.png';
import olympic3 from '../../images/olympic-3.png';
import olympic4 from '../../images/olympic-4.png';
import olympic5 from '../../images/olympic-5.png';
import olympic6 from '../../images/olympic-6.png';
import olympic7 from '../../images/olympic-7.png';
import olympic8 from '../../images/olympic-8.png';
import olympic9 from '../../images/olympic-9.png';
import olympic10 from '../../images/olympic-10.png';
import olympic11 from '../../images/olympic-11.png';
import olympic12 from '../../images/olympic-12.png';
import olympic13 from '../../images/olympic-13.png';
import olympic14 from '../../images/olympic-14.png';
import olympic15 from '../../images/olympic-15.png';

import artFooterImg from '../../images/art-footer-image.jpg';
import artFooterLOGO from '../../images/art-footer-logo.jpg';


//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Project1Content = ({theme, language}) => {
    return language === 'Chinese'? (
        <>
            <section className="project-1">
                <div className="container">
                    <div className="project1-content">
                        {/* Project 1 Header */}
                        <div className='porject1_header'>
                            <h1 className='project-1_title'>全方位的藝術整合</h1>
                            <p className='project-1_des'>
                                為你的品牌、實體網路店面與系列產品、社群平台注入藝術元素，打造獨一無二的線上線下、虛實美學印象，升級消費者的五感體驗。
                            </p>
                            <h3>新時代行銷吸睛趨勢</h3>
                        </div>
                        {/* 美感行銷趨勢 */}
                        <motion.div
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="sense_marketing"
                        >
                            <div className="sense_marketing-des">
                                <h2>美感行銷趨勢</h2>
                                <h3>Why Sense Marketing?</h3>
                                <p>
                                    打開臉書後充斥著各種行銷宣傳，哪一種最能抓住顧客眼球？答案是：令人最印象深刻的設計與渾然天成的美感，使顧客願意主動與品牌建立關係。現在開始利用視覺美感，打造品牌新時代優勢！
                                </p>
                            </div>
                            <div className="sense_marketing-img">
                                <img src={senseMarketingImg} alt="" />
                            </div>
                        </motion.div>
                        {/* 品牌美學定位 */}
                        <div className="branding">
                            <div className="branding_mainImg">
                                <img src={brandingMainImg} alt="" />
                            </div>
                            <div className="branding_des">
                                <h2>品牌美學定位</h2>
                                <p>
                                    將您的概念視覺化。 <br />
                                    設計獨一無二的品牌美學藝術本體 <br />
                                    <strong>品牌定位Ｘ企業識別CISＸ品牌識別BIS</strong> <br />
                                    品牌策略結合概念藝術系統 <br />
                                    打造忠於企業與品牌本體的美感 <br />
                                </p>
                            </div>
                            <div className="brandimg_images">
                                <img className='brandimg_images-1' src={brandingImages1} alt="" />
                                <img className='brandimg_images-2' src={brandingImages2} alt="" />
                            </div>
                        </div>
                        {/* 品牌角色設計 */}
                        <div className="character_design">
                            <motion.div
                                variants={fadeIn('down', 0.7)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="character_design-imagesup"
                            >
                                <img className='character_design-images1' src={characterDesign1} alt="" />
                                <img className='character_design-images2' src={characterDesign2} alt="" />
                                <img className='character_design-images3' src={characterDesign3} alt="" />
                            </motion.div>
                            <div className="character_design-des">
                                <div className="character_design-title">
                                    <h2>品牌角色設計</h2>
                                    <h5>你有沒有想過有一天能為品牌打造一個角色？</h5>
                                </div>
                                <p>為品牌與產品設計獨特角色、結合品牌個性、識別視覺，讓潮流與獨家藝術翻玩品牌與商品，抓住消費者眼球！</p>
                            </div>
                            <motion.div
                                variants={fadeIn('up', 0.5)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="character_design-imagesdown"
                            >
                                <img src={characterDesign4} alt="" />
                                <img className='character_design-images' src={characterDesign5} alt="" />
                                <img src={characterDesign6} alt="" />
                            </motion.div>
                        </div>
                        {/* 包裝禮盒藝術設計 */}
                        <div className="package_design">
                            <div className="package_design-des">
                                <h2>包裝禮盒藝術設計</h2>
                                <h3>精品咖啡產品禮盒設計包裝</h3>
                                <div className="package_design-block">
                                    <h4>01</h4>
                                    <div className="package_design-word">
                                        <h5>商品系列包裝</h5>
                                        <ul>
                                            <li>常規商品包裝優化</li>
                                            <li>季節限定包裝款</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="package_design-block">
                                    <h4>02</h4>
                                    <div className="package_design-word">
                                        <h5>質感禮盒設計</h5>
                                        <ul>
                                            <li>節慶行銷檔期禮盒</li>
                                            <li>提袋、一般禮盒包裝設計</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                variants={fadeIn('left', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="package_design-img"
                            >
                                <img src={packageDesignImg} alt="" />
                            </motion.div>
                        </div>
                        {/*  社群圖文設計  */}
                        <div className="social_design">
                            <div className="social_design-des">
                                <h2>社群圖文設計</h2>
                                <h3>藝術視覺排版｜商品美學化</h3>
                                <img src={socialDesignDesImg} alt="" />
                            </div>
                            <div className="social_design-img">
                                <img src={socialDesignImg} alt="" />
                            </div>
                        </div>
                        {/*  Olympics Day 2024  */}
                        <div className='project-block'>
                            <motion.div
                                variants={fadeIn('right', 0.6)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='project-block_content'
                            >
                                <h2 className='project-block_title'>文創周邊商品開發</h2>
                                <h3>2024 Olympic Day</h3>
                                <p>為奧林匹克品牌形象注入年輕、活力元素，加入運動員的經典造型與動態展演，讓設計與奧運賽事更貼近民眾生活！</p>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('left', 0.4)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='project-block_img'
                            >
                                <img src={coverImg} alt="" />
                            </motion.div>
                        </div>
                        <h3 className='project-work_title'>商品設計圖</h3>
                        <motion.div
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className='project-work_display'
                        >
                            {/* image display input 3 in a line */}
                            <img src={olympic1} alt="" />
                            <img src={olympic2} alt="" />
                            <img src={olympic3} alt="" />
                            <img src={olympic4} alt="" />
                            <img src={olympic5} alt="" />
                            <img src={olympic6} alt="" />
                            <img src={olympic7} alt="" />
                            <img src={olympic8} alt="" />
                            <img src={olympic9} alt="" />
                            <img src={olympic10} alt="" />
                            <img src={olympic11} alt="" />
                            <img src={olympic12} alt="" />
                            <img src={olympic13} alt="" />
                            <img src={olympic14} alt="" />
                            <img src={olympic15} alt="" />
                        </motion.div>
                        {/* Ａrt Footer */}
                        <div className="art_footer">
                            <div className='art_footer-logo'>
                                <h2>讓Alcoholic專業團隊為您導入Ai廣告投放！</h2>
                                <img src={artFooterLOGO} alt="" />
                            </div>
                            <div className="art_footer-des">
                                <div className="art_footer-blocks">
                                    <div className="art_footer-block">
                                        <h3>品牌美學定位</h3>
                                        <p>為您的品牌注入藝術美學元素</p>
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>品牌角色設計</h3>
                                        <p>根據品牌個性打造專屬角色互動</p>
                                        
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>包裝禮盒藝術設計</h3>
                                        <p>季節限定款禮盒、商品包裝優化</p>
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>社群圖文設計</h3>
                                        <p>提升線上消費者觸及率、黏著度</p>
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>文創周邊商品開發</h3>
                                        <p>實體商品設計印製、結合線下行銷</p>
                                    </div>
                                </div>
                                <div className="art_footer-image">
                                    <img src={artFooterImg} alt="" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    ) : (
            // English Version 
            <section className="project-1">
                <div className="container">
                    <div className="project1-content">
                        {/* Project 1 Header */}
                        <div className='porject1_header'>
                            <h1 className='project-1_title'>Comprehensive Art Integration</h1>
                            <p className='project-1_des'>
                                Inject art elements into your brand, physical and online storefronts,
                                product lines, and social media platforms to create a unique blend of
                                online and offline, tangible and virtual aesthetics, elevating consumers'
                                sensory experiences.
                            </p>
                            <h3>New Marketing Trend</h3>
                        </div>
                        {/* 美感行銷趨勢 */}
                        <motion.div
                                variants={fadeIn('up', 0.2)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="sense_marketing"
                            >
                            <div className="sense_marketing-des">
                                <h2>Aesthetic Marketing Trend</h2>
                                <h3>Why Sense Marketing?</h3>
                                <p>
                                After opening Facebook, one is bombarded with various marketing promotions. Which one can catch the attention of customers the most? The answer: designs that leave a lasting impression and possess natural aesthetics, prompting customers to willingly engage with the brand. Start utilizing visual aesthetics now to build a new era advantage for your brand!                                </p>
                            </div>
                            <div className="sense_marketing-img">
                                <img src={senseMarketingImg} alt="" />
                            </div>
                        </motion.div>
                        {/* 品牌美學定位 */}
                        <div className="branding">
                            <div className="branding_mainImg">
                                <img src={brandingMainImg} alt="" />
                            </div>
                            <div className="branding_des">
                                <h2>Brand Aesthetic Positioning</h2>
                                <p>
                                    Visualize your concept.  <br />
                                    Design unique brand Aesthetic masterpiece.  <br />
                                    <strong>Brand PositioningＸCISＸBIS</strong> <br />
                                    Integrate brand strategy with conceptual art.  <br />
                                    Create loyal-to-brand aesthetics. <br />
                                </p>
                            </div>
                            <div className="brandimg_images">
                                <img className='brandimg_images-1' src={brandingImages1} alt="" />
                                <img className='brandimg_images-2' src={brandingImages2} alt="" />
                            </div>
                        </div>
                        {/* 品牌角色設計 */}
                        <div className="character_design">
                            <div
                                variants={fadeIn('down', 0.7)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="character_design-imagesup"
                            >
                                <img className='character_design-images1' src={characterDesign1} alt="" />
                                <img className='character_design-images2' src={characterDesign2} alt="" />
                                <img className='character_design-images3' src={characterDesign3} alt="" />
                            </div>
                            <div className="character_design-des">
                                <div className="character_design-title">
                                    <h2>Brand Character Design</h2>
                                    <h5>Have you ever thought about creating your character for a brand?</h5>
                                </div>
                                <p>Designing unique characters for brands and products, integrating brand personality and visual identity, infusing trends and exclusive art to elevate the brand and its products, capturing consumer attention!</p>
                            </div>
                            <div
                                variants={fadeIn('up', 0.5)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="character_design-imagesdown"
                            >
                                <img src={characterDesign4} alt="" />
                                <img className='character_design-images' src={characterDesign5} alt="" />
                                <img src={characterDesign6} alt="" />
                            </div>
                        </div>
                        {/* 包裝禮盒藝術設計 */}
                        <div className="package_design">
                            <div className="package_design-des">
                                <h2>Design for Packaging</h2>
                                <h3>Premium Coffee Product Packaging Design</h3>
                                <div className="package_design-block">
                                    <h4>01</h4>
                                    <div className="package_design-word">
                                        <h5>Product Line Packaging</h5>
                                        <ul>
                                            <li>Optimization of Conventional Product Packaging</li>
                                            <li>Seasonal Limited Edition Packaging</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="package_design-block">
                                    <h4>02</h4>
                                    <div className="package_design-word">
                                        <h5>Textured Gift Box Design</h5>
                                        <ul>
                                            <li>Festive Season Marketing Campaign Gift Boxes</li>
                                            <li>Design for Tote Bags and Standard Gift Boxes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                variants={fadeIn('left', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="package_design-img"
                            >
                                <img src={packageDesignImg} alt="" />
                            </motion.div>
                        </div>
                        {/*  社群圖文設計  */}
                        <div className="social_design">
                            <div className="social_design-des">
                                <h2>Social Media Graphic Design</h2>
                                <h3>Artistic Visual Layout | Product Aestheticization</h3>
                                    <img src={socialDesignDesImg} alt="" />
                            </div>
                            <div className="social_design-img">
                                <img src={socialDesignImg} alt="" />
                            </div>
                        </div>
                        {/*  Olympics Day 2024  */}
                        <div className='project-block'>
                            <motion.div
                                variants={fadeIn('right', 0.6)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='project-block_content'
                            >
                                <h2 className='project-block_title'>Design your Merchandise</h2>
                                <h3>2024 Olympic Day</h3>
                                <p>
                                        Injecting youthfulness and vitality into the Olympic branding
                                        with athlete motifs and dynamic performances, making
                                        it more accessible to the public!
                                    </p>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('left', 0.4)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='project-block_img'
                            >
                                <img src={coverImg} alt="" />
                            </motion.div>
                        </div>
                        <h3 className='project-work_title'>Product Design</h3>
                        <motion.div
                            variants={fadeIn('up', 0.2)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className='project-work_display'
                        >
                            {/* image display input 3 in a line */}
                            <img src={olympic1} alt="" />
                            <img src={olympic2} alt="" />
                            <img src={olympic3} alt="" />
                            <img src={olympic4} alt="" />
                            <img src={olympic5} alt="" />
                            <img src={olympic6} alt="" />
                            <img src={olympic7} alt="" />
                            <img src={olympic8} alt="" />
                            <img src={olympic9} alt="" />
                            <img src={olympic10} alt="" />
                            <img src={olympic11} alt="" />
                            <img src={olympic12} alt="" />
                            <img src={olympic13} alt="" />
                            <img src={olympic14} alt="" />
                            <img src={olympic15} alt="" />
                        </motion.div>
                        {/* Ａrt Footer */}
                        <div className="art_footer">
                            <div className='art_footer-logo'>
                                <h2>Alcoholic guide you through AI advertising!</h2>
                                <img src={artFooterLOGO} alt="" />
                            </div>
                            <div className="art_footer-des">
                                <div className="art_footer-blocks">
                                    <div className="art_footer-block">
                                        <h3>Brand Aesthetic</h3>
                                        <p>Artistic Aesthetic into Your Brand</p>
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>Brand Character</h3>
                                        <p>Character Interactions Based on Brand Personality</p>
                                        
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>Package & Gift Box</h3>
                                        <p>Seasonal Limited Edition Gift Box, Optimized Product Packaging</p>
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>Social Media Design</h3>
                                        <p>Increase Online Consumer Engagement and Retention</p>
                                    </div>
                                    <div className="art_footer-block">
                                        <h3>Merchandise Design</h3>
                                        <p>Physical Product Design and Integration with Offline Marketing</p>
                                    </div>
                                </div>
                                    <div className="art_footer-image">
                                        <img src={artFooterImg} alt="" />
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
            </section>
        )
}

export default Project1Content
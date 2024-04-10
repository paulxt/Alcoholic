import React, {useState} from 'react';
import '../../styles/aboutpage.css';

import aboutHistory1 from '../../images/about-history-1.jpg';
import aboutHistory2 from '../../images/about-history-2.jpg';
import aboutHistory3 from '../../images/about-history-3.jpg';
import aboutHistory4 from '../../images/about-history-4.jpg';

import reachingImg from '../../images/reaching-image.jpg';
import reachingDesImg from '../../images/reaching-des-image.jpg';

import servicePlanBlockImg1 from '../../images/3service-block-image1.png';
import servicePlanBlockImg2 from '../../images/3service-block-image2.gif';
import servicePlanBlockImg3 from '../../images/3service-block-image3.gif';

import japaneseTeamImg from '../../images/japanese-team-image.jpg';

import japaneseTeamLogo1 from '../../images/japanese_team-icon1.jpg';
import japaneseTeamLogo2 from '../../images/japanese_team-icon2.webp';
import japaneseTeamLogo3 from '../../images/japanese_team-icon3.png';
import japaneseTeamLogo4 from '../../images/japanese_team-icon4.jpg';
import japaneseTeamLogo5 from '../../images/japanese_team-icon5.png';


//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const aboutExperience = [
    {
        title: '品牌專案企劃',
        item1: '企業概況分析',
        item2: '品牌定位報告',
        item3: '行銷策略企劃',
    },
    {
        title: 'SEO策略企劃',
        item1: 'SEO關鍵字',
        item2: '內容文章撰寫',
        item3: 'SEO技術操作',
    },
    {
        title: '影片剪輯企劃',
        item1: '長短影音企劃',
        item2: '影音拍攝剪輯',
        item3: 'YT經營上架',
    },
    {
        title: '專人社群經營',
        item1: 'FB/IG內容發想',
        item2: 'GOOGLE地圖商家',
        item3: '家管理經營',
    },
    {
        title: '文案管理師',
        item1: '網頁社群文案優化撰寫',
        item2: '線下製作物廣告文宣企劃',
    },
    {
        title: '網頁設計技師',
        item1: '網頁UIUX優化',
        item2: '軟體技術排解',
        item3: '官網架設更新',
    },
    {
        title: '廣告數據投放',
        item1: 'Ai廣告工具建立',
        item2: '數據分析報告',
        item3: 'Ai投廣設定操作',
    },
    {
        title: '顧客關係管理',
        item1: 'LINA OA 管理',
        item2: '自動回覆設定',
        item3: 'APP內建圖文設定優化',
    },
]

const aboutExperienceEN = [
    {
        title: 'Brand Project',
        item1: 'Business Overview',
        item2: 'Brand Positioning',
        item3: 'Marketing Strategy',
    },
    {
        title: 'SEO Strategy',
        item1: 'SEO Keyword',
        item2: 'Content Articles',
        item3: 'SEO Operation',
    },
    {
        title: 'Video Editing',
        item1: 'Video Planning',
        item2: 'Shooting & Editing',
        item3: 'YT management',
    },
    {
        title: 'Social Media',
        item1: 'FB/IG Content',
        item2: 'GOOGLE Map Merchant',
    },
    {
        title: 'Copywriting Manager',
        item1: 'Copywriting Optimize',
        item2: 'Offline Advertising Promotion',
    },
    {
        title: 'Website Design',
        item1: 'UI | UX',
        item2: 'Software Tech',
        item3: 'Website Setup & Updates',
    },
    {
        title: 'Ad Deployment',
        item1: 'Ad Tools Setup',
        item2: 'Analysis Report',
        item3: 'Ai system setting',
    },
    {
        title: 'CRM',
        item1: 'LINA OA',
        item2: 'Automatically reply',
        item3: 'APP Built-in Optimization',
    },
]

const AboutContent = ({ theme, language }) => {
    return language === 'Chinese'? (
        <section className="about_page">
            <div className="container">
                <div className="about_page-content">
                    {/* About Header */}
                    <div className="aboutp_header">
                        <div className='aboutp_header-1'>
                                <h2 className='aboutp_header-1-left'>
                                    About<br />
                                    Alcoholic
                                </h2>
                                <h2 className='aboutp_header-1-right'>
                                    關於玖漾<br />
                                    株式會社
                                </h2>
                        </div>
                        <div className="aboutp_header-des">
                            <h2>Alcoholic </h2>
                            <p>
                                微醺的狀態｜一種介於半夢半醒的精神時刻 <br />
                                正是我們希望為品牌打造的美學體驗 <br />
                                沈浸式美感行銷心法、讓品牌走進消費者的印象 <br />
                                創造獨一無二的質感氛圍 <br />
                                提升品牌價值與亮點優勢 
                            </p>
                        </div>
                        <div className="aboutp_header-2">
                            <h2>頂尖日本藝術團隊</h2>
                            <h2>國際專業行銷科技顧問</h2>
                            <h2>為品牌顧客打造非凡藝術饗</h2>
                        </div>
                    </div>
                    {/* 玖漾發展歷程 */}
                    <div className="history">
                        <h2 className='history-title'>玖漾發展歷程</h2>
                        <div className="history-blocks">
                            <motion.div
                                variants={fadeIn('down', 0.2)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="history-block"
                            >
                                <img src={aboutHistory1} alt="" />
                                <h3>創新創始階段</h3>
                                <p>
                                    藝術行銷團隊籌組 <br/>
                                    打造優質策略服務
                                </p>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="history-block"
                            >
                                <img src={aboutHistory2} alt="" />
                                <h3>累積團隊實績</h3>
                                <p>
                                    為品牌客戶量身定制 <br/>
                                    客製化美感行銷優化方案
                                </p>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('down', 0.2)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="history-block"
                            >
                                <img src={aboutHistory3} alt="" />
                                <h3>拓展全球業務</h3>
                                <p>
                                    開發亞太區市場 <br/>
                                    讓品牌走上國際級舞台
                                </p>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="history-block"
                            >
                                <img src={aboutHistory4} alt="" />
                                <h3>未來與展望</h3>
                                <p>
                                    開發行銷科技工具 <br/>
                                    立足Ai人工智慧新世代
                                </p>
                            </motion.div>
                        </div>
                        <ul className='line-container'>
                            <li className='line-link'></li>
                            <li className='line-link'></li>
                            <li className='line-link'></li>
                            <li className='line-link'></li>
                            <li className='line-link'></li>
                        </ul>
                    </div>
                    {/* Reaching people across the globe */}
                    <div className="reaching">
                        <div className="reaching-des">
                            <h2>Reaching people across the globe</h2>
                            <img src={reachingDesImg} alt="" />
                        </div>
                        <div className="reaching-img">
                            <img src={reachingImg} alt="" />
                        </div>
                    </div>
                    {/* 三大服務方案｜優化顧客接觸旅程 */}
                    <div className="service_plan">
                        <h2>三大服務方案｜優化顧客接觸旅程</h2>
                        <div className="service_plan-blocks">
                            <div className="service_plan-block">
                                <img src={servicePlanBlockImg1} alt="" />
                                <h3>全方位藝術整合設計</h3>
                                <p>
                                    Comprehensive Art Integration Design
                                </p>
                            </div>
                            <div className="service_plan-block service_plan-middle-block">
                                <img src={servicePlanBlockImg2} alt="" />
                                <h3>品牌行銷社群內容經營</h3>
                                <p>
                                    Brand Marketing  <br />
                                    Community Content Management
                                </p>
                            </div>
                            <div className="service_plan-block">
                                <img src={servicePlanBlockImg3} alt="" />
                                <h3>Ai廣告投放數據優化</h3>
                                <p>
                                    AI Advertising Campaign <br />
                                    Data Optimization
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 日本頂尖藝術團隊 */}
                    <div className="japanese_team">
                        <img src={japaneseTeamImg} alt="" />
                        <div className="japanese_team-des">
                            <h2>日本頂尖藝術團隊</h2>
                            <div className="japanese_team-block">
                                <h3>美學團隊來自日本第一藝術學院</h3>
                                <p>純熟、精粹の設計匠人精神</p>
                            </div>
                            <div className="japanese_team-block">
                                <h3>掌握亞太區流行趨勢</h3>
                                <p>品牌脫穎而出必要資訊</p>
                            </div>
                            <div className="japanese_team-block">
                                <h3>質感獨特設計靈感</h3>
                                <p>吸睛內容行銷獨佔顧客の心</p>
                            </div>
                            <div className="japanese_team-logos">
                                <img className='japaneseTeamLogo1' src={japaneseTeamLogo1} alt="" />
                                <img className='japaneseTeamLogo2' src={japaneseTeamLogo2} alt="" />
                                <img className='japaneseTeamLogo3' src={japaneseTeamLogo3} alt="" />
                                <img className='japaneseTeamLogo4' src={japaneseTeamLogo4} alt="" />
                                <img className='japaneseTeamLogo5' src={japaneseTeamLogo5} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* 豐富經驗｜行銷專案團隊量身定做 */}
                    <div className="about_experience">
                        <h2>豐富經驗｜行銷專案團隊量身定做</h2>
                        <div className="about_experience-blocks">
                            {
                                aboutExperience.map(( item, index ) => (
                                    <div className="about_experience-block" key={index}>
                                        <h3>{item.title}</h3>
                                        <ul>
                                            <li>{item.item1}</li>
                                            <li>{item.item2}</li>
                                            {item.item3? (<li>{item.item3}</li>) : null}
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
            <section className="about_page">
                <div className="container">
                    <div className="about_page-content">
                        {/* About Header */}
                        <div className="aboutp_header">
                            <div className='aboutp_header-1'>
                                    <h2 className='aboutp_header-1-left'>
                                        About<br />
                                        Alcoholic
                                    </h2>
                                    <h2 className='aboutp_header-1-right'>
                                        關於玖漾<br />
                                        株式會社
                                    </h2>
                            </div>
                            <div className="aboutp_header-des">
                                <h2>Alcoholic </h2>
                                <p>
                                    Tipsy State｜A Moment between Dreaming and Awake <br />
                                    This is exactly the Aesthetic we strive to achieve for our Client. <br />
                                    The Art of immersive Aesthetic, allowing the Brand to consumer's impression. <br />
                                    Creating a unique and unparalleled ambiance. <br />
                                    Elevating Brand Value and Highlighting Key Advantages.
                                </p>
                            </div>
                            <div className="aboutp_header-2">
                                <h2>Top-tier Japanese Art Team.</h2>
                                <h2>Professional Marketing Consultant.</h2>
                                <h2>Extraordinary Artistic Delights for Brands.</h2>
                            </div>
                        </div>
                        {/* 玖漾發展歷程 */}
                        <div className="history">
                            <h2 className='history-title'>Alcoholic Development Journey</h2>
                            <div className="history-blocks">
                                <motion.div
                                    variants={fadeIn('down', 0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="history-block"
                                >
                                    <img src={aboutHistory1} alt="" />
                                    <h3>Innovation</h3>
                                    <p>
                                        Forming Art Team <br/>
                                        High-quality Strategic Services
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('up', 0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="history-block"
                                >
                                    <img src={aboutHistory2} alt="" />
                                    <h3>Accumulation</h3>
                                    <p>
                                        Aesthetic Marketing <br/>
                                        Solutions for Brand Clients.
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('down', 0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="history-block"
                                >
                                    <img src={aboutHistory3} alt="" />
                                    <h3>Global Business</h3>
                                    <p>
                                        Expand into Asia-Pacific  <br/>
                                        Market to propel the brand onto the International Stage.
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('up', 0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="history-block"
                                >
                                    <img src={aboutHistory4} alt="" />
                                    <h3>Future Prospects</h3>
                                    <p>
                                        Develop Marketing Tech <br/>
                                        to keep up with the World.
                                    </p>
                                </motion.div>
                            </div>
                            <ul className='line-container'>
                                <li className='line-link'></li>
                                <li className='line-link'></li>
                                <li className='line-link'></li>
                                <li className='line-link'></li>
                                <li className='line-link'></li>
                            </ul>
                        </div>
                        {/* Reaching people across the globe */}
                        <div className="reaching">
                            <div className="reaching-des">
                                <h2>Reaching people across the globe</h2>
                                <img src={reachingDesImg} alt="" />
                            </div>
                            <div className="reaching-img">
                                <img src={reachingImg} alt="" />
                            </div>
                        </div>
                        {/* 三大服務方案｜優化顧客接觸旅程 */}
                        <div className="service_plan">
                            <h2>Three Major Services for Optimizizing</h2>
                            <div className="service_plan-blocks">
                                <div className="service_plan-block">
                                    <img src={servicePlanBlockImg1} alt="" />
                                    <h3>Comprehensive Art Design</h3>
                                    <p>
                                        Comprehensive Art Integration Design
                                    </p>
                                </div>
                                <div className="service_plan-block service_plan-middle-block">
                                    <img src={servicePlanBlockImg2} alt="" />
                                    <h3>Brand Community & Content</h3>
                                    <p>
                                        Brand Marketing  <br />
                                        Community Content Management
                                    </p>
                                </div>
                                <div className="service_plan-block">
                                    <img src={servicePlanBlockImg3} alt="" />
                                    <h3>Ad System with AI</h3>
                                    <p>
                                        AI Advertising Campaign <br />
                                        Data Optimization
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* 日本頂尖藝術團隊 */}
                        <div className="japanese_team">
                            <img src={japaneseTeamImg} alt="" />
                            <div className="japanese_team-des">
                                <h2>Top Art Team from Japan</h2>
                                <div className="japanese_team-block">
                                    <h3>Aesthetic Team from Premier Academy in Japan.</h3>
                                    <p>The Spirit of Skilled and Refined Craftsmanship.</p>
                                </div>
                                <div className="japanese_team-block">
                                    <h3>Catching the Trends with the World.</h3>
                                    <p>Essential information for standing out as a Brand.</p>
                                </div>
                                <div className="japanese_team-block">
                                    <h3>Unique Design Inspiration</h3>
                                    <p>Eye-Catching Content Captures the Hearts of Customers.</p>
                                </div>
                                <div className="japanese_team-logos">
                                    <img className='japaneseTeamLogo1' src={japaneseTeamLogo1} alt="" />
                                    <img className='japaneseTeamLogo2' src={japaneseTeamLogo2} alt="" />
                                    <img className='japaneseTeamLogo3' src={japaneseTeamLogo3} alt="" />
                                    <img className='japaneseTeamLogo4' src={japaneseTeamLogo4} alt="" />
                                    <img className='japaneseTeamLogo5' src={japaneseTeamLogo5} alt="" />
                                </div>
                            </div>
                        </div>
                        {/* 豐富經驗｜行銷專案團隊量身定做 */}
                        <div className="about_experience">
                            <h2>Rich Experiences｜Customized Strategy</h2>
                            <div className="about_experience-blocks">
                                {
                                    aboutExperienceEN.map(( item, index ) => (
                                        <div className="about_experience-block" key={index}>
                                            <h3>{item.title}</h3>
                                            <ul>
                                                <li>{item.item1}</li>
                                                <li>{item.item2}</li>
                                                {item.item3? (<li>{item.item3}</li>) : null}
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default AboutContent
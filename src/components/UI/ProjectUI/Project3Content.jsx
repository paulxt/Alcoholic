import React from 'react'
import '../../../styles/project3.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ProjectHeader from '../UI/ProjectHeader';

import adIntroImg from '../../../images/ad_intro-img.png';

import adImg1 from '../../../images/adImg-1.png';
import adImg2 from '../../../images/adImg-2.png';
import adImg3 from '../../../images/adImg-3.png';

import cross from '../../../images/cross.png';
import wheel from '../../../images/wheel.gif';

import adTrackImg from '../../../images/ad_track-image.png';
import metaImg from '../../../images/meta-image.png';
import gaImg from '../../../images/ga-image.png';
import mixpanelImg from '../../../images/mixpanel-image.png';
import searchConsoleImg from '../../../images/search-console-image.png';

import socailFooterImg from '../../../images/social_footer-image.png';


//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Project3Content = ({theme, language}) => {
    return language === 'Chinese' ? (
        // Chinese Version
            <section className="project-3 pt-5">
                <div className="container">
                    <div className="project3-content">
                        {/*----- 數據優化｜AI廣告投放 ---- */}
                        <div className="project3-header">
                            <h1>數據優化｜AI廣告投放</h1>
                            <p>
                                AI精準鎖定潛在客群、消費者進行廣告投放，判定素材品質效果，幫助您優 <br/>
                                化素材再行銷、掌握轉換率與訂單數！
                            </p>
                            <h3>廣告成效最大化</h3>
                        </div>
                        {/*----- 自有AI廣告投放系統！ ---- */}
                        <div className="ad_intro">
                            <motion.div
                                variants={fadeIn('right', 0.7)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="ad_intro-des"
                            >
                                <h2>自有AI廣告投放系統！</h2>
                                <ul>
                                    <li>最新行銷趨勢與科技</li>
                                    <li>將廣告預算的價值發揮到最大</li>
                                    <li>精準掌握受眾與轉換率</li>
                                    <li>數位時代必備行銷科技</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                variants={fadeIn('left', 0.5)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="ad_intro-img"
                            >
                                <img src={adIntroImg} alt="" />
                            </motion.div>
                        </div>
                        {/*----- 傳統廣告投放 VS AI廣告投放 ---- */}
                        <div className="ad_compare">
                            <h2>傳統廣告投放 VS AI廣告投放</h2>
                            <motion.table
                                variants={fadeIn('down', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                <thead>
                                    <tr>
                                        <th>傳統廣告投放</th>
                                        <th>Ai廣告投放</th>
                                    </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='ad_compare-group1'><img src={cross} alt="" />人工抓取受眾不精確</td>
                                        <td className='ad_compare-group2'><img src={wheel} alt="" />Ai精準掌握有效受眾</td>
                                    </tr>
                                    <tr>
                                        <td className='ad_compare-group1'><img src={cross} alt="" />廣告預算無法發揮最大效益</td>
                                        <td className='ad_compare-group2'><img src={wheel} alt="" />降低您的廣告成本</td>
                                    </tr>
                                    <tr>
                                        <td className='ad_compare-group1'><img src={cross} alt="" />數據分析需自行整理歸納</td>
                                        <td className='ad_compare-group2'><img src={wheel} alt="" />高效率完整數據分析</td>
                                    </tr>
                                    <tr>
                                        <td className='ad_compare-group1'><img src={cross} alt="" />無法判定素材優良與否</td>
                                        <td className='ad_compare-group2'><img src={wheel} alt="" />依照受眾口味優換素材</td>
                                    </tr>
                                    <tr>
                                        <td className='ad_compare-group1'><img src={cross} alt="" />轉換率、成效難以計算</td>
                                        <td className='ad_compare-group2'><img src={wheel} alt="" />清楚歸納廣告成效與訂單數</td>
                                    </tr>
                                </tbody>
                                
                            </motion.table>
                        </div>
                        {/*----- 提供全方位完整數據 ---- */}
                        <div className="ad_data">
                            <h2>提供全方位完整數據</h2>
                            <motion.div
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="ad_data-images"
                            >
                                <div className="ad_data-image">
                                    <img src={adImg1} alt="" />
                                </div>
                                <div className="ad_data-image">
                                    <img src={adImg2} alt="" />
                                </div>
                                <div className="ad_data-image">
                                    <img src={adImg3} alt="" />
                                </div>
                            </motion.div>
                            <h2>優化素材、自動找尋適合受眾再行銷！</h2>
                        </div>
                        {/*----- 網路行銷數據追蹤 ---- */}
                        <div className="ad_track">
                            <h2>網路行銷數據追蹤</h2>
                            <div className="ad_track-content">
                                <div className="ad_track-img">
                                    <img src={adTrackImg} alt="" />
                                </div>
                                <div className="ad_track-des">
                                    <div className="ad_track-icons">
                                        <img src={metaImg} alt="" />
                                        <img src={gaImg} alt="" />
                                        <img src={mixpanelImg} alt="" />
                                        <img src={searchConsoleImg} alt="" />
                                    </div>
                                    <p>
                                    專業背景團隊操作<strong>分析數據</strong> <br />
                                    清楚完整掌握你的<strong>品牌優勢</strong>與弱點 <br />
                                    定期<strong>數據匯報分析</strong>，科技加乘提升成效！
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        {/*----- 讓Alcoholic專業團隊為您導入Ai廣告投放！ ---- */}
                        <div className="ad_footer">
                            <div className='ad_footer-logo'>
                                <h2>讓Alcoholic專業團隊為您導入Ai廣告投放！</h2>
                                <img src={socailFooterImg} alt="" />
                            </div>
                            <div className="ad_footer-des">
                                <div className="ad_footer-block">
                                    <h3>AI廣告投放優化系統｜數位廣告投放工具</h3>
                                    <p>降低廣告成本、成效最大化，迎接全新數位時代！</p>
                                </div>
                                <div className="ad_footer-block">
                                    <h3>全方位數據分析｜官網社群會員管理完整紀錄</h3>
                                    <p>綜合各大數據分析行銷科技，完整掌握企業行銷成效</p>
                                    
                                </div>
                                <div className="ad_footer-block">
                                    <h3>定期追蹤數據報告｜調整策略定位再行銷</h3>
                                    <p>建置全面定期數據追蹤分析報告、成為企業成長最佳夥伴</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    ) : (
            // English Version
                <section className="project-3 pt-5">
                    <div className="container">
                        <div className="project3-content">
                            {/*----- 數據優化｜AI廣告投放 ---- */}
                            <div className="project3-header">
                                <h1>Data Optimization｜AI ad Deployment</h1>
                                <p>
                                    AI-Powered Precise Targeting of Potential Customer Segments,
                                    Material Quality and Effectiveness Assessment, Assisting in
                                    Material Retargeting Optimization, and Monitoring Conversion
                                    Rates and Order Numbers!
                                </p>
                                <h3>Maximum Ad Effect</h3>
                            </div>
                            {/*----- 自有AI廣告投放系統！ ---- */}
                            <div className="ad_intro">
                                <motion.div
                                    variants={fadeIn('right', 0.7)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="ad_intro-des"
                                >
                                    <h2>AI Advertise System！</h2>
                                    <ul>
                                        <li>Newest Marketing Trend & Tech</li>
                                        <li>Maximize the Value of Ad</li>
                                        <li>Precisely Audience Conversion</li>
                                        <li>Digital Marketing Essential Tech</li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    variants={fadeIn('left', 0.5)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="ad_intro-img"
                                >
                                    <img src={adIntroImg} alt="" />
                                </motion.div>
                            </div>
                            {/*----- 傳統廣告投放 VS AI廣告投放 ---- */}
                            <div className="ad_compare">
                                <h2>Traditional Ad Deployment VS AI Ad Deployment</h2>
                                <motion.table
                                    variants={fadeIn('down', 0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                >
                                    <thead>
                                        <tr>
                                            <th>Traditional</th>
                                            <th>AI</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='ad_compare-group1'><img src={cross} alt="" />Manual Audience Capture Is Inaccurate</td>
                                            <td className='ad_compare-group2'><img src={wheel} alt="" />AI Precisely Captures Effective Audiences</td>
                                        </tr>
                                        <tr>
                                            <td className='ad_compare-group1'><img src={cross} alt="" />Budget Not Maximizing Potential</td>
                                            <td className='ad_compare-group2'><img src={wheel} alt="" />Lowering Your Advertising Costs</td>
                                        </tr>
                                        <tr>
                                            <td className='ad_compare-group1'><img src={cross} alt="" />Data Requires Self-Organization</td>
                                            <td className='ad_compare-group2'><img src={wheel} alt="" />Efficient and Comprehensive Data Analysis</td>
                                        </tr>
                                        <tr>
                                            <td className='ad_compare-group1'><img src={cross} alt="" />Unable to Determine Material Quality</td>
                                            <td className='ad_compare-group2'><img src={wheel} alt="" />Materials According to Audience Preferences</td>
                                        </tr>
                                        <tr>
                                            <td className='ad_compare-group1'><img src={cross} alt="" />Difficulty in Calculate Conversion and Effect</td>
                                            <td className='ad_compare-group2'><img src={wheel} alt="" />Clearly Summarizing Effectiveness and Orders</td>
                                        </tr>
                                    </tbody>
                                    
                                </motion.table>
                            </div>
                            {/*----- 提供全方位完整數據 ---- */}
                            <div className="ad_data">
                                <h2>Comprehensive Data Analysis</h2>
                                <div className="ad_data-images">
                                    <div className="ad_data-image">
                                        <img src={adImg1} alt="" />
                                    </div>
                                    <div className="ad_data-image">
                                        <img src={adImg2} alt="" />
                                    </div>
                                    <div className="ad_data-image">
                                        <img src={adImg3} alt="" />
                                    </div>
                                </div>
                                <h2>Optimizing Materials, Automatically Find and Retarget!</h2>
                            </div>
                            {/*----- 網路行銷數據追蹤 ---- */}
                            <div className="ad_track">
                                <h2>Marketing Digitalization</h2>
                                <div className="ad_track-content">
                                    <div
                                        variants={fadeIn('up', 0.3)}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="ad_track-img"
                                    >
                                        <img src={adTrackImg} alt="" />
                                    </div>
                                    <div className="ad_track-des">
                                        <div className="ad_track-icons">
                                            <img src={metaImg} alt="" />
                                            <img src={gaImg} alt="" />
                                            <img src={mixpanelImg} alt="" />
                                            <img src={searchConsoleImg} alt="" />
                                        </div>
                                        <p>
                                        Professional Team Operate<strong>Data Analysis</strong> <br />
                                        Clearly Mastering your <strong>Brand's Strength</strong> & Weakness <br />
                                        Regularly <strong>Data Analysis Report</strong>, Technology to Boost Efficiency!
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            {/*----- 讓Alcoholic專業團隊為您導入Ai廣告投放！ ---- */}
                            <div className="ad_footer">
                                <div className='ad_footer-logo'>
                                    <h2>Alcoholic guide you through AI advertising deployment!</h2>
                                    <img src={socailFooterImg} alt="" />
                                </div>
                                <div className="ad_footer-des">
                                    <div className="ad_footer-block">
                                        <h3>Ad optimization system with AI｜Digial Ad Tools</h3>
                                        <p>Decrease Advertising Cost, Maximize Effectiveness</p>
                                    </div>
                                    <div className="ad_footer-block">
                                        <h3>Comprehensive Data Analysis｜Customer Relationship</h3>
                                        <p>Integrating Major Data Analysis Marketing Technologies to Fully Grasp Enterprise Marketing Effectiveness.</p>
                                        
                                    </div>
                                    <div className="ad_footer-block">
                                        <h3>Data Tracking Report｜Adjust Strategy & Retarget</h3>
                                        <p>Establishing Comprehensive Regular Data Tracking and Analysis Reports, Becoming the Best Partner for Business Growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
}

export default Project3Content
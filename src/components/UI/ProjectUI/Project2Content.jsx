import React from 'react'

import '../../../styles/project2.css';

// import ProjectHeader from '../UI/ProjectHeader';

import socialPartImg from '../../../images/social-part_img.png';
import lineLOGO from '../../../images/line_logo.svg.png';
import googleMap from '../../../images/google-map.png';

import forumImg from '../../../images/forumImg.png';
import dcardImg from '../../../images/dcardImg.png';

import caseImg from '../../../images/caseImg.gif';

import socialExpImg from '../../../images/social_experience-image.png';
import winwinImg from '../../../images/winwinImg.jpg';

import socailFooterImg from '../../../images/social_footer-image.png';


//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Project2Content = ({theme, language}) => {
    return language === 'Chinese' ? (
        // Chinese Version
        <>
            <section className="project-2">
                <div className="container">
                    <div className="project2-content">
                        {/*----- 網頁社群｜內容經營優化 ---- */}
                        <div className='project-2_beginner project2-block'>
                            <h1 className='project-2_title'>
                                網頁社群｜內容經營優化
                            </h1>
                            <p className='project-2_des'>
                                深耕各大產業多年的社群經營心法，專業團隊分析企業經營概況，
                                制定網路行銷策略、以及社群經營，打造強大的素人口碑。結合定
                                期數據追蹤分析報告，打造絕佳網路行銷成效。
                            </p>
                            <div className='project-2_word'>
                                <h3>全新整合網路行銷</h3>
                            </div>
                        </div>
                        
                        {/*----- FB x IG社群 ---- */}
                        <div className="social-part project2-block">
                            <motion.div
                                variants={fadeIn('right', 0.4)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='social-part_img'
                            >
                                <img src={socialPartImg} alt="" />
                            </motion.div>
                            <motion.div
                                variants={fadeIn('left', 0.5)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='social-part_des'
                            >
                                <h3>FB X IG 社群專業營運</h3>
                                <div className='social-part_ul'>
                                    <ul>
                                        <li><i class="ri-checkbox-circle-fill"></i> 雙向溝通互動</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 社群整合與導購</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 品牌定位社群TA</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 品牌視覺化排版</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 結合時事話題</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 即時影音年輕化</li>
                                    </ul>
                                </div>
                                <div className="social-part_icon">
                                    <i class="ri-facebook-box-fill"></i>
                                    <i class="ri-instagram-fill"></i>
                                    <i class="ri-threads-line"></i>
                                </div>
                            </motion.div>
                        </div>
                        
                        {/*----- 全方位企業平臺優化 ---- */}
                        <div className="crm-part">
                            <h2 className='crm-part_title'>全方位企業平台優化</h2>
                            <div className="line_google">
                                <div className='line_google-block line'>
                                    <img src={lineLOGO} alt="" />
                                    <h3>官方 LINE 經營推播</h3>
                                    <ul>
                                        <li><i class="ri-checkbox-circle-fill"></i> 圖文訊息推播</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 商品輪播選單</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 自動個人化行銷</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 提升品牌黏著度</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 會員經營CRM</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 精準分眾群發</li>
                                    </ul>
                                </div>
                                <div className="line_google-block google">
                                    <img src={googleMap} alt="" />
                                    <h3>Google 地圖商家</h3>
                                    <ul>
                                        <li><i class="ri-checkbox-circle-fill"></i> 地圖關鍵字優化</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 更新動態活動</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 提高搜尋曝光度</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 創造五星好評</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 完善商家資訊</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> 顧客互動管道</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="forum">
                                <div className="forum_image">
                                    <img src={forumImg} alt="" />
                                </div>
                                <div className="forum_content">
                                    <h3>鎖定國內各大論壇  X  專人建立品牌口碑</h3>
                                    <div className='dcard_image'>
                                        <img src={dcardImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*----- SEO關鍵字優化、豐富行銷內容 ---- */}
                        <div className="seo">
                            <div className='seo_header'>
                                <h2>SEO關鍵字優化、豐富內容行銷</h2>
                            </div>
                            <div className="seo_des">
                                <div className='seo_block'>
                                    <div className='block_up'>
                                        <p>全方位關鍵字策略</p>
                                    </div>
                                    <h2>品牌關鍵字</h2>
                                </div>
                                <div className='seo_block'>
                                    <div className='block_up'>
                                        <p>吸引顧客點擊網站閱覽</p>
                                    </div>
                                    <h2>SEO價值文章</h2>
                                </div>
                                <div className='seo_block'>
                                    <div className='block_up'>
                                        <p>優化及提升網站排名</p>
                                    </div>
                                    <h2>技術SEO操作</h2>
                                </div>

                            </div>
                        </div>
                        {/*----- 客戶實績成效案例 ---- */}
                        <div className="case_effect">
                            <div className="case_block case_des">
                                <h3>客戶實績成效案例</h3>
                                <h4>精品廚具品牌</h4>
                                <h2>單月27萬人次</h2>
                                <p>社群觸及流量與人數</p>
                            </div>
                            <div className="case_block case_img">
                                <img src={caseImg} alt="" />
                            </div>
                        </div>
                        {/*----- 官方網站優化設計 ---- */}
                        <div className="website">
                            <h2>官方網站優化設計</h2>
                            <div className='website_images'>
                                <div className="website_block website_block-1">
                                    <h3>吸睛排版設計</h3>
                                    <p>首頁品牌視覺</p>
                                </div>
                                <div className="website_block website_block-2">
                                    <h3>提升網站造訪率</h3>
                                    <p>精選文章內容建置</p>
                                </div>
                                <div className="website_block website_block-3">
                                    <h3>使用者體驗優化</h3>
                                    <p>互動式官網</p>
                                </div>
                            </div>
                        </div>
                        {/*----- 產業經驗豐富 ---- */}
                        <div className="socail-experience">
                            <h2>產業經驗豐富｜為您的品牌打造最佳客製化方案</h2>
                            <img src={socialExpImg} alt="" />
                        </div>
                        {/*----- 與客戶共創雙贏成效 ---- */}
                        <div className="win_win">
                            <h2>與客戶共創雙贏成效！</h2>
                            <div className="win_win-des">
                                <img src={winwinImg} alt="" />
                                <div className="win_win-word">
                                    <div className="win_win-block">
                                        <h3>日式伴手禮新創品牌</h3>
                                        <p>甫創立一年，單月營收<span className='red_word'>破百萬業績 </span> <br />
                                            企業大宗訂單、拓展實體通路成功打入伴手禮市場</p>
                                    </div>
                                    <div className="win_win-block">
                                        <h3>傳統食品伴手禮</h3>
                                        <p>實體店<span className='red_word'>人流量</span>有感提升 <br />
                                            串連實體在地連結與線上網路流量，<span className='red_word'>網路訂購業績翻倍</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*----- 讓 Alcoholic 專業團隊為您策劃網路行銷 ---- */}
                        <div className="social_footer">
                            <div className='social_footer-logo'>
                                <h2>讓Alcoholic專業團隊為您策劃網路行銷！</h2>
                                <img src={socailFooterImg} alt="" />
                            </div>
                            <div className="social_footer-des">
                                <div className="social_footer-block">
                                    <h3>社群粉絲專頁經營｜顧客關係管理</h3>
                                    <p>豐富品牌內容、加強粉絲顧客互動、個人化行銷口碑建立</p>
                                </div>
                                <div className="social_footer-block">
                                    <h3>SEO關鍵字操作｜官網內容經營</h3>
                                    <p>提升顧客造訪網站率、優化官網排名</p>
                                    
                                </div>
                                <div className="social_footer-block">
                                    <h3>網頁視覺設計｜優化使用者體驗</h3>
                                    <p>增強品牌一體性、打造顧客友善接觸平台</p>
                                </div>
                                <div className="social_footer-block">
                                    <h3>品牌形象影片｜短影音企劃剪輯</h3>
                                    <p>年輕多元化互動方式、產品體驗、品牌故事影像化</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    ) : (
            // English Version
            <section className="project-2">
                <div className="container">
                    <div className="project2-content">
                        {/*----- 網頁社群｜內容經營優化 ---- */}
                        <div className='project-2_beginner project2-block'>
                            <h1 className='project-2_title'>
                                Digital Community | Content Optimization
                            </h1>
                            <p className='project-2_des'>
                                    Cultivating years of experience in various
                                    industries, our philosophy emphasizes professional
                                    analysis. We tailor online marketing strategies to
                                    build robust grassroots endorsements.
                                    By integrating data tracking and analysis reports,
                                    we ensure excellent online marketing performance.
                            </p>
                            <div className='project-2_word'>
                                <h3>Integrated Marketing</h3>
                            </div>
                        </div>
                        {/*----- FB x IG社群 ---- */}
                        <div className="social-part project2-block">
                            <motion.div
                                variants={fadeIn('right', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='social-part_img'
                            >
                                <img src={socialPartImg} alt="" />
                            </motion.div>
                            <motion.div
                                variants={fadeIn('left', 0.5)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className='social-part_des'
                            >
                                <h3>FB X IG Operation</h3>
                                <div className='social-part_ul'>
                                    <ul>
                                        <li><i class="ri-checkbox-circle-fill"></i> Interaction</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Integration & CTA</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Brand Positioning</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Visualization</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Popular Topic</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Shorts & Reels</li>
                                    </ul>
                                </div>
                                <div className="social-part_icon">
                                    <i class="ri-facebook-box-fill"></i>
                                    <i class="ri-instagram-fill"></i>
                                    <i class="ri-threads-line"></i>
                                </div>
                            </motion.div>
                        </div>
                        {/*----- 全方位企業平臺優化 ---- */}
                        <div className="crm-part">
                            <h2 className='crm-part_title'>Comprehensive Platform Optimization</h2>
                            <div className="line_google">
                                <div className='line_google-block line'>
                                    <img src={lineLOGO} alt="" />
                                    <h3>LINE@ Operation</h3>
                                    <ul>
                                        <li><i class="ri-checkbox-circle-fill"></i> Broadcasting</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Card Messages</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Personalization</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Brand Loyalty</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> CRM</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Campaign</li>
                                    </ul>
                                </div>
                                <div className="line_google-block google">
                                    <img src={googleMap} alt="" />
                                    <h3>Google Merchant Center</h3>
                                    <ul>
                                        <li><i class="ri-checkbox-circle-fill"></i> Keyword Optimization</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Updating Activity</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Search Exposure</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Positive Riview</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Complete Merchant Info</li>
                                        <li><i class="ri-checkbox-circle-fill"></i> Customer Interaction</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="forum">
                                <div className="forum_image">
                                    <img src={forumImg} alt="" />
                                </div>
                                <div className="forum_content">
                                    <h3>Target Major Domestic Forums  |  Establish Brand Reputation</h3>
                                    <div className='dcard_image'>
                                        <img src={dcardImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*----- SEO關鍵字優化、豐富行銷內容 ---- */}
                        <div className="seo">
                            <div className='seo_header'>
                                <h2>SEO Optimization | Content Marketing</h2>
                            </div>
                            <div className="seo_des">
                                <div className='seo_block'>
                                    <div className='block_up'>
                                        <p>Comprehensive SEO Strategy</p>
                                    </div>
                                    <h2>Brand's Keyword</h2>
                                </div>
                                <div className='seo_block'>
                                    <div className='block_up'>
                                        <p>Appeal to Browse Website</p>
                                    </div>
                                    <h2>SEO Articles</h2>
                                </div>
                                <div className='seo_block'>
                                    <div className='block_up'>
                                        <p>Optimize to improve website ranking</p>
                                    </div>
                                    <h2>SEO Operation</h2>
                                </div>

                            </div>
                        </div>
                        {/*----- 客戶實績成效案例 ---- */}
                        <div className="case_effect">
                            <div className="case_block case_des">
                                <h3>Our Clients</h3>
                                <h4>Boutique Kitchenware Brand</h4>
                                <h2>27,000 Monthly Visitors</h2>
                                <p>Social Media Engagement Reach Audience</p>
                            </div>
                            <div className="case_block case_img">
                                <img src={caseImg} alt="" />
                            </div>
                        </div>
                        {/*----- 官方網站優化設計 ---- */}
                        <div className="website">
                            <h2>Optimize Official Website Design</h2>
                            <div className='website_images'>
                                <div className="website_block website_block-1">
                                    <h3>Eye-catching Layout Design</h3>
                                    <p>Homepage Visual</p>
                                </div>
                                <div className="website_block website_block-2">
                                    <h3>Increase Website Visitation</h3>
                                    <p>Featured Content</p>
                                </div>
                                <div className="website_block website_block-3">
                                    <h3>UI | UX</h3>
                                    <p>Interative Website</p>
                                </div>
                            </div>
                        </div>
                        {/*----- 產業經驗豐富 ---- */}
                        <div className="socail-experience">
                            <h2>Extensive Industry Experience｜Crafting the Optimal Customized Solution</h2>
                            <img src={socialExpImg} alt="" />
                        </div>
                        {/*----- 與客戶共創雙贏成效 ---- */}
                        <div className="win_win">
                            <h2>Creating Win-Win Results with Customers!</h2>
                            <div className="win_win-des">
                                <img src={winwinImg} alt="" />
                                <div className="win_win-word">
                                    <div className="win_win-block">
                                        <h3>Japanese Sourvenir Brand</h3>
                                        <p>Establish in one yeat, Revenue a month<span className='red_word'> Over 1 Million </span>! <br />
                                        Corporate Orders and Physical Retail Expanding successfully Penetrating the Souvenir Market</p>
                                    </div>
                                    <div className="win_win-block">
                                        <h3>Traditional Food Souvenirs</h3>
                                        <p>Physical Stores<span className='red_word'> Popularity </span>Noticeable Improvement <br />
                                        Connecting Local with Online web to make <span className='red_word'>Online Revenue Doubled</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*----- 讓 Alcoholic 專業團隊為您策劃網路行銷 ---- */}
                        <div className="social_footer">
                            <div className='social_footer-logo'>
                                <h2>Alcoholic Planning For Your Online Marketing！</h2>
                                <img src={socailFooterImg} alt="" />
                            </div>
                            <div className="social_footer-des">
                                <div className="social_footer-block">
                                    <h3>Social Media Fan Page Operation｜CRM</h3>
                                    <p>Rich Brand Content、Enhance Fan-Customer Interaction、Personalized Marketing for Reputation.</p>
                                </div>
                                <div className="social_footer-block">
                                    <h3>SEO Keyword Operation｜Blog </h3>
                                    <p>Increase Website Visitor, Optimize Website Ranking.</p>
                                    
                                </div>
                                <div className="social_footer-block">
                                    <h3>Website UI Design｜Optimize UX</h3>
                                    <p>Enhancing Brand Consistency and Building Customer-Friendly Platform.</p>
                                </div>
                                <div className="social_footer-block">
                                    <h3>Brand Image Video｜Short Video Production</h3>
                                    <p>Youthful and Diverse Interaction, Product Experiences, and Brand Story Visualization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default Project2Content
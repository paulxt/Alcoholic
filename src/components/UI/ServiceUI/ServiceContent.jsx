import React from 'react';

import '../../../styles/servicepage.css';

import serviceHeaderImg from '../../../images/service-header-image.jpg';
import artServiceImg from '../../../images/art-service-image.jpg';
import serviceProcess1 from '../../../images/service-process-1.jpg';
import serviceProcess2 from '../../../images/service-process-2.jpg';
import serviceProcess3 from '../../../images/service-process-3.jpg';
import serviceExploringImg from '../../../images/service-exploring.jpg';

import integratedService1 from '../../../images/integrated-service-1.jpg';
import integratedService2 from '../../../images/integrated-service-2.jpg';
import integratedService3 from '../../../images/integrated-service-3.jpg';
import integratedService4 from '../../../images/integrated-service-4.MP4';

import servicePlanImg from '../../../images/service-plan.jpg';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const ServiceContent = ({language}) => {
    return language === 'Chinese' ? (
        <section className="service_page">
            <div className="container">
                <div className="service_page-content">
                    {/* Service Page Header */}
                    <div className="service_page-header">
                        <motion.h1
                            variants={fadeIn('right', 0.5)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            現在就開始訂製您的藝術行銷專案
                        </motion.h1>
                        <motion.img
                            src={serviceHeaderImg} alt="" 
                            variants={fadeIn('left', 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        />
                    </div>
                    {/* Art Design Services */}
                    <div className="art_services">
                        <h1>藝術平面設計</h1>
                        <h3>
                            平面設計｜插畫電繪｜線上線下DM型錄｜菜單設計印製｜手冊文書設計 <br />
                            品牌概念LOGO｜企業CIS定位｜社群圖文設計｜產品包裝優化設計｜角色設計
                        </h3>
                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="art_services-images"
                        >
                            <img src={artServiceImg} alt="" />
                        </motion.div>
                        <h4>
                            來自日本的年輕藝術團隊 <br />
                            為您的各類需求打造藝術設計專案
                        </h4>
                        <div className="art_services-process">
                            <div className="art_services-process-block">
                                <img src={serviceProcess1} alt="" />
                                <h5>初步接洽｜了解客戶需求與品牌概況</h5>
                                <p>
                                    專人對接、掌握您的設計需求、介紹專案類型針對客戶需求客製化藝術設計專案
                                </p>
                            </div>
                            <div className="art_services-process-block">
                                <img src={serviceProcess2} alt="" />
                                <h5>專案執行｜即刻為您設計藝術專案</h5>
                                <p>
                                    專案企劃與藝術顧問與您說明企劃內容與期程一對一服務，企業主完整掌握藝術專案執行概況
                                </p>
                            </div>
                            <div className="art_services-process-block">
                                <img src={serviceProcess3} alt="" />
                                <h5>成果展現｜完成作品進行後續曝光</h5>
                                <p>
                                    打造客戶滿意的藝術設計成果提供成果展出相關服務，全方位美學服務
                                </p>
                            </div>
                        </div>
                        <h2>開始您的藝術專案</h2>
                    </div>
                    {/* 探索  您的網路行銷專案 */}
                    <div className="services_exploring">
                        <div className="services_exploring-header">
                            <h2>
                                探索 <br />
                                您的網路行銷專案
                            </h2>
                            <img src={serviceExploringImg} alt="" />
                        </div>
                        <div className="services_exploring-body">
                            <ul>
                                <li><i class="ri-arrow-right-circle-fill"></i>品牌定位策略</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>Reels 短影音製作</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>網頁設計優化</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>企業識別設計</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>會員關係管理</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>線上活動策劃</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>社群媒體經營</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>SEO關鍵字優化</li>
                                <li><i class="ri-arrow-right-circle-fill"></i>部落客KOL接洽</li>
                            </ul>
                        </div>
                    </div>
                    {/* 整合性策略思考，客製化您的行銷專案 */}
                    <div className="integrated_services">
                        <h1>整合性策略思考，客製化您的行銷專案</h1>
                        <div className="integrated_services-head">
                            <img src={integratedService1} alt="" />
                            <img src={integratedService2} alt="" />
                            <img src={integratedService3} alt="" />
                            <video  controls>
                                <source src={integratedService4} type='video/mp4'/>
                            </video>
                        </div>
                        <div className="integrated_services-pro">
                            <div className="services_plannig-des1">
                                <div className="services_plannig-block services_plannig-block1">
                                    <h4>01. 業務接洽</h4>
                                    <ul>
                                        <li>業務接洽客戶窗口</li>
                                        <li>預約會議進一步洽談</li>
                                        <li>企業簡報說明</li>
                                    </ul>
                                </div>
                                <div className="services_plannig-block services_plannig-block2">
                                    <h4>02. 初步分析</h4>
                                    <ul>
                                        <li>免費企業概況分析</li>
                                        <li>品牌定位說明</li>
                                        <li>了解客戶需求與現況</li>
                                    </ul>
                                </div>
                                <div className="services_plannig-block services_plannig-block3">
                                    <h4>03. 簽訂合約</h4>
                                    <ul>
                                        <li>簽訂合約確立方案與流程</li>
                                        <li>建立品牌資料庫（素材）</li>
                                        <li>雙方合作負責窗口</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="services_planning-image">
                                <img src={servicePlanImg} alt="" />
                            </div>
                                
                            <div className="services_plannig-des2">
                                <div className="services_plannig-block services_plannig-block4">
                                    <h4>04. 提案說明</h4>
                                    <ul>
                                        <li>制定策略企劃提案</li>
                                        <li>每月執行表與企劃期程</li>
                                        <li>負責企劃經理提案簡報</li>
                                    </ul>
                                </div>
                                <div className="services_plannig-block services_plannig-block5">
                                    <h4>05. 執行企劃</h4>
                                    <ul>
                                        <li>專案執行、顧問服務</li>
                                        <li>每週/每月定期匯報</li>
                                        <li>行銷成果分析</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="integrated_services-ad">
                            <div className="integrated_services-ad-main">
                                <h2>Ai廣告投放操作</h2>
                                <img src="" alt="" />
                            </div>
                            <div className="integrated_services-ad-des">
                                <div className="integrated_services-ad-block">
                                    <h4></h4>
                                    <p></p>
                                </div>
                                <div className="integrated_services-ad-block">
                                    <h4></h4>
                                    <p></p>
                                </div>
                                <div className="integrated_services-ad-block">
                                    <h4></h4>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="integrated_services-press">
                            
                        </div>
                        */}
                    </div>
                </div> 
            </div>
        </section>
    ) : (
            // English Version
            <section className="service_page">
                <div className="container">
                    <div className="service_page-content">
                        {/* Service Page Header */}
                        <div className="service_page-header">
                            <motion.h1
                                variants={fadeIn('right', 0.5)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                Let's start your own Art Marketing Project.
                            </motion.h1>
                            <motion.img
                                src={serviceHeaderImg} alt="" 
                                variants={fadeIn('left', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            />
                        </div>
                        {/* Art Design Services */}
                        <div className="art_services">
                            <h1>Graphic Design</h1>
                            <h3>
                                Graphic Design｜Digital Illustration｜DM Catalogue｜Menu Design｜Brochure Design <br />
                                Concept LOGO｜CIS｜Media Design｜Packaging Optimization｜Character Design
                            </h3>
                            <motion.div
                                variants={fadeIn('down', 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="art_services-images"
                            >
                                <img src={artServiceImg} alt="" />
                            </motion.div>
                            <h4>
                                Young Art Team from Japan <br />
                                To Customize Tour Design Projects!
                            </h4>
                            <div className="art_services-process">
                                <div className="art_services-process-block">
                                    <img src={serviceProcess1} alt="" />
                                    <h5>Preliminary｜Collect Client Needs and Brand Overview</h5>
                                    <p>
                                        Dedicated Point of Contact, Grasping Your Design Needs, Introducing Project Types Tailored to Customer Requirements, Customizing Art Design Projects
                                    </p>
                                </div>
                                <div className="art_services-process-block">
                                    <img src={serviceProcess2} alt="" />
                                    <h5>Execution｜Designing for Your Projects Immediately</h5>
                                    <p>
                                        Project Planning and Art Consulting: One-on-One Service to Explain Project Content and Timeline. Business Owners Gain Full Insight into Art Project Execution Overview.
                                    </p>
                                </div>
                                <div className="art_services-process-block">
                                    <img src={serviceProcess3} alt="" />
                                    <h5>Presentation｜Exposure for Completed Works</h5>
                                    <p>
                                        Creating Customer-Satisfying Art Design Results and Providing Exhibition-related Services, Comprehensive Aesthetic Services.
                                    </p>
                                </div>
                            </div>
                            <h2>Start Your Projects</h2>
                        </div>
                        {/* 探索  您的網路行銷專案 */}
                        <div className="services_exploring">
                            <div className="services_exploring-header">
                                <h2>
                                    Exploring <br />
                                    Your Own Digital Journey
                                </h2>
                                <img src={serviceExploringImg} alt="" />
                            </div>
                            <div className="services_exploring-body">
                                <ul>
                                    <li><i class="ri-arrow-right-circle-fill"></i>Brand Strategy</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>Reels, Short Video</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>Web Design Opt</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>CIS</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>CRM</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>Online Event</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>Social Media</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>SEO Keyword</li>
                                    <li><i class="ri-arrow-right-circle-fill"></i>Blogger, KOL</li>
                                </ul>
                            </div>
                        </div>
                        {/* 整合性策略思考，客製化您的行銷專案 */}
                        <div className="integrated_services">
                            <h1>Integrated Strategy, Customized Marketing Projects</h1>
                            <div className="integrated_services-head">
                                <img src={integratedService1} alt="" />
                                <img src={integratedService2} alt="" />
                                <img src={integratedService3} alt="" />
                                <video  controls>
                                    <source src={integratedService4} type='video/mp4'/>
                                </video>
                            </div>
                            <div className="integrated_services-pro">
                                <div className="services_plannig-des1">
                                    <div className="services_plannig-block services_plannig-block1">
                                        <h4>01. Contact</h4>
                                        <ul>
                                            <li>Business Contact</li>
                                            <li>Meeting for Further Discussion</li>
                                            <li>Presentation & Explanation</li>
                                        </ul>
                                    </div>
                                    <div className="services_plannig-block services_plannig-block2">
                                        <h4>02. Analyze</h4>
                                        <ul>
                                            <li>Free Overview Analysis</li>
                                            <li>Brand Positioning</li>
                                            <li>Know Customer Demands and Current Situation</li>
                                        </ul>
                                    </div>
                                    <div className="services_plannig-block services_plannig-block3">
                                        <h4>03. Contract</h4>
                                        <ul>
                                            <li>Contract Signing and Procedures</li>
                                            <li>Establish Brand Database</li>
                                            <li>Cooperate with Contact Peeple</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="services_planning-image">
                                    <img src={servicePlanImg} alt="" />
                                </div>
                                    
                                <div className="services_plannig-des2">
                                    <div className="services_plannig-block services_plannig-block4">
                                        <h4>04. Proposal</h4>
                                        <ul>
                                            <li>Develop Strategic Proposal</li>
                                            <li>Monthly Schedule and Timeline</li>
                                            <li>PM Proposal Presentation</li>
                                        </ul>
                                    </div>
                                    <div className="services_plannig-block services_plannig-block5">
                                        <h4>05. Execution</h4>
                                        <ul>
                                            <li>Project Execution, Consult Services</li>
                                            <li>Weekly/Monthly Report</li>
                                            <li>Performance Analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="integrated_services-ad">
                                <div className="integrated_services-ad-main">
                                    <h2>Ai廣告投放操作</h2>
                                    <img src="" alt="" />
                                </div>
                                <div className="integrated_services-ad-des">
                                    <div className="integrated_services-ad-block">
                                        <h4></h4>
                                        <p></p>
                                    </div>
                                    <div className="integrated_services-ad-block">
                                        <h4></h4>
                                        <p></p>
                                    </div>
                                    <div className="integrated_services-ad-block">
                                        <h4></h4>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="integrated_services-press">
                                
                            </div>
                            */}
                        </div>
                    </div> 
                </div>
            </section>
        )
}

export default ServiceContent
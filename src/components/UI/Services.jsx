import React from 'react';
import '../../styles/services.css';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const serviceData = [
    {
        icon: 'ri-global-line',
        title: 'Social Media markteting',
        desc: 'Drawing from deep cultivation in various industries, we employ a specialized team to analyze your business operations, devise online marketing strategies, manage community engagement. By integrating regular data tracking and analysis, we aim to promote your brand worldwide.'
    },
    {
        icon: 'ri-paint-fill',
        title: 'Artistic marketing',
        desc: 'Based in Japan, our top-tier artistic design team specializes in crafting impressive brand visuals and product packaging series. We aim to revitalize your enterprise and create unforgettable aesthetic experiences for consumers, thereby building a strong brand presence'
    },
    {
        icon: 'ri-film-line',
        title: 'Short video Marketing',
        desc: "For our clients, we strive to achieve 'maximum advertising effectiveness with minimum costs.' By combining seasoned advertising specialists with AI-powered ad delivery systems, we precisely track conversion rates and target effective potential customer groups."
    },
    {
        icon: 'ri-rocket-line',
        title: 'SEO Optimization',
        desc: 'We offer a comprehensive service in professional video production, integrating trending topics among the younger demographic. From conceptualization to shooting, editing, and tracking post-release performance, our expert team crafts high-quality image videos, attention-grabbing commercial ads, and highly interactive short videos/Reels.'
    },
]

const serviceDataCN = [
    {
        icon: 'ri-global-line',
        title: '社群經營X數據分析',
        desc: '深耕各大產業多年的社群經營心法，專業團隊為您分析企業經營概況、制定網路行銷策略以及社群經營，打造強大的素人口碑。結合定期數據追蹤分析，打造絕佳行銷成效。'
    },
    {
        icon: 'ri-paint-fill',
        title: '藝術設計X品牌包裝',
        desc: '位於日本的頂級藝術設計團隊，為您設計令人印象深刻的的品牌視覺、個系列產品包裝，讓您的企業煥然一新、打造令消費者難忘的美感體驗與強大品牌力。'
    },
    {
        icon: 'ri-rocket-line',
        title: '廣告操作X人工智能',
        desc: '為客戶用「最低成本打造最高廣告成效」！結合經驗豐富廣告投放專員、導入AI人工智慧投放系統，精準追蹤轉換率、鎖定有效潛在客群。'
    },
    {
        icon: 'ri-film-line',
        title: '商業影片|短影音',
        desc: '專業拍攝團隊，結合時下年輕話題流行，影音策劃到拍攝剪輯、發布成效追蹤，打造質感形象影片、吸睛商業廣告片、高互動性短影音/Reels完整服務。',
    },
]

const Services = ({language}) => {
    return language ==='English' ? (
        <section id="service">
            <div className="container">
                <motion.div
                    className="services_top-content"
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <h6 className='subtitle'>Our Services</h6>
                    <h2>Save time managing your business with</h2>
                    <h2 className='highlight'> our best services</h2>
                </motion.div>

                <motion.div
                    className="service_item-wrapper"
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    {
                        serviceData.map((item, index) => (
                            <div className="service_item">
                                <span className="service_icon">
                                    <i class={item.icon}></i>
                                </span>
                                <h3 className="service_title">
                                    {item.title}
                                </h3>
                                <p className='description'>
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    ) : (
        <section id="service">
            <div className="container">
                <motion.div
                    className="services_top-content"
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <h6 className='subtitle'>服務項目</h6>
                    <h2>為您的品牌與產品注入美學力量</h2>
                    <h2 className='highlight'> 搭上全新整合行銷趨勢</h2>
                </motion.div>

                <motion.div
                    className="service_item-wrapper"
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    {
                        serviceDataCN.map((item, index) => (
                            <div className="service_item">
                                <span className="service_icon">
                                    <i class={item.icon}></i>
                                </span>
                                <h3 className="service_title">
                                    {item.title}
                                </h3>
                                <p className='description'>
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Services
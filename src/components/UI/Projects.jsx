
import React from 'react';

import '../../styles/projects.css';

import artImg from '../../images/artImg.gif';
import socialImg from '../../images/socialImg.gif';
import adImg from '../../images/adImg.gif';

import artDark from '../../images/artDark.gif';
import socialDark from '../../images/socialDark.gif';
import adDark from '../../images/adDark.gif';


const projectData = [
    {
        imgUrl: artImg,
        imgDark: artDark,
        title: 'Trusted & Ture',
        desc: 'A store of selling building materials and inetrior construction...',
        linkUrl: '/project1',
    },
    {
        imgUrl: socialImg,
        imgDark: socialDark,
        title: 'Artist Collection',
        desc: 'Do you want to improve the way your brand by integrating with art? Lets talk....',
        linkUrl: '/project2',
    },
    {
        imgUrl: adImg,
        imgDark: adDark,
        title: '2024 Olympic Day',
        desc: 'Our collaboration with Porducts Design ....',
        linkUrl: '/project3',
    },
]

const projectDataCN = [
    {
        imgUrl: artImg,
        imgDark: artDark,
        title: '產品美學、禮盒藝術設計',
        desc: '為您的品牌設計吸睛包裝與產品，各大節慶禮盒包裝抓住消費者與顧客的眼球',
        linkUrl: '/project1',
    },
    {
        imgUrl: socialImg,
        imgDark: socialDark,
        title: '網頁社群、內容經營優化',
        desc: '社群粉專、LINE, Google商家管理，橫向發展優化平台經營，SEO、影音企劃垂直深度營造品牌力',
        linkUrl: '/project2',
    },
    {
        imgUrl: adImg,
        imgDark: adDark,
        title: 'AI廣告投放數據優化',
        desc: 'AI精準鎖定潛在客群、消費者進行廣告投放，判定素材品質效果，幫助您優化素材再行銷、掌握轉換率與訂單數！',
        linkUrl: '/project3',
    },
]

const Projects = ({ language, theme }) => {
    return language === 'English' ? (
        <section id='projects' className='project'>
            <div className="container">
                <div className="project_top-content">
                    <h6 className="subtitle">Best of Alcoholic</h6>
                    <h2>Let's have a look from our
                        <span className="highlight"> Selected Project</span>
                    </h2>
                </div>

                <div className="project_wrapper">
                    {
                        projectData.map((item, index) => (
                            <div className="project_item" key={index}>
                                <a href={item.linkUrl}>
                                    <h3>{item.title}</h3>
                                    <div className="project_img">
                                        {theme === 'light-theme'? (<img src={item.imgUrl} alt="art" />):(<img src={item.imgDark} alt="art" />)}
                                    </div>
                                    <p className="description project_desc">
                                        {item.desc}
                                    </p>
                                    <div>
                                        <a href={item.linkUrl} className='learn_more'>
                                            Learn More<i class="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    ) : (
    <section id='projects' className='project'>
        <div className="container">
            <div className="project_top-content">
                <h6 className="subtitle">精選案例</h6>
                <h2>一起來看看我們的
                    <span className="highlight"> 案例分享！</span>
                </h2>
            </div>

            <div className="project_wrapper">
                {
                    projectDataCN.map((item, index) => (
                        <div className="project_item" key={index}>
                            <a href={item.linkUrl}>
                                <h3>{item.title}</h3>
                                <div className="project_img">
                                {theme === 'light-theme'? (<img src={item.imgUrl} alt="art" />):(<img src={item.imgDark} alt="art" />)}
                                </div>
                                <p className="description project_desc">
                                    {item.desc}
                                </p>
                                <div>
                                    <a href={item.linkUrl} className='learn_more'>
                                        瞭解更多<i class="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                                </a>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
};

export default Projects;
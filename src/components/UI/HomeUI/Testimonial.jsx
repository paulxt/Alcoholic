
import React from 'react';

import '../../../styles/testimonial.css';

import Slider from 'react-slick';

import ava01 from '../../../images/ava-1.jpg';
import ava02 from '../../../images/ava-2.png';
import ava03 from '../../../images/ava-3.jpg';
import ava04 from '../../../images/ava-4.png';

const Testimonial = ({language}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    }

    return language === 'Chinese' ? (
        <section id='partners'>
            <div className="container">
                <div className='slider_content-top'>
                    <h6 className="subtitle">合作夥伴</h6>
                    <h2>感謝夥伴們長期以來的 <span className='highlight'>信賴</span></h2>
                </div>

                <div className="slider_wrapper">
                    <Slider {...settings}>
                        <div className="slider_item">
                            <p className="description">
                                甫成立新創公司，知名度低、客群單一，傳統產業面臨數位轉型與行銷困境！透過重新設定品牌定位，短
                                影音拍攝剪輯與AI優化廣告投放增加社群觸及率與散客詢問度！架設官網與官方LINE，優化售前至售後CRM
                                服務，成功開發新客群、扎實提升品牌口碑。
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava01} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">馳鉅國際</h5>
                                    <p className="description">建材供應商</p>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <p className="description">
                                傳統活動策劃公司以舊有行銷策略吸引人潮，然而面臨數位時代、消費者選擇眾多，該如何吸引
                                不同世代的人流客群參與推廣活動成為重要課題。藉由重新擬定線上線下活動整合行銷策略，藉
                                由藝術設計活動紀念品、活動現場佈置與AI廣告投放優化活動資訊推播客群，將賽事宣傳效益最
                                大化、打造賽事吸睛亮點。
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava02} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">名衍行銷</h5>
                                    <p className="description">實體活動公司</p>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <p className="description">
                                傳統選品店多以實體陳列與口碑行銷為主，然而在數位化時代，消費者需求多元且競爭激烈，如何精準觸及目標客群並提升品牌影響力成為關鍵課題。蒲意生活選品店透過SEO優化與數位行銷策略，結合生活美學內容行銷、創意產品故事化包裝，以及網站用戶體驗設計，成功吸引不同世代的消費者關注。同時藉由數據分析調整關鍵字排名與廣告投放，提高品牌曝光與轉換率，讓每一件選品成為生活中的吸睛亮點，進一步鞏固品牌獨特性與市場地位。
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava03} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">蒲意生活</h5>
                                    <p className="description">選物店</p>
                                </div>
                            </div>
                        </div>

                        <div className="slider_item">
                            <p className="description">
                                傳統汽車配件品牌往往依賴實體門市和廣告宣傳來吸引客戶，但在數位時代，消費者面臨眾多選擇，如何脫穎而出是品牌的重要挑戰。卡特王汽車配件透過SEO策略提升搜尋引擎排名，並重點優化品牌網站，使購物流程更加順暢、資訊透明化，滿足現代車主的即時需求。此外，藉由整建社群媒體平台，打造高互動性的內容，例如用戶安裝心得分享、產品測試影片和專業保養建議，吸引不同世代的車主關注。配合精準廣告投放與數據分析，卡特王不僅成功提升品牌曝光度，更有效轉化為實際銷售，成為車主心中的首選配件品牌。
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava04} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">卡特王</h5>
                                    <p className="description">汽車零件買賣</p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="slider_item">
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor voluptatem ad odit dicta harum reiciendis maiores itaque aperiam vel maxime, quidem eaque labore nemo aut quaerat fugiat sed sint aliquam ipsum corrupti velit earum rem. Repellat ratione debitis voluptatem.
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava03} alt="" />
                                </div>
                                <div>
                                    <h5 className="customer_name">Lauren Smith</h5>
                                    <p className="description">CEO, Software Developer</p>
                                </div>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </div>
        </section>
    ) : (
        <section id='partners'>
            
            <div className="container">
                <div className='slider_content-top'>
                    <h6 className="subtitle">Testimonials</h6>
                    <h2>Trusted by<span className='highlight'> customers</span></h2>
                </div>


                <div className="slider_wrapper">
                        <Slider {...settings}>
                        {/* Trusted & Ture */}
                            <div className="slider_item">
                                <p className="description">
                                        A newly established company has low visibility and a single customer base.
                                        Traditional industries are facing digital transformation and marketing difficulties!
                                        By resetting the brand positioning, short video shooting and editing,
                                        and AI-optimized advertising, we increase social reach! Established an official website
                                        and official LINE, optimized after-sales CRM services, successfully developed new customers
                                        and solid brand reputation.
                                </p>
                                <div className="customer_details">
                                    <div className="customer_img">
                                        <img src={ava01} alt="" />
                                    </div>
                                    <div>
                                        <h5 className="customer_name">Trusted & Ture</h5>
                                        <p className="description">Builing Materials Supplier</p>
                                    </div>
                                </div>
                            </div>
                            {/* Body Marketing */}
                            <div className="slider_item">
                                <p className="description">
                                        Traditional event companies want to know how to attract people
                                        from different generations to participate in promotional activities.
                                        By re-formulating the marketing strategy for online and offline events,
                                        and optimizing event promotion through art design event souvenirs,
                                        event site layout and AI advertising,
                                        we can maximize the effectiveness of event promotion and create eye-catching highlights
                                        of the event.
                                </p>
                                <div className="customer_details">
                                    <div className="customer_img">
                                        <img src={ava02} alt="" />
                                    </div>
                                    <div>
                                        <h5 className="customer_name">Body Marketing</h5>
                                        <p className="description">Physical Event Company</p>
                                    </div>
                                </div>
                            </div>

                            {/* Puyi */}
                            <div className="slider_item">
                                <p className="description">
                                    Traditional selection stores mostly focus on physical display and word-of-mouth marketing. However, in the digital era, consumer demands are diverse and competition is fierce. How to accurately reach target customer groups and enhance brand influence has become a key issue. Puyi Lifestyle Selection Store has successfully attracted the attention of consumers of different generations through SEO optimization and digital marketing strategies, further consolidating the brand's uniqueness and market position.
                                </p>
                                <div className="customer_details">
                                    <div className="customer_img">
                                        <img src={ava03} alt="" />
                                    </div>
                                    <div>
                                        <h5 className="customer_name">Puyi Selection</h5>
                                        <p className="description">Trading Company</p>
                                    </div>
                                </div>
                            </div>
                            {/* King Cart */}
                            <div className="slider_item">
                                <p className="description">
                                    Traditional auto parts brands often rely on physical stores and advertising to attract customers. However, in the digital era, consumers are faced with numerous choices, and how to stand out is an important challenge for brands. King Cart uses SEO strategies to improve search engine rankings and focuses on optimizing the brand website to make the shopping process smoother and information transparent to meet the immediate needs of modern car owners. In addition, by renovating social media platforms, we create highly interactive content, such as user installation experience sharing, product testing videos and professional maintenance advice, to attract the attention of car owners of different generations. With precise advertising and data analysis, Carter King not only successfully increased brand exposure, but also effectively converted it into actual sales, becoming the preferred accessory brand among car owners.
                                </p>
                                <div className="customer_details">
                                    <div className="customer_img">
                                        <img src={ava04} alt="" />
                                    </div>
                                    <div>
                                        <h5 className="customer_name">King Cart</h5>
                                        <p className="description">Car Accessory Retailer</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
    )
}

export default Testimonial
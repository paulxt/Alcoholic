
import React from 'react';

import '../../styles/testimonial.css';

import Slider from 'react-slick';

import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-2.png';
import ava03 from '../../images/ava-3.jpg';

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
                    </Slider>
                </div>
            </div>


        </section>
    )
}

export default Testimonial
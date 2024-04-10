

import React from 'react';
import '../../styles/counter.css'; 
    
const counterData = [
    {
        number: '5K',
        text: 'Clients',
    },
    {
        number: 350,
        text: 'Running Projects',
    },
    {
        number: 900,
        text: 'Projects Completed',
    },
]

const counterDataCN = [
    {
        number: '20',
        text: '合作夥伴',
    },
    {
        number: 10,
        text: '執行案例',
    },
    {
        number: 20,
        text: '成功案例',
    },
]
    
    
const Counter = ({language}) => {
    return language === 'English'? (
        <section className="counter" id='projects'>
            <div className="container">
                {/* <div className="counter_wrapper">
                    {
                        counterData.map((item, index) => (
                        <div className="counter_item" key={index}>
                                <h3 className="counter_number">{item.number}+</h3>
                                <h4 className="counter_title">{item.text}</h4>
                        </div>
                        ))
                    }
                </div> */}
                <div className="counter_des">
                        <h2>Brand ｜ Innovative ｜ Art ｜ Technology</h2>
                    </div>
            </div>
        </section>
    ) : (
            <section className="counter" id='counter'>
                <div className="container">
                    {/* <div className="counter_wrapper">
                        {
                            counterDataCN.map((item, index) => (
                            <div className="counter_item" key={index}>
                                    <h3 className="counter_number">{item.number}+</h3>
                                    <h4 className="counter_title">{item.text}</h4>
                            </div>
                            ))
                        }
                    </div> */}
                    <div className="counter_des">
                        <h2>品牌 ｜ 創新 ｜ 藝術 ｜ 科技</h2>
                    </div>
                </div>
            </section>
        )
}

export default Counter
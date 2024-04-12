import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

import '../../styles/newsletter.css';



const Newsletter = ({ language }) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const publicKey = "0TxbXfVTvzZfsbxeh";
        const serviceID = "service_9wahsop";
        const templateID = "template_7d2bdkx";

        const templateParams = {
            name: name,
            email: email,
            message: message,
        }

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((res) => {
                console.log('Email sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                
            })
            .catch((err) => {
                console.log(err);
        })
    }


    return language === 'English' ? (
        <section id='newsletter' className="newsletter" >
            <div className="container">
                <div className="newsletter_wrapper">
                    <div className="newsletter_content">
                        <h6 className="subtitle">Let's work</h6>
                        <h2>Contact us to <span className='highlight'>Start</span> your new journey!</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="newsletter_form">
                        <input type="text" value={name} placeholder='Name' className='input' onChange={(e) => setName(e.target.value)}/>
                        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <textarea placeholder='message' value={message} className='textarea' onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="secondary_btn subscribe_btn" type='submit'>Contact Now</button>
                    </form>
                </div>
            </div>
        </section>
    ) : (
        <section id='newsletter' className="newsletter">
            <div className="container">
                <div className="newsletter_wrapper">
                    <div className="newsletter_content">
                        <h6 className="subtitle">Let's work</h6>
                        <h2>歡迎聯絡 <span className='highlight'>玖漾國際</span> 開啟新的旅程吧!</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="newsletter_form">
                        <input type="text" value={name} placeholder='Name' className='input' onChange={(e) => setName(e.target.value)}/>
                        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                        <textarea placeholder='Message' value={message} className='textarea' onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="submit_btn secondary_btn subscribe_btn" type='submit'>馬上預約</button>
                    </form>
                    
                </div>
            </div>
        </section>
    )
}




export default Newsletter
import React from 'react';

import '../../../styles/team.css';

import team01 from '../../../images/team-01.jpg';
import team02 from '../../../images/team-02.png';
import team03 from '../../../images/team-03.png';
import team04 from '../../../images/team-04.png';

//framer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../../variants';

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Paul',
        position: 'General Manager',
    },
    {
        imgUrl: team02,
        name: 'Wayne',
        position: 'Design Director',
    },
    {
        imgUrl: team03,
        name: 'Katie',
        position: 'Marketing Director',
    },
    // {
    //     imgUrl: team04,
    //     name: 'Paul',
    //     position: 'Product manager',
    // },
]

const teamMembersCN = [
    {
        imgUrl: team01,
        name: 'Paul',
        position: '總經理',
    },
    {
        imgUrl: team02,
        name: 'Wayne',
        position: '設計總監',
    },
    {
        imgUrl: team03,
        name: 'Katie',
        position: '行銷總監',
    },
    // {
    //     imgUrl: team04,
    //     name: 'Paul Tsai',
    //     position: '產品經理',
    // },
]

const Team = ({language}) => {
    return language === 'English' ? (
        <section className='our_team'>
            <div className="container">
                <motion.div
                    className="team_content"
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <h6 className="subtitle">Our Team</h6>
                    <h2>Meet with <span className='highlight'> our team.</span></h2>
                </motion.div>

                <motion.div
                    className="team_wrapper"
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    {
                        teamMembers.map((member, index) => (
                            <div className="team_item" key={index}>
                                <div className="team_img">
                                    <img src={member.imgUrl} alt="" />
                                </div>
                                <div className="team_details">
                                    <h4>{member.name}</h4>
                                    <p className="description">{member.position}</p>
                                    {/* <div className="team_member-social">
                                        <span><i class="ri-linkedin-line"></i></span>
                                        <span><i class="ri-twitter-x-line"></i></span>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
            
        </section>
    ) : (
        <section className='our_team'>
            <div className="container">
                <motion.div
                    className="team_content"
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <h6 className="subtitle">團隊介紹</h6>
                    <h2>玖漾國際<span className='highlight'>團隊成員</span></h2>
                </motion.div>

                <motion.div
                    className="team_wrapper"
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    {
                        teamMembersCN.map((member, index) => (
                            <div className="team_item" key={index}>
                                <div className="team_img">
                                    <img src={member.imgUrl} alt="" />
                                </div>
                                <div className="team_details">
                                    <h4>{member.name}</h4>
                                    <p className="description">{member.position}</p>
                                    {/* <div className="team_member-social">
                                        <span><i class="ri-linkedin-line"></i></span>
                                        <span><i class="ri-twitter-x-line"></i></span>
                                    </div> */}
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
            
        </section>
    )
}

export default Team
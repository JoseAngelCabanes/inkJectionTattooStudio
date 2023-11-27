import React from 'react';
import './about.css'
import ExtraCard from '../../common/ExtraCard/ExtraCard';
import Logo from '../../img/logo.jpg'
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

import { logUser } from '../../services/apiCalls';


export const About = () => {
     return (
         <div className="aboutDesign">
            <div className='aboutDivider'>
            <ExtraCard logo={<MdOutlineSupervisorAccount  className='color'/>} title="OUR TEAM" text="At INKjection, our team is a talented group of artists dedicated to turning your ideas into stunning tattoos. With a focus on creativity and personalized service, we strive to make your experience exceptional. Choose us for skilled professionals who transform visions into art."/>
            </div>
            <div className='aboutDivider'>
            <ExtraCard logo={<MdOutlineStar  className='color'/>} title="RATING" text=" ''I recently had a fantastic experience at INKjection. The staff was friendly, the studio was clean, and the artists were not only skilled but also incredibly creative. From consultation to the final result, the process was seamless, and the end product exceeded my expectations. I highly recommend INKjection for a top-notch tattoo experience!'' " />
            </div>
         </div>
     )
}
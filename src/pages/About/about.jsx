import React from 'react';
import './about.css'
import InfoCard from '../../common/InfoCard/InfoCard';
import Logo from '../../img/logo.jpg'
import { MdOutlineMenuBook } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";
import { logUser } from '../../services/apiCalls';


export const About = () => {
     return (
         <div className="aboutDesign">
            <div className='aboutDivider'>
            <InfoCard logo={<MdOutlineMenuBook  className='color'/>} title="OUR TEAM" text="text example"/>
            </div>
            <div className='aboutDivider'>
            <InfoCard logo={<IoIosPeople  className='color'/>} title="RATING" text="text example" />
            </div>
            <div className='aboutDivider'>
            <InfoCard logo={<MdHealthAndSafety  className='color'/>} title="WHY YOU SHOULD GET TATTOOED BY US" text="text example"/>
            </div>
         </div>
     )
}
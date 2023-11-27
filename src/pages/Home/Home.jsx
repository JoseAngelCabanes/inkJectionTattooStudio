import React from 'react';
import './Home.css'
import HoursAddressCard from '../../common/HoursAddress/HoursAddress';
export const Home = () => {
     return (
         <div className="homeDesign">
            <div className='LeftHome'>
            <img src='src\img\logo.jpg'></img>
                
            </div>
            <div className='RightHome'>
                <img src='src\img\landingpage.jpg'></img>
            </div>
         </div>
     )
}
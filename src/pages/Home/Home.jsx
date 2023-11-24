import React from 'react';
import './Home.css'
import HoursAddressCard from '../../common/HoursAddress/HoursAddress';
export const Home = () => {
     return (
         <div className="homeDesign">
            <div className='LeftHome'>
                <div className='HADivider'>
                    <HoursAddressCard title="HOURS" text="MON-FRI" subtext="8:00-:14:00" />
                </div>
                <div className='HADivider'>
                    <HoursAddressCard title="ADDRESS" text="CW CANADA" subtext="330 FIRST ST" />
                </div>
            </div>
            <div className='RightHome'>
                <img src='src\img\tattoo_machines_design__28color_29-removebg-preview.png'></img>
            </div>
         </div>
     )
}
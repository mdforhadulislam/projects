import Image from 'next/image';
import React from 'react';
import person from '../../Assets/images/side bar/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import style from './navbar.module.css';
// import { menusData } from './NavigationData';
import SingleSidebarButton from './SingleSidebarButton';

const SideNavBar = ({ data }) => {

   return (
      <section>
         <div className={style.vendor_section}>
            {/* Vandor Details Start */}
            <div className={style.vendor_about}>
               <div className={`next_image_container ${style.vendor_image}`}>
                  {/* <img src={vendorImage} alt="" /> */}
                  <Image
                     src={person}
                     alt="Logo Image"
                     layout="responsive"
                     width="100%"
                     height="100%"
                     className={'next_image'}
                  />
               </div>
               <div className={style.vendor_name}>
                  <p> Md Masud Reja</p> <span> Builder </span>
               </div>
            </div>
            {/* Vandor Details End */}

            <div className={`${style.vendor_navigation} scrollbar`}>
               {data.map((menu, index) => (
                  <SingleSidebarButton menu={menu} key={index} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default SideNavBar;

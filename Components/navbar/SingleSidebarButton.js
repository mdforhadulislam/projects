import Link from 'next/dist/client/link'
import React, { useState } from 'react'
import MainusIcon from './icons/MainusIcon'
import PlusIcon from './icons/PlusIcon'
import style from './navbar.module.css'

function SingleSidebarButton({ menu }) {
   const [showDropDown, setShowDropDown] = useState(false);

   return (
      <div className={style.vendor_nav} id="side-nav1">
         <div className={style.vendor_nav_main} onClick={() => setShowDropDown(!showDropDown)}>
            <div className={style.vendor_nav_icon}>{menu.icon}</div>
            <div className={style.vendor_nav_text}>{menu.title}</div>
            <div className={style.vendor_nav_btn}>
               {showDropDown === menu.title ? <MainusIcon /> : <PlusIcon />}
            </div>
         </div>

         {showDropDown && (
            <div
               className={`${style.vendor_nav_more} ${showDropDown === menu.title ? 'd-block' : 'd-none'
                  } `}>
               {menu.dropdownList.map((dropdownn, index) => (
                  <Link
                     href={dropdownn.link ? `${dropdownn.link}` : '#'}
                     key={index}>
                     <a className="text-dark">
                        <span className={style.vendor_nav_more_icon}>
                           {/* <img src={RightArrow} alt="" /> */}
                        </span>
                        <span className={style.vendor_nav_more_text}>
                           {dropdownn.title}
                        </span>
                     </a>
                  </Link>
               ))}
            </div>
         )}
      </div>
   )
}

export default SingleSidebarButton
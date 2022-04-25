import React from 'react'
import Image from 'next/image'
import calendar from '../../../Assets/icon/calendar.svg'
import printer from '../../../Assets/icon/printer.png'
import path from '../../../Assets/icon/Path.png'
import share from '../../../Assets/icon/share.png'
function Notice() {
  return (
  <div className='container w-[90%] mx-auto relative '>
  <div className=" flex justify-between w-full ">
     <h3 className='text-2xl font-bold text-[#313131] mt-5'>Notice</h3>
     <div className='flex flex-row mt-5'>
                <input className=' flex rounded-l-lg h-10 pl-3 justify-center items-center border-2 border-[#DA1E37] w-[100px] md:w-[130px]' placeholder='15th Aug. 2021'/>
                <div className="flex justify-center w-10 h-[40px] bg-[#DA1E37]  rounded-r-lg p-1">
            <Image src={calendar} className='bg-[#DA1E37] ' width={30} height={18} alt='calender'/>
                        </div>
            </div>
  </div>
   <div className=' w-full h-[1000px] md:h-[1300px] rounded-2xl shadow-4xl md:shadow-3xl text-center -mt-16 bg-white mb-4'>
       <div className="flex justify-around items-center w-[117px] pt-10 absolute right-14 pb-20 mx-auto">
            <button className="outline-none border-none bg-transparent cursor-pointer">
            <Image  src={printer} width={23} height={23} alt='printer'/>
            </button>
            <button className="outline-none border-none bg-transparent cursor-pointer">
            <Image  src={path} width={23} height={23} alt='path'/>
            </button>
            <button className="outline-none border-none bg-transparent cursor-pointer">
            <Image  src={share} width={23} height={23} alt='share'/>
            </button>
       </div>
     
       <h3 className='mt-24 mb-2 text-[#666666] text-lg pt-24 text-center' htmlFor="">Rasel Swimming Training Center</h3>
       <div className=' mt-10 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px]'></div>
       <div className=' mt-1 flex-shrink  w-[95%] mx-auto bg-[#CCCCCC] h-[1px] visible md:invisible'></div>
       
   <div className="flex justify-between items-center mx-auto w-[95%]">
   <div className="flex  flex-col ">
           <p className='mt-5 mb-2'>Id/record number</p>
           <p className=' mb-2  text-[#666666] text-xs ' htmlFor="">OM/102-SM701</p>
       </div>
       <div className="flex  flex-col  ">
           <p className='mt-5 mb-2 '>Date:15/08/2021</p>
           
       </div>
   </div>
       
       <div className="flex items-center  w-full mx-auto  shadow-3xl  mt-3 mb-5 ">
           <h1 className=' mb-2 ml-4 text-xl text-start text-[#313131]'>SUBJECT: ADMISSION NOTICE 2021-2022</h1>
           
       </div>
     
       <div className="flex  flex-col  w-[95%] mx-auto ">
           <p className='mt-5 mb-2  text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam consectetur architecto, aspernatur veritatis, esse rerum sed tempora sequi enim natus quibusdam atque ut maxime animi cum nam doloribus ab voluptatem voluptates itaque facilis possimus. Earum illum deleniti nulla, aut impedit fuga fugiat optio exercitationem. Dignissimos dolorum, vero et ullam beatae aperiam reiciendis provident velit a pariatur blanditiis natus quod ut odio asperiores voluptas earum dolores at minima consectetur aut eius. Corrupti unde doloremque vitae nulla. Illum esse nesciunt debitis! Omnis, facilis quidem dolor debitis minima aliquam nesciunt quod tenetur quasi, dolorum fugit qui voluptate cupiditate, animi fuga? Sed illum aspernatur culpa, assumenda deleniti sit consequatur ab consequuntur sapiente aliquid nulla ullam reprehenderit obcaecati, cupiditate animi! Nulla ullam minus dicta pariatur voluptatibus eos id quisquam explicabo, eius fuga quas, et modi. Repellat libero totam non, impedit cum quas adipisci praesentium commodi tempora itaque iure ut ad dolorum voluptatibus sapiente, officia tempore id. Praesentium reprehenderit ducimus quasi tempore laboriosam adipisci iusto neque delectus quaerat magnam, quos ipsam consequatur saepe, distinctio exercitationem est ipsa sint dolorem obcaecati a, eum nemo veritatis maxime asperiores. Maxime, enim suscipit. Autem quam officia id dolorem voluptatem doloremque. Repudiandae ipsam sit beatae nemo consequuntur! Placeat, error nostrum!</p>
           
       </div>
   
       <div className="flex  flex-col  mx-auto absolute right-14 mt-10">
           <p className='mt-10 mb-1' htmlFor="">Md Rased Kamal</p>
           <p className='mb-2 text-sm text-[#666666]' htmlFor="">Director</p>
          
       </div>
    
       
   
   
      
     
   </div>
  </div>
   
  )
}

export default Notice
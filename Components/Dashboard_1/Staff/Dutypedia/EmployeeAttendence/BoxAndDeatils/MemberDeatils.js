import Image from 'next/image';
import React, { useState } from 'react';
import backIcon from '../../../../../../Assets/images/dashboard/ArrowBackIcon.svg';
import ArrowDownIcon from '../../../../../../Assets/images/dashboard/ArrowDownIcon';
import DutyPreIcon from '../../../../../../Assets/images/dashboard/DutyPreIconSmall';
import PrintIcon from '../../../../../../Assets/images/dashboard/printer.svg';

function MemberDeatils({ setAttendenceMemberDeatils }) {
    const [year, setYear] = useState(new Date().getFullYear());

    const printHendeler = (e) => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'none';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.marginLeft =
            '-3.5vw';
        window.print();
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].style.display =
            'grid';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].style.display =
            'block';
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].style.marginLeft =
            '0vw';
    };

    return (
        <div className="w-full min-h-full p-[40px] pl-[90px] absolute top-0 left-0 bg-[#fff1f2] z-[90]">
            <div className="w-full min-h-full bg-white rounded-[13px] p-[25px] shadow-4xl">
                <div className="w-full h-auto mb-[8px]">
                    <Image
                        width={33}
                        height={26}
                        className="w-[33px] h-[25px] cursor-pointer "
                        src={backIcon}
                        alt={'backIcon'}
                        onClick={() => {
                            setAttendenceMemberDeatils(false);
                        }}
                    />
                </div>
                <div className="w-full h-auto flex justify-between align-top flex-row pb-[18px]">
                    <div className="h-auto flex">
                        <div className="pr-[18px] relative">
                            <Image
                                width={320}
                                className="border"
                                height={340}
                                src={PrintIcon}
                                alt={'image'}
                            />

                            <div className=" inline-block w-[40px] h-auto absolute bottom-[-8px] right-[4px]">
                                <DutyPreIcon width={40} height={40} />
                            </div>
                        </div>
                        <div className="w-full h-auto pt-[18.5px]">
                            <ul className=" list-none m-0 p-0">
                                <li className=" text-[16px] pb-[5.5px]">
                                    <h1 className=" font-medium text-[22px] pb-[4px]">
                                        Forhadul Oslam
                                    </h1>
                                </li>
                                <li className="text-[16px] pb-[5.5px]">Id: DP0324-234</li>
                                <li className="text-[16px] pb-[5.5px]">Jr.Frontend Developer</li>
                                <li className="text-[16px] pb-[5.5px]">Joining Date 01/20/2021</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[330px] h-auto relative">
                        <div className="h-auto absolute top-0 right-0">
                            <Image
                                onClick={printHendeler}
                                width={30}
                                height={30}
                                className="cursor-pointer"
                                src={PrintIcon}
                                alt="PrintIcon"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto flex justify-between align-middle">
                    <div className="w-[280px] h-auto flex align-middle justify-between text-[#313131] py-[10px]">
                        <div
                            className="calender__year__changeing__left"
                            onClick={() => {
                                setYear((prev) => prev - 1);
                            }}></div>
                        <div className="text-[27px] font-semibold">CALENDER {year}</div>
                        <div
                            className="calender__year__changeing__right"
                            onClick={() => {
                                setYear((prev) => prev + 1);
                            }}></div>
                    </div>

                    <div
                        className="w-[270px] h-auto py-[13px] flex justify-between relative align-middle"
                        style={{ alignItems: 'center' }}>
                        <div className="text-[18px]">Filter By</div>
                        <select
                            className=" w-[180px] h-[40px] border-[1px] border-[#da1e37] outline-none p-[5px] rounded"
                            name=""
                            id="filterIcon">
                            <option value="">Select</option>
                        </select>
                        <div className="w-[40px] h-auto pointer-events-none cursor-pointer flex bg-[#da1e37] rounded-tr-[4.5px] rounded-br-[4.5px] absolute  right-0">
                            {/* <div className="absolute right-0 flex items-center pointer-events-none bg-[#Da1E37] rounded-r-lg"> */}
                            <ArrowDownIcon color={'white'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberDeatils;

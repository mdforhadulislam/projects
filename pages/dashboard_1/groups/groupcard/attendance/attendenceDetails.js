import React from 'react';
import calender from '/Assets/icon/calendar-line.svg';
import Image from 'next/image';
import Link from 'next/link';
import FakeData from './FakeData.json';
import { Wrapper } from '../../../../../styles/AttendenceWrapper';
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
    AiOutlinePlus,
    AiFillCaretRight,
    AiFillClockCircle
} from 'react-icons/ai';
import { BsCaretLeft, BsThreeDotsVertical } from 'react-icons/bs';

const attendenceDetails = () => {
    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="wrapper-width bg-white p-4">
            <div>
                {/* Attendence Calender */}
                {/* Attendence Calender */}
                {/* Attendence Calender */}

                <div className="date">
                    <div className="select-date">
                        <input
                            onchange="handleStartDate(event)"
                            type="date"
                            className="selectDiet-date"
                        />
                    </div>
                    <div className="attendence-calendar">
                        <Image src={calender} alt="calendar-line" />
                    </div>
                </div>
                <div className="d-lg-none d-flex justify-content-end plus-btns-sm">
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn-plus me-3">
                            <AiOutlinePlus />
                        </button>

                        <span className="btn-menu">
                            <BsThreeDotsVertical />
                        </span>
                    </div>
                </div>

                {/* View All */}
                <div className="view-all-link text-end pe-0 pe-lg-5">
                    {/* <Link className="me-5" to='/'>View All</Link> */}
                    <a style={{textDecoration:'underline'}} className="me-0 me-lg-5" href="#">
                        View All
                    </a>
                </div>

                <div className="attendence-year">
                    <div className="row">
                        <div className="col-lg-1 col-1">
                            <button className="prev-next-btn me-lg-4 me-0">
                                <AiOutlineDoubleLeft />
                            </button>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <small style={{fontSize:'12px'}}>05/01/2020 To 10/12/2020</small>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <small style={{fontSize:'12px'}}>10/01/2021 To 10/01/2022</small>
                        </div>
                        <div className="col-lg-2 col-5">
                            <small style={{fontSize:'12px',textDecoration:'underline'}} className="active">01/01/2022 To 10/12/2023</small>
                        </div>
                        <div className="col-lg-2 col-5">
                            <small style={{fontSize:'12px'}}>01/09/2023 To 10/12/2024</small>
                        </div>
                        <div className="col-lg-3 col-1">
                            <div className="d-flex justify-content-between">
                                <button className="prev-next-btn ms-lg-5 ms-0">
                                    <AiOutlineDoubleRight />
                                </button>
                                <div className="d-none d-lg-flex justify-content-center align-items-center">
                                    <button className="btn-plus me-3">
                                        <AiOutlinePlus />
                                    </button>

                                    <span className="btn-menu">
                                        <BsThreeDotsVertical />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attendence Table */}
                {/* Attendence Table */}
                {/* Attendence Table */}

                {/* attendence table for large device */}
                {/* attendence table for large device */}
                {/* attendence table for large device */}
                <div className="attendence-table mt-2 d-lg-block d-md-none d-none">
                    <div className="attendance-table-head-new">
                        <div className="d-flex">
                            <div className="head-name">
                                <div className="name1">
                                    <p className="pt-3">Name</p>
                                </div>
                            </div>
                            <div className="head-subject">
                                <div className="pt-3">
                                    <small className='d-flex align-items-center'>
                                    <AiFillClockCircle/> Attendence Time 12:45PM
                                    </small>
                                </div>
                                <div className="px-5 math1">
                                    <div className="w-25">English</div>
                                    <div className="d-flex align-items-center">
                                        <div className="attendence-incomplete">
                                            Attendence Incomplete
                                        </div>
                                       
                                    </div>
                                </div>
                                <span style={{ fontSize: '13px',marginTop:'29px' }}>0/50</span>
                            </div>
                            <div className="head-date">
                                <div className="pt-3">
                                    <p>Sat, 12 Th Sep 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="attendence-table-body ms-2 text-center">
                        {FakeData.map((attendence) => (
                            <div className="my-3" key={attendence.id}>
                                <div className="row attendence-info">
                                    <div className="col-md-4 border-right-black">
                                        <div className="attendence-person-details">
                                            <div className="d-flex">
                                                <div style={{ width: '30px' }} className="img">
                                                    <img
                                                        className="w-100 rounded"
                                                        src={attendence.img}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-3">
                                                    <p className="p-0 m-0">{attendence.name}</p>
                                                    <small>{attendence.id}</small>
                                                </div>
                                            </div>
                                            <div className="pt-4 link-style">
                                                <Link
                                                    className=""
                                                    href="/dashboard_1/groups/groupcard/attendance/viewDetails">
                                                    View All Attendences
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-center  border-right-black">
                                        <div className="pt-3">
                                            <span
                                                className={`attStutas ${
                                                    attendence.attStatus === 'A' && 'active'
                                                }`}>
                                                A
                                            </span>
                                            <span
                                                className={`attStutas ${
                                                    attendence.attStatus === 'P' && 'active'
                                                }`}>
                                                P
                                            </span>
                                            <span
                                                className={`attStutas ${
                                                    attendence.attStatus === 'L' && 'active'
                                                }`}>
                                                L
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="text-end pe-5">
                                            <p className="mt-3">
                                                Fine{' '}
                                                <small className="ms-5">
                                                    {attendence.fine} &#2547;
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="attendence-table d-block d-lg-none mt-5">
                    {/* Attendence table head for small devices */}
                    {/* Attendence table head for small devices */}
                    <div className="attendence-table-head d-none d-lg-grid">
                        <div className="name">
                            <p className="pt-3">Name</p>
                        </div>
                        <div className="att-time pt-3">
                            <small>
                                <i class="far fa-clock"></i> Attendence Time 12:45PM
                            </small>
                        </div>
                        <div className="px-5 math">
                            <div className="text-start ps-5">Math</div>
                            <div className="d-flex align-items-center ps-2">
                                <div className="attendence-incomplete">Attendence Incomplete</div>
                                <span style={{ fontSize: '13px' }}>0/50</span>
                            </div>
                        </div>
                        <div className="today">
                            <button>
                                <i class="fal fa-caret-left"></i>
                            </button>
                            <span>Today</span>
                            <button>
                                <i class="fal fa-caret-right"></i>
                            </button>
                        </div>
                    </div>

                    {/* attendence table for small devices */}
                    {/* attendence table for small devices */}
                    <div className="attendence-small-thead d-block d-lg-none">
                        <div className="row gx-0 gy-0">
                            <div className="col-7">
                                <div className="d-flex align-items-center justify-content-end justify-content-md-around">
                                    <p className="me-3">English</p>
                                    <div className="attendence-incomplete">
                                        Attendence Incomplete
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <small>
                                        <i class="far fa-clock"></i> Attendence Time 12:45PM
                                    </small>
                                    <sup>35/50</sup>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="today">
                                    <span>
                                        <BsCaretLeft />
                                    </span>
                                    <span>Today</span>
                                    <span>
                                        <AiFillCaretRight />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="attendence-table-body text-center">
                        {FakeData.map((attendence) => (
                            <div className="my-3" key={attendence.id}>
                                <div className="row attendence-data">
                                    <div className="col-lg-3 col-12">
                                        <div className="d-flex att-table-row justify-content-between">
                                            <div className="d-flex student-info">
                                                <div style={{ width: '30px' }} className="img">
                                                    <img
                                                        className="w-100 rounded"
                                                        src={attendence.img}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-2 ps-lg-3">
                                                    <p className="p-0 m-0 stu-name">
                                                        {attendence.name}
                                                    </p>
                                                    <small>{attendence.id}</small>
                                                </div>
                                            </div>
                                            <div className="pt-4 link-style view-all-link">
                                                {/* <Link to='/'>View All Attendences</Link> */}
                                                <Link href="/dashboard_1/groups/groupcard/attendance/viewDetails">
                                                    View All Attendences
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-12 text-start text-lg-center">
                                        <div className="att-table-row">
                                            <h3 className="d-lg-none">Attendence</h3>
                                            <div className="pt-1 pt-lg-3">
                                                <span
                                                    className={`attStutas ${
                                                        attendence.attStatus === 'A' && 'active'
                                                    }`}>
                                                    A
                                                </span>
                                                <span
                                                    className={`attStutas ${
                                                        attendence.attStatus === 'P' && 'active'
                                                    }`}>
                                                    P
                                                </span>
                                                <span
                                                    className={`attStutas ${
                                                        attendence.attStatus === 'L' && 'active'
                                                    }`}>
                                                    L
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="point-and-percentage att-table-row">
                                            <div className="mt-lg-3 mt-0 d-block d-lg-flex">
                                                <p>Total Point</p>
                                                <small className="ms-3">{attendence.fine}</small>
                                            </div>
                                            <div className="mt-lg-3 mt-0 d-block d-lg-flex">
                                                <p>Total Percentage</p>
                                                <small className="ms-3">{attendence.fine}%</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default attendenceDetails;

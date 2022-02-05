import React, { useEffect, useState } from 'react';
import calender from '/Assets/icon/calendar-line.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Wrapper } from '../../../../../styles/AttendenceWrapper';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import FakeData from './FakeData.json';
import CheckBox from '../../../../../Components/Common/CheckBox/CheckBox';
import dahiana from '/Assets/images/clients section/dahiana-waszaj-XQWfro4LrVs-unsplash.jpg';
import { BsCaretLeft } from 'react-icons/bs';
import { AiFillCaretRight,AiFillClockCircle } from 'react-icons/ai';

const attendenceDone = () => {
    const [attendences, setAttendences] = useState([]);
    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="wrapper-width bg-white p-4">
            {/* Input Calender */}
            {/* Input Calender */}
            <div className="date mb-4">
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

            {/* Attendence table start */}
            {/* Attendence table start */}
            {/* Attendence table start */}
            <div className="attendence-table mt-5 d-lg-block d-none d-md-none">
                <div className="attendance-table-head-new">
                    <div className="d-flex">
                        <div className="head-name2">
                            <div className="name2">
                                <p className="pt-3">Name</p>
                            </div>
                        </div>
                        <div className="head-subject2">
                            <div className="pt-3">
                                <small className="d-flex align-items-center">
                                    <AiFillClockCircle /> Attendence Time 12:45PM
                                </small>
                            </div>
                            <div className="px-5 math1">
                                <div className="w-25">English</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div style={{backgroundColor:'white',color:'gray',borderRadius:'5px'}} className="attendence-incomplete">
                                        Attendence Running
                                    </div>
                                </div>
                            </div>
                            <span style={{ fontSize: '13px', marginTop: '29px' }}>0/50</span>
                        </div>
                        <div className="head-date2">
                            <div className="pt-3">
                                <p>Sat, 12 Th Sep 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attendence-table-body text-center  ">
                    {FakeData.map((attendence) => (
                        <div className="my-3" key={attendence.id}>
                            <div className="alignment-row">
                                <div className="table-body-item1 attendence-data">
                                    <div className="d-flex align-items-center ">
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
                                </div>
                                <div className="table-body-item2">
                                    <div className="row attendence-data">
                                        <div className="col-4">
                                            <div className="present-btns py-3">
                                                <span className="present-button">P</span>
                                                <span
                                                    style={{
                                                        backgroundColor: 'white',
                                                        color: 'black'
                                                    }}
                                                    className="present-button">
                                                    A
                                                </span>
                                                <span
                                                    style={{
                                                        backgroundColor: 'white',
                                                        color: 'black'
                                                    }}
                                                    className="present-button">
                                                    L
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="mt-2">
                                                    <div className="d-flex align-items-center">
                                                        <CheckBox
                                                            id={attendence.id}
                                                            type="checkbox"
                                                            name="point"
                                                        />
                                                        <label
                                                            htmlFor={attendence.id}
                                                            className="checkbox-container text-capitalize ms-3 me-5s">
                                                            Fine
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="attendence-per-day-input">
                                                    <div className="input">
                                                        <input type="text" value={`${'00'} ৳ `} />
                                                    </div>
                                                    <div className="upDown-btn">
                                                        <button className="up-btn">
                                                            <AiOutlineUp
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white'
                                                                }}
                                                            />
                                                        </button>
                                                        <button className="down-btn">
                                                            <AiOutlineDown
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white'
                                                                }}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-body-item3 p-0">
                                    <div className=" attendence-data pe-5">
                                        <p className="mt-3">
                                            Fine <small className="ms-5">{attendence.fine}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Attendence table end */}
            {/* Attendence table end */}
            {/* Attendence table end */}

            {/* Attendence table for mobile device start here */}
            {/* Attendence table for mobile device start here */}
            {/* Attendence table for mobile device start here */}
            {/* Attendence table for mobile device start here */}
            <div className="attendence-table-body text-center d-block d-lg-none">
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
                <div className="attendence-small-thead ">
                    <div className="row gx-0 gy-0">
                        <div className="col-7">
                            <div className="d-flex align-items-center justify-content-end justify-content-md-around">
                                <p className="me-3">English</p>
                                <div className="attendence-incomplete">Attendence Incomplete</div>
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

                {FakeData.slice(0, 3).map((attendence) => (
                    <div className="my-3" key={attendence.id}>
                        <div className="row border-card p-3">
                            <div className="col-md-4 col-lg-4 mt-3 w-100 attendence-data">
                                <div className="d-flex">
                                    <div style={{ width: '30px' }} className="img mt-3">
                                        <Image className="w-100 rounded" src={dahiana} alt="" />
                                    </div>
                                    <div className="ps-3 mt-2">
                                        <p className="p-0 m-0">Oviya Orny</p>
                                        <small>Id: DP0324-234</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 ps-0 pe-0 w-100 mt-3">
                                <div className="attendence-data ">
                                    <div className=" ">
                                        <div className="present-btns py-3">
                                            <span className="present-button">P</span>
                                            <span
                                                style={{ backgroundColor: 'white', color: 'black' }}
                                                className="present-button">
                                                A
                                            </span>
                                            <span
                                                style={{ backgroundColor: 'white', color: 'black' }}
                                                className="present-button">
                                                L
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 p-0 w-100 mt-3">
                                <div className=" attendence-data d-flex justify-content-between pe-5">
                                    <div>
                                        <CheckBox
                                            id={attendence.id}
                                            type="checkbox"
                                            name="Total Point"
                                        />
                                        <div className="attendence-per-day-input">
                                            <div className="input">
                                                <input type="text" value={`${'30'}%`} />
                                            </div>
                                            <div className="upDown-btn">
                                                <button className="up-btn">
                                                    <AiOutlineUp
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white'
                                                        }}
                                                    />
                                                </button>
                                                <button className="down-btn">
                                                    <AiOutlineDown
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white'
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <CheckBox
                                            id={attendence.id}
                                            className="check-box-width"
                                            type="checkbox"
                                            name="Total Percentage"
                                        />
                                        <div className="attendence-per-day-input">
                                            <div className="input">
                                                <input type="text" value={`${'3.33'}%`} />
                                            </div>
                                            <div className="upDown-btn">
                                                <button className="up-btn">
                                                    <AiOutlineUp
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white'
                                                        }}
                                                    />
                                                </button>
                                                <button className="down-btn">
                                                    <AiOutlineDown
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: 'white'
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bottom-right-btns">
                <Link href="/dashboard_1/groups/groupcard/attendance/attendenceDetails">
                    <button className="cmnBtn  done-btn border-0 mr-3">Done</button>
                </Link>
                <Link href="/dashboard_1/groups/groupcard/attendance/callAttendence">
                    <button className="cmnBtn btn-cancel">Cancel</button>
                </Link>
            </div>
        </Wrapper>
    );
};

export default attendenceDone;

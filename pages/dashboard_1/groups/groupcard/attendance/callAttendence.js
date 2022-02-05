import React from 'react';
import { Wrapper } from '../../../../../styles/AttendenceWrapper';
import calender from '/Assets/icon/calendar-line.svg';
import FakeData from './FakeData.json';
import { BsCaretLeft } from 'react-icons/bs';
import { AiFillCaretRight } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const callAttendence = ({name}) => {
    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="wrapper-width bg-white p-4">
            <div className="">
                <div className="attendence-table mt-5 d-lg-block d-md-none d-none">
                    <div className="date mb-4">
                        <div className="select-date">
                            <input type="date" className="selectDiet-date" />
                        </div>
                        <div className="attendence-calendar">
                            <Image src={calender} alt="calendar-line" />
                        </div>
                    </div>

                    <div className="attendence-table-head">
                        <div className="name">
                            <p className="pt-3 ms-5">Name</p>
                        </div>
                        <div className="pt-3">
                            <small>
                                <i class="far fa-clock"></i> Attendence Time 12:45PM
                            </small>
                        </div>
                        <div className="px-5 math">
                            <div className="w-25">Math</div>
                            <br />
                            <div className="d-flex align-items-center">
                                <div className="attendence-incomplete">Attendence Incomplete</div>
                                <span style={{ fontSize: '13px' }}>0/50</span>
                            </div>
                        </div>
                        <div className="pt-3">
                            <p>Sat, 12 Th Sep 2021</p>
                        </div>
                    </div>
                    <div className="attendence-table-body text-center">
                        {FakeData.map((attendence) => (
                            <div className="my-3" key={attendence.id}>
                                <div className="row attendence-data">
                                    <div className="col ">
                                        <div className="d-flex align-items-center">
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
                                    <div className="col">
                                        <h5 className="pal pt-3">P A L</h5>
                                    </div>
                                    <div className="col">
                                        <div className="text-end">
                                            <p className="mt-3">
                                                Fine{' '}
                                                <small className="ms-3">{attendence.fine}</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*----------------------
          for mobile device-------
          --------------------------
          ------------------------- */}

                <div className="call-attendence d-block d-lg-none">
                    <div className="date">
                        <div className="select-date">
                            <input type="date" className="selectDiet-date" />
                        </div>
                        <div className="attendence-calendar">
                            <Image src={calender} alt="calendar-line" />
                        </div>
                    </div>

                    <div className="attendence-table mt-5">
                        {/* Attendence table head for large devices */}
                        {/* Attendence table head for large devices */}
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
                                    <div className="attendence-incomplete">
                                        Attendence Incomplete
                                    </div>
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
                                        <div className="col-lg-2 col-12">
                                            <div className="d-flex att-table-row student-info">
                                                <div style={{ width: '30px' }} className="img">
                                                    <img
                                                        className="w-100 rounded"
                                                        src={attendence.img}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ps-3">
                                                    <p className="p-0 m-0 stu-name">
                                                        {attendence.name}
                                                    </p>
                                                    <small>{attendence.id}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 text-start text-lg-center">
                                            <div className="att-table-row">
                                                <h3 className="d-lg-none">Attendence</h3>
                                                <h5 className="pal pt-0 pt-lg-3">P A L</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <div className="point-and-percentage att-table-row">
                                                <div className="mt-lg-3 mt-0 d-block d-lg-flex">
                                                    <p>Total Point</p>
                                                    <small className="ms-3">
                                                        {attendence.fine}
                                                    </small>
                                                </div>
                                                <div className="mt-lg-3 mt-0 d-block d-lg-flex">
                                                    <p>Total Percentage</p>
                                                    <small className="ms-3">
                                                        {attendence.fine}%
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bottom-right-btns">
                    <Link href="/dashboard_1/groups/groupcard/attendance/attendenceDone">
                        <button className="cmnBtn called-btn border-0 mr-3">
                            Start Called Attendence
                        </button>
                    </Link>
                    <Link href="/dashboard_1/groups/groupcard/attendance/weeklyAttendence">
                      <button className="cmnBtn btn-cancel">Cancel</button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default callAttendence;

import React, { useEffect, useState } from 'react';
import calender from '/Assets/icon/calendar-line.svg';
import Image from 'next/image';
import { Wrapper } from '../../../../../styles/AttendenceWrapper';
import FakeData from '../attendance/FakeData.json';
const createdAttendence = () => {
    const [attendences, setAttendences] = useState([]);

    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="bg-white p-5">
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

            <div className="attendence-table mt-5">
                <div className="attendence-table-head">
                    <div className="name">
                        <p className="pt-3">Name</p>
                    </div>
                    <div className="pt-3">
                        <small>
                            <i class="far fa-clock"></i> Attendence Time 12:45PM
                        </small>
                    </div>
                    <div className="px-5 math">
                        <div className="w-25">Math</div>
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
                                <div className="col">
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
                                </div>
                                <div className="col">
                                    <h5 className="pal pt-3">P A L</h5>
                                </div>
                                <div className="col">
                                    <div className="text-end pe-5">
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
            <div className="bottom-right-btns">
                <button className="cmnBtn called-btn border-0 mr-3">Start Called Attendence</button>
                <button className="cmnBtn btn-cancel">Cancel</button>
            </div>
        </Wrapper>
    );
};

export default createdAttendence;

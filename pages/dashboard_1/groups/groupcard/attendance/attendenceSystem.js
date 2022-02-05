import React, { useState } from 'react';
import { Wrapper } from '../../../../../styles/StyledComponentWrapper';
import calender from '/Assets/icon/calendar-line.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import CheckBox from '../../../../../Components/Common/CheckBox/CheckBox';
import styled from 'styled-components';

const attendenceSystem = (props) => {
    const [saturday, setSaturday] = useState(1);
    const [sunday, setSunday] = useState(1);
    const [monday, setMonday] = useState(1);
    const [tuesday, setTuesday] = useState(1);
    const [wednesday, setWednesday] = useState(1);
    const [thursday, setThursday] = useState(1);
    const [friday, setFriday] = useState(1);

    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="wrapper-width bg-white p-4">
            <h3 className='system'>Attendence System</h3>
            <div className="attendence-stystem d-lg-flex">
                
                <CheckBox  name="Point" />
                <CheckBox name="Present" />
            </div>

            {/* Attendence Dates */}

            <div className="attendence-dates py-3">
                <div className="attendence-starting-date pe-5">
                    <p>Attendence Starting Date</p>
                    <div className="date">
                        <div className="select-date">
                            <input type="date" className="selectDiet-date" />
                        </div>
                        <div className="attendence-calendar">
                            <Image src={calender} alt="calendar-line" />
                        </div>
                    </div>
                </div>
                <div className="attendence-ending-date ">
                    <p>Attendence Ending Date</p>
                    <div className="date">
                        <div className="select-date">
                            <input type="date" className="selectDiet-date" />
                        </div>
                        <div className="attendence-calendar">
                            <Image src={calender} alt="calendar-line" />
                        </div>
                    </div>
                </div>
            </div>

            {/* attendence per day
        attendence per day
        attendence per day
        attendence per day*/}

            <div className="attendence-per-day">
                <p className='per-day'> Select How Many Attendence Per Day?</p>

                {/* Saturday */}
                <div className="attendence-days">
                    <CheckBox name="Saturday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${saturday} Time`} />
                        </div>
                        <div className="upDown-btn">
                            <button className="up-btn" onClick={() => setSaturday(saturday + 1)}>
                                <AiOutlineUp
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                />
                            </button>
                            <button
                                className="down-btn"
                                onClick={() => saturday >= 2 && setSaturday(saturday - 1)}>
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

                {/* Sunday */}
                <div className="attendence-days">
                    <CheckBox name="Sunday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${sunday} Time`} />
                        </div>
                        <div className="upDown-btn">
                            <button className="up-btn" onClick={() => setSunday(sunday + 1)}>
                                <AiOutlineUp
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                />
                            </button>
                            <button
                                className="down-btn"
                                onClick={() => sunday >= 2 && setSunday(sunday - 1)}>
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

                {/* Monday */}
                <div className="attendence-days">
                    <CheckBox name="Monday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${monday} Time`} />
                        </div>
                        <div className="upDown-btn">
                            <button className="up-btn" onClick={() => setMonday(monday + 1)}>
                                <AiOutlineUp
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                />
                            </button>
                            <button
                                className="down-btn"
                                onClick={() => monday >= 2 && setMonday(monday - 1)}>
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

                {/* Tuesday */}
                <div className="attendence-days">
                    <CheckBox name="Tuesday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${tuesday} Time`} />
                        </div>
                        <div className="upDown-btn">
                            <button className="up-btn" onClick={() => setTuesday(tuesday + 1)}>
                                <AiOutlineUp
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                />
                            </button>
                            <button
                                className="down-btn"
                                onClick={() => tuesday >= 2 && setTuesday(tuesday - 1)}>
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

                {/* Wednesday */}

                <div className="attendence-days">
                    <CheckBox name="Wednesday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${wednesday} Time`} />
                        </div>
                        <div className="upDown-btn">
                            <button className="up-btn" onClick={() => setWednesday(wednesday + 1)}>
                                <AiOutlineUp
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                />
                            </button>
                            <button
                                className="down-btn"
                                onClick={() => wednesday >= 2 && setWednesday(wednesday - 1)}>
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

                {/* Thursday */}

                <div className="attendence-days">
                    <CheckBox name="Thursday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${thursday} Time`} />
                        </div>
                        <div className="upDown-btn">
                            <button className="up-btn" onClick={() => setThursday(thursday + 1)}>
                                <AiOutlineUp
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                />
                            </button>
                            <button
                                className="down-btn"
                                onClick={() => thursday >= 2 && setThursday(thursday - 1)}>
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

                {/* Friday */}
                <div className="attendence-days">
                    <CheckBox name="Friday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${friday} Time`} />
                        </div>
                        <div className="upDown-btn">
                            <button onClick={() => setFriday(friday + 1)} className="up-btn">
                                <AiOutlineUp
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}
                                />
                            </button>
                            <button
                                onClick={() => friday >= 2 && setFriday(friday - 1)}
                                className="down-btn">
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

            <div
                className="accordion accordion-flush mt-5 mb-3 frequently-question"
                id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button rounded collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Test Name?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the first item's
                            accordion body.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Total Test?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the second item's
                            accordion body. Let's imagine this being filled with some actual
                            content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Test Name?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the third item's
                            accordion body. Nothing more exciting happening here in terms of
                            content, but just filling up the space to make it look, at least at
                            first glance, a bit more representative of how this would look in a
                            real-world application.
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-btns">
                <Link  href="/dashboard_1/groups/groupcard/attendance/weeklyAttendence">
                    <button className="cmnBtn border-0 mr-3">Next</button>
                </Link>

                <Link href="/dashboard_1/groups/groupcard/attendance/">
                    <button className="cmnBtn btn-cancel">Cancel</button>
                </Link>
            </div>
        </Wrapper>
    );
};

export default attendenceSystem;

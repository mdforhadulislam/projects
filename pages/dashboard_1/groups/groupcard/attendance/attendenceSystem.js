import React, { useState } from 'react';
import { Wrapper } from '../../../../../styles/attendenceWrapper';
import calender from '/Assets/icon/calendar-line.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineDown } from 'react-icons/ai';
import CheckBox from '../../../../../Components/Common/CheckBox/CheckBox';

const attendenceSystem = (props) => {
    const [saturday, setSaturday] = useState(1);
    const [sunday, setSunday] = useState(1);
    const [monday, setMonday] = useState(1);
    const [tuesday, setTuesday] = useState(1);
    const [wednesday, setWednesday] = useState(1);
    const [thursday, setThursday] = useState(1);

    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="wrapper-width bg-white p-4">
            <div className="attendence-stystem">
                <h3>Attendence System</h3>
                <CheckBox name="Point" />
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
                <div className="attendence-ending-date ms-5 ps-5">
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
                <p> Select How Many Attendence Per Day?</p>

                {/* Saturday */}
                <div className="attendence-days">
                    <CheckBox name="Saturday" />

                    <div className="attendence-per-day-input">
                        <div className="input">
                            <input type="text" value={`${saturday} Time`} />
                        </div>
                        <div className="buttons">
                            <button onClick={() => setSaturday(saturday + 1)}>
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <button onClick={() => saturday >= 2 && setSaturday(saturday - 1)}>
                                <i class="fas fa-chevron-down"></i>
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
                        <div className="buttons">
                            <button onClick={() => setSunday(sunday + 1)}>
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <button onClick={() => sunday >= 2 && setSunday(sunday - 1)}>
                                <i class="fas fa-chevron-down"></i>
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
                        <div className="buttons">
                            <button onClick={() => setMonday(monday + 1)}>
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <button onClick={() => monday >= 2 && setMonday(monday - 1)}>
                                <i class="fas fa-chevron-down"></i>
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
                        <div className="buttons">
                            <button onClick={() => setTuesday(tuesday + 1)}>
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <button onClick={() => tuesday >= 2 && setTuesday(tuesday - 1)}>
                                <i class="fas fa-chevron-down"></i>
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
                        <div className="buttons">
                            <button onClick={() => setWednesday(wednesday + 1)}>
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <button onClick={() => wednesday >= 2 && setWednesday(wednesday - 1)}>
                                <i class="fas fa-chevron-down"></i>
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
                        <div>
                            <button onClick={() => setThursday(thursday + 1)}>
                                <AiOutlineDown />
                            </button>
                            <button onClick={() => thursday >= 2 && setThursday(thursday - 1)}>
                                <AiOutlineDown />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Friday */}
                <div className="attendence-days">
                    <CheckBox name="Friday" />

                    <div className="attendence-per-day-input disabled-border">
                        <div className="input" disabled>
                            <input type="text" disabled value="0" />
                        </div>
                        <div className="buttons">
                            <button disabled className="disabled-bg">
                                <i class="fas fa-chevron-up"></i>
                            </button>
                            <button disabled className="disabled-bg">
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-btns">
                <Link href="/dashboard_1/groups/groupcard/attendance/createAttendence">
                    <button className="cmnBtn border-0 mr-3">Next</button>
                </Link>

                <button className="cmnBtn btn-cancel">Cancel</button>
            </div>
        </Wrapper>
    );
};

export default attendenceSystem;

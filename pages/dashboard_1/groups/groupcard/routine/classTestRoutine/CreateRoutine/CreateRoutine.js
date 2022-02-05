import React, { useState } from 'react';
import CheckBox from '/Components/Common/CheckBox/CheckBox';
import Image from 'next/image';
import addIcon from '/Assets/icon/add more plus.svg';
import styled from 'styled-components';
import calender from '/Assets/icon/calendar-line.svg';

const CreateRoutine = () => {
    const [weekday, setWeekDay] = useState([
        '2nd Test',
        '3rd Test',
        '4th Test',
        '5th Test',
        '6th Test',
        '7th Test',
        '8th Test '
    ]);
    return (
        <Wrapper style={{ width: '85%', margin: '0 auto' }}>
            <div className="custom-table-container">
                <table className="workout-table">
                    <thead>
                        <th>
                            <td>Select</td>
                            <td>1st Test</td>
                            {weekday.map((day, index) => (
                                <td key={index}>{day}</td>
                            ))}
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <CheckBox name="Date" />
                            </td>
                            <td>
                                <div className="attendence-starting-date">
                                    <div className="date">
                                        <div className="select-date">
                                            <input type="date" className="selectDiet-date" />
                                        </div>
                                        <div className="attendence-calendar">
                                            <Image src={calender} alt="calendar-line" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            {weekday.map((day, index) => (
                                <td key={index}> <div className="attendence-starting-date">
                                <div className="date">
                                    <div className="select-date">
                                        <input type="date" className="selectDiet-date" />
                                    </div>
                                    <div className="attendence-calendar">
                                        <Image src={calender} alt="calendar-line" />
                                    </div>
                                </div>
                            </div>
                            
                            </td>
                            
                            ))}
                        </tr>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <tr key={idx}>
                                <td><CheckBox  name="Time" />
                                
                                </td>
                                <td><div className="d-flex time-input-container text-start border-0">
                                    <input
                                        type="time"
                                        className="select-time-input m-0"
                                        value="09:30:00"
                                    />
                                </div></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                        <tr>
                            <td className="">
                                <button className="my-3 border-0 rounded bg-white text-dark py-2 d-flex align-items-center add-more-icon">
                                    <Image className="me-2" src={addIcon} alt="add more plus" />
                                    Add More
                                </button>
                            </td>
                            <td className=""></td>
                            <td>
                                
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default CreateRoutine;

const Wrapper = styled('div')`
    /* after creating routine styles start */
    .workout-table {
        margin-bottom: 40px;
        color: #666;
    }
    .workout-table th {
        color: #fff;
        white-space: nowrap;
        border-radius: 15px 15px 0 0;
        font-size: 18px;
        position: sticky;
        top: 0;
    }
    .workout-table th td {
        padding: 12px 20px;
        background-color: #e22424;
        height: 60px;
    }
    .workout-table th td:first-child {
        border-top-left-radius: 15px;
    }
    .workout-table th td:last-child {
        border-top-right-radius: 15px;
    }
    .workout-table th td,
    .workout-table tr td {
        width: 285px;
        display: inline-block;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .workout-table tr:first-child {
        border-top: none;
    }
    .workout-table tr:first-child td {
        padding: 5px;
        height: 70px;
        border: 1px solid #c7c7c7;
        border-top: none;
        border-bottom: 0;
        border-right: 0;
    }
    /* .workout-table tr:first-child td:first-child {
        border-bottom: 0;
    } */
    .workout-table tr:nth-child(2) td:first-child {
        border-top: 1px solid #c7c7c7;
    }
    .workout-table tr td {
        border: 1px solid #c7c7c7;
        height: 70px;
        padding: 5px;
        display: inline-flex;
        align-items: center;
        border-bottom: 0;
        border-right: 0;
    }
    .workout-table tr td:first-child {
        border-left: 1px solid #c7c7c7;
    }
    .workout-table tr td:last-child {
        border-right: 1px solid #c7c7c7;
    }
    .workout-table tr:last-child td {
        border-bottom: 1px solid #c7c7c7;
    }
    i {
        color: #666;
    }
    .CheckBox__Wrapper-sc-1vre3qs-0 {
        margin-left: -129px;
        margin-top: 29px;
    }
    .date {
        display: flex;
        border: 1px solid rgb(220, 14, 14);
        position: relative;
        border-radius: 8px;
    }
    .per-day {
        margin-bottom: 27px;
        margin-top: 19px;
    }
    .select-date {
        padding: 5px 0;
        width: 179px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* p{
        margin-right: 2rem;
    } */
    .select-date input {
        border: none;
        padding: 5px 10px;
        color: rgb(121, 121, 121);
        outline: none;
    }
    .attendence-calendar {
        width: 40px;
        background: rgb(220, 14, 14);
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 7px 0;
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    .attendence-calendar img {
        width: 50%;
    }
`;

import styled from 'styled-components';
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import dayjs from 'dayjs';
import icon from '../../../../../Assets/images/resite/calendar-line.svg';
import GrayLeftIcon from '../../../../../Assets/images/dashboard/GrayLeftIcon';
import RightIcon from '../../../../../Assets/images/dashboard/RightIcon';
import { useDispatch, useSelector } from 'react-redux';
import { monthIndexAdd, monthIndexRemove } from '../../../../../Redux/Dashboard_1/Action/expensesAction';
import { FaEdit, FaPlus, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

const DietRoutine = () => {
    const [routineName, setRoutineName] = useState(true);
    const [academy, setAcademy] = useState(false);
    const [takeRoutineName, setTakeRoutineName] = useState(' ');
    const [hover, setHover] = useState(true);
    
    const monthIndexData = useSelector((state) => state.expensesReducers.monthIndex);
    const dispatch = useDispatch();

    const handleNextBtn = () => {
        const giveRoutineName = document.getElementById('routine-name').value;
        setTakeRoutineName(giveRoutineName);
        setAcademy(true);
    }

    const handleMonthAdd = () => {
        dispatch(monthIndexAdd());
    };

    const handleMonthRemove = () => {
        dispatch(monthIndexRemove());
    };

    return (
        <Wrapper>
            {routineName &&
                <div id="created-diet-routine" className="created-diet-routine text-center" onClick={() => setRoutineName(false)} >
                    <i className="">
                        <FaPlus />
                    </i>
                    <h3>Create A Diet Routine</h3>
                </div>}

            <div id="diet-routine-section">
                <div className="diet-routine-head">
                    {!routineName && !academy &&
                        <div className="diet-routine-input mt-5">
                            <h3 className="routine-headline my-3">Give A Routine Name </h3>
                            <div className="get-user-input">
                                <div className='row'>
                                    <input id="routine-name" placeholder='Give a routine name' type="text" className="user-input-field" style={{ marginLeft: '14px' }} />
                                </div>
                            </div>
                            <div>
                                <h4 className="choose-day mb-4">Diet Starting Date</h4>
                                <HeaderPart>
                                    <BoxOfCalender>
                                        <button onClick={handleMonthRemove}>
                                            <GrayLeftIcon />
                                        </button>
                                        <h5>{dayjs(new Date(dayjs().year(), monthIndexData)).format('MMMM YYYY')}</h5>
                                        <button onClick={handleMonthAdd}>
                                            <RightIcon />
                                        </button>
                                        <DateIcon>
                                            <Image src={icon} alt="Calender" />
                                        </DateIcon>
                                    </BoxOfCalender>
                                </HeaderPart>
                            </div>
                            <div className="d-flex btn-bottom mb-5 mt-4">
                                <Link href="/dashboard_1/groups/groupcard/routine/dietRoutine/dietRoutineTable">
                                    <button id="dietChoosDateNextBtn" className="cmnBtn border-0 me-3">Next</button>
                                </Link>
                                <button id="dietChoosDateCancelBtn" className="cmnBtn">Cancel</button>
                            </div>
                        </div>}
                </div>
            </div>
        </Wrapper>
    );
};

export default DietRoutine;

const Wrapper = styled('div')`
width: 85%;
margin: auto;

.created-diet-routine {
    padding: 72px 0 55px;
    box-shadow: 0 0 3px #d3d3d3;
    margin-top: 22px;
    border-radius: 5px;
    cursor: pointer;
}

.created-diet-routine i {
    font-size: 30px;
    border: 1px solid #d3d3d3;
    padding: 15px;
    color: #d3d3d3;
}

.created-diet-routine h3 {
    margin-top: 25px;
}

#diet-routine-section .selectDiet-date {
    height: 50px;
    margin-bottom: 29px;
    width: 215px;
    padding: 0 14px;
    border-radius: 5px;
    border: 1px solid red;
    padding-left: 51px;
}

#diet-routine-section .calendar img {
    margin-top: 10px;
    margin-left: 15px;
}

.routine-inner .routine-headline {
    margin-top: 70px;
}

.user-input-field {
    height: 76px;
    background: #ECECEC;
    padding-left: 20px;
    border: 0;
    border-radius: 10px;
    width: 96%;
    margin-bottom: 35px;
    width: 450px;
    font-size: 20px;
}

.user-input-field:focus-visible {
    outline: none
}

.routine-inner .user-input-field {
    height: 65px;
    margin: 15px 0 30px;
}

.routine-inner .choose-day {
    margin-bottom: 25px;
}

#diet-routine-getuserInput .choose-day {
    font-size: 18px;
    margin-right: 15px;
    color: #C7C7C7;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}

.time-input-container input[type="time"]::-webkit-calendar-picker-indicator {
    background-color: #00f7ff;
    width: 20px;
    height: 100%;
    filter: invert(1);
}

#diet-routine-section .calendar {
    width: 60px;
    height: 50px;
    background: red;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-right: -8px;
    z-index: 1;
}

#diet-routine-getuserInput .calendar {
    margin-top: -29px;
}

.select-date-field {
    position: relative;
}

.left-angle,
.right-angle {
    z-index: 1;
    position: absolute;
    top: 10px;
}

.left-angle {
    left: 18px;
}

.right-angle {
    left: 155px;
}

.btn-bottom .cmnBtn:last-child {
    background: #fff;
    border: 1px solid #E22424;
    color: #E22424;
}

.btn-bottom .cmnBtn:last-child:hover {
    background: #E22424;
    color: #fff;
    border-color: #E22424;
}

.cmnBtn {
    color: #fff;
    width: 160px;
    height: 45px;
    background: #E22424;
    border-radius: 5px;
}

.diet-routine-table-body-text .cmnBtn {
    margin: 7px 0;
}

.diet-routine-inner .user-edit-input {
    margin: 0;
    margin-right: 42px;
}

.after-created-routine-header {
    margin-bottom: 25px;
}

.after-created-routine-header span {
    font-size: 18px;
}

.after-created-routine-header span:last-child {
    cursor: pointer;
}

.after-created-routine-header span i {
    color: #666;
    padding-right: 4px;
}

.after-created-routine-header span:first-child {
    margin-right: 30px;
    position: relative;
}

.after-created-routine-header span:first-child::after {
    content: "";
    position: absolute;
    right: -16px;
    top: 1px;
    width: 2px;
    height: 17px;
    background: #666;
}

.diet-routine-edit-section {
    margin: 33px 0 38px;
}

#routine-edit {
    display: none;
}

.diet-routine-bottom-btn {
    margin-top: 75px;
}

.diet-routine-accordion{
    width: 500px;
    max-width: 100%;
}

#cancelDietRoutineBtn{
    color: red;
    background-color: white;
}
`;

const HeaderPart = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    margin-left: -16px;
`;

const BoxOfCalender = styled('div')`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid red;
    border-radius: 8px;
    padding-left: 4.5rem;
    padding-right: 1rem;
    height: 4rem;
    button {
        border: none;
        background-color: transparent;
    }
    h5 {
        text-align: center;
        width: 185px;
        padding: 0.3rem 1rem;
        margin-bottom: 0;
    }
`;

const DateIcon = styled('div')`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
    width: 4rem;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    left: 0% !important;
    top: 0%;
    pointer-events: none;
    z-index: 1;
    background: #e22424;
    background-size: 60%;

    span {
        width: 2rem !important;
        height: 28px !important;
    }
`;
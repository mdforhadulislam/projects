import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import MonthBox from './MonthBox';
import { getMonthCustom } from '../../../Utilities/utilits';
import { useDispatch, useSelector } from 'react-redux';
import { monthIndexAdd, monthIndexRemove } from '../../../Redux/Dashboard_1/Action/expensesAction';
import icon from '../../../Assets/images/resite/calendar-line.svg';
import Image from 'next/image';
import RightIcon from '../../../Assets/images/dashboard/RightIcon';
import GrayLeftIcon from '../../../Assets/images/dashboard/GrayLeftIcon';
const FullCalender = () => {
    const [currentMonth, setCurrentMonth] = React.useState(getMonthCustom());
    const dispatch = useDispatch();
    const monthIndexData = useSelector((state) => state.expensesReducers.monthIndex);
    const handleMonthAdd = () => {
        dispatch(monthIndexAdd());
    };
    const handleMonthRemove = () => {
        dispatch(monthIndexRemove());
    };
    React.useEffect(() => {
        setCurrentMonth(getMonthCustom(monthIndexData));
    }, [monthIndexData]);

    return (
        <Wrapper>
            <HeaderPart>
                <h4>Appointment</h4>
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
            <CalenderBody>
                <MonthBox month={currentMonth} />
            </CalenderBody>
        </Wrapper>
    );
};

export default FullCalender;
const Wrapper = styled('div')`
    width: 100%;
    height: 100%;
    background-color: white;
    margin-top: 2rem;
    border-radius: 8px;

    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
`;
const CalenderBody = styled('div')`
    padding: 1rem 1rem;
`;
const HeaderPart = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
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
        width: 190px;
        padding: 0.3rem 1rem;
        margin-bottom: 0;
    }
`;

const DateIcon = styled('div')`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 4rem;
    left: 0% !important;
    top: 0%;
    pointer-events: none;
    z-index: 1;
    background: #e22424;
    border-radius: 0.3rem;
    background-size: 60%;

    span {
        width: 2rem !important;
        height: 28px !important;
    }
`;

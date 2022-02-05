import React from 'react';
import ReactDatePicker from 'react-datepicker';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getYear';
import Image from 'next/image';
import icon from '../../../Assets/images/resite/calendar-line.svg';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const NewInputDateBox = ({ startDate, setStartDate }) => {
    const range = (start, end) => {
        return new Array(end - start).fill().map((d, i) => i + start);
    };
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return (
        <div>
            <DateMainBox>
                <ReactDatePicker
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                    }) => (
                        <div
                            style={{
                                margin: 10,
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                {'<'}
                            </button>
                            <select
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(value)}>
                                {years.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={months[getMonth(date)]}
                                onChange={({ target: { value } }) =>
                                    changeMonth(months.indexOf(value))
                                }>
                                {months.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>

                            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                {'>'}
                            </button>
                        </div>
                    )}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <DateIcon>
                    <Image src={icon} alt="Calender" />
                </DateIcon>
            </DateMainBox>
        </div>
    );
};

export default NewInputDateBox;
const DateMainBox = styled('div')`
    position: relative;
    input {
        border: 1px solid red;
        border-radius: 8px;
    }
`;
const DateIcon = styled('div')`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 4rem;
    right: 0% !important;
    top: 0%;
    pointer-events: none;
    z-index: 0;
    background: #e22424;
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    background-size: 60%;

    span {
        width: 2rem !important;
        height: 28px !important;
    }
`;

import React from 'react';
import styled from 'styled-components';
import logo from '../../../Assets/images/resite/calendar-line.svg';
import Image from 'next/image';
const InputDateBoxEdit = () => {
    return (
        <Wrapper>
            <div className="note_date_input">
                <input type="date" defaultValue="2021-09-11" id="note_date" required />

                <div className="calender_icon">
                    <Image src={logo} alt="Calender" />
                </div>
            </div>
        </Wrapper>
    );
};

export default InputDateBoxEdit;

const Wrapper = styled('div')`
    .note_date_input {
        position: relative;
        width: 204px;
        height: 41px;
        border-radius: 0.7rem;
    }

    .note_date_input #note_date {
        display: inline;
        height: 41px;
        width: 204px;
        font-size: 1rem;
        color: slategray;
        outline: none;
        border: 0.1vw solid #e22424;
        border-radius: 0.3rem;
        padding-right: 10rem;
        padding-left: 0.7rem;
        text-align: center;
    }

    .note_date_input #note-date::-webkit-calendar-picker-indicator {
        transform: scale(1.6);
        margin-right: 0.6vw;
    }

    .note_date_input .calender_icon {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 41px;
        width: 46px;
        right: 0% !important;
        top: 0%;
        pointer-events: none;
        z-index: 10;
        background: #e22424;
        border-radius: 0.3rem;
        background-size: 60%;
    }
    .note_date_input .calender_icon span {
        width: 2rem !important;
        height: 28px !important;
    }
`;

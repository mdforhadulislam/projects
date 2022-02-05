import dayjs from 'dayjs';
import React from 'react';

import styled from 'styled-components';

const DayBox = ({ day, rowIndex, appointmentFakeData }) => {
    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'backgroundRed' : '';
    };
    const getDayClass = appointmentFakeData.map((user) => user.date.toLocaleDateString('en'));
    console.log();
    return (
        <Wrapper>
            {rowIndex === 0 && <p>{day.format('ddd')}</p>}
            <Item>
                <p className={`${getCurrentDayClass()}`}>{day.format('DD')}</p>
                {day.format('M/DD/YYYY') === getDayClass[rowIndex] && <p>hello</p>}
            </Item>
        </Wrapper>
    );
};

export default DayBox;
const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Item = styled('div')`
    border: 1px solid rgb(188, 188, 188);

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100px;
    p {
        font-size: 14px;
        color: rgb(102, 102, 102);
    }

    .backgroundRed {
        background-color: red;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding: 0.3rem;
    }
`;
const UserBox = styled('div')``;

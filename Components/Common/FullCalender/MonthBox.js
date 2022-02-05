import React from 'react';
import styled from 'styled-components';

import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const DayBox = dynamic(() => import('./DayBox'));

const MonthBox = ({ month }) => {
    const appointmentFakeData = useSelector((state) => state.appointmentReducers.appointment);
    return (
        <Wrapper>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <DayBox
                            day={day}
                            key={idx}
                            rowIndex={i}
                            appointmentFakeData={appointmentFakeData}
                        />
                    ))}
                </React.Fragment>
            ))}
        </Wrapper>
    );
};

export default MonthBox;
const Wrapper = styled('div')`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

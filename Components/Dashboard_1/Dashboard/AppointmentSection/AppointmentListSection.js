import React from 'react';
import styled from 'styled-components';
import AppointmentDuty from './AppointmentDuty';

const AppointmentListSection = () => {
    const [isDutyTrue, setIsDutyTrue] = React.useState(true);
    const handChangeDuty = (e) => {
        setIsDutyTrue(true);
        e.target.parentElement.children[0].style.color = 'red';
        e.target.parentElement.children[1].style.color = 'black';
        e.target.parentElement.children[1].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[0].style.borderBottom = '1px solid red';
    };
    const handleChangeOffline = (e) => {
        setIsDutyTrue(false);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[1].style.color = 'red';
        e.target.parentElement.children[1].style.borderBottom = '1px solid red';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
    };
    return (
        <Wrapper>
            <TopNavPart>
                <h6 className="duty_text" onClick={handChangeDuty}>
                    Dutypedia User
                </h6>
                <h6 className="offline_text" onClick={handleChangeOffline}>
                    Offline User
                </h6>
            </TopNavPart>
            <MidBoxPart>{isDutyTrue && <AppointmentDuty />}</MidBoxPart>
        </Wrapper>
    );
};

export default AppointmentListSection;
const Wrapper = styled('div')`
    background-color: white;
    border-radius: 8px;
    margin-top: 1rem;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
`;
const TopNavPart = styled('div')`
    display: flex;
    justify-content: center;
    h6 {
        padding: 0.8rem 2rem;
        border-bottom: 1px solid lightgray;
        cursor: pointer;
    }
    .duty_text {
        border-right: 1px solid lightgray;
        border-bottom: 1px solid red;
        color: red;
    }
`;
const MidBoxPart = styled('div')`
    padding: 1rem 1rem;
`;

import React from 'react';
import styled from 'styled-components';
import AppointmentCard from './AppointmentCard';
import { useSelector } from 'react-redux';
import AppointmentMainCard from '/Components/Dashboard_1/Appointment/AppointmentMainCard/AppointmentMainCard';

const AppointmentDuty = () => {
    const [isUpcoming, setIsUpcoming] = React.useState(true);
    const [isPrevious, setIsPrevious] = React.useState(false);
    const [isRequest, setIsRequest] = React.useState(false);
    const handlePrevious = (e) => {
        setIsPrevious(true);
        setIsUpcoming(false);
        setIsRequest(false);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[4].style.color = 'black';
        e.target.parentElement.children[4].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.borderBottom = '1px solid red';
        e.target.parentElement.children[2].style.color = 'red';
    };
    const handleRequest = (e) => {
        setIsPrevious(false);
        setIsUpcoming(false);
        setIsRequest(true);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[4].style.borderBottom = '1px solid red';
        e.target.parentElement.children[4].style.color = 'red';
    };
    const handleUpcoming = (e) => {
        setIsPrevious(false);
        setIsUpcoming(true);
        setIsRequest(false);
        e.target.parentElement.children[4].style.color = 'black';
        e.target.parentElement.children[4].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[0].style.borderBottom = '1px solid red';
        e.target.parentElement.children[0].style.color = 'red';
    };
    const appointmentFakeData = useSelector((state) => state.appointmentReducers.appointment);
    const previousAppointmentFakeData = useSelector(
        (state) => state.appointmentReducers.previousAppointment
    );
    return (
        <Wrapper>
            <TopNavPart>
                <h6 onClick={handleUpcoming}>Upcoming</h6>
                <div></div>
                <h6 onClick={handlePrevious}>Previous</h6>
                <div></div>
                <h6 onClick={handleRequest}>Request</h6>
            </TopNavPart>
            {isUpcoming && (
                <MainBody>
                    {appointmentFakeData?.map((appointment) => (
                        <AppointmentMainCard
                            appointment={appointment}
                            isPrevious={isPrevious}
                            key={appointment.id}
                        />
                    ))}
                </MainBody>
            )}
            {isPrevious && (
                <MainBody>
                    {previousAppointmentFakeData?.map((appointment) => (
                        <AppointmentMainCard
                            appointment={appointment}
                            isPrevious={isPrevious}
                            key={appointment.id}
                        />
                    ))}
                </MainBody>
            )}
            {isRequest && (
                <MainBody>
                    <AppointmentCard />
                    <AppointmentCard />
                </MainBody>
            )}
        </Wrapper>
    );
};

export default AppointmentDuty;
const Wrapper = styled('div')``;
const TopNavPart = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 2px;
        height: 25px;
        background-color: lightgray;
    }
    h6 {
        padding: 1rem 5rem;
        border-bottom: 1px solid lightgray;
        cursor: pointer;
    }
    h6:first-child {
        color: red;
        border-bottom: 1px solid red;
    }
`;
const MainBody = styled('div')`
    .AppointmentMainCard__ImageContainerEmployee-sc-1b237fu-5 {
        width: 60px;
        img {
            width: 50px !important;
        }
        svg {
        width: 15px;
        height: 15px;
    }
    .AppointmentMainCard__EmployeeTextItem-sc-1b237fu-3{
        font-size: 13px;
    }
`;

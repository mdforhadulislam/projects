import React from 'react';
import styled from 'styled-components';
import InputSearchBox from '../../Common/InputSearchBox/InputSearchBox';
import NewInputDateBox from '../../Common/InputDateBox/NewInputDateBox';
import AppointmentMainCard from './AppointmentMainCard/AppointmentMainCard';
import AppointmentSentRequestCard from './AppointmentSentRequestCard/AppointmentSentRequestCard';
import AppointmentReceivedReqCard from './AppointmentReceivedReqCard/AppointmentReceivedReqCard';

import Modal from 'react-modal';
import ModalForm from './ModalForm';
import { useSelector } from 'react-redux';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px'
    }
};
Modal.setAppElement('#__next');

const Appointment = () => {
    const [startDate, setStartDate] = React.useState(new Date());
    const [isUpcoming, setIsUpcoming] = React.useState(true);
    const [isPrevious, setIsPrevious] = React.useState(false);
    const [isRequest, setIsRequest] = React.useState(false);
    const [isSentRequest, setIsSentRequest] = React.useState(true);
    const [isRecRequest, setIsRecRequest] = React.useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const appointmentFakeData = useSelector((state) => state.appointmentReducers.appointment);
    const previousAppointmentFakeData = useSelector(
        (state) => state.appointmentReducers.previousAppointment
    );

    const appointmentFakeDataReceived = useSelector(
        (state) => state.appointmentReducers.appointmentReceived
    );
    const appointmentFakeDataSent = useSelector(
        (state) => state.appointmentReducers.appointmentSent
    );
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
    /////Request function/////
    const handleSentReq = (e) => {
        setIsSentRequest(true);
        setIsRecRequest(false);
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[0].style.borderBottom = '1px solid red';
        e.target.parentElement.children[0].style.color = 'red';
    };
    const handleReceivedReq = (e) => {
        setIsSentRequest(false);
        setIsRecRequest(true);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.borderBottom = '1px solid red';
        e.target.parentElement.children[2].style.color = 'red';
    };
    return (
        <Wrapper>
            <h2>Appointment</h2>
            <TopSection>
                <InputSearchBox />
                <DateMainBox>
                    <DateBox>
                        <h5>Search by Date</h5>
                        <NewInputDateBox startDate={startDate} setStartDate={setStartDate} />
                    </DateBox>
                </DateMainBox>
            </TopSection>
            <MidBody>
                <TopNavPart>
                    <h5 onClick={handleUpcoming}>Upcoming</h5>
                    <div></div>
                    <h5 onClick={handlePrevious}>Previous</h5>
                    <div></div>
                    <h5 onClick={handleRequest}>Request</h5>
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
                    <MainBodyReq>
                        <TopNavPartRequest>
                            <h6 onClick={handleSentReq}>Sent</h6>
                            <div></div>
                            <h6 onClick={handleReceivedReq}>Received</h6>
                        </TopNavPartRequest>
                        {isSentRequest && (
                            <MainBody>
                                {appointmentFakeDataSent.map((appointment) => (
                                    <AppointmentSentRequestCard
                                        appointment={appointment}
                                        key={appointment.id}
                                    />
                                ))}
                            </MainBody>
                        )}
                        {isRecRequest && (
                            <MainBody>
                                {appointmentFakeDataReceived.map((appointment) => (
                                    <AppointmentReceivedReqCard
                                        appointment={appointment}
                                        key={appointment.id}
                                    />
                                ))}
                            </MainBody>
                        )}
                    </MainBodyReq>
                )}
            </MidBody>
            <FixedPlusContent>
                <button onClick={openModal}>+</button>
            </FixedPlusContent>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <ModalForm closeModal={closeModal} />
            </Modal>
        </Wrapper>
    );
};

export default Appointment;
const Wrapper = styled('div')`
    position: relative;
    width: 90%;
    background-color: white;
    margin: 2rem auto;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    padding: 2rem 3rem;
    h2 {
        text-align: center;
    }
    @media screen and (max-width: 920px) {
        h2 {
            font-size: 18px;
        }
        padding: 2rem 1rem;
    }
`;
const TopSection = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 920px) {
        flex-direction: column;
        justify-content: flex-end;
        input::placeholder {
            font-size: 70%;
        }
        .InputSearchBox__Wrapper-sc-1jmm4tk-0 {
            width: 100%;
        }
    }
`;
const DateMainBox = styled('div')`
    @media screen and (max-width: 920px) {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 2%;
    }
`;
const DateBox = styled('div')`
    display: flex;
    align-items: center;
    h5 {
        margin-right: 1rem;
    }
    input {
        width: 18.5rem;
        border: 1px solid lightgray;
        border-radius: 10px;

        height: 4rem;

        padding-left: 6rem;

        :focus {
            outline: none;
        }
    }
    .NewInputDateBox__DateIcon-sc-1pbplnh-1 {
        left: 0% !important;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0.6rem;
        border-bottom-left-radius: 0.6rem;
    }
    @media screen and (max-width: 920px) {
        h5 {
            font-size: 13px;
            margin-bottom: 0;
        }
        input {
            width: 100%;
            height: 2rem;
            padding-left: 30%;
            font-size: 13px;
            border-radius: 7px;
        }
        .NewInputDateBox__DateIcon-sc-1pbplnh-1 {
            width: 2.5rem;
            height: 2rem;
            border-top-left-radius: 0.35rem;
            border-bottom-left-radius: 0.35rem;
            span {
                height: 20px !important;
            }
        }
    }
`;
const MidBody = styled('div')`
    margin-top: 2rem;
`;
const TopNavPart = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    div {
        width: 2px;
        height: 25px;
        background-color: lightgray;
    }
    h5 {
        padding: 1.2% 14%;
        border-bottom: 1px solid lightgray;
        font-size: 90%;

        cursor: pointer;
    }
    h5:first-child {
        color: red;
        border-bottom: 1px solid red;
    }
    @media screen and (max-width: 920px) {
        div {
            width: 2px;
            height: 10px;
        }
        h5 {
            font-size: 60%;
            padding: 1.2% 9.5%;
        }
    }
`;
const MainBody = styled('div')``;
const MainBodyReq = styled('div')``;
const TopNavPartRequest = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 2px;
        height: 25px;
        background-color: lightgray;
    }
    h6 {
        padding: 1.2% 4%;
        border-bottom: 1px solid lightgray;
        cursor: pointer;
    }
    h6:first-child {
        color: red;
        border-bottom: 1px solid red;
    }
    @media screen and (max-width: 920px) {
        h6 {
            font-size: 50%;
        }
        div {
            height: 14px;
        }
    }
`;
const FixedPlusContent = styled('div')`
    position: fixed;
    top: 81%;
    right: 8%;
    button {
        background-color: red;
        border: none;
        color: white;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        font-size: 27px;
    }
    @media screen and (max-width: 920px) {
        button {
            width: 29px;
            height: 29px;
            font-size: 18px;
        }
    }
`;

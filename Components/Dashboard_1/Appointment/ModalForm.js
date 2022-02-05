import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NewInputDateBox from '../../Common/InputDateBox/NewInputDateBox';
import InputSearchBox from '../../Common/InputSearchBox/InputSearchBox';
import UserCardSearch from './UserCardSearch';
import { v4 as uuidv4 } from 'uuid';

import TimeClock from '../../Common/TimeClock/TimeClock';
import { addSentAppointmentFromForm } from '../../../Redux/Dashboard_1/Action/appointmentAction';

const ModalForm = ({ closeModal }) => {
    const [changeData, setChangeData] = React.useState({});
    const [postData, setPostData] = React.useState({});
    const [isDuty, setIsDuty] = React.useState(true);
    const [isOffline, setIsOffline] = React.useState(false);
    const [startDate, setStartDate] = React.useState(new Date());
    const [isDropDownTrue, setIsDropDownTrue] = React.useState(false);
    const [userAdd, setUserAdd] = React.useState([]);
    const [offlineAdd, setOfflineAdd] = React.useState([]);
    const [isInputValueClicked, setIsInputValueClick] = React.useState(false);
    const userData = useSelector((state) => state.appointmentReducers.userDuty);
    const offlineData = useSelector((state) => state.appointmentReducers.offlineUser);
    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);
    const dispatch = useDispatch();

    const handleDuty = (e) => {
        setIsDuty(true);
        setIsOffline(false);
        e.target.parentElement.children[2].style.color = 'black';
        e.target.parentElement.children[2].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[0].style.borderBottom = '1px solid red';
        e.target.parentElement.children[0].style.color = 'red';
    };
    const handleOffline = (e) => {
        setIsDuty(false);
        setIsOffline(true);
        e.target.parentElement.children[0].style.color = 'black';
        e.target.parentElement.children[0].style.borderBottom = '1px solid lightgray';
        e.target.parentElement.children[2].style.borderBottom = '1px solid red';
        e.target.parentElement.children[2].style.color = 'red';
    };
    const handleAllInput = (e) => {
        setChangeData({ ...changeData, [e.target.name]: e.target.value });
    };
    const handleCreateAppointmentUser = () => {
        let id = uuidv4();
        dispatch(
            addSentAppointmentFromForm({
                ...changeData,
                id: id,
                date: startDate,
                name: userData[0]?.name,
                startTime: startTime,
                endTime: endTime,
                isDuty: true,
                isAccepted: false,
                isCancelled: false,
                isConfirmed: false
            })
        );
        closeModal();
    };
    const handleCreateAppointmentOfflineUser = () => {
        let id = uuidv4();
        dispatch(
            addSentAppointmentFromForm({
                ...changeData,
                id: id,
                date: startDate,
                name: offlineAdd[0]?.name,
                startTime: startTime,
                endTime: endTime,
                isDuty: false,
                isAccepted: false,
                isCancelled: false,
                isConfirmed: false
            })
        );
        closeModal();
    };

    return (
        <Wrapper>
            <TopNavPart>
                <h6 onClick={handleDuty}>Dutypedia User</h6>
                <div></div>
                <h6 onClick={handleOffline}>Offline User</h6>
            </TopNavPart>
            <MidBoxPart>
                {isDuty && (
                    <BoxItem>
                        <TopPart>
                            <InputSearchBox
                                setIsDropDownTrue={setIsDropDownTrue}
                                userAdd={userAdd}
                                isInputValueClicked={isInputValueClicked}
                                setIsInputValueClick={setIsInputValueClick}
                                setUserAdd={setUserAdd}
                            />

                            {isDropDownTrue && (
                                <DropDownUser>
                                    {userData.map((user) => (
                                        <UserCardSearch
                                            userData={user}
                                            key={user.id}
                                            setIsDropDownTrue={setIsDropDownTrue}
                                            setUserAdd={setUserAdd}
                                            setIsInputValueClick={setIsInputValueClick}
                                        />
                                    ))}
                                </DropDownUser>
                            )}
                        </TopPart>
                        <MidPart>
                            <DateBox>
                                <h5>Date</h5>
                                <NewInputDateBox
                                    startDate={startDate}
                                    setStartDate={setStartDate}
                                />
                            </DateBox>
                            <TimeBox>
                                <h5>Time</h5>
                                <TimeInputBox>
                                    <TimeClock actions={setStartTime} />

                                    <p>to</p>
                                    <TimeClock actions={setEndTime} />
                                </TimeInputBox>
                            </TimeBox>
                        </MidPart>
                        <TextBox>
                            <p>Title</p>
                            <input type="text" name="title" onChange={handleAllInput} />
                            <p>Description</p>
                            <textarea
                                placeholder="Type Your Text...|"
                                name="description"
                                onChange={handleAllInput}
                            />
                        </TextBox>
                        <LastButtonBox>
                            <button
                                onClick={handleCreateAppointmentUser}
                                className="btn  btn-danger">
                                Request Appointment
                            </button>
                            <button onClick={closeModal} className="btn  btn-outline-danger">
                                Cancel
                            </button>
                        </LastButtonBox>
                    </BoxItem>
                )}
                {isOffline && (
                    <BoxItem>
                        <TopPart>
                            <InputSearchBox
                                setIsDropDownTrue={setIsDropDownTrue}
                                userAdd={offlineAdd}
                                isInputValueClicked={isInputValueClicked}
                                setIsInputValueClick={setIsInputValueClick}
                                setUserAdd={setOfflineAdd}
                            />

                            {isDropDownTrue && (
                                <DropDownUser>
                                    {offlineData.map((user) => (
                                        <UserCardSearch
                                            userData={user}
                                            key={user.id}
                                            setIsDropDownTrue={setIsDropDownTrue}
                                            setUserAdd={setOfflineAdd}
                                            setIsInputValueClick={setIsInputValueClick}
                                        />
                                    ))}
                                </DropDownUser>
                            )}
                        </TopPart>
                        <MidPart>
                            <DateBox>
                                <h5>Date</h5>
                                <NewInputDateBox
                                    startDate={startDate}
                                    setStartDate={setStartDate}
                                />
                            </DateBox>
                            <TimeBox>
                                <h5>Time</h5>
                                <TimeInputBox>
                                    <TimeClock actions={setStartTime} />

                                    <p>to</p>
                                    <TimeClock actions={setEndTime} />
                                </TimeInputBox>
                            </TimeBox>
                        </MidPart>
                        <TextBox>
                            <p>Title</p>
                            <input type="text" name="title" onChange={handleAllInput} />
                            <p>Description</p>
                            <textarea
                                placeholder="Type Your Text...|"
                                name="description"
                                onChange={handleAllInput}
                            />
                        </TextBox>
                        <LastButtonBox>
                            <button
                                onClick={handleCreateAppointmentOfflineUser}
                                className="btn  btn-danger">
                                Create Appointment
                            </button>
                            <button onClick={closeModal} className="btn  btn-outline-danger">
                                Cancel
                            </button>
                        </LastButtonBox>
                    </BoxItem>
                )}
            </MidBoxPart>
        </Wrapper>
    );
};

export default ModalForm;
const Wrapper = styled('div')`
    width: 1000px;
    padding: 5% 2%;
    @media screen and (max-width: 920px) {
        width: 280px;
        padding: 2% 1%;
    }
`;
const TopNavPart = styled('div')`
    display: flex;
    width: 100%;
    align-items: center;
    div {
        width: 2px;
        height: 25px;
        background-color: lightgray;
    }
    h6 {
        padding: 1.2% 1%;
        border-bottom: 1px solid lightgray;
        cursor: pointer;
    }
    h6:first-child {
        color: red;
        border-bottom: 1px solid red;
    }
    @media screen and (max-width: 920px) {
        h6 {
            font-size: 12px;
        }
        div {
            height: 20px;
        }
    }
`;
const DropDownUser = styled('div')`
    position: absolute;
    background-color: white;
    z-index: 30;
    width: 100%;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    border-radius: 8px;
    height: 300px;
    overflow-y: scroll;
`;
const MidBoxPart = styled('div')``;

const BoxItem = styled('div')``;
const TopPart = styled('div')`
    margin: 1rem 0;
    width: 70%;
    position: relative;

    input {
        width: 100%;
    }
    .InputSearchBox__Wrapper-sc-1jmm4tk-0 {
        width: 100%;
        height: 4rem;
    }
    @media screen and (max-width: 920px) {
        width: 100%;
        .InputSearchBox__Wrapper-sc-1jmm4tk-0 {
            height: 3rem;
            padding-left: 1rem;
            padding-right: 1rem;
            svg {
                height: 17px;
            }
        }
    }
`;
const MidPart = styled('div')`
    margin: 1rem 0;
    display: flex;
    @media screen and (max-width: 920px) {
        flex-direction: column;
    }
`;
const DateBox = styled('div')`
    input {
        width: 16.5rem;
        border: 1px solid red;
        border-radius: 10px;

        height: 3rem;

        padding-left: 4rem;

        :focus {
            outline: none;
        }
    }
    .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
        width: 17rem;
    }
    .NewInputDateBox__DateIcon-sc-1pbplnh-1 {
        width: 3.5rem !important;
        height: 3rem !important;
        right: 3% !important;
    }
    @media screen and (max-width: 920px) {
        h5 {
            font-size: 16px;
        }
        input {
            width: 12.5rem;
            height: 2.5rem;
            font-size: 14px;

            padding-left: 2rem;
        }
        .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
            width: 13rem;
        }
        .NewInputDateBox__DateIcon-sc-1pbplnh-1 {
            width: 3rem !important;
            height: 2.5rem !important;
            right: 3.5% !important;
            span {
                height: 24px !important;
            }
        }
    }
`;
const TimeBox = styled('div')`
    width: 100%;
    margin-left: 7%;
    @media screen and (max-width: 920px) {
        margin-top: 0.5rem;
        margin-left: 0%;
        h5 {
            font-size: 16px;
        }
    }
`;
const TimeInputBox = styled('div')`
    display: flex;
    align-items: center;
    p {
        font-size: 20px;
        margin-bottom: 0;
        margin: 0 2%;
    }
    @media screen and (max-width: 920px) {
        p {
            font-size: 14px;
        }
        .TimeClock_salarydateeverydaycontainerinputbox__YlL_F {
            height: 2.5rem;
            input {
                height: 2.2rem;
            }
            .TimeClock_salarydateeverydaycontainerinputboxicon__lYsc2 {
                height: 2.6rem;
                width: 2.5rem;
                background-size: 46%;
            }
        }
    }
`;
const TextBox = styled('div')`
    margin: 1rem 0;
    input {
        width: 85%;
        height: 50px;
        border: none;
        background-color: lightgray;
        border-radius: 8px;
        padding: 2%;
        margin-bottom: 1%;
        :focus {
            outline: none;
        }
    }
    textarea {
        width: 85%;
        height: 232px;
        border-color: lightgray;
        border-radius: 8px;
        padding: 2%;
        :focus {
            outline: none;
        }
    }
    @media screen and (max-width: 920px) {
        margin: 0.5rem 0;
        p {
            font-size: 16px;
            margin-bottom: 5px;
        }
        input {
            width: 100%;
            height: 35px;
        }
        textarea {
            width: 100%;
            height: 132px;
        }
    }
`;
const LastButtonBox = styled('div')`
    margin: 1rem 0;
    display: flex;
    button {
        width: 30%;
        height: 63px;
        margin-right: 2rem;
        border-radius: 8px;
    }
    @media screen and (max-width: 920px) {
        button {
            width: 55%;
            height: 34px;
            font-size: 60%;
            margin-right: 0.5rem;
        }
    }
`;
const InputTimeBoxSingle = styled('div')`
    width: 33%;
`;
const TimeIcon = styled('div')`
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    width: 15%;
    height: 3rem;

    background-position: center center;
`;

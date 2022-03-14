import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import addIcon from '../../../../../../Assets/icon/add more plus.svg';
import AdjustTimePopup from '../AdjustTimePopupFile/AdjustTimePopup';
import { WhiteBg, Wrapper } from '../StyledCssFile/StyledCss';
import user from '/Assets/images/dashboard/user.jpg';
import logo from '../../../../../../Assets/images/common_img/dutypediaLarge.png';
const customStyles = {
    content: {
        top: '2%',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        padding: '0',
        background: 'none',
        border: 'none',
        marginRight: '-50%'
    }
};

const CreateRoutineTable = ({ callFrom }) => {
    const [workOut7, setWorkOut7] = useState(false);
    const [adjustTimePop, setAdjustTimePop] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const userDetails = useSelector((state) => state.workOutRoutineReducers.workOutName);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [weekday, setWeekDay] = useState([
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]);

    const openModal = () => {
        setIsOpen(true);
        console.log('open modal');
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const handleAdjust = (id) => {
        openModal();
    };
    function getDates(startDate, endDate) {
        const dates = [];
        let currentDate = startDate;
        const addDays = function (days) {
            const date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    }

    // Usage
    const dates = getDates(new Date(startDate), new Date(endDate));

    console.log(dates);

    return (
        <WhiteBg>
            <Wrapper>
                <BackgroundImage>
                    <div className="bgWrap">
                        <Image
                            alt="Dutypedia logo"
                            src={logo}
                            layout="fill"
                            objectFit="cover"
                            width={473}
                            height={588}
                            quality={100}
                        />
                    </div>
                </BackgroundImage>
                {callFrom === 'allMember' && (
                    <div className="d-flex align-items-center">
                        <h4 className="fw-normal">30 Days Challenge Workout</h4>
                    </div>
                )}
                {callFrom === 'singleMember' && (
                    <div className="d-flex align-items-center">
                        <div className="singleMemberProfile">
                            <Image src={user} alt="" width={70} height={70} />
                        </div>
                        <h4 className="ps-3 fw-normal">{userDetails[0]?.workoutRoutineName}</h4>
                    </div>
                )}

                {/* custom scroll table start */}
                {!adjustTimePop && (
                    <>
                        <div className="custom-table-container">
                            <table className="workout-table">
                                <thead>
                                    <th>
                                        <td>Work Out Name</td>
                                        <td>{/* this filed stay blank */}</td>
                                        {weekday.map((day, index) => (
                                            <td key={index}>{day}</td>
                                        ))}
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{/*this filed stay blank */}</td>
                                        <td>Time</td>
                                        {weekday.map((day, index) => (
                                            <td key={index}> Day {index + 1}</td>
                                        ))}
                                    </tr>
                                    {Array.from({ length: 10 }).map((_, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                <input
                                                    className="border-0 w-100 rounded text-center"
                                                    type="text"
                                                    DefaultValue="Back"
                                                    placeholder="Legs"
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="button text-capitalize rounded"
                                                    onClick={() => handleAdjust()}>
                                                    adjust time
                                                </button>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="border-end-0">
                                            <button className="my-3 border-0 rounded bg-white text-dark py-2 d-flex align-items-center add-more-icon">
                                                <Image
                                                    className="me-2"
                                                    src={addIcon}
                                                    alt="add more plus"
                                                />
                                                Add More
                                            </button>
                                        </td>
                                        <td className="border-start-0"></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* custom scroll table end */}

                        <div className="d-flex justify-content-end btn-bootom pt-3">
                            <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/afterCreateTableRoutine">
                                <button className="cmnBtn border-0 me-3">Create</button>
                            </Link>
                            <button className="cmnBtn">Cancel</button>
                        </div>
                    </>
                )}

                {/* modal */}

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    className="mx-auto"
                    contentLabel="Adjust Time Modal">
                    <AdjustTimePopup
                        closeModal={closeModal}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                    />
                </Modal>
                {/* modal */}
            </Wrapper>
        </WhiteBg>
    );
};

export default CreateRoutineTable;
//background image
const BackgroundImage = styled('div')`
    position: relative;
    .bgWrap {
        position: absolute;
        width: 240px;
        height: 282px;
        margin-top: 25%;
        margin-left: 40%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
    }
`;

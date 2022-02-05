import React, { useState } from 'react';
import Modal from 'react-modal';
import AdjustTimePopup from '../AdjustTimePopupFile/AdjustTimePopup';
import Link from 'next/link';
import Image from 'next/image';
import { Wrapper } from '../StyledCssFile/StyledCss';
import addIcon from '../../../../../../Assets/icon/add more plus.svg';
import { useSelector } from 'react-redux';
import user from '/Assets/images/dashboard/user.jpg';
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

    const openModal = () => {
        setIsOpen(true);
        console.log('open modal');
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const handleAdjust = (id) => {
        openModal();
        console.log('modal opened');
    };

    return (
        <Wrapper>
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
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{/*this filed stay blank */}</td>
                                    <td>Time</td>
                                    <td>Day 01</td>
                                    <td>Day 02</td>
                                    <td>Day 03</td>
                                    <td>Day 04</td>
                                    <td>Day 05</td>
                                    <td>Day 06</td>
                                    <td>Day 07</td>
                                    <td>Day 08</td>
                                </tr>
                                {Array.from({ length: 10 }).map((_, idx) => (
                                    <tr>
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
                                                className="button rounded"
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
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* custom scroll table end */}

                    <div className="d-flex justify-content-end btn-bootom">
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
                <AdjustTimePopup closeModal={closeModal} />
            </Modal>
            {/* modal */}
        </Wrapper>
    );
};

export default CreateRoutineTable;

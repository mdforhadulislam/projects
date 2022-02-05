import React, { useState } from 'react';
import DutypediaAddUserList from './DutypediaAddUserList';
import OfflineAddUserList from './OfflineAddUserList';

import { FaArrowLeft } from 'react-icons/fa';
import Mentor from '../Mentor';

const AddMentor = (props) => {
    const [selectUser, setSelectUser] = useState(false);
    const [showMentorList, setShowMentorList] = useState(false);

    const handleAddMentorBack = () => {
        // props.setShowMentorList(false);
    };

    const handleDutypediaUser = () => {
        setSelectUser(false);
    };

    const handleOfflineUser = () => {
        setSelectUser(true);
    };

    return (
        <div>
            {showMentorList === false && (
                <div>
                    <div className="group-btn mt-5">
                        {props.addMentor === true ? (
                            <p className="mt-4" onClick={() => props.setAddMentor(false)}>
                                <FaArrowLeft icon={faArrowLeft}></FaArrowLeft>Back
                            </p>
                        ) : (
                            <p className="mt-4" onClick={() => props.setShowMentorList(false)}>
                                <FaArrowLeft icon={faArrowLeft}></FaArrowLeft>Back
                            </p>
                        )}

                        <div class="all-member-list-nav d-flex">
                            <div class="online-user" onClick={handleDutypediaUser}>
                                {' '}
                                <h6 style={{ color: selectUser === false && '#E22424' }}>
                                    {' '}
                                    Dutypedia User{' '}
                                </h6>{' '}
                            </div>
                            <div class="offline-user ml-3" onClick={handleOfflineUser}>
                                {' '}
                                <h6 style={{ color: selectUser === true && '#E22424' }}>
                                    {' '}
                                    Offline User{' '}
                                </h6>{' '}
                            </div>
                        </div>
                    </div>

                    {selectUser === false && (
                        <DutypediaAddUserList
                            showDataForMentor={props.showDataForMentor}
                            setShowMentorList={setShowMentorList}
                        />
                    )}
                    {selectUser === true && (
                        <OfflineAddUserList
                            showDataForMentor={props.showDataForMentor}
                            setShowMentorList={setShowMentorList}
                        />
                    )}
                </div>
            )}

            {showMentorList === true && <Mentor />}
        </div>
    );
};

export default AddMentor;

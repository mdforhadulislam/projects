import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import Mentor from './Mentor';
import AddMentor from './addMentor/AddMentor';

const MainMentor = () => {
    const [showMentorList, setShowMentorList] = useState(false);
    const mentorList = useSelector((state) => state.mentorListReducer.mentorList);
    console.log(mentorList.length);
    return (
        <div>
            {showMentorList === false && (
                <div
                    id="created-book-list"
                    className="created-book-list text-center mt-5"
                    onClick={() => setShowMentorList(true)}>
                    <i className="">
                        <FaPlus />
                    </i>
                    <h3 className="mt-3">Add Mentor</h3>
                </div>
            )}

            {showMentorList === true && (
                <div>
                    {mentorList.length === 0 ? (
                        <div>
                            {setShowMentorList && (
                                <AddMentor setShowMentorList={setShowMentorList} />
                            )}
                        </div>
                    ) : (
                        <div>{setShowMentorList && <Mentor />}</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default MainMentor;

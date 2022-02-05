<<<<<<< HEAD
import { FaPlus } from 'react-icons/fa';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Wrapper } from '../StyledCss/StyledCss';

const SingleMemberRoutine = () => {
    const [create, setCreate] = useState(true);
    const [afterRoutineCreate, setAfterRoutineCreate] = useState(false);
    return (
        <Wrapper>
            {/* <ConfirmModal message="Do You Want To Delete This Routine?" /> */}
            {create && (
                <div
                    id="created-work-out-routine"
                    className="created-book-list text-center"
                    onClick={() => setCreate(false)}>
                    <i>
                        <FaPlus />
                    </i>
                    <h3>Create A Routine</h3>
                </div>
            )}
            {/* after clicking create routine */}
            {!create && !afterRoutineCreate && (
                <div id="routine-user-input">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Give A Routine Name </h3>
                            <div className="get-user-input">
                                <input
                                    type="text"
                                    className="singleMember text-capitalize"
                                    placeholder="ABCD academy ...|"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3>Instruction: </h3>
                            <div className="get-user-input">
                                <select name="" className="singleMember select">
                                    <option>Give A Routine Name ?</option>
                                    <option>Give A Routine Name ?</option>
                                    <option>Give A Routine Name ?</option>
                                    <option>Give A Routine Name ?</option>
                                </select>
                                <i className="fa fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Select A Member </h3>
                            <div className="get-user-input">
                                <input
                                    type="text"
                                    className="singleMember selectMemberInput w-100"
                                    placeholder="Masud Reja"
                                />
                                <i className="fas fa-search singleMemberRoutine"></i>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex btn-bootom">
                        <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/addSingleMember">
                            <button
                                className="cmnBtn border-0 me-3"
                                onClick={() => setAfterRoutineCreate(true)}>
                                Next
                            </button>
                        </Link>
                        <button className="cmnBtn" onClick={() => setCreate(true)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default SingleMemberRoutine;
=======
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AfterCreateRoutine from '../AfterCreateRoutine/AfterCreateRoutine';
// import ConfirmModal from '../ConfirmModal/ConfirmModal';
import './SingleMemberRoutine.css';

const SingleMemberRoutine = () => {
    const [create, setCreate] = useState(true);
    const [afterRoutineCreate, setAfterRoutineCreate] = useState(false);
    return (
        <>
            {/* <ConfirmModal message="Do You Want To Delete This Routine?" /> */}
            {create && <div id="created-work-out-routine" className="created-book-list text-center" onClick={() => setCreate(false)} >
                <i><FontAwesomeIcon icon={faPlus} /></i>
                <h3>Create A Routine</h3>
            </div>
            }
            {/* after clicking create routine */}
            {!create && !afterRoutineCreate && <div id="routine-user-input">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Give A Routine Name </h3>
                        <div className="get-user-input">
                            <input type="text" className="singleMember text-capitalize" placeholder='ABCD academy ...|' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Instruction: </h3>
                        <div className="get-user-input">
                            <select name="" className="singleMember select">
                                <option>Give A Routine Name ?</option>
                                <option>Give A Routine Name ?</option>
                                <option>Give A Routine Name ?</option>
                                <option>Give A Routine Name ?</option>
                            </select>
                            <i className="fa fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Select A Member </h3>
                        <div className="get-user-input">
                            <input type="text" className="singleMember selectMemberInput w-100" placeholder='Masud Reja' />
                            <i className="fas fa-search singleMemberRoutine"></i>
                        </div>
                    </div>
                </div>

                <div className="d-flex btn-bootom">
                    <button className="cmnBtn border-0 mr-3" onClick={() => setAfterRoutineCreate(true)}>Next</button>
                    <button className="cmnBtn" onClick={() => setCreate(true)}>Cancel</button>
                </div>
            </div>

            }

            {
                afterRoutineCreate && <AfterCreateRoutine />
            }
        </>
    );
};

export default SingleMemberRoutine;
>>>>>>> faruk

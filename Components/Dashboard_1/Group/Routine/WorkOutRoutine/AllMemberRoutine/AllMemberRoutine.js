
import Link from 'next/Link';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Wrapper } from '../StyledCss/StyledCss';
// import WorkOut6 from '../WorkOut6/WorkOut6';

const AllMemberRoutine = () => {
    const [create, setCreate] = useState(false);
    const [workout6, setWorkout6] = useState(false);
    return (
        <Wrapper>
            {!create && (
                <div
                    id="created-work-out-routine"
                    className="created-book-list text-center"
                    onClick={() => setCreate(true)}>
                    <i className="">
                        <FaPlus />
                    </i>
                    <h3>Create All member Routine</h3>
                </div>
            )}
            {create && !workout6 && (
                <>
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

                        <div className="d-flex btn-bootom">
                            <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/AddAllMemberRoutine">
                                <button className="cmnBtn border-0 me-3">Next</button>
                            </Link>
                            <button className="cmnBtn" onClick={() => setCreate(true)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default AllMemberRoutine;

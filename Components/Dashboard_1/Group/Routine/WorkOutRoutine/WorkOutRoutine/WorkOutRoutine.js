import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AllMemberRoutine from '../AllMemberRoutine/AllMemberRoutine';
import SingleMemberRoutine from '../SingleMemberRoutine/SingleMemberRoutine';

const WorkOutRoutine = () => {

    const [createMemberRoutine, setCreateMemberRoutine] = useState(false);
    const [workoutRoutine, setWorkoutRoutine] = useState(true);
    return (
        <>
            {workoutRoutine &&
                <div id="created-work-out-routine" className="created-book-list text-center" onClick={() => setWorkoutRoutine(false)} >
                    <i className=""><FontAwesomeIcon icon={faPlus} /></i>
                    <h3>Create A Work Out Routine</h3>
                </div>
            }
            {/* create workout routine sub category added and show when user click add subcategory */}
            {!workoutRoutine &&
                <div className="routine-inner">
                    <div id="routine-top-btn-section">
                        <div className="group-btn">
                            <button id="diet-routine" className={`"text-capitalize px-0 margin-left ${createMemberRoutine === "singleMember" && "button"}`} onClick={() => { setCreateMemberRoutine("singleMember") }}><h4>Single Member Routine</h4>
                            </button>

                            <button id="workout-routine" className={`text-capitalize px-0 margin-left ${createMemberRoutine === "allMember" && "button"}`} onClick={() => { setCreateMemberRoutine("allMember") }} ><h4>All Member Routine</h4>
                            </button>
                        </div>

                        {/* <!-- single member routine btn icon start --> */}

                        {!createMemberRoutine && <SingleMemberRoutine />}
                        {createMemberRoutine === "singleMember" && <SingleMemberRoutine />}

                        {/* <!-- single member routine btn icon end --> */}

                        {/* <!-- all member routine btn icon start --> */}

                        {createMemberRoutine === "allMember" && <AllMemberRoutine />}

                        {/* <!-- all member routine btn icon end --> */}
                    </div>

                    {/* <!-- workout routine table end here -->
                <!-- workout routine table end here -->

            <!-- ============================================================ --> */}
                </div>
            }
        </>
    );
};

export default WorkOutRoutine;
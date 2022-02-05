import React from 'react';
import styled from 'styled-components';
import AllMemberRoutine from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/AllMemberRoutineFile/AllMemberRoutine';
import SingleMemberRoutine from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/SingleMemberRoutineFile/SingleMemberRoutine';

const workOutRoutine = () => {
    const [createMemberRoutine, setCreateMemberRoutine] = React.useState(false);
    const [workoutRoutine, setWorkoutRoutine] = React.useState(true);
    return (
        <Wrapper>
            <div className="group-btn text-center">
                <button
                    id="workout-routine"
                    className={`"text-capitalize bg-white ${
                        createMemberRoutine === 'singleMember' && 'button'
                    }`}
                    onClick={() => {
                        setCreateMemberRoutine('singleMember');
                    }}>
                    <h4>Single Member Routine</h4>
                </button>

                <button
                    id="workout-routine"
                    className={`text-capitalize bg-white ${
                        createMemberRoutine === 'allMember' && 'button'
                    }`}
                    onClick={() => {
                        setCreateMemberRoutine('allMember');
                    }}>
                    <h4>All Member Routine</h4>
                </button>
            </div>
            {!createMemberRoutine && <SingleMemberRoutine />}
            {createMemberRoutine === 'singleMember' && <SingleMemberRoutine />}

            {/* <!-- single member routine btn icon end --> */}

            {/* <!-- all member routine btn icon start --> */}

            {createMemberRoutine === 'allMember' && <AllMemberRoutine />}
        </Wrapper>
    );
};

export default workOutRoutine;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    margin-top: 20px;
    .group-btn button {
        color: #e22222;
        margin-left: 0px;
        font-size: 18px;
        border: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #e22222;
        background: transparent;
        position: relative;
        font-weight: 500;
        padding-left: 18px;
    }
`;

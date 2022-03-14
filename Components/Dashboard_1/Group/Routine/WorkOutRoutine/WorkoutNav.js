import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
const WorkoutNav = () => {
    const [createWorkoutRoutine, setCreateWorkoutRoutine] = React.useState('singleMember');
    return (
        <Wrapper>
            <SubNav createWorkoutRoutine={createWorkoutRoutine}>
                <div className="group-btn text-center">
                    <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/createSingleMember">
                        <button
                            id="workout-routine"
                            className={`text-capitalize button ${
                                createWorkoutRoutine === 'singleMember' && 'button_red'
                            }`}
                            onClick={() => {
                                setCreateWorkoutRoutine('singleMember');
                            }}>
                            <h4>Single Member Routine</h4>
                        </button>
                    </Link>
                    <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/createAllMember">
                        <button
                            id="workout-routine"
                            className={`text-capitalize ${
                                createWorkoutRoutine === 'allMember' && 'button_red'
                            }`}
                            onClick={() => {
                                setCreateWorkoutRoutine('allMember');
                            }}>
                            <h4>All Member Routine</h4>
                        </button>
                    </Link>
                </div>
            </SubNav>
        </Wrapper>
    );
};

export default WorkoutNav;
const Wrapper = styled('div')`
    width: 85%;
    margin: 0 auto;
    padding-top: 20px;
    background: #fff;

    @media (max-width: 768px) {
        .group-btn {
            display: inline-flex;
        }
        .group-btn h4 {
            font-size: 3vw;
        }
    }
`;
const SubNav = styled('div')`
    display: flex;
    justify-content: center;
    button {
        color: #666666;
        font-size: 18px;
        border: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #d3d3d3;
        background: transparent;
        padding-right: 30px !important;
        position: relative;
        font-weight: 500;
        padding-left: 10px !important;
    }
    .button:after {
        content: '';
        position: absolute;
        right: 0px;
        top: 7px;
        width: 2px;
        margin-right: 9px;
        height: 23px;
        background: rgb(34 15 15 / 45%);
    }

    ${({ createWorkoutRoutine }) =>
        createWorkoutRoutine &&
        `
        .button_red{
            color: #e22222;
        border-color: #e22222;
        margin-left: 0px;
        }
    }
  `}
`;

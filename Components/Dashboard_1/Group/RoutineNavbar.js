import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const RoutineNavbar = () => {
    const [createRoutine, setCreateRoutine] = React.useState('class');

    return (
        <Wrapper createRoutine={createRoutine}>
            <div className="group-btn">
                <Link href="/dashboard_1/groups/groupcard/routine">
                    <button
                        id="class-routine"
                        className={`"text-capitalize px-0 btn-border activeBtn ${
                            createRoutine === 'class' && 'button_red'
                        } `}
                        onClick={() => {
                            setCreateRoutine('class');
                        }}>
                        <h4>Class Routine</h4>
                    </button>
                </Link>
                <Link href="/dashboard_1/groups/groupcard/routine/classTestRoutine">
                    <button
                        id="class-test-routine"
                        className={`text-capitalize px-0 margin-left ${
                            createRoutine === 'test' && 'button_red'
                        }`}
                        onClick={() => {
                            setCreateRoutine('test');
                        }}>
                        <h4>Class Test Routine</h4>
                    </button>
                </Link>
                <Link href="/dashboard_1/groups/groupcard/routine/dietRoutine">
                    <button
                        id="diet-routine"
                        className={`"text-capitalize px-0 margin-left ${
                            createRoutine === 'diet' && 'button_red'
                        }`}
                        onClick={() => {
                            setCreateRoutine('diet');
                        }}>
                        <h4>Diet Routine</h4>
                    </button>
                </Link>
                <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine">
                    <button
                        id="workout-routine"
                        className={`"text-capitalize px-0 margin-left ${
                            createRoutine === 'work' && 'button_red'
                        }`}
                        onClick={() => {
                            setCreateRoutine('work');
                        }}>
                        <h4>Work- Out Routine</h4>
                    </button>
                </Link>
            </div>
        </Wrapper>
    );
};

export default RoutineNavbar;
const Wrapper = styled('div')`
<<<<<<< HEAD
    display: flex;
    justify-content: center;
    button {
=======
    width: 76%;
    margin: 0 auto;
    .group-btn button {
>>>>>>> faruk
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

    ${({ createRoutine }) =>
        createRoutine &&
        `
        .button_red{
            color: #e22222;
        border-color: #e22222;
        margin-left: 0px;
        }
        
        .button_red:after {
        content: '';
        position: absolute;
        right: -2px;
        top: 7px;
        width: 2px;
        height: 23px;
        background: rgb(34 15 15 / 45%);
    }
  `}
`;

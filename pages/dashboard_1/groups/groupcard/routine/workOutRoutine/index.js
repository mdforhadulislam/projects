import React from 'react';
import styled from 'styled-components';
import AllMemberRoutine from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/AllMemberRoutineFile/AllMemberRoutine';
import SingleMemberRoutine from '../../../../../../Components/Dashboard_1/Group/Routine/WorkOutRoutine/SingleMemberRoutineFile/SingleMemberRoutine';

const workOutRoutine = () => {
    const [createMemberRoutine, setCreateMemberRoutine] = React.useState('class');
    return (
        <Wrapper>
            <SubNav createMemberRoutine={createMemberRoutine}>
                <div className="group-btn text-center">
                    <button
                        id="workout-routine"
                        className={`text-capitalize ${
                            createMemberRoutine === 'singleMember' && 'button_red'
                        }`}
                        onClick={() => {
                            setCreateMemberRoutine('singleMember');
                        }}>
                        <h4>Single Member Routine</h4>
                    </button>

                    <button
                        id="workout-routine"
                        className={`text-capitalize ${
                            createMemberRoutine === 'allMember' && 'button_red'
                        }`}
                        onClick={() => {
                            setCreateMemberRoutine('allMember');
                        }}>
                        <h4>All Member Routine</h4>
                    </button>
                </div>
            </SubNav>
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

    ${({ createMemberRoutine }) =>
        createMemberRoutine &&
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

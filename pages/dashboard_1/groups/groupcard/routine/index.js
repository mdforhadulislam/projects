import React from 'react';
import styled from 'styled-components';
import ClassRoutine from '../../../../../Components/Dashboard_1/Group/Routine/ClassRoutine/ClassRoutine';

const routine = () => {
    return (
        <Wrapper>
            <ClassRoutine />
        </Wrapper>
    );
};

export default routine;
const Wrapper = styled('div')`
    width: 100%;
    margin: 0 auto;

    background-color: white;
`;

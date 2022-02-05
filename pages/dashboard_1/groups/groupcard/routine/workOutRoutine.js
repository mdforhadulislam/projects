import React from 'react';
import styled from 'styled-components';

const workOutRoutine = () => {
    return (
        <Wrapper>
        <div>
            <h2 className="text-center">Work out Routine is here</h2>
        </div>
        </Wrapper>
    );
};

export default workOutRoutine;

const Wrapper = styled('div')`
    background: #fff;
    height: auto;
    padding-bottom: 30px;
`

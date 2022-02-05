import React from 'react';
import styled from 'styled-components';
import CreateGroup from './CreateGroup/CreateGroup';

const Group = () => {
    return (
        <Wrapper className="full-screen-section">
            <CreateGroup />
        </Wrapper>
    );
};

export default Group;
const Wrapper = styled('div')`
    display: inline-block;
    background: #fff1f2;
    width: calc(100% - 3vw);
    margin-left: 3vw;
    transition: 0.5s;
`;

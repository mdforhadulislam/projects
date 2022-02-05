import React from 'react'
import styled from 'styled-components';

export default function Temp() {
    return (
        <Main>
            <h3 className='new_item'>This is my temp file</h3>
        </Main>
    )
}

const Main = styled('div')`
.new_item {
    font-size: 70px;
    margin-left: 200px;
}

`

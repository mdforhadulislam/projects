import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';
const attendance = () => {
    return (
        <Wrapper>
            <Link href="/dashboard_1/groups/groupcard/attendance/attendenceSystem">
                <div className="create-attend ">
                    <div className="text-center">
                        <span>
                            <FaPlus />
                        </span>
                        <h4 className="mt-4">Create An Attendence</h4>
                    </div>
                </div>
            </Link>
        </Wrapper>
    );
};

export default attendance;
const Wrapper = styled('div')`
    width: 67%;
    margin: 0 auto;

    span {
        font-size: 30px;
        border: 1px solid #d3d3d3;
        padding: 15px;
        color: #d3d3d3;
        cursor: pointer;
    }
    .create-attend {
        background-color: white;
        box-shadow: -1px 0px 8px -5px grey;
        border-radius: 8px;
        padding: 39px 0;
        width: 96%;
        margin: auto;
    }
    .create-attend h3 {
        color: rgb(51, 51, 51);
        font-size: 35px;
    }
`;

import React from 'react';
import styled from 'styled-components';
import user from '../../../../Assets/images/dashboard/user.jpg';
import Image from 'next/image';
import DutyPreIcon from '../../../../Assets/images/dashboard/DutyPreIconSmall';

const EmployeeCard = () => {
    return (
        <EmployeeItem>
            <EmployeeItemLeft>
                <ImageContainerEmployee>
                    <Image src={user} alt="User" />
                    <DutyPreIcon />
                </ImageContainerEmployee>
                <EmployeeTextItem>
                    <h6>Mohabbat Sikdar Kowshik Choudhury</h6>
                    <p>Id: DP0324-234</p>
                </EmployeeTextItem>
            </EmployeeItemLeft>
            <p>Present</p>
        </EmployeeItem>
    );
};

export default EmployeeCard;
const EmployeeItem = styled('div')`
    width: 90%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.17rem 3rem;
    border-bottom: 1px solid lightgray;
`;
const EmployeeItemLeft = styled('div')`
    display: flex;
`;
const EmployeeTextItem = styled('div')`
    margin-left: 1.5rem;
    p {
        font-size: 14px;
        color: gray;
    }
`;
const ImageContainerEmployee = styled('div')`
    position: relative;
    width: 60px;
    img {
        width: 50px !important;
        border-radius: 8px;
    }
    svg {
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 0;
        right: 2%;
    }
`;

import styled from 'styled-components';
import DoubleUpOutlineIcon from '../../../../Assets/images/dashboard/DoubleUpOutlineIcon';
import MessageOutlineIcon from '../../../../Assets/images/dashboard/MessageOutlineIcon';
import PrintOutlineIcon from '../../../../Assets/images/dashboard/PrintOutlineIcon';
import ShareOutlineIcon from '../../../../Assets/images/dashboard/ShareOutlineIcon';
import React from 'react';
const NoticeCard = () => {
    const [isTrue, setIsTrue] = React.useState(false);
    const handleDropDown = () => {
        setIsTrue(!isTrue);
    };
    return (
        <Wrapper>
            <IconBox>
                <PrintOutlineIcon />
                <MessageOutlineIcon />
                <ShareOutlineIcon />
            </IconBox>
            <HeaderSection>
                <h4>Rasel Swimming Training Center</h4>
                <div></div>
            </HeaderSection>
            <MidSection>
                <MidLeft>
                    <h5>Id/record number</h5>
                    <p>OM/102-SM701</p>
                </MidLeft>
                <MidRight>
                    <h6>Date:15/08/2021</h6>
                </MidRight>
            </MidSection>
            <SubjectionSection>
                <h3>SUBJECT: ADMISSION NOTICE 2021-2022</h3>
            </SubjectionSection>
            <SubjectDetailSection>
                {isTrue && (
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </p>
                )}
            </SubjectDetailSection>
            <LastIconBox isTrue={isTrue} onClick={handleDropDown}>
                <DoubleUpOutlineIcon />
            </LastIconBox>
        </Wrapper>
    );
};

export default NoticeCard;
const Wrapper = styled('div')`
    position: relative;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    margin-top: 2rem;
`;
const IconBox = styled('div')`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 2rem 2rem;
    svg {
        margin-left: 1rem;
    }
`;
const HeaderSection = styled('div')`
    h4 {
        text-align: center;
        color: rgb(102, 102, 102);
    }
    div {
        margin: 1rem auto;
        width: 95%;
        height: 0.6rem;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
    }
`;
const MidSection = styled('div')`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
`;
const MidLeft = styled('div')`
    h5 {
        font-size: 22px;
    }
    p {
        color: rgb(102, 102, 102);
    }
`;
const MidRight = styled('div')``;
const SubjectionSection = styled('div')`
    border: 1px solid lightgray;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    padding: 1rem 2rem;
    h3 {
        margin-bottom: 0;
        font-size: 27px;
    }
`;
const SubjectDetailSection = styled('div')`
    padding: 2rem 2rem;
    p {
        color: rgb(102, 102, 102);
        font-size: 14px;
    }
`;
const LastIconBox = styled('div')`
    position: absolute;
    bottom: -5%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    border-radius: 50%;
    transition: 0.35s ease-in-out;
    transform: rotate(180deg);
    ${({ isTrue }) =>
        isTrue &&
        `
        transition:  .35s ease-in-out;
        transform: rotate(0deg);;
  `}
`;

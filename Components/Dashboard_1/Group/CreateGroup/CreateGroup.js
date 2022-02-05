import React, { useState } from 'react';
import AcademicActivities from '../AcademicActivities/AcademicActivities';
import { useDispatch } from 'react-redux';
import { addGroupSelectUser } from '../../../../Redux/Dashboard_1/Action/groupUserSelectAction';
import imagebox from '../../../../Assets/images/svg/Path 4781.svg';
import styled from 'styled-components';
import Link from 'next/link';
import CheckBox from '/Components/Common/CheckBox/CheckBox';
const CreateGroup = () => {
    const [createGroup, setCreateGroup] = useState(false);

    const [activeColor, setActiveColor] = useState({ active: 0 });
    const dispatch = useDispatch();

    const handleDutypediaUser = () => {
        setActiveColor({ active: 1 });
        dispatch(addGroupSelectUser('dutypedia'));
    };

    const handleOfflineUser = () => {
        setActiveColor({ active: 2 });
        dispatch(addGroupSelectUser('offline'));
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        // setCreateGroup()
        console.log();
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Wrapper className="group-part" id="group-part">
                    {/* <!-- <div className=""> --> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <GroupBox className="group-inner rounded">
                                <GroupTopHead className="group-top-headline">
                                    <h4 className="text-capitalize">Group For</h4>
                                </GroupTopHead>
                                <div>
                                    <ButtonBox className="group-btn">
                                        <button
                                            id="member-dutypedia-user"
                                            className={
                                                activeColor.active === 1
                                                    ? 'text-capitalize px-0 btn-border activeBtn'
                                                    : 'text-capitalize px-0 btn-border'
                                            }
                                            onClick={handleDutypediaUser}>
                                            Dutypedia User
                                        </button>
                                        <button
                                            id="member-offline-user"
                                            className={
                                                activeColor.active === 2
                                                    ? 'text-capitalize px-0 margin-left activeBtn'
                                                    : 'text-capitalize px-0 margin-left'
                                            }
                                            onClick={handleOfflineUser}>
                                            Offline Users
                                        </button>
                                    </ButtonBox>
                                </div>
                                <h3 className="group-name">Enter A Group Name</h3>

                                {/* <!-- user input group text --> */}
                                <div className="get-user-input">
                                    <input
                                        type="text"
                                        className="user-input-field text-capitalize"
                                    />

                                    <CheckBox name="Online Meeting Or Class" />
                                    <CheckBox name="Attendence" />
                                    <CheckBox name="Book List" />
                                    <CheckBox name="Routine" />

                                    <CheckBox name="Class Test" />
                                </div>
                                <Link href="/dashboard_1/groups/groupcard">
                                    <a>
                                        <button
                                            id="create-group-btn"
                                            className="user-submit-btn text-center text-capitalize text-white"
                                            type="submit"
                                            onClick={() => setCreateGroup(true)}>
                                            Create Now
                                        </button>
                                    </a>
                                </Link>
                            </GroupBox>
                        </div>
                    </div>
                    {/* <!-- </div> --> */}
                </Wrapper>
            </form>
        </>
    );
};

export default CreateGroup;
const Wrapper = styled('div')`
    background: #fff;
    padding: 65px 20px 160px 50px;
    border-radius: 30px;
    /* box-shadow: 0 0 5px #0000008c; */
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 30px 25px 50px 50px;
    .group-name {
        font-size: 36px;
        margin: 43px 0 22px;
    }
    .user-input-field {
        height: 76px;
        background: #ececec;
        padding-left: 20px;
        border: 0;
        border-radius: 10px;
        width: 100%;
        margin-bottom: 35px;
        width: 470px;
        font-size: 20px;
    }
    .user-input-field:focus-visible {
        outline: none;
    }
    .checkbox-container {
        display: block;
        position: relative;
        padding-left: 42px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 16px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .checkmark {
        position: absolute;
        top: 4px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 2px;
        border: 0.5px solid #e22222;
        background-color: #fff;
    }

    .checkmark-down {
        top: -4px;
    }
    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }
    .checkbox-container input:checked ~ .checkmark {
        background-color: #fff;
        box-shadow: 0 0 3px red;
    }

    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }
    .checkbox-container .checkmark:after {
        left: 2px;
        top: -4px;
        width: 23px;
        height: 26px;
        background-image: url(../../../../Assets/images/svg/Path 4781.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    .user-submit-btn {
        border-radius: 10px;
        background: #e22222;
        border: 0;
        font-size: 32px;
        padding: 13px 55px;
        margin-top: 35px;
    }
`;
const GroupBox = styled('div')``;

const GroupTopHead = styled('div')`
    font-size: 32px;
    margin-bottom: 53px;
`;
const ButtonBox = styled('div')`
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
        margin-left: -4px;
    }
    button:first-child {
        color: #e22222;
        border-color: #e22222;
        margin-left: 0px;
    }
    button:last-child {
        padding-left: 18px !important;
    }
    .btn-border:after {
        content: '';
        position: absolute;
        right: -2px;
        top: 7px;
        width: 2px;
        height: 23px;
        background: rgb(34 15 15 / 45%);
    }
`;

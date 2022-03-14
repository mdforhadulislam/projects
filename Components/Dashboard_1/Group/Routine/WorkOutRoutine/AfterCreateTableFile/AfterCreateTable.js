import React from 'react';
import { WhiteBg, Wrapper } from '../StyledCssFile/StyledCss';
import Image from 'next/image';
import Link from 'next/link';
import addIcon from '../../../../../../Assets/icon/add more plus.svg';
import editIcon from '../../../../../../Assets/icon/edit.svg';
import deleteIcon from '../../../../../../Assets/icon/android-delete.svg';
import arrowBack from '../../../../../../Assets/icon/ArrowBackIcon.svg';
import styled from 'styled-components';
import user from '/Assets/images/dashboard/user.jpg';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import logo from '../../../../../../Assets/images/common_img/dutypediaLarge.png';

const AfterCreateTable = () => {
    return (
        <WhiteBg>
            <Wrapper>
                <CheckboxStyling>
                    <BackgroundImage>
                        <div className="bgWrap">
                            <Image
                                alt="Dutypedia logo"
                                src={logo}
                                layout="fill"
                                objectFit="cover"
                                width={473}
                                height={588}
                                quality={100}
                            />
                        </div>
                    </BackgroundImage>
                    <div
                        className="d-flex align-items-center pb-3"
                        onClick={() => window.history.go(-1)}>
                        <h4>
                            <Image src={arrowBack} />
                        </h4>
                        <h4 className="ps-3 fw-normal">Back</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="singleMemberProfile">
                                <Image src={user} alt="" width={70} height={70} />
                            </div>
                            <h4 className="ps-3 fw-normal">Masud Reja</h4>
                        </div>
                        <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/viewAll">
                            <button className="bg-white text-dark border-0 link">View All</button>
                        </Link>
                    </div>
                    {/* operation options */}
                    <div className="d-flex justify-content-end workout-routine-operation">
                        <button className="d-flex align-items-center border-0 add-more-icon">
                            {/*<i  className="fas fa-plus"></i>*/}
                            <Image className="me-2" src={addIcon} alt="add more plus" /> Create A
                            New Routine
                        </button>
                        <button className="border-0" style={{ width: '32px' }}>
                            {/* <Image src={editIcon} /> */}
                            <i>
                                <FaEdit />
                            </i>
                        </button>
                        <button className="border-0" style={{ width: '32px' }}>
                            {/* <Image src={deleteIcon} /> */}
                            <i>
                                <FaTrashAlt />
                            </i>
                        </button>
                    </div>
                    {/* custom scroll table start */}
                    <div className="custom-table-container">
                        <table className="workout-table">
                            <thead>
                                <th>
                                    <td>Work Out Name</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{/*this filed stay blank */}</td>
                                    <td>Day 01</td>
                                    <td>Day 02</td>
                                    <td>Day 03</td>
                                    <td>Day 04</td>
                                    <td>Day 05</td>
                                    <td>Day 06</td>
                                    <td>Day 07</td>
                                    <td>Day 08</td>
                                </tr>
                                {Array.from({ length: 10 }).map((_, idx) => (
                                    <tr>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                                placeholder="Back"
                                            />
                                        </td>
                                        <td>
                                            <div>
                                                <p>
                                                    <span>1/05/2021, </span>{' '}
                                                    <span>(10 Minutes)</span>
                                                </p>
                                                <label className="container-custom">
                                                    <input type="checkbox" defaultChecked name="" />
                                                    <span className="check-mark"></span>
                                                </label>
                                                {/* <input type="checkbox" className='table-checkBox shadow' /> */}
                                            </div>
                                        </td>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                            />
                                        </td>
                                        <td>
                                            <input
                                                className="border-0 w-100 text-center"
                                                type="text"
                                                DefaultValue="Back"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                    {/* custom scroll table end */}
                </CheckboxStyling>
            </Wrapper>
        </WhiteBg>
    );
};

export default AfterCreateTable;
//background image
const BackgroundImage = styled('div')`
    position: relative;
    .bgWrap {
        position: absolute;
        width: 270px;
        height: 318px;
        margin-top: 30%;
        margin-left: 40%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
    }
`;
const CheckboxStyling = styled('div')`
    .workout-table th {
        z-index: 1;
    }
    /******************
Start input box radio button style
******************/
    /* The container-custom */
    .container-custom {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 25px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-decoration: underline;
        line-height: 22px;
    }

    /* Hide the browser's default checkbox */
    .container-custom input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .check-mark {
        position: absolute;
        top: -12px;
        left: 40%;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 0 2px 2px #ececec;
        z-index: 0;
    }

    /* When the checkbox is checked, add a blue background */
    .container-custom input:checked ~ .check-mark {
        background-color: #fff;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .check-mark:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container-custom input:checked ~ .check-mark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container-custom .check-mark:after {
        left: 9px;
        top: 5px;
        width: 8px;
        height: 15px;
        border: solid #259e17;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    /**********************
  End input box radio button style
  ***********************/
`;

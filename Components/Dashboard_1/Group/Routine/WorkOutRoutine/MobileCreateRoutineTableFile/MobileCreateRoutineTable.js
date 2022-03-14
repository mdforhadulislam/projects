import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import addIcon from '../../../../../../Assets/icon/add more plus.svg';
import user from '/Assets/images/dashboard/user.jpg';
import InputNumberBoxEdit from '../../../../../Common/InputNumberBox/InputNumberBoxEdit';
import NewInputDateBox from '../../../../../Common/InputDateBox/NewInputDateBox';
import { DateBox, DropdownIcon, InputNumber, WhiteBg } from '../StyledCssFile/StyledCss';
import dropdown from '../../../../../../Assets/icon/DropDownGray.svg';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';

const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
const MobileCreateRoutineTable = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberInc, setNumberInc] = useState(5);
    return (
        <WhiteBg>
            <Wrapper>
                {/* operation options */}
                {/* slider */}
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="d-flex align-items-center singleMemberProfile">
                            <div className="singleMemberProfile">
                                <Image src={user} alt="" width={70} height={70} />
                            </div>
                            <h4 className="ps-3 fw-normal">Masud Reja</h4>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex justify-content-between workout-routine-operation"
                    style={{ marginTop: '10px' }}>
                    <p>30 Day Challenge Workout</p>
                </div>
                {/* pre expanded uses for onload which accordion item by default open/ than use 'uuid' as preExpanded value matched the uuid value will be expanded by default */}
                <Accordion className="border-0" preExpanded={['1', '2', '3']}>
                    {items.map((item) => (
                        <>
                            <AccordionItem
                                key={item.id}
                                className="accordionItem my-3 bg-white boxShadow"
                                uuid={`${item.id}`}>
                                <AccordionItemHeading className="text-light">
                                    <AccordionItemButton className="accordion-button">
                                        <input
                                            className="bg-light border-0 rounded p-2"
                                            type="text"
                                            placeholder="Back..."
                                        />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="px-3">
                                    <div className="row py-3">
                                        <div className="col-sm-6 text-start">
                                            <h5 className="text-start">Starting Date</h5>
                                            <div
                                                style={{
                                                    position: 'relative',
                                                    display: 'inline-block'
                                                }}>
                                                <DateBox>
                                                    <NewInputDateBox
                                                        startDate={startDate}
                                                        setStartDate={setStartDate}
                                                    />
                                                </DateBox>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5 className="text-start fw-light">Ending Date</h5>
                                            <div
                                                style={{
                                                    position: 'relative',
                                                    display: 'inline-block'
                                                }}>
                                                <DateBox>
                                                    <NewInputDateBox
                                                        startDate={endDate}
                                                        setStartDate={setEndDate}
                                                    />
                                                </DateBox>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row py-2">
                                        <h5 className="text-start">Select workout day</h5>
                                        <div className="text-start adjust-time">
                                            <label className="checkbox-container-adjust-time text-capitalize">
                                                Saturday
                                                <input type="checkbox" name="saturday" />
                                                <span className="check-mark"></span>
                                            </label>
                                            <label className="checkbox-container-adjust-time text-capitalize">
                                                Sunday
                                                <input type="checkbox" name="sunday" />
                                                <span className="check-mark"></span>
                                            </label>
                                            <label className="checkbox-container-adjust-time text-capitalize">
                                                Monday
                                                <input type="checkbox" name="monday" />
                                                <span className="check-mark"></span>
                                            </label>
                                            <label className="checkbox-container-adjust-time text-capitalize">
                                                TuesDay
                                                <input type="checkbox" name="tuesday" />
                                                <span className="check-mark"></span>
                                            </label>
                                            <label className="checkbox-container-adjust-time text-capitalize">
                                                Wednesday
                                                <input type="checkbox" name="wednesDay" />
                                                <span className="check-mark"></span>
                                            </label>
                                            <label className="checkbox-container-adjust-time text-capitalize">
                                                Thursday
                                                <input type="checkbox" name="thurs" />
                                                <span className="check-mark"></span>
                                            </label>
                                            <label className="checkbox-container-adjust-time text-capitalize">
                                                Friday
                                                <input type="checkbox" name="friday" />
                                                <span className="check-mark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    {/* per day duration */}
                                    <div className="d-sm-flex align-items-center py-2">
                                        <h5 className="pe-4" style={{ fontSize: '15px' }}>
                                            Per Day Duration
                                        </h5>
                                        <div className="d-flex pb-4  justify-content-center">
                                            <div className="position-relative">
                                                <InputNumber>
                                                    <InputNumberBoxEdit
                                                        setNumberInc={setNumberInc}
                                                        numberInc={numberInc}
                                                    />
                                                </InputNumber>
                                            </div>
                                            <select name="" id="" className="select-time">
                                                <option>Seconds</option>
                                                <option>Minutes</option>
                                                <option>Hours</option>
                                            </select>
                                            <DropdownIcon>
                                                <Image src={dropdown} alt="123655" />
                                            </DropdownIcon>
                                        </div>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </>
                    ))}
                    <button className="d-flex align-items-center border-0 add-more-icon">
                        {/*<i  className="fas fa-plus"></i>*/}
                        <Image className="me-2" src={addIcon} alt="add more plus" /> Create New
                        Workout Routine
                    </button>
                </Accordion>

                {/* instruction section */}
                <h3 id="routineName" className="text-start mt-5 mb-4">
                    Instruction:{' '}
                </h3>

                <div className="accordion accordion-flush border-0" id="accordionFlushExample">
                    <div className="accordion-item bt-accordion rounded10 my-3 col-md-7 px-0">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button rounded10 collapsed py-4"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                Starting & Ending Date ?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-start">
                                Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the
                                first item's accordion body.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bt-accordion rounded10 my-3 col-md-7 px-0">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button
                                className="accordion-button rounded10 collapsed py-4"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                Work-Out Day?
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-start">
                                Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the
                                second item's accordion body. Let's imagine this being filled with
                                some actual content.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bt-accordion my-3 col-md-7 px-0">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button
                                className="accordion-button rounded10 collapsed py-4"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                Per Day Duration
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body start">
                                Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the
                                third item's accordion body. Nothing more exciting happening here in
                                terms of content, but just filling up the space to make it look, at
                                least at first glance, a bit more representative of how this would
                                look in a real-world application.
                            </div>
                        </div>
                    </div>
                </div>
                {/* button */}
                <div className="d-flex justify-content-end mt-4 btn-bootom">
                    <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/createRoutineFinal">
                        <button className="cmnBtn border-0 me-3">Next</button>
                    </Link>
                    <button className="cmnBtn">Cancel</button>
                </div>
            </Wrapper>
        </WhiteBg>
    );
};

export default MobileCreateRoutineTable;
const Wrapper = styled('div')`
    padding: 20px 20px;
    background: #fff;

    .singleMemberProfile h4 {
        font-size: 16px;
    }
    .singleMemberProfile img {
        width: 72px;
        height: 72px;
        border: 0.5px solid red;
        border-radius: 5px;
    }
    .text-gray {
        color: #666;
    }
    .add-more-icon {
        font-size: 14px;
        background: none;
        color: #666;
        margin-top: 20px;
        margin-bottom: 30px;
    }
    .add-more-icon img {
        width: 32px !important;
        padding-left: 8px !important;
    }
    .accordionItem {
        border-radius: 10px;
    }
    .accordion-button {
        background: #e22424;
        color: #fff;
        border-radius: 10px;
    }
    .accordion-button:focus {
        box-shadow: none;
    }
    .accordion-button::after {
        display: inline-block;
        content: '';
        height: 10px;
        width: 10px;
        margin-right: 12px;
        border-bottom: 2px solid currentColor;
        border-right: 2px solid currentColor;
        transform: rotate(45deg);
    }
    .accordion-button[aria-expanded='true']::after,
    .accordion-button[aria-selected='true']::after {
        transform: rotate(-135deg);
    }
    .accordion-button[aria-expanded='true'] {
        border-radius: 10px 10px 0 0;
    }
    .table-header {
        background-color: #e22424;
        border-radius: 10px 10px 0 0;
        color: #fff;
    }
    .bottom-radius {
        border-radius: 0 0 8px 8px;
    }
    .bt-accordion {
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
        border: none;
    }
    .bt-accordion .accordion-button {
        background: #fff !important;
        border-radius: 10px !important;
        color: #000;
        /* border: 1px solid #ececec; */
    }
    .bt-accordion .accordion-button[aria-expanded='true'] {
        border-bottom: none !important;
        color: #da1e37;
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        background-color: #ffc9c9 !important;
    }
    .accordion-button[aria-expanded='true'] {
        box-shadow: 0 0 1px 1px #da1e37 !important;
    }
    .btn-bootom .cmnBtn {
        color: #fff;
        width: 160px;
        height: 45px;
        background: #e22424;
        border-radius: 8px;
    }
    .btn-bootom .cmnBtn:last-child:hover {
        background: #e22424;
        color: #fff;
        border-color: #e22424;
    }
    .btn-bootom .cmnBtn:last-child {
        background: #fff;
        border: 1px solid #e22424;
        color: #e22424;
    }
    /* select date and day styling */
    .input-date {
        border: 1px solid rgb(226, 36, 36);
        border-radius: 5px;
        margin-bottom: 10px;
        text-align: left;
        margin-left: 0;
        padding-left: 0;
    }
    /* check box style */
    .adjust-time .checkbox-container-adjust-time {
        margin-right: 10px;
        padding-left: 30px;
        display: block;
        position: relative;
        line-height: 35px;
        color: #666;
    }
    .checkbox-container-adjust-time input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .adjust-time .check-mark {
        position: absolute;
        top: 4px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 5px;
        border: 0.5px solid #e22222;
        background-color: #fff;
    }

    /* When the checkbox is checked, add a blue background */
    .checkbox-container-adjust-time input:checked ~ .check-mark {
        background-color: #fff;
    }

    /* Create the check-mark/indicator (hidden when not checked) */
    .adjust-time .check-mark:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Show the check-mark when checked */
    .checkbox-container-adjust-time input:checked ~ .check-mark:after {
        display: inline-block;
    }

    /* Style the check-mark/indicator */
    .checkbox-container-adjust-time .check-mark:after {
        left: 9px;
        top: -8px;
        width: 9px;
        height: 23px;
        border: solid #2eb598;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    /* input type number customization */
    .input-number {
        width: 80px;
        border: 1px solid red;
        border-right: 0;
        border-radius: 5px 0 0 5px;
        padding-left: 5px;
    }
    .select-time {
        border: 1px solid rgb(226, 36, 36);
        border-left: 0;
        padding: 0 20px 0 15px;
        border-radius: 0 5px 5px 0;
        background: none;
    }
    .input-number-icon {
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgb(226, 36, 36);
        padding: 0 5px;
        color: #fff;
        display: inline-grid;
        pointer-events: none;
    }
    .input-number-icon i {
        font-size: 13px;
        padding: 0 5px;
    }
    .input-number-icon .fa-angle-up {
        border-bottom: 1px solid #fff;
    }
    .boxShadow {
        box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
    }
    //responsive position for indicator arrow
    @media screen and (max-width: 476px) {
        /* .accordion-button::after {
                margin-left: 85%;
            } */
    }
    @media screen and (max-width: 350px) {
        .accordion-button::after {
            margin-right: 0;
        }
    }
`;

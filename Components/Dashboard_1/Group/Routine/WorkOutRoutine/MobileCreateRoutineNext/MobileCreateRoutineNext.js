import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import user from '/Assets/images/dashboard/user.jpg';
import InputNumberBoxEdit from '../../../../../Common/InputNumberBox/InputNumberBoxEdit';

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const MobileCreateRoutineNext = () => {
    const [numberInc, setNumberInc] = useState(5);
    return (
        <Wrapper>
            {/* operation options */}
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
            <div className="d-flex justify-content-between workout-routine-operation mt-4">
                <p>30 Day Challenge Workout</p>
            </div>
            {/* pre expanded uses for onload which accordion item by default open/ than use 'uuid' as preExpanded value matched the uuid value will be expanded by default */}
            <Accordion className="border-0" preExpanded={['1']}>
                {items.map((item) => (
                    <AccordionItem
                        key={item.id}
                        className="accordionItem my-3 bg-light shadow"
                        uuid={`${item.id}`}>
                        <AccordionItemHeading className="text-light">
                            <AccordionItemButton className="accordion-button">
                                Back
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            {/* table row */}
                            <div className="row table-header mt-2 py-2">
                                <div className="col-4">Day</div>
                                <div className="col-8 text-center">Date</div>
                            </div>
                            <div className="row shadow-sm">
                                <div className="col-4 border py-2">1</div>
                                <div className="col-8 border py-2 text-center">
                                    Sat, 15Th July 2021
                                </div>
                            </div>
                            <div className="row shadow-sm text-center py-2 bottom-radius">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="pe-2">Duration:</div>
                                    <div className="d-flex my-2  justify-content-center">
                                        <div className="position-relative">
                                            <InputNumberBoxEdit
                                                setNumberInc={setNumberInc}
                                                numberInc={numberInc}
                                            />
                                        </div>
                                        <select name="" id="" className="select-time">
                                            <option>Minutes</option>
                                            <option>Hours</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* end table row */}
                            {/* table row */}
                            <div className="row table-header mt-2 py-2">
                                <div className="col-4">Day</div>
                                <div className="col-8 text-center">Date</div>
                            </div>
                            <div className="row shadow-sm">
                                <div className="col-4 border py-2">1</div>
                                <div className="col-8 border py-2 text-center">
                                    Sat, 15Th July 2021
                                </div>
                            </div>
                            <div className="row shadow-sm text-center py-2 bottom-radius">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="pe-2">Duration:</div>
                                    <div className="d-flex my-2  justify-content-center">
                                        <div className="position-relative">
                                            <InputNumberBoxEdit
                                                setNumberInc={setNumberInc}
                                                numberInc={numberInc}
                                            />
                                        </div>
                                        <select name="" id="" className="select-time">
                                            <option>Minutes</option>
                                            <option>Hours</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* end table row */}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="d-flex justify-content-end mt-4 btn-bootom">
                <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/afterCreateTableRoutine">
                    <button className="cmnBtn border-0 me-3">Done</button>
                </Link>
                <button className="cmnBtn">Cancel</button>
            </div>
        </Wrapper>
    );
};

export default MobileCreateRoutineNext;
const Wrapper = styled('div')`
    background: #fff;
    padding: 30px 10px;
    button {
        background: none;
    }
    .singleMemberProfile h4 {
        font-size: 14px;
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
    .select-time {
        border: 1px solid rgb(226, 36, 36);
        border-left: 0;
        border-radius: 0 5px 5px 0;
        background: none;
    }
    .btn-bootom .cmnBtn {
        color: #fff;
        width: 160px;
        height: 45px;
        background: #e22424;
        border-radius: 8px;
        margin-top: 30px;
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
    //responsive position for indicator arrow
    @media screen and (max-width: 476px) {
        .accordion-button::after {
            margin-left: 85%;
        }
    }
    @media screen and (max-width: 350px) {
        .accordion-button::after {
            margin-left: 83%;
        }
    }
`;

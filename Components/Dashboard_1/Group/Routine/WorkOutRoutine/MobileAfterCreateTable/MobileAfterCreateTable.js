import React from 'react';
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
import addIcon from '../../../../../../Assets/icon/add more plus.svg';
import editIcon from '../../../../../../Assets/icon/edit.svg';
import deleteIcon from '../../../../../../Assets/icon/android-delete.svg';
import user from '/Assets/images/dashboard/user.jpg';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const MobileAfterCreateTable = () => {
    return (
        <Wrapper>
            <div className="d-flex justify-content-end align-items-center">
                <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/viewAll">
                    <button className="text-dark border-0">View All</button>
                </Link>
            </div>
            {/* operation options */}
            <div className="row align-items-center">
                {/* user slider */}
                <div className="col-sm-7">
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex justify-content-evenly">
                                <div className=" d-flex justify-content-evenly align-items-center">
                                    <div className="singleMemberProfile">
                                        <Image src={user} alt="" width={34} height={34} />
                                    </div>
                                    <h4 className="ps-1 fw-normal">Masud Reja</h4>
                                </div>
                                <div className=" d-flex align-items-center">
                                    <div className="singleMemberProfile">
                                        <Image src={user} alt="" width={34} height={34} />
                                    </div>
                                    <h4 className="ps-1 fw-normal">Masud Reja</h4>
                                </div>
                            </div>
                            <div className="carousel-item d-flex justify-content-evenly">
                                <div className=" d-flex justify-content-evenly align-items-center">
                                    <div className="singleMemberProfile">
                                        <Image src={user} alt="" width={34} height={34} />
                                    </div>
                                    <h4 className="ps-1 fw-normal">Masud Reja</h4>
                                </div>
                                <div className=" d-flex align-items-center">
                                    <div className="singleMemberProfile">
                                        <Image src={user} alt="" width={34} height={34} />
                                    </div>
                                    <h4 className="ps-1 fw-normal">Masud Reja</h4>
                                </div>
                            </div>
                            <div className="carousel-item d-flex justify-content-evenly">
                                <div className=" d-flex justify-content-evenly align-items-center">
                                    <div className="singleMemberProfile">
                                        <Image src={user} alt="" width={34} height={34} />
                                    </div>
                                    <h4 className="ps-1 fw-normal">Masud Reja</h4>
                                </div>
                                <div className=" d-flex align-items-center">
                                    <div className="singleMemberProfile">
                                        <Image src={user} alt="" width={34} height={34} />
                                    </div>
                                    <h4 className="ps-1 fw-normal">Masud Reja</h4>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            {/* left arrow icon svg */}
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevrons-left">
                                <polyline points="11 17 6 12 11 7"></polyline>
                                <polyline points="18 17 13 12 18 7"></polyline>
                            </svg>
                            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            {/* right arrow icon svg */}
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-chevrons-right">
                                <polyline points="13 17 18 12 13 7"></polyline>
                                <polyline points="6 17 11 12 6 7"></polyline>
                            </svg>
                            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* End user slider */}
                <div className="col-12 col-sm-5 d-flex justify-content-end">
                    <button className="d-flex align-items-center border-0 add-more-icon">
                        {/*<i  className="fas fa-plus"></i>*/}
                        <Image className="me-2" src={addIcon} alt="add more plus" /> Create A New
                        Routine
                    </button>
                </div>
            </div>
            <div
                className="d-flex justify-content-between workout-routine-operation"
                style={{ marginTop: '10px' }}>
                <p>30 Day Challenge Workout</p>
                <div>
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
            </div>
            {/* pre expanded uses for onload which accordion item by default open/ than use 'uuid' as preExpanded value matched the uuid value will be expanded by default */}
            <Accordion className="border-0" preExpanded={['1']}>
                {items.map((item) => (
                    <AccordionItem
                        key={item.id}
                        className="accordionItem my-2 bg-light shadow"
                        uuid={`${item.id}`}>
                        <AccordionItemHeading className="text-light">
                            <AccordionItemButton className="accordion-button">
                                Back
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="row py-2">
                                <div className="col-6 text-start">
                                    <h5 className="text-start">Starting Date</h5>
                                    <span>15th july 2015</span>
                                </div>
                                <div className="col-6">
                                    <h5 className="text-start fw-light">Ending Date</h5>
                                    <span>15th july 2015</span>
                                </div>
                            </div>
                            <div className="row py-2">
                                <h5>Workout Day</h5>
                                <div className="row row-cols-3 row-cols-sm-4 g-2 mt-0 text-gray">
                                    <div>
                                        <span>1.</span> Sunday
                                    </div>
                                    <div>
                                        <span>2.</span> Sunday
                                    </div>
                                    <div>
                                        <span>3.</span> Sunday
                                    </div>
                                    <div>
                                        <span>4.</span> Sunday
                                    </div>
                                    <div>
                                        <span>5.</span> Sunday
                                    </div>
                                    <div>
                                        <span>6.</span> Sunday
                                    </div>
                                    <div>
                                        <span>7.</span> Sunday
                                    </div>
                                </div>
                            </div>
                            <div className="row py-2">
                                <h5>Per Day Duration</h5>
                                <p className="mb-1">N/A</p>
                            </div>
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
                                <div>
                                    <span>Duration:</span>{' '}
                                    <span className="ps-1 text-gray"> 15 Minutes</span>
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
                                <div>
                                    <span>Duration:</span>{' '}
                                    <span className="ps-1 text-gray"> 15 Minutes</span>
                                </div>
                            </div>
                            {/* end table row */}
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Wrapper>
    );
};

export default MobileAfterCreateTable;
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
        background: #e23434;
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
        background-color: #e23434;
        border-radius: 10px 10px 0 0;
        color: #fff;
    }
    .bottom-radius {
        border-radius: 0 0 8px 8px;
    }
    i {
        color: #666;
    }
    //responsive position for indicator arrow
    @media (max-width: 768px) {
        .carousel-item h4 {
            font-size: 2vw;
            font-weight: 300;
        }
        .carousel button svg {
            border-radius: 6px;
            background: #e23434;
            color: #fff;
            border-radius: 50%;
            padding: 5px;
            -webkit-box-shadow: 6px 6px 25px #dedede, -6px -6px 25px #ffffff;
            box-shadow: 6px 6px 25px #dedede, -6px -6px 25px #ffffff;
        }
    }
    @media (max-width: 476px) {
        .accordion-button::after {
            margin-left: 85%;
        }
    }
    @media (max-width: 350px) {
        .accordion-button::after {
            margin-left: 83%;
        }
    }
`;

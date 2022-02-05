import React from 'react';
import { Wrapper } from '../../../../../styles/AttendenceWrapper';
import calender from '/Assets/icon/calendar-line.svg';
import Link from 'next/link';
import Image from 'next/image';

const weeklyAttendence = () => {
    return (
        <Wrapper style={{ width: '90%', margin: 'auto' }} className="bg-white p-5">
            <div className="weekly-attendence mt-5 pt-5">
                <div className="row text-start d-flex align-items-center">
                    <h5 className="text-start">Saturday</h5>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="row">
                            <div className="col-6 py-2">
                                <label>1St Attendence Time</label>
                            </div>
                            <div className="col-6">
                                <div className="d-flex time-input-container text-start border-0">
                                    <input
                                        type="time"
                                        className="select-time-input m-0"
                                        value="09:30:00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="row pt-md-3">
                            <div className="col-6 col-lg-3 col-md-4">
                                <label className="title-height" htmlFor="">
                                    Subject Name
                                </label>
                            </div>
                            <div className="col-6 col-lg-9 col-md-8">
                                <input
                                    className="cost-field form-control subject-name-input"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-start mt-3">
                    <h5 className="text-start">Sunday</h5>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="row">
                            <div className="col-6 py-2">
                                <label>1St Attendence Time</label>
                            </div>
                            <div className="col-6">
                                <div className="d-flex time-input-container text-start border-0">
                                    <input
                                        type="time"
                                        className="select-time-input m-0"
                                        value="09:30:00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="row pt-md-3">
                            <div className="col-6 col-lg-3 col-md-4">
                                <label className="title-height" htmlFor="">
                                    Subject Name
                                </label>
                            </div>
                            <div className="col-6 col-lg-9 col-md-8">
                                <input
                                    className="cost-field form-control subject-name-input"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-start mt-3">
                    <h5 className="text-start">Monday</h5>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="row">
                            <div className="col-6 py-2">
                                <label>1St Attendence Time</label>
                            </div>
                            <div className="col-6">
                                <div className="d-flex time-input-container text-start border-0">
                                    <input
                                        type="time"
                                        className="select-time-input m-0"
                                        value="09:30:00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="row pt-md-3">
                            <div className="col-6 col-lg-3 col-md-4">
                                <label className="title-height" htmlFor="">
                                    Subject Name
                                </label>
                            </div>
                            <div className="col-6 col-lg-9 col-md-8">
                                <input
                                    className="cost-field form-control subject-name-input"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-start mt-3">
                    <h5 className="text-start">Tuesday</h5>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="row">
                            <div className="col-6 py-2">
                                <label>1St Attendence Time</label>
                            </div>
                            <div className="col-6">
                                <div className="d-flex time-input-container text-start border-0">
                                    <input
                                        type="time"
                                        className="select-time-input m-0"
                                        value="09:30:00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="row pt-md-3">
                            <div className="col-6 col-lg-3 col-md-4">
                                <label className="title-height" htmlFor="">
                                    Subject Name
                                </label>
                            </div>
                            <div className="col-6 col-lg-9 col-md-8">
                                <input
                                    className="cost-field form-control subject-name-input"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-start mt-3">
                    <h5 className="text-start">Wednestday</h5>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="row">
                            <div className="col-6 py-2">
                                <label>1St Attendence Time</label>
                            </div>
                            <div className="col-6">
                                <div className="d-flex time-input-container text-start border-0">
                                    <input
                                        type="time"
                                        className="select-time-input m-0"
                                        value="09:30:00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="row pt-md-3">
                            <div className="col-6 col-lg-3 col-md-4">
                                <label className="title-height" htmlFor="">
                                    Subject Name
                                </label>
                            </div>
                            <div className="col-6 col-lg-9 col-md-8">
                                <input
                                    className="cost-field form-control subject-name-input"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row text-start mt-3">
                    <h5 className="text-start">Thursday</h5>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="row">
                            <div className="col-6 py-2">
                                <label>1St Attendence Time</label>
                            </div>
                            <div className="col-6">
                                <div className="d-flex time-input-container text-start border-0">
                                    <input
                                        type="time"
                                        className="select-time-input m-0"
                                        value="09:30:00"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="row pt-md-3">
                            <div className="col-6 col-lg-3 col-md-4">
                                <label className="title-height" htmlFor="">
                                    Subject Name
                                </label>
                            </div>
                            <div className="col-6 col-lg-9 col-md-8">
                                <input
                                    className="cost-field form-control subject-name-input"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div
                className="accordion mt-5 accordion-flush frequently-question"
                id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button
                            className="accordion-button rounded collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Test Name?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the first item's
                            accordion body.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Total Test?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the second item's
                            accordion body. Let's imagine this being filled with some actual
                            content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Test Name?
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the third item's
                            accordion body. Nothing more exciting happening here in terms of
                            content, but just filling up the space to make it look, at least at
                            first glance, a bit more representative of how this would look in a
                            real-world application.
                        </div>
                    </div>
                </div>
            </div>

                <div className="bottom-buttons text-end pt-5">
                    <Link href="/dashboard_1/groups/groupcard/attendance/callAttendence">
                        <button className="cmnBtn btn-next border-0 mr-3">Create Now</button>
                    </Link>
                    <Link href="/dashboard_1/groups/groupcard/attendance/attendenceSystem">
                        <button className="cmnBtn btn-cancel">Cancel</button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default weeklyAttendence;

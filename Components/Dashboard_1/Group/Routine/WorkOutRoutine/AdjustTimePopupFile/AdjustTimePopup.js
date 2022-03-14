import React, { useState } from 'react';
import AdjustTimePopupNext from '../AdjustTimePopupNextFile/AdjustTimePopupNext';
import { DateBox, DropdownIcon, InputNumber, Wrapper } from '../StyledCssFile/StyledCss';
import styled from 'styled-components';
import NewInputDateBox from '/Components/Common/InputDateBox/NewInputDateBox';
import CheckBox from '../../../../../Common/CheckBox/CheckBox';
import InputNumberBoxEdit from '../../../../../Common/InputNumberBox/InputNumberBoxEdit';
import dropdown from '../../../../../../Assets/icon/DropDownGray.svg';
import Image from 'next/image';

const AdjustTimePopup = ({
    setAdjustTimePop,
    closeModal,
    startDate,
    setStartDate,
    endDate,
    setEndDate
}) => {
    const [adjustTimeNext, setAdjustTimeNext] = useState(false);
    const [numberInc, setNumberInc] = React.useState(0);
    const [workOutDay, setWorkOutDay] = useState({});
    const handleWeekSelect = (e) => {
        setWorkOutDay({ ...workOutDay, [e.target.name]: e.target.checked ? e.target.name : '' });
    };

    return (
        <Wrapper>
            {/* popup container */}
            {!adjustTimeNext && (
                <AdjustContainer>
                    <div className="modal-container z-index-1">
                        <div className="p-sm-5 p-md-0 mx-auto modal-content-adjust-time">
                            <div className="bg-white p-2 p-sm-5 p-md-4 shadow-all rounded10 text-center">
                                <h5 className="text-start mb-3 fw-light">Workout Name</h5>
                                <div className="workout-name-input text-start">
                                    <input
                                        type="text"
                                        className="text-capitalize shadow-all"
                                        placeholder="ABCD....|"
                                        active="true"
                                    />
                                </div>

                                <div className="row align-items-end mt-3">
                                    <div className="col-sm-5">
                                        <h5 className="text-start fw-light">Starting Date</h5>

                                        <DateBox>
                                            <NewInputDateBox
                                                startDate={startDate}
                                                setStartDate={setStartDate}
                                            />
                                        </DateBox>
                                    </div>
                                    <h5 className="col-sm-2">to</h5>
                                    <div className="col-sm-5">
                                        <h5 className="text-start fw-light">Ending Date</h5>
                                        <DateBox>
                                            <NewInputDateBox
                                                startDate={endDate}
                                                setStartDate={setEndDate}
                                            />
                                        </DateBox>
                                    </div>
                                </div>

                                <h5 className="text-center mt-5 mb-3">Choose Day</h5>
                                <h5 className="text-start">Select workout day</h5>
                                <div className="row row-cols-2 row-cols-md-4 ps-3 pb-2 text-start adjust-time">
                                    <label className="col checkbox-container-adjust-time text-capitalize">
                                        Saturday
                                        <input
                                            type="checkbox"
                                            name="saturday"
                                            onClick={handleWeekSelect}
                                        />
                                        <span className="check-mark"></span>
                                    </label>
                                    <label className="col checkbox-container-adjust-time text-capitalize">
                                        Sunday
                                        <input
                                            type="checkbox"
                                            name="sunday"
                                            onClick={handleWeekSelect}
                                        />
                                        <span className="check-mark"></span>
                                    </label>
                                    <label className="col checkbox-container-adjust-time text-capitalize">
                                        Monday
                                        <input
                                            type="checkbox"
                                            name="monday"
                                            onClick={handleWeekSelect}
                                        />
                                        <span className="check-mark"></span>
                                    </label>
                                    <label className="col checkbox-container-adjust-time text-capitalize">
                                        TuesDay
                                        <input
                                            type="checkbox"
                                            name="tuesday"
                                            onClick={handleWeekSelect}
                                        />
                                        <span className="check-mark"></span>
                                    </label>
                                    <label className="col checkbox-container-adjust-time text-capitalize">
                                        Wednesday
                                        <input
                                            type="checkbox"
                                            name="wednesDay"
                                            onClick={handleWeekSelect}
                                        />
                                        <span className="check-mark"></span>
                                    </label>
                                    <label className="col checkbox-container-adjust-time text-capitalize">
                                        Thursday
                                        <input
                                            type="checkbox"
                                            name="Thursday"
                                            onClick={handleWeekSelect}
                                        />
                                        <span className="check-mark"></span>
                                    </label>
                                    <label className="col checkbox-container-adjust-time text-capitalize">
                                        Friday
                                        <input
                                            type="checkbox"
                                            name="friday"
                                            onClick={handleWeekSelect}
                                        />
                                        <span className="check-mark"></span>
                                    </label>
                                </div>
                                {/* per day duration  */}
                                <div className="d-flex align-items-center pt-4">
                                    <h5 className="pe-4">Per Day Duration</h5>
                                    <div className="d-flex my-2  justify-content-center">
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
                                {/* instruction section */}
                                <h3 id="routineName" className="text-start mt-5 mb-4">
                                    Instruction:{' '}
                                </h3>

                                <div
                                    className="accordion accordion-flush border-0"
                                    id="accordionFlushExample">
                                    <div className="accordion-item rounded10 my-3 col-md-7 px-0">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button
                                                className="accordion-button collapsed py-3"
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
                                                Placeholder content for this accordion, which is
                                                intended to demonstrate the{' '}
                                                <code>.accordion-flush</code> class. This is the
                                                first item's accordion body.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item rounded10 my-3 col-md-7 px-0">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button
                                                className="accordion-button collapsed py-3"
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
                                                Placeholder content for this accordion, which is
                                                intended to demonstrate the{' '}
                                                <code>.accordion-flush</code> class. This is the
                                                second item's accordion body. Let's imagine this
                                                being filled with some actual content.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item rounded10 my-3 col-md-7 px-0">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button
                                                className="accordion-button collapsed py-3"
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
                                                Placeholder content for this accordion, which is
                                                intended to demonstrate the{' '}
                                                <code>.accordion-flush</code> class. This is the
                                                third item's accordion body. Nothing more exciting
                                                happening here in terms of content, but just filling
                                                up the space to make it look, at least at first
                                                glance, a bit more representative of how this would
                                                look in a real-world application.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* button */}
                                <div className="d-flex justify-content-end mt-4 btn-bootom">
                                    <button
                                        className="cmnBtn border-0 me-3"
                                        onClick={() => setAdjustTimeNext(true)}>
                                        Next
                                    </button>
                                    <button className="cmnBtn" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                            {/* end popup container */}
                        </div>
                    </div>
                </AdjustContainer>
            )}
            {adjustTimeNext && <AdjustTimePopupNext closeModal={closeModal} />}
        </Wrapper>
    );
};

export default AdjustTimePopup;
const AdjustContainer = styled('div')`
    max-height: 100vh;
    padding-bottom: 40px;
    overflow: auto;
    /* adjust time style start */
    .NewInputDateBox__DateMainBox-sc-1pbplnh-0 {
        width: 70%;
        max-width: 100%;
        input {
            width: 100%;
        }
    }
    .InputNumberBoxEdit__ButtonGroupBox-sc-3p9v36-0 {
        border-radius: 0;
        height: 40px;
        background: #e22424;
        border-left: 4px solid #e22424;
        border-right: 4px solid #e22424;
        button {
            /* height: 20px; */
        }
        button:first-child {
            margin-top: 0 !important;
        }
        button img {
            width: 18px !important;
        }
    }
    .modal-content-adjust-time {
        width: 700px;
        max-width: 100%;
    }
    .workout-name-input input {
        border: none;
        background-color: #f5f5f5;
        border-radius: 8px;
        width: 409px;
        max-width: 100%;
        height: 50px;
        margin-bottom: 15px;
        padding-left: 15px;
    }
    .workout-name-input input:focus {
        outline: 1px solid #e22424;
    }
    /* date icon customization */
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
        margin-right: 0px;
        padding-left: 30px;
        display: inline-block;
        position: relative;
        line-height: 35px;
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
        border-radius: 4px;
        border: 0.5px solid #da1e37;
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

    /** accordion button active color */
    .accordion-button:not(.collapsed) {
        color: #da1e37;
        background-color: #ffc9c9;
        box-shadow: 0 0 2px 2px #ececec;
    }
    .accordion-button:focus {
        border-color: #da1e37;
        box-shadow: 0 0 0 1px #da1e37;
    }
    /* end adjust time styles */
`;

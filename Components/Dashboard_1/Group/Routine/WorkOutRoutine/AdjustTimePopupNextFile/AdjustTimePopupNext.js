import React, { useState } from 'react';
import { DropdownIcon, InputNumber, Wrapper } from '../StyledCssFile/StyledCss';
import styled from 'styled-components';
import Image from 'next/image';
import arrowBack from '../../../../../../Assets/icon/ArrowBackIcon.svg';
import InputNumberBoxEdit from '../../../../../Common/InputNumberBox/InputNumberBoxEdit';
import dropdown from '../../../../../../Assets/icon/DropDownGray.svg';

const AdjustTimePopupNext = ({ closeModal }) => {
    const [numberInc, setNumberInc] = useState(5);
    return (
        <Wrapper>
            {/* <div className="d-flex align-items-center">
                <div className='singleMemberProfile'><img src="http://localhost:3000/assets/images/nav_image/brian-mercado-rm7rZYdl3rY-unsplash.jpg" alt="" /></div>
                <h4 className='ps-3 fw-normal'>Masud Reja</h4>
            </div> */}
            {/* popup container */}
            <AdjustTimeNext>
                <div className="modal-container mt-4">
                    <div className="col-lg-8 col-xxl-5 p-md-5 mx-auto">
                        <div className="bg-white p-5 shadow-all rounded10 text-center">
                            <h5 className="text-start mb-3" onClick={() => window.history.go(-1)}>
                                <Image src={arrowBack} /> Back
                            </h5>

                            <div className="shadow-all rounded-bottom8 mb-4">
                                <div className="row mx-auto bg-red modals-header py-2">
                                    <div className="col-4">Day</div>
                                    <div className="col-8">Date</div>
                                </div>
                                <div className="row">
                                    <div className="col-4 border-end py-3">1</div>
                                    <div className="col-8 border-start py-3">
                                        Sat, 15Th July 2021
                                    </div>
                                </div>
                                <div className="row border-top py-2 mx-auto">
                                    <div className="col-4 d-flex justify-content-end align-items-center">
                                        Duration
                                    </div>
                                    <div className="col-8">
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
                                </div>
                            </div>
                            <div className="shadow-all rounded-bottom8 mb-4">
                                <div className="row mx-auto bg-red modals-header py-2">
                                    <div className="col-4">Day</div>
                                    <div className="col-8">Date</div>
                                </div>
                                <div className="row">
                                    <div className="col-4 border-end py-3">30</div>
                                    <div className="col-8 border-start py-3">
                                        Sat, 15Th July 2021
                                    </div>
                                </div>
                                <div className="row border-top py-2 mx-auto">
                                    <div className="col-4 d-flex justify-content-end align-items-center">
                                        Duration
                                    </div>
                                    <div className="col-8">
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
                                </div>
                            </div>
                            {/* button */}
                            <div className="d-flex justify-content-end mt-4 btn-bootom">
                                <button className="cmnBtn border-0 me-3" onClick={closeModal}>
                                    Done
                                </button>
                                <button className="cmnBtn">Cancel</button>
                            </div>
                        </div>
                        {/* end popup container */}
                    </div>
                </div>
            </AdjustTimeNext>
        </Wrapper>
    );
};

export default AdjustTimePopupNext;

const AdjustTimeNext = styled('div')`
    max-height: 100vh;
    overflow: auto;
    /*adjustTimePopupNext style */
    .modal-container {
        border-radius: 10px;
    }
    .round-border {
        border-radius: 15px;
    }
    .bg-red {
        background-color: rgb(226, 36, 36);
        color: #fff;
    }
    .modals-header {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
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
`;

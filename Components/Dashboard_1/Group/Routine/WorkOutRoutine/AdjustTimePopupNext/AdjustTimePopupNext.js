import React from 'react';
import { Wrapper } from '../StyledCss/StyledCss';
import styled from 'styled-components';
import Image from 'next/image';
import arrowBack from '../../../../../../Assets/icon/ArrowBackIcon.svg';

const AdjustTimePopupNext = ({ closeModal }) => {
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
                        <div className="bg-light p-5 rounded-3 text-center">
                            <h5 className="text-start mb-3" onClick={() => window.history.go(-1)}>
                                <Image src={arrowBack} /> Back
                            </h5>
                            <div className="row bg-red modals-header py-2">
                                <div className="col-4">Day</div>
                                <div className="col-8">Date</div>
                            </div>
                            <div className="row shadow-sm">
                                <div className="col-4 border py-1">1</div>
                                <div className="col-8 border py-1">Sat, 15Th July 2021</div>
                            </div>
                            <div className="row shadow-sm">
                                <div className="col-4 d-flex justify-content-end align-items-center">
                                    Duration
                                </div>
                                <div className="col-8">
                                    <div className="d-flex my-2  justify-content-center">
                                        <div className="position-relative">
                                            <input
                                                type="number"
                                                className="input-number"
                                                placeholder="5"
                                            />
                                            <div className="input-number-icon">
                                                <i className="fas fa-angle-up"></i>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                        <select name="" id="" className="select-time">
                                            <option>Minutes</option>
                                            <option>Hours</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row bg-red modals-header mt-2 py-2">
                                <div className="col-4">Day</div>
                                <div className="col-8">Date</div>
                            </div>
                            <div className="row shadow-sm">
                                <div className="col-4 border py-1">30</div>
                                <div className="col-8 border py-1">Sat, 15Th July 2021</div>
                            </div>
                            <div className="row shadow-sm">
                                <div className="col-4 d-flex justify-content-end align-items-center">
                                    Duration
                                </div>
                                <div className="col-8">
                                    <div className="d-flex my-2 justify-content-center">
                                        <div className="position-relative">
                                            <input
                                                type="number"
                                                className="input-number"
                                                placeholder="5"
                                            />
                                            <div className="input-number-icon">
                                                <i className="fas fa-angle-up"></i>
                                                <i className="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                        <select name="" id="" className="select-time">
                                            <option>Minutes</option>
                                            <option>Hours</option>
                                        </select>
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

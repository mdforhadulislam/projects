import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import CreateRoutine from './classTestRoutine/CreateRoutine/CreateRoutine';

const classRoutine = () => {
    return (
        <Wrapper className="bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="head-line mt-5">Give A Test Routine Name</h2>
                        <div className="get-user-input">
                            <input
                                type="text"
                                className="singleMember text-capitalize"
                                placeholder="ABCD academy ...|"
                                name="workoutRoutineName"
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        
                    </div>
                    <div className="col-md-5">
                    <h2 className='head-line mt-5'>Instruction:</h2>
                        <select class="form-select mt-4" aria-label="Default select example">
                            <option selected>Give A Routine Name ?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                            <option value="5">Five</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex btn-bootom pb-5">
                    <Link href="/dashboard_1/groups/groupcard/">
                        <button className="cmnBtn border-0 me-3">Next</button>
                    </Link>
                    <button className="cmnBtn">Cancel</button>
                </div>
            </div>
            <CreateRoutine/>
        </Wrapper>
    );
};

export default classRoutine;

const Wrapper = styled('div')`
    i.singleMemberRoutine {
        font-size: 24px;
        margin-left: -50px;
        font-weight: 400;
    }
    input.singleMember,
    select.singleMember {
        background: #ececec;
        height: 65px;
        margin: 15px 0 30px;
        padding-left: 20px;
        border: 0;
        border-radius: 10px;
        width: 432px;
        max-width: 100%;
        font-size: 20px;
        outline: none;
    }
    .head-line {
        font-size: 29px;
        color: rgb(51, 51, 51);
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
    .form-select:focus{
        box-shadow: none;
    }
    .form-select{
        padding: 16px;
    border-radius: 11px;
    font-size: 18px;
    }
`;

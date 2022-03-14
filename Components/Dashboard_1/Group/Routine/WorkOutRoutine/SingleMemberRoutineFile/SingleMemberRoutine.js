import { FaPlus, FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { WhiteBg, Wrapper } from '../StyledCssFile/StyledCss';
import { useDispatch } from 'react-redux';
import { addToWorkOutRoutineName } from '../../../../../../Redux/Dashboard_1/Action/Routine/workOutRoutineAction';
import logo from '../../../../../../Assets/images/common_img/dutypediaLarge.png';

const SingleMemberRoutine = () => {
    const [create, setCreate] = useState(true);
    const [afterRoutineCreate, setAfterRoutineCreate] = useState(false);
    const [createRoutine, setCreateRoutine] = useState({});
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setCreateRoutine({ [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        dispatch(addToWorkOutRoutineName(createRoutine));
        setAfterRoutineCreate(true);
    };
    return (
        <WhiteBg>
            <Wrapper>
                {/* <ConfirmModal message="Do You Want To Delete This Routine?" /> */}
                {create && (
                    <div
                        id="created-work-out-routine"
                        className="created-book-list text-center"
                        onClick={() => setCreate(false)}>
                        <i>
                            <FaPlus />
                        </i>
                        <h3>Create A Routine</h3>
                    </div>
                )}
                {/* after clicking create routine */}
                {!create && !afterRoutineCreate && (
                    <>
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
                        <div id="routine-user-input">
                            <div className="row">
                                <div className="col-md-6">
                                    <div>
                                        <h3>Give A Routine Name </h3>
                                        <div className="get-user-input">
                                            <input
                                                onChange={handleInput}
                                                type="text"
                                                className="singleMember text-capitalize"
                                                placeholder="ABCD academy ...|"
                                                name="workoutRoutineName"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3>Select A Member </h3>
                                        <div className="get-user-input">
                                            <input
                                                type="text"
                                                className="singleMember selectMemberInput"
                                                placeholder="Masud Reja"
                                            />
                                            <i className="singleMemberRoutine">
                                                <FaSearch />
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 order-3 order-md-2">
                                    <h3>Instruction: </h3>
                                    <div
                                        className="accordion accordion-flush border-0"
                                        id="accordionFlushExample">
                                        <div className="accordion-item my-3 rounded10 col-md-10 px-0">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button
                                                    className="accordion-button collapsed rounded10 py-3"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne">
                                                    Give A Routine Name
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
                                        <div className="accordion-item rounded10 my-3 col-md-10 px-0">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button
                                                    className="accordion-button rounded10 collapsed py-3"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo">
                                                    Select A Member
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
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex btn-bootom">
                                <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/addSingleMember">
                                    <button className="cmnBtn border-0 me-3" onClick={handleSubmit}>
                                        Next
                                    </button>
                                </Link>
                                <button className="cmnBtn" onClick={() => setCreate(true)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </Wrapper>
        </WhiteBg>
    );
};

export default SingleMemberRoutine;
//background image
const BackgroundImage = styled('div')`
    position: relative;
    .bgWrap {
        position: absolute;
        width: 329px;
        height: 388px;
        margin-left: 45%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
    }
    @media (max-width: 768px) {
        .bgWrap {
            margin-left: 10%;
        }
    }
    @media (max-width: 400px) {
        display: none;
    }
`;

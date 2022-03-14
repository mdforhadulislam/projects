<<<<<<< HEAD
import { FaPlus } from 'react-icons/fa';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WhiteBg, Wrapper } from '../StyledCssFile/StyledCss';
import logo from '../../../../../../Assets/images/common_img/dutypediaLarge.png';
import styled from 'styled-components';

const AllMemberRoutine = () => {
    const [create, setCreate] = useState(false);
    return (
        <WhiteBg>
            <Wrapper>
                {!create && (
                    <div
                        id="created-work-out-routine"
                        className="created-book-list text-center"
                        onClick={() => setCreate(true)}>
                        <i className="">
                            <FaPlus />
                        </i>
                        <h3>Create All member Routine</h3>
                    </div>
                )}
                {create && (
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
                                    <h3>Give A Routine Name </h3>
                                    <div className="get-user-input">
                                        <input
                                            type="text"
                                            className="singleMember text-capitalize"
                                            placeholder="ABCD academy ...|"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
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
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex btn-bootom">
                                <Link href="/dashboard_1/groups/groupcard/routine/workOutRoutine/AddAllMemberRoutine">
                                    <button className="cmnBtn border-0 me-3">Next</button>
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

export default AllMemberRoutine;
<<<<<<< HEAD
//background image
const BackgroundImage = styled('div')`
    position: relative;
    .bgWrap {
        position: absolute;
        width: 229px;
        height: 288px;
        margin-left: 40%;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
        display: none;
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
=======
=======
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import WorkOut6 from '../WorkOut6/WorkOut6';

const AllMemberRoutine = () => {
    const [create, setCreate] = useState(false);
    const [workout6, setWorkout6] = useState(false);
    return (
        <>
            {!create && <div id="created-work-out-routine" className="created-book-list text-center" onClick={() => setCreate(true)} >
                <i className=""><FontAwesomeIcon icon={faPlus} /></i>
                <h3>Create All member Routine</h3>
            </div>
            }
            {create && !workout6 &&
                <>
                    <div id="routine-user-input">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Give A Routine Name </h3>
                                <div className="get-user-input">
                                    <input type="text" className="singleMember text-capitalize" placeholder='ABCD academy ...|' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3>Instruction: </h3>
                                <div className="get-user-input">
                                    <select name="" className="singleMember select">
                                        <option>Give A Routine Name ?</option>
                                        <option>Give A Routine Name ?</option>
                                        <option>Give A Routine Name ?</option>
                                        <option>Give A Routine Name ?</option>
                                    </select>
                                    <i className="fa fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Select Members </h3>
                                <div className="get-user-input">
                                    <input type="text" className="singleMember selectMemberInput w-100" placeholder='Masud Reja' />
                                    <i className="fas fa-search singleMemberRoutine"></i>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex btn-bootom">
                            <button className="cmnBtn border-0 mr-3" onClick={() => setWorkout6(true)}>Next</button>
                            <button className="cmnBtn" onClick={() => setCreate(true)}>Cancel</button>
                        </div>
                    </div>
                </>
            }
            {workout6 && <WorkOut6 />}
        </>
    );
};

export default AllMemberRoutine;
>>>>>>> faruk
>>>>>>> main

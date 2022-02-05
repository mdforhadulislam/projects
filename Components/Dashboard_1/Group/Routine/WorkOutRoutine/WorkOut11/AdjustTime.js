import React, { useState } from 'react';
import WorkOut1 from '../WorkOut1/WorkOut1';

const AdjustTime = ({ setAdjustTimePop }) => {
    const [workout1, setWorkout1] = useState(false);
    return (
        <>
            {/* popup container */}
            {!workout1 && <>
                <div className='modal-container mt-4'>
                    <div className='col-md-7 p-5 mx-auto'>
                        <div className='bg-light p-5 round-border text-center border'>
                            <h5 className='text-start mb-3 fw-light'>Workout Name</h5>
                            <div className="workout-name-input text-start">
                                <input type="text" className="text-capitalize shadow-sm" placeholder='' />
                            </div>

                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <h5 className='text-start fw-light'>Starting Date</h5>
                                    <div className="">
                                        <input type="date" className='input-date' />
                                    </div>
                                </div>
                                <div className="col-md-2">to</div>
                                <div className="col-md-5">
                                    <h5 className='text-start fw-light'>Ending Date</h5>
                                    <div className="">
                                        <input type="date" className='input-date' />
                                    </div>
                                </div>
                            </div>

                            <h5 className="text-center">Choose Day</h5>
                            <h5 className='text-start'>Select workout day</h5>
                            <div className="text-start adjust-time">
                                <label className="checkbox-container-adjust-time text-capitalize">Saturday<input type="checkbox" name='saturday' />
                                    <span className="check-mark"></span>
                                </label>
                                <label className="checkbox-container-adjust-time text-capitalize">Sunday<input type="checkbox" name='sunday' />
                                    <span className="check-mark"></span>
                                </label>
                                <label className="checkbox-container-adjust-time text-capitalize">Monday<input type="checkbox" name='monday' />
                                    <span className="check-mark"></span>
                                </label>
                                <label className="checkbox-container-adjust-time text-capitalize">TuesDay<input type="checkbox" name='tuesday' />
                                    <span className="check-mark"></span>
                                </label>
                                <label className="checkbox-container-adjust-time text-capitalize">Wednesday<input type="checkbox" name='wednesDay' />
                                    <span className="check-mark"></span>
                                </label>
                                <label className="checkbox-container-adjust-time text-capitalize">Thursday<input type="checkbox" name='thurs' />
                                    <span className="check-mark"></span>
                                </label>
                                <label className="checkbox-container-adjust-time text-capitalize">Friday<input type="checkbox" name='friday' />
                                    <span className="check-mark"></span>
                                </label>
                            </div>
                            {/* per day duration  */}
                            <div className='d-flex align-items-center'>
                                <h5 className='pe-4'>Per Day Duration</h5>
                                <div className='d-flex my-2  justify-content-center'>
                                    <div className='position-relative'>
                                        <input type="number" className='input-number' placeholder='5' />
                                        <div className='input-number-icon'>
                                            <i className="fas fa-angle-up"></i>
                                            <i className="fas fa-angle-down"></i>
                                        </div>
                                    </div>
                                    <select name="" id="" className='select-time'>
                                        <option>Minutes</option>
                                        <option>Hours</option>
                                    </select>
                                </div>

                            </div>
                            {/* instruction section */}
                            <h3 id="routineName" className="text-left mt-5 mb-4">Instruction: </h3>

                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item shadow-sm my-3 col-md-7 px-0">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Starting & Ending Date ?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-start">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                    </div>
                                </div>
                                <div className="accordion-item shadow-sm my-3 col-md-7 px-0">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Work-Out Day?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-start">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                    </div>
                                </div>
                                <div className="accordion-item shadow-sm my-3 col-md-7 px-0">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Per Day Duration
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body start">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                    </div>
                                </div>
                            </div>
                            {/* button */}
                            <div className="d-flex justify-content-end mt-4 btn-bootom">
                                <button className="cmnBtn border-0 mr-3" onClick={() => setWorkout1(true)}>Next</button>
                                <button className="cmnBtn" onClick={() => setAdjustTimePop(false)}>Cancel</button>
                            </div>
                        </div>
                        {/* end popup container */}
                    </div>
                </div>
            </>
            }
            {workout1 && <WorkOut1 setAdjustTimePop={setAdjustTimePop} />}
        </>
    );
};

export default AdjustTime;
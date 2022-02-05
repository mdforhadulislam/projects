import React from 'react';

const WorkOut1 = ({ setAdjustTimePop }) => {
    return (
        <>
            {/* <div className="d-flex align-items-center">
                <div className='singleMemberProfile'><img src="http://localhost:3000/assets/images/nav_image/brian-mercado-rm7rZYdl3rY-unsplash.jpg" alt="" /></div>
                <h4 className='ps-3 fw-normal'>Masud Reja</h4>
            </div> */}
            {/* popup container */}
            <div className='modal-container mt-4'>
                <div className='col-md-6 p-5 mx-auto'>
                    <div className='bg-light p-5 round-border text-center border'>
                        <h5 className='text-start mb-3'><i className="fas fa-arrow-left"></i> Back</h5>
                        <div className="row bg-red modals-header py-2">
                            <div className="col-4">Day</div>
                            <div className="col-8">Date</div>
                        </div>
                        <div className="row shadow-sm">
                            <div className="col-4 border py-1">1</div>
                            <div className="col-8 border py-1">Sat, 15Th July 2021</div>
                        </div>
                        <div className="row shadow-sm">
                            <div className="col-4 d-flex justify-content-end align-items-center">Duration</div>
                            <div className="col-8">
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
                            <div className="col-4 d-flex justify-content-end align-items-center">Duration</div>
                            <div className="col-8">
                                <div className='d-flex my-2 justify-content-center'>
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
                        </div>
                        {/* button */}
                        <div className="d-flex justify-content-end mt-4 btn-bootom">
                            <button className="cmnBtn border-0 mr-3" onClick={() => setAdjustTimePop(false)}>Done</button>
                            <button className="cmnBtn" >Cancel</button>
                        </div>
                    </div>
                    {/* end popup container */}
                </div>
            </div>
        </>
    );
};

export default WorkOut1;
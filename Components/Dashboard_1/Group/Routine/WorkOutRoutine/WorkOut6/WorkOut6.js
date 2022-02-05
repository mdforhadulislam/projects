import React, { useState } from 'react';
import AdjustTime from '../WorkOut11/AdjustTime';
import Workout2 from '../Workout2/Workout2';

const WorkOut6 = () => {
    const [workOut2, setWorkOut2] = useState(false);
    const [adjustTimePop, setAdjustTimePop] = useState(false);
    return (
        <>
            {!workOut2 && <>
                <div className="d-flex align-items-center">
                    <div className='singleMemberProfile'><img src="http://localhost:3000/assets/images/nav_image/brian-mercado-rm7rZYdl3rY-unsplash.jpg" alt="" /></div>
                    <h4 className='ps-3 fw-normal'>Masud Reja</h4>
                </div>

                {/* custom scroll table start */}
                {!adjustTimePop && <>
                    <div className="custom-table-container">
                        <table className='workout-table'>
                            <thead>
                                <th>
                                    <td>Work Out Name</td>
                                    <td>{/* this filed stay blank */}</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                    <td>SaturDay</td>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{/*this filed stay blank */}</td>
                                    <td>Time</td>
                                    <td>Day 01</td>
                                    <td>Day 02</td>
                                    <td>Day 03</td>
                                    <td>Day 04</td>
                                    <td>Day 05</td>
                                    <td>Day 06</td>
                                    <td>Day 07</td>
                                    <td>Day 08</td>
                                </tr>
                                {Array.from({ length: 10 }).map((_, idx) => (<tr>
                                    <td><input className='border-0 text-center' type="text" DefaultValue='Back' placeholder='Legs' /></td>
                                    <td><button className='rounded' onClick={() => setAdjustTimePop(true)} data-bs-toggle="modal">adjust time</button></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>))}
                            </tbody>
                            <tfoot>
                                <button className='my-3 bg-light text-dark py-2 h-100'>
                                    <img className='me-2' src="../assets/images/svg/add more plus.svg" alt="add more plus" />
                                    Add More
                                </button>
                            </tfoot>
                        </table>
                    </div>
                    {/* custom scroll table end */}


                    {/* instruction section */}
                    <h3 id="routineName" className="text-left mt-5 mb-4">Instruction: </h3>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item shadow-sm my-3 col-md-4 px-0">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed py-4 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Meals ?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item shadow-sm my-3 col-md-4 px-0">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Adjust Time
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end btn-bottom">
                        <button className="cmnBtn border-0 mr-3" onClick={() => setWorkOut2(true)}>Save</button>
                        <button className="cmnBtn">Cancel</button>
                    </div>

                </>
                }
            </>
            }
            {adjustTimePop && <AdjustTime setAdjustTimePop={setAdjustTimePop} />}
            {/* work out one */}
            {
                workOut2 && <Workout2 setWorkOut2={setWorkOut2} />
            }
        </>
    );
};

export default WorkOut6;
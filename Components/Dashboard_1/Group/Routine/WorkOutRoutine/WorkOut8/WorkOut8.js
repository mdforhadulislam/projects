import React, { useState } from 'react';
import Workout7 from '../Workout7/Workout7';

const WorkOut8 = ({ setViewAll }) => {
    const [viewTable, setViewTable] = useState(false);
    return (
        <>
            {!viewTable &&
                <>
                    <h5 className='text-start mb-3 mx-4' onClick={() => setViewAll(false)}><i className="fas fa-arrow-left"></i> Back</h5>
                    {/* indivisual list */}
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <div key={idx} className="row shadow-sm p-1 rounded px-2 py-2 align-items-center mx-4 my-3">
                            <div className='col'>
                                <div className='d-flex'>
                                    <div className='member-list-profile-image-container position-relative'>
                                        <img src="https://namesdir.com/img/Masud-3.png" alt="" />
                                        <i className="far fa-play-circle"></i>
                                    </div>
                                    <div className='ps-2 d-flex align-items-center'>
                                        <div>
                                            <h4>Masud Reja</h4>
                                            <span>ID: Dp435783</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col text-end">
                                <a href="#viewRoutine" onClick={() => setViewTable(true)}>View Routine</a>
                            </div>
                        </div>
                    ))}
                </>
            }
            {
                viewTable && <Workout7 />
            }
        </>
    );
};

export default WorkOut8;
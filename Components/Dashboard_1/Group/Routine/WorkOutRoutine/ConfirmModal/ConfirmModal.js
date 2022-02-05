import React from 'react';

const ConfirmModal = ({ message }) => {
    return (
        <div className='modal-container mt-4'>
            <div className='col-md-6 p-5 mx-auto'>
                <div className='bg-light p-5 round-border text-center border'>

                    <p>{message ? message : 'Do You Want To Delete This Routine?'}</p>

                    {/* button */}
                    <div className="d-flex justify-content-center mt-4 btn-bootom">
                        <button className="cmnBtn border-0 mr-3">Yes</button>
                        <button className="cmnBtn">No</button>
                    </div>
                </div>
                {/* end popup container */}
            </div>
        </div>
    );
};

export default ConfirmModal;
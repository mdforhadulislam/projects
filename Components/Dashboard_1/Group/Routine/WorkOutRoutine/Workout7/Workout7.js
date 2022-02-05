import React from 'react';

const Workout7 = ({ setWorkOut7 }) => {
    return (
        <>
            <div className="d-flex align-items-center pb-3" onClick={() => setWorkOut7(false)}>
                <h4><i className="fas fa-arrow-left fw-light"></i></h4>
                <h4 className='ps-3 fw-normal'>Back</h4>
            </div>
            <div className="d-flex align-items-center">
                <div className='singleMemberProfile'><img src="http://localhost:3000/assets/images/nav_image/brian-mercado-rm7rZYdl3rY-unsplash.jpg" alt="" /></div>
                <h4 className='ps-3 fw-normal'>Masud Reja</h4>
            </div>
            {/* operation options */}
            <div className="d-flex justify-content-end workout-routine-operation" style={{ marginTop: '10px' }}>
                <button>{/*<i  className="fas fa-plus"></i>*/}
                    <img className='me-2' src="../assets/images/svg/add more plus.svg" alt="add more plus" /> Create A New Routine</button>
                <button><i className="fas fa-edit"></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
            </div>
            {/* custom scroll table start */}
            <div className="custom-table-container">
                <table className='workout-table'>
                    <thead>
                        <th>
                            <td>Work Out Name</td>
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
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' placeholder='Back' /></td>
                            <td>
                                <div>
                                    <p><span>1/05/2021, </span> <span>(10 Minutes)</span></p>
                                    <label className="container-custom"><input type="checkbox" defaultChecked name="" /><span className="check-mark shadow"></span></label>
                                    {/* <input type="checkbox" className='table-checkBox shadow' /> */}
                                </div>
                            </td>
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' /></td>
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' /></td>
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' /></td>
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' /></td>
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' /></td>
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' /></td>
                            <td><input className='border-0 text-center' type="text" DefaultValue='Back' /></td>
                        </tr>))}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
            {/* custom scroll table end */}
        </>

    );
};

export default Workout7;
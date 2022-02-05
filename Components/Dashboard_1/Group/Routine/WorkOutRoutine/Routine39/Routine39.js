import React from 'react';

const Routine39 = () => {
    return (
        <>
            <div className="row routine39 py-5">
                <h2><i className="fas fa-arrow-left"></i> Back</h2>
            </div>
            {/* member name and profile */}
            <div className="row">
                <div className='singleMemberProfile'><img src="http://localhost:3000/assets/images/nav_image/brian-mercado-rm7rZYdl3rY-unsplash.jpg" alt="" /></div>
            </div>
            {/* edit delete and add new */}
            <div className="d-flex justify-content-end workout-routine-operation">
                <button><i className="fas fa-plus"></i> Create A New Routine</button>
                <button><i className="fas fa-edit"></i></button>
                <button><i className="fas fa-trash-alt"></i></button>
            </div>
            {/* chart table start */}
            {/* table head */}
            <table className="table table-bordered routine-chart-table mt-4">
                <thead>
                    <th scope="col">Work-Out Name</th>
                    <th scope="col">Saturday</th>
                    <th scope="col">Sunday</th>
                    <th scope="col">Saturday</th>
                    <th scope="col">Sunday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Sunday</th>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Lorem ipsum</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Routine39;
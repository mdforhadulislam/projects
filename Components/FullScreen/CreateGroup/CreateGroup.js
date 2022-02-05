import React, { useState } from 'react';
import AcademicActivities from '../AcademicActivities/AcademicActivities';

const CreateGroup = () => {
    const [createGroup, setCreateGroup] = useState(false);
    const [createForm, setCreateForm] = useState(false);




    let handleSubmit = (event) => {
        event.preventDefault();
        // setCreateGroup()
        console.log();
      }
    return (
        <>
            {!createGroup &&

                <form onSubmit={handleSubmit}>
                    <div className="group-part" id="group-part">
                        {/* <!-- <div className=""> --> */}
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="group-inner rounded">
                                    <div className="group-top-headline">
                                        <h4 className="text-capitalize">Group For</h4>
                                    </div>
                                    <h3 className="group-name">Enter A Group Name
                                    </h3>


                                    {/* <!-- user input group text --> */}
                                    <div className="get-user-input">
                                        <input type="text" className="user-input-field text-capitalize" />
                                        <label htmlFor="online-meeting" className="checkbox-container">Online Meeting Or Class
                                            <input id="online-meeting" type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="attendence" className="checkbox-container">Attendence
                                            <input id="attendence" type="checkbox" name="attendence" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="booklist" className="checkbox-container">Book List
                                            <input id="booklist" type="checkbox" name="booklist" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="routine" className="checkbox-container">Routine
                                            <input id="routine" type="checkbox" name="routine" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="class-test" className="checkbox-container">Class Test
                                            <input id="class-test" type="checkbox" name="class-test" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <button id="create-group-btn"
                                        className="user-submit-btn text-center text-capitalize text-white" type="submit" onClick={() => setCreateGroup(true)}>Create Now</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                </form>
            }
            {createGroup && <AcademicActivities />}
        </>
    );
};

export default CreateGroup;

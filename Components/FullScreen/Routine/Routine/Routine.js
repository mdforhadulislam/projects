import React, { useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClassRoutine from '../ClassRoutine/ClassRoutine';
import DietRoutine from '../DietRoutine/DietRoutine';

const Routine = () => {

  const [createRoutine, setCreateRoutine] = useState("");

  return (
    <div className="routine-inner">
      <div id="routine-top-btn-section">
        <div className="group-btn">
          <button id="class-routine" className={`"text-capitalize px-0 btn-border activeBtn ${createRoutine === "" && "button"} `} onClick={() => { setCreateRoutine("") }} ><h4>Class
            Routine</h4></button>
          <button id="class-test-routine" className={`text-capitalize px-0 margin-left ${createRoutine === "test" && "button"}`} onClick={() => { setCreateRoutine("test") }} ><h4>Class Test Routine</h4>
          </button>
          <button id="diet-routine" className={`"text-capitalize px-0 margin-left ${createRoutine === "diet" && "button"}`} onClick={() => { setCreateRoutine("diet") }}><h4>Diet Routine</h4>
          </button>
          <button id="workout-routine" className={`"text-capitalize px-0 margin-left ${createRoutine === "work" && "button"}`} onClick={() => { setCreateRoutine("work") }}><h4>Work- Out Routine</h4>
          </button>
        </div>

        {/* <!-- class routine btn icon start --> */}
        {/* {createRoutine === "" && !createClassRoutine && */}
        {createRoutine === "" && <ClassRoutine />}
          
        {/* <!-- class routine btn icon end --> */}

        {/* <!-- class routine btn icon start --> */}
        {createRoutine === "test" &&
          <div id="created-class-test-routine" className="created-book-list text-center">
            <i className=""><FontAwesomeIcon icon={faPlus} /></i>
            <h3>Create A Class Test Routine</h3>
          </div>}
        {/* <!-- class routine btn icon end --> */}

        {/* <!-- diet routine btn icon start --> */}
        {createRoutine === "diet" && <DietRoutine/>}
        {/* <!-- diet routine btn icon end --> */}

        {/* <!-- class routine btn icon start --> */}
        {createRoutine === "work" &&
          <div id="created-work-out-routine" className="created-book-list text-center">
            <i className=""><FontAwesomeIcon icon={faPlus} /></i>
            <h3>Create A Work Out Routine</h3>
          </div>}
        {/* <!-- class routine btn icon end --> */}
      </div>

      
      {/* <!-- class routine table end here -->
            <!-- class routine table end here -->

            <!-- ============================================================ --> */}

      
    </div>
  );
};

export default Routine;

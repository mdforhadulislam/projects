import React, { useState } from 'react';
import EmployeeAttendence from './EmployeeAttendence/index';
import EmployeeList from './EmployeeList';
import EmployeeSalary from './EmployeeSalary/index';

function Dutypedia() {
    //create Employee state end

    // reander components state
    let [employeeList, setEmployeeList] = useState(true);
    let [employeeAttendence, setEmployeeAttendence] = useState(false);
    let [employeeSalary, setEmployeeSalary] = useState(false);

    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto">
                <div className="w-full h-auto">
                    <div
                        className="  w-full overflow-auto hiddenScrollBar "
                        style={{ alignItems: 'center' }}>
                        <div
                            className=" lg:p-[0px] p-[8px] pl-0 w-[460px] lg:w-full h-auto flex align-middle justify-start flex-row "
                            style={{ alignItems: 'center' }}>
                            <div
                                className=" w-[120px] lg:w-[160px] p-[8px] lg:text-left text-center lg:p-0 lg:pr-[13px] lg:pb-[5px] text-[#da1e37] cursor-pointer border-b-[1px] border-[#da1e37] lg:text-[20px]"
                                id="list__one"
                                onClick={(e) => {
                                    setEmployeeList(true);
                                    setEmployeeAttendence(false);
                                    setEmployeeSalary(false);
                                }}
                                style={
                                    employeeList
                                        ? {
                                              color: '#da1e37',
                                              borderBottom: '0.1vw solid #da1e37'
                                          }
                                        : {
                                              color: '#313131',
                                              borderBottom: '0.1vw solid #313131'
                                          }
                                }>
                                Employee List
                            </div>
                            <span className="w-[1px] h-[24px] inline-block bg-[#666666]"></span>

                            <div
                                className="w-[180px] lg:w-[240px]  lg:text-left text-center lg:p-0 p-[8px] lg:pr-[13px] lg:pb-[5px] lg:pl-[13px] text-[#313131] cursor-pointer border-b-[1px] border-[#666666] lg:text-[20px]"
                                id="list__two"
                                onClick={(e) => {
                                    setEmployeeList(false);
                                    setEmployeeAttendence(true);
                                    setEmployeeSalary(false);
                                }}
                                style={
                                    employeeAttendence
                                        ? {
                                              color: '#da1e37',
                                              borderBottom: '0.1vw solid #da1e37'
                                          }
                                        : {
                                              color: '#313131',
                                              borderBottom: '0.1vw solid #313131'
                                          }
                                }>
                                Employee Attendence
                            </div>
                            <span className="w-[1px] h-[24px] inline-block bg-[#666666]"></span>

                            <div
                                className="w-[140px] lg:w-[200px] p-[8px] lg:text-left text-center lg:p-[0px] lg:pr-[13px] lg:pb-[5px]  lg:pl-[13px] text-[#313131] cursor-pointer border-b-[1px] border-[#666666] lg:text-[20px]"
                                id="list__four"
                                onClick={(e) => {
                                    setEmployeeList(false);
                                    setEmployeeAttendence(false);
                                    setEmployeeSalary(true);
                                }}
                                style={
                                    employeeSalary
                                        ? {
                                              color: '#da1e37',
                                              borderBottom: '0.1vw solid #da1e37'
                                          }
                                        : {
                                              color: '#313131',
                                              borderBottom: '0.1vw solid #313131'
                                          }
                                }>
                                Employee Salary
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto pt-[25px] pb-[5px]">
                {employeeList && <EmployeeList />}

                {employeeAttendence && <EmployeeAttendence />}

                {employeeSalary && <EmployeeSalary />}
            </div>
        </div>
    );
}

export default React.memo(Dutypedia);

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
                    <div className="w-full h-auto flex align-middle justify-start flex-row">
                        <div
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
                            }
                            className="w-[160px] p-0 pr-[13px] pb-[5px] text-[#da1e37] cursor-pointer border-b-[1px] border-[#da1e37] text-[20px]"
                            id="list__one">
                            Employee List
                        </div>
                        <span className="w-[1px] h-[24px] inline-block bg-[#666666]"></span>

                        <div
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
                            }
                            className="w-[240px] pr-[13px] pb-[5px] pl-[13px] text-[#313131] cursor-pointer border-b-[1px] border-[#666666] text-[20px]"
                            id="list__two">
                            Employee Attendence
                        </div>
                        <span className="w-[1px] h-[24px] inline-block bg-[#666666]"></span>

                        <div
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
                            }
                            className="w-[200px] pr-[13px] pb-[5px]  pl-[13px] text-[#313131] cursor-pointer border-b-[1px] border-[#666666] text-[20px]"
                            id="list__four">
                            Employee Salary
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

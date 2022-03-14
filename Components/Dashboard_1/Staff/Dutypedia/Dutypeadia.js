import React, { useState } from 'react';
import StyleSheet from './Dutypedia.module.css';
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
        <div className={StyleSheet.dutypedia__container}>
            <div className={StyleSheet.dutypedia__container__header}>
                <div className={StyleSheet.dutypedia__container__header__navbar}>
                    <div className={StyleSheet.ul}>
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
                            className={StyleSheet.li}
                            id="list__one">
                            Employee List
                        </div>
                        <span className={StyleSheet.row}></span>

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
                            className={StyleSheet.li}
                            id="list__two">
                            Employee Attendence
                        </div>
                        <span className={StyleSheet.row}></span>

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
                            className={StyleSheet.li}
                            id="list__four">
                            Employee Salary
                        </div>
                    </div>
                </div>
            </div>

            <div className={StyleSheet.dutypedia__container__body}>
                {employeeList && <EmployeeList />}

                {employeeAttendence && <EmployeeAttendence />}

                {employeeSalary && <EmployeeSalary />}
            </div>
        </div>
    );
}

export default React.memo(Dutypedia);

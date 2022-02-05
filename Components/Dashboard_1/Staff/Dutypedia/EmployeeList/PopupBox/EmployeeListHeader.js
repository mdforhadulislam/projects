import React from 'react';
import StyleSheet from "../Main.module.css";

export default function EmployeeListHeader() {
    return (
        <div className={StyleSheet.employee__container__header}>
              <ul>
                <li>Name</li>
                <li>Position</li>
                <li>Gender</li>
                <li>Mobile No</li>
                <li>Email</li>
                <li>Joining Date</li>
                <li>Salary Date</li>
              </ul>
            </div>
    )
}

import React from 'react';
import StyleSheet from './EmployeeSalaryBoxHeader.module.css';

export default function EmployeeSalaryBoxHeader() {
    return (
        <div className={StyleSheet.employee__salary__container__body__coloum__header}>
            <ul>
                <li>Name</li>
                <li>Salary Ammount</li>
                <li>Salary Date</li>
                <li>Status</li>
                <li>Salary Type</li>
            </ul>
        </div>
    );
}

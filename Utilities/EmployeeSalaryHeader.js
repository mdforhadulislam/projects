import React from 'react';
import { CircleCheckBox } from './Utilites';

export default function EmployeeSalaryHeader({
    upcomingActions,
    upcomingValue,
    dueActions,
    dueValue,
    paidActions,
    paidValue
}) {
    return (
        <div className={StyleSheet.employee__salary__container__header}>
            <CircleCheckBox
                name="Upcoming"
                title="Upcoming"
                actions={(value) => {
                    upcomingActions(value);
                }}
                value={upcomingValue}
                style={{ marginLeft: '72%' }}
            />

            <CircleCheckBox
                name="Due"
                title="Due"
                actions={(value) => {
                    dueActions(value);
                }}
                value={dueValue}
                style={{ width: '6vw' }}
            />

            <CircleCheckBox
                name="Paid"
                title="Paid"
                actions={(value) => {
                    paidActions(value);
                }}
                value={paidValue}
                style={{ width: '6vw' }}
            />
        </div>
    );
}

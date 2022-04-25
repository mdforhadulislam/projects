/* eslint-disable react/react-in-jsx-scope */
import BlanceIcon from './icons/BlanceIcon';
import CoustomerReviewIcon from './icons/CoustomerReviewIcon';
import DashBordIcon from './icons/DashBordIcon';
import ExpenseIcon from './icons/ExpenseIcon';
import GroupIcon from './icons/GroupIcon';
import MemberIcon from './icons/MemberIcon';
import NoticeIcon from './icons/NoticeIcon';
import ServiceIcon from './icons/ServiceIcon';
import SettingIcon from './icons/SettingIcon';
import StafIcon from './icons/StafIcon';

// eslint-disable-next-line import/prefer-default-export
export const multipleDashboardData = [
    {
        // eslint-disable-next-line react/react-in-jsx-scope
        // eslint-disable-next-line react/jsx-filename-extension
        // eslint-disable-next-line react/react-in-jsx-scope
        // eslint-disable-next-line react/jsx-filename-extension
        icon: <DashBordIcon />,
        title: 'Dashboard',
        dropdownList: [
            {
                title: 'Employee List',
                link: '/dashboard_1'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: 'Company Holiday'
            },
            {
                title: ' Employee Salary '
            }
        ]
    },
    {
        icon: <ServiceIcon />,
        title: 'Service',
        dropdownList: [
            {
                title: 'Employee List'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <MemberIcon />,
        title: 'Member',
        dropdownList: [
            {
                title: 'Employee List'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <GroupIcon />,
        title: 'Group',
        dropdownList: [
            {
                title: 'Employee List',
                link: '/dashboard_1/groups'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <NoticeIcon />,
        title: 'Notice',
        dropdownList: [
            {
                title: 'Employee List',
                link: '/dashboard_1/notice'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <NoticeIcon />,
        title: 'Appointment',
        dropdownList: [
            {
                title: 'Employee List',
                link: '/dashboard_1/appointment'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <StafIcon />,
        title: 'Staff & Partner',
        dropdownList: [
            {
                title: 'Employee List',
                link: '/multiple_dashboard/staff_and_partner'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <ExpenseIcon />,
        title: 'Expenses',
        dropdownList: [
            {
                title: 'Employee List',
                link: '/dashboard_1/expenses'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <BlanceIcon />,
        title: 'Account Balance',
        dropdownList: [
            {
                title: 'Employee List'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <CoustomerReviewIcon />,
        title: 'Customer Review',
        dropdownList: [
            {
                title: 'Employee List'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        dropdownList: [
            {
                title: 'Employee List'
            },
            {
                title: 'Employee Attendance'
            },
            {
                title: ' Employee Salary '
            },
            {
                title: 'Company Holiday'
            }
        ]
    }
];

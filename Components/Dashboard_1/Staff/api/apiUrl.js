// all get url start

export const getEmployeeURL = 'https://dutychoice.com/app-api/employee/?format=json';
export const getEmployeeJoinTypeURL = 'https://dutychoice.com/app-api/join-type/?format=json';
export const getRegionDataURL = 'https://dutychoice.com/app-api/region/?format=json';
export const getCityDataURL = 'https://dutychoice.com/app-api/city/?format=json';
export const getAreaDataURL = 'https://dutychoice.com/app-api/area/?format=json';
export const getEmployeeDocumentsURL = 'https://dutychoice.com/app-api/extra-files/';
export const getSalaryMonthDateURL = 'https://dutychoice.com/app-api/month-day/?format=json';
export const getSalaryWeekDayURL = 'https://dutychoice.com/app-api/days/?format=json';
export const getEmployeePermitionURL = 'https://dutychoice.com/app-api/permissions/?format=json';

// all get url end

// all post url start

export const postEmployeeDocumentsURL = 'https://dutychoice.com/app-api/extra-files/';
export const postEmployeeDetailsURL = 'https://dutychoice.com/app-api/employee/';

// all post url end

// all delete url start

export const deleteEmployeeDocumentsURL = (id) => {
    return `https://dutychoice.com/app-api/extra-files/${id}/`;
};
export const deleteEmployeeDetailsURL = (id) => {
    return `https://dutychoice.com/app-api/employee/${id}/`;
};

// all delete url end

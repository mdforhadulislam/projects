export async function getEmployeeList() {
    const URL = 'https://dutychoice.com/app-api/employee/';
    const respons = await fetch(URL);
    const getResult = await respons.json();
    return getResult;
}


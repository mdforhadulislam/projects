const RequestOption = (method, postBody) => {
    const allHeaders = new Headers();
    allHeaders.append('Content-Type', 'application/json');
    return {
        method,
        headers: allHeaders,
        body: postBody,
        redirect: 'follow'
    };
};

export async function getEmployeeList() {
    const URL = 'https://dutychoice.com/app-api/employee/?format=json';
    const respons = await fetch(URL, RequestOption('GET'));
    const getResult = await respons.json();
    return getResult;
}

export async function getRegionData() {
    const URL = 'https://dutychoice.com/app-api/region/?format=json';
    const respons = await fetch(URL, RequestOption('GET'));
    const getResult = await respons.json();
    return getResult;
}

export async function getCityData() {
    const URL = 'https://dutychoice.com/app-api/city/?format=json';
    const respons = await fetch(URL, RequestOption('GET'));
    const getResult = await respons.json();
    return getResult;
}

export async function getAreaData() {
    const URL = 'https://dutychoice.com/app-api/area/?format=json';
    const respons = await fetch(URL, RequestOption('GET'));
    const getResult = await respons.json();
    return getResult;
}

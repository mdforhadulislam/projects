import axios from 'axios';

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
    const response = await axios.get(URL);
    return response.data;
}

export async function getRegionData() {
    const URL = 'https://dutychoice.com/app-api/region/?format=json';
    const response = await axios.get(URL);
    return response.data;
}

export async function getCityData() {
    const URL = 'https://dutychoice.com/app-api/city/?format=json';
    const response = await axios.get(URL);
    return response.data;
}

export async function getAreaData() {
    const URL = 'https://dutychoice.com/app-api/area/?format=json';
    const response = await axios.get(URL);
    return response.data;
}

export async function getEmployeeDocuments() {
    const URL = `https://dutychoice.com/app-api/extra-files/?format=json`;
    const response = await axios.get(URL);
    return response.data;
}

export async function postEmployeeDocuments(data, progress) {
    const URL = `https://dutychoice.com/app-api/extra-files/`;
    const response = await axios.post(URL, data, { onUploadProgress: progress });
    return response.data;
}

// export async function deleteEmployeeDocuments(id) {
//     const URL = `https://dutychoice.com/app-api/extra-files/${id}/`;
//     const response = await axios.delete(URL);
//     return response.data;
// }

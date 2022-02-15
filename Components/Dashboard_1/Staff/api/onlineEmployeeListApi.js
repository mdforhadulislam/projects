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
    // const URL = 'https://dutychoice.com/app-api/employee/';
    // const respons = await fetch(URL, RequestOption('GET'));
    // const getResult = await respons.json();
    // return getResult;
    return 'hello';
}

import axios from 'axios';

const options = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
};

export const getApiCall = async (url) => {
    try {
        const URL = url;
        const { data } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(`Error  ${error}`);
    }
};
export const postApiCall = async (url, datas, progress) => {
    try {
        const URL = url;
        const { data } = await axios.post(URL, datas, {
            headers: options.headers,
            onUploadProgress: progress
        });
        return data;
    } catch (error) {
        console.log(`Error  ${error}`);
    }
};
export const deleteApiCall = async (url) => {
    try {
        const URL = url;
        const { data } = await axios.delete(URL, options);
        return data;
    } catch (error) {
        console.log(`Error  ${error}`);
    }
};

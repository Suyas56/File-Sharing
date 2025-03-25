// import axios from 'axios';

// const API_URI = 'https://filesharesuyash.vercel.app/';

// export const uploadFile = async (data) => {
//     try {
//         const response = await axios.post(`${API_URI}/upload`, data);
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling the API ', error.response || error.message); // Corrected 'errror' to 'error'
//     }
// }

import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URI;
console.log('API_URI:', API_URI);
export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'  // If you're uploading files
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a non-2xx status
            console.log('Response Error:', error.response);
        } else if (error.request) {
            // Request was made, but no response received
            console.log('Request Error:', error.request);
        } else {
            // Other error
            console.log('Error', error.message);
        }
    }
}

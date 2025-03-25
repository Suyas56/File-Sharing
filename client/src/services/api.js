import axios from 'axios';

const API_URI =process.env.API_URI;

export const uploadDocument = async (documentData) => {
    try {
        const result = await axios.post(`${API_URI}/upload`, documentData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(result);
        return result.data;
    } catch (error) {
        if (error.response) {
            console.log('Server Response Error:', error.response);
        } else if (error.request) {
            console.log('No Response from Server:', error.request);
        } else {
            console.log('Unknown Error:', error.message);
        }
    }
}

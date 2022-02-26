import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-e2edf/us-central1/api' //The API Cloud Function Url
});

export default instance;
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // You can add custom headers or token here
        const token = localStorage.getItem('token'); // Example: getting token from local storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle error responses
        if (error.response.status === 401) {
            // Redirect to login page or perform other actions
            console.log('Unauthorized! Redirecting to login...');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;

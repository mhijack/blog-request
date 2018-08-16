import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Default axios configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; // this is default anyway

// interceptors is shared globally
axios.interceptors.request.use(
    request => {
        console.log('interceptor request success log:',request);

        // Interceptor needs to always return the request, otherwise will block request
        return request;
    },
    error => {
        console.log('interceptor request error log', error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(response => {
    console.log('interceptor response success log', response);
    return response;
}, error => {
    console.log('interceptor request error log', error);
    return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

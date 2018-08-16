import axios from 'axios';

// Creates an instance of axios
// Adopts all defualt global settings and overwrite whatever is specified here
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
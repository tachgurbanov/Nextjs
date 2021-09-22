import axios from 'axios'
const BASE_URL = 'https://jsonplaceholder.typicode.com'

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout: 10000,
    headers:{
        'Accept': 'application/json',
 
    }
})

export {BASE_URL, axiosInstance};
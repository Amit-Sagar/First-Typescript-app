import axios from 'axios'

export const apiFetch = axios.create({
    baseURL : "https://fakestoreapi.com",
})


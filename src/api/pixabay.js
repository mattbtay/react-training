import axios from 'axios';

const KEY = '40899815-4cfa263d5cfbb25ad638998be';

export default axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: KEY
    }
})
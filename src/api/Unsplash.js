import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID KmSCNjNf99QFKWroRX7aOlDr9NxZye7OgZCcZ74P3eM'
    }
});
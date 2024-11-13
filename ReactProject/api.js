// api.js
const API_URL = 'http://localhost:5000/users';

export const fetchData = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
};
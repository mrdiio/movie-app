import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: `${apiUrl}`,

  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});

export default apiClient;

import axios from 'axios';

const key = `1af1b60b3daa4e74aef724270cb9609f`;
export const URL = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

export const getNewsApi = () => axios.get(URL);

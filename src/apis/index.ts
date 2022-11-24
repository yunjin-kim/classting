import axios from 'axios';

export const fetcher = axios.create({
  baseURL: 'https://opentdb.com/api.php',
});

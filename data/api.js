import axios from 'axios';

const api = axios.create({
  baseURL: 'https://runs-dev-test.herokuapp.com/runs-dev-test/v1',
  headers: {
    Authorization: 'apiKeyDatabase MTcwYmQ0OGY2MTRkNDVmZWIyZGFjZTU2YTBkNmQxYzYzZDgzMzUyODA5YzFmMGY0N2IzOWVkOWVkYjEwMmU2MQ=='
  }
});


export default api;
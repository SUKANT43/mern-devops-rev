import { useState } from 'react';
import axios from 'axios';

function useApi() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');
  
  const trigger = async (url, method, data = null) => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        method,
        url,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        data,
      };
      const response = await axios(config);
      setResponseData(response.data);
    } catch (err) {
      if (err.response) {
        const status = err.response.status;
        if (status >= 400 && status < 500) {
          setError('Client error: Bad Request');
        } else if (status >= 500) {
          setError('Server error: Internal Server Error');
        }
      } else if (err.request) {
        setError('Network error: No response from server.');
      } else {
        setError(`Error: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return { responseData, error, loading, trigger };
}

export default useApi;

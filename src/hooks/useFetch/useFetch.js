import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const {data: response_data} = await axios.get(url);
      setData(response_data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data};
}

export default useFetch;

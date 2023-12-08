import { useState, useEffect } from 'react'
import { instance } from './index'
const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        instance
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => setError(err.response ? err.response.data : err))
            .finally(() => setLoading(false))
    }, [url]);

    return { data, error, loading }
}

export default useFetch;

import { useEffect, useState } from "react";

const useFetch = (url: string, moeda1: string, moeda2: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err: any) {
                setError(err.message);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;


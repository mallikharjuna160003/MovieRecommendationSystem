import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

/**
 * 
 * useFetch():
 * It is a custom hook to fetch data from api.
 * params: url parameters is the api to fetch data from tmdb.
 */

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromAPI(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
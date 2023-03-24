import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
            .then((res) => {
                if(!res.ok) {
                    throw Error('Couldn\'t fetch data');
                }
                return res.json();
            })
            .then((res) => {
                setData(res);
                setIsPending(false);
                setError(null);
            })
            .catch((e) => {
                setError(e.message);
                setIsPending(false);
            })
        }, 1000)
    }, [url])
    return {data, isPending, error};
}
 
export default useFetch;
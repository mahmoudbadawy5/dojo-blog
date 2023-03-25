import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let abortControl = new AbortController();
        setTimeout(() => {
        fetch(url, {signal: abortControl.signal})
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
                if(e.name === "AbortError") {
                    console.log('Aborted');
                }
                else {
                    setError(e.message);
                    setIsPending(false);
                }
            })
        }, 1000)
        return () => {
            abortControl.abort();
        }
    }, [url])
    return {data, isPending, error};
}
 
export default useFetch;
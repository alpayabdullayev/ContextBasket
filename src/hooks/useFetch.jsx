import React from 'react'
import { useEffect } from 'react';

const useFetch = (url, callback) => {
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => callback(data))
            .catch((error) => console.log('error', error));
    }, [url]);
};

export default useFetch;
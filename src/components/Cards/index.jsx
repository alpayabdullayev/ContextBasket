import React, { useState, useEffect, useContext } from 'react'; 
import { BasketContext } from '../../context/BasketContext';
import useFetch from '../../hooks/useFetch';

const Cards = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { handleBasket } = useContext(BasketContext);

    const url = 'http://localhost:3000/products';

    const Callback = (data) => {
        if (!status) {
            console.log(data);
            setData(data);
            setStatus(true);
            setIsLoading(false);
        }
    };

    useFetch(url, Callback);

    return (
        <div className='product'>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                data && data.map((item) => (
                    <div key={item.id}>
                        <div><img src={item.image} alt="" /></div>
                        <h1>{item.brand}</h1>
                        <button onClick={() => handleBasket(item)}>AddToBasket </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cards;

import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext';

const Basket = () => {
    const { basket,handleRemove,handleCountVal } = useContext(BasketContext);

    return (
    <div className='card'>
        <h1>BASKETIM</h1>
        <br />
      {
        basket.map((item)=>(
            <div >
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                <h4>count {item.count}</h4>
                <h5>brand {item.brand}</h5>
                <button onClick={()=>handleRemove(item.id)}>silmek</button>
                <button className="countVal" onClick={()=>handleCountVal(true,item)}>+</button>
                <button className="countVal" onClick={()=>handleCountVal(false,item)}>-</button>
                </div>
                
            </div>
        ))
      }
    </div>
  )
}

export default Basket

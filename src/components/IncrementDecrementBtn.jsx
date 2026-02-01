import "./IncrementDecrementBtn.css";

import { useState } from 'react';
const IncrementDecrementBtn = ({quantity, changeQuantity, minValue = 0, maxValue = 10} = {}) => {
    
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if(count < maxValue) {
            setCount((prevState) => prevState + 1);
            changeQuantity(quantity+1);
        }
    }

    const handleDecrementCounter = () => {
        if(count > minValue) {
            setCount((prevState) => prevState - 1);
            changeQuantity(quantity-1);
        }
    }
    
    return (
        <div className='btn-group'>
            <button className='increment-btn' onClick={handleIncrementCounter}>
                <span className='material-symbols-outlined'>+</span>
            </button>

            <p className="counter-btn-text">{count}</p>

            <button className='decrement-btn' onClick={handleDecrementCounter}>
                <span className='material-symbols-outlined'>-</span>
            </button>   
        </div>
    )
}

export default IncrementDecrementBtn
import { useEffect, useRef } from 'react';

const Counter = ({ counterNumber, dispatch, position, stock }) => {
    const inp = useRef();
    const increment = () => {
        dispatch({ type: "INCREMENT", stock: stock });
    }

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    }

    useEffect(() => {
        inp.current.value = counterNumber.count;
    }, [counterNumber.count])


    return (
        <div className="custom-number-input h-10 w-32">
            <div className='counter'>
                <button onClick={decrement} className="counter__button rounded-l">
                    <span>−</span>
                </button>
                <input type="number" min={1} max={stock} id={`counter-${position}`} className="counter__input" ref={inp} defaultValue={counterNumber.count}></input>
                <button onClick={increment} className="counter__button rounded-r">
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

export default Counter
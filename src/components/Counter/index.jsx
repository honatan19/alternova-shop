import React, { useRef, useEffect } from 'react'

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
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={decrement} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" min={1} max={stock} id={`counter-${position}`} className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" name="custom-input-number" ref={inp} defaultValue={counterNumber.count}></input>
                <button onClick={increment} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )
}

export default Counter
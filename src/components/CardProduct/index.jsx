import { useReducer } from 'react';
import { useMainContext } from "../../contexts/MainProvider";
import { counterReducer } from '../../reducers';
import Counter from "../Counter";

const CardProduct = ({ data, position }) => {
    const MainCtx = useMainContext();
    const initialState = { count: 1 };
    const [counterNumber, dispatch] = useReducer(counterReducer, initialState);
    const addToCart = (e) => {
        data.quantity = counterNumber.count;
        data.position = position;
        MainCtx.setCart([...MainCtx.cart, data]);
        e.target.classList.add('btn-disabled');
    }

    return (
        <div className="card card-compact bg-base-100 w-[300px] shadow-xl">
            <figure>
                <img src="https://fakeimg.pl/300x187/c4c4c4/" width="300" height="187" className="rounded-t-box" />
            </figure>
            <div className="card-body">
                <div className="card-title flex items-center font-extrabold">{data.name}</div>
                <div className="w-full">
                    <div className="badge badge-ghost mb-2 capitalize">{data.type}</div>
                </div>
                <p className="text-base-content text-sm text-opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur facilis nemo perspiciatis.</p>
                <strong>${data.unit_price.toLocaleString('es-CO')}</strong>
                <div className="card-actions justify-between">
                    <div>
                        <Counter counterNumber={counterNumber} dispatch={dispatch} position={position} stock={data.stock} />
                    </div>
                    <div>
                        <button onClick={addToCart} className="btn btn-success text-xs">Añadir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
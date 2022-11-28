import { useEffect, useState } from 'react';
import { useMainContext } from '../../contexts/MainProvider';
import { createOrderJson } from '../../utils';
import { CartIcon } from '../Icons';
import Table from './Table';

const Cart = ({ countCart }) => {
    const MainCtx = useMainContext();
    const cartItems = MainCtx.cart;

    const [total, setTotal] = useState(0);

    const createOrder = () => {
        const jsonOrder = createOrderJson(MainCtx.cart);
        const blob = new Blob([jsonOrder], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank').focus();
    }

    useEffect(() => {
        let totalInit = 0;
        cartItems.forEach(element => {
            totalInit = totalInit + (element.unit_price * element.quantity)
        });
        setTotal(totalInit);
    }, [cartItems, total])


    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost btn-circle">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <CartIcon />
                        <span className="badge badge-xs badge-primary indicator-item">{countCart}</span>
                    </div>
                </button>
            </label>
            <div tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                {countCart && countCart > 0
                    ? <>
                        <div className='cart w-fit h-fit xs:w-screen xs:pl-9 sm:w-screen sm:pl-9 p-4'>
                            <h3>Carrito de compras</h3>
                            <Table />
                            <div className='flex flex-row items-center justify-between mt-3'>
                                <div>
                                    <strong>Total a pagar:</strong> ${total.toLocaleString('es-CO')}
                                </div>
                                <div>
                                    <button onClick={createOrder} className="btn btn-sm btn-success">Crear orden</button>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>
                        <div className='flex place-content-center items-center content-center w-96 h-32'>
                            <p>No ha añadido productos al carrito 🛒</p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart
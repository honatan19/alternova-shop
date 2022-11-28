import { useMainContext } from '../../contexts/MainProvider';
import TableItem from './TableItem';

const Table = () => {
    const MainCtx = useMainContext();
    const cartItems = MainCtx.cart;
    return (
        <div className="overflow-x-auto w-full mt-8">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>P. Unit</th>
                        <th>Precio total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems ?
                        cartItems.map((info, i) => {
                            return (<TableItem key={i} item={info} position={i} />)
                        })
                        :
                        <>
                            <div className="results__content-not-results">
                                <p>No ha añadido productos al carrito 🛒 [1]</p>
                            </div>
                        </>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
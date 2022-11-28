import { useMainContext } from '../../contexts/MainProvider';
import { DeleteIcon } from '../Icons';

const TableItem = ({ item, position }) => {
    const MainCtx = useMainContext();
    let cartItems = MainCtx.cart;
    const deleteProduct = () => {
        cartItems = cartItems.filter((_item, i) => i !== position);
        MainCtx.setCart(cartItems);
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://fakeimg.pl/48x48/c4c4c4/" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{item.name}</div>
                        <span className="badge badge-ghost badge-sm">{item.type}</span>
                    </div>
                </div>
            </td>
            <td>{item.quantity}</td>
            <td>${item.unit_price.toLocaleString('es-CO')}</td>
            <td>${(item.unit_price * item.quantity).toLocaleString('es-CO')}</td>
            <th>
                <button className="btn btn-sm btn-circle hover:bg-red-500 border-none" onClick={deleteProduct}>
                    <DeleteIcon />
                </button>
            </th>
        </tr>
    )
}

export default TableItem
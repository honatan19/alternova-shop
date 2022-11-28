import { useMainContext } from '../../contexts/MainProvider';
import Cart from '../Cart';
import { UploadIcon } from '../Icons';
import UploadProducts from '../UploadProducts';

const Navbar = () => {
    const MainCtx = useMainContext();
    return (
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <UploadIcon />
                    </label>
                    <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-max">
                        <UploadProducts />
                    </div>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">Alternova Shop</a>
            </div>
            <div className="navbar-end">
                <Cart countCart={MainCtx.cart.length}/>
            </div>
        </nav>
    )
}

export default Navbar
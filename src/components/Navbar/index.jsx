import { useMainContext } from '../../contexts/MainProvider';
import { CartIcon, UploadIcon } from '../Icons';
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
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <CartIcon />
                        <span className="badge badge-xs badge-primary indicator-item">{MainCtx.cart.length}</span>
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
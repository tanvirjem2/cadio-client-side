import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'


const NavBar = () => {

    const navOptions = <>
        <li><Link className='text-sm barlow-extrabold' to={`/`}>HOME</Link></li>
        <li><Link className='text-sm barlow-extrabold' to={``}>ADD PRODUCT</Link></li>
        <li><Link className='text-sm barlow-extrabold' to={``}>My CART</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black lg:px-12 text-white">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-6 text-black">

                        {/* For Small Devices */}

                        {navOptions}

                    </ul>
                </div>
                <Link to={"/"}>
                    <img src={logo} alt="" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">

                    {/* For large Devices */}

                    {navOptions}

                </ul>
            </div>

            <div className="navbar-end">
                <Link to={``}>
                    <button className="btn text-sm barlow-extrabold border-none bg-[#0094ED] text-white">
                        LOGIN
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default NavBar;
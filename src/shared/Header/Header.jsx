import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Header = () => {

  //  const {user} = useContext(AuthContext)

    const links = <>
        <Link to="/"><a className='me-3'>Home</a></Link>
        <Link to="/allcollege"><a className='me-3'>Colleges</a></Link>
        <Link to="/addmission"><a className='me-3'>Addmission</a></Link>
        <Link to="/mycollege"><a className='me-3'>My College</a></Link>
        
         
         
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {links}
         
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Get Addmission</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  {/* login and register */}
  <div className="navbar-end">

        <Link to="/login"><a className='me-3'>Login</a></Link>
        <Link to="/register"><a className='me-3'>register</a></Link>
  </div>
</div>
    );
};

export default Header;
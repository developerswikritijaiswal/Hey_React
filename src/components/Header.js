import { useState } from 'react';
import {LOGO_CDN} from '../utils/constants';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const HeaderComponent = () => {
  // let btnName = 'Login';
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();


  return (
    <div className="header-container flex justify-between items-center px-4 bg-white shadow-md fixed top-0 w-full z-10">
        <div className="logo w-24">
          <img src={LOGO_CDN} alt="logo w-full h-full" className="logo"/>
        </div>
        <div className="nav-items">
          <ul className='flex items-center gap-4'>
            <li>Online Status: <span className='font-14 text-sm'>{onlineStatus ? "🟢" : "🔴"}</span></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <button className='login-btn text-sm px-3 py-1 bg-orange-500 text-white border-2 border-transparent rounded hover:bg-white hover:border-orange-500 transition hover:text-orange-500' 
              onClick={()=> {
                btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login')
                }}>{btnName}
            </button>
          </ul>
        </div>
    </div>
  )
}

export default HeaderComponent;
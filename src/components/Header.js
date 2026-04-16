import { useState } from 'react';
import {LOGO_CDN} from '../utils/constants';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const HeaderComponent = () => {
  // let btnName = 'Login';
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();


  return (
    <div className="header-container">
        <div className="logo">
          <img src={LOGO_CDN} alt="logo" className="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status: <span className='font-14'>{onlineStatus ? "🟢" : "🔴"}</span></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <button className='login-btn' 
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
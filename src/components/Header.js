import { useState } from 'react';
import {LOGO_CDN} from '../utils/constants';

const HeaderComponent = () => {
  // let btnName = 'Login';
  const [btnName, setBtnName] = useState('Login');
  return (
    <div className="header-container">
        <div className="logo">
          <img src={LOGO_CDN} alt="logo" className="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
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
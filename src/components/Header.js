import { useState } from 'react';
import {LOGO_CDN} from '../utils/constants';
import {Link} from 'react-router-dom';

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
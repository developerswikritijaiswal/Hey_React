import {LOGO_CDN} from '../utils/constants';

const HeaderComponent = () => {
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
          </ul>
        </div>
    </div>
  )
}

export default HeaderComponent;
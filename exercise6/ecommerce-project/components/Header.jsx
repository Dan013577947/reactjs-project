import { NavLink, useNavigate } from 'react-router'
import WhiteLogo from '../src/assets/images/logo-white.png'
import MobileLogo from '../src/assets/images/mobile-logo-white.png'
import './Header.css'
import {totalQuantity} from '../pages/utils/totalQuantity';
import { useState } from 'react';

function Header({cart}) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const saveInput = (event) =>{
    setSearch(event.target.value);
  }

  const searchClicked = () =>{
    navigate(`/?search=${search}`);
  }

  
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo"
              src={WhiteLogo} />
            <img className="mobile-logo"
              src={MobileLogo} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input onChange={saveInput} value={search} className="search-bar" type="text" placeholder="Search" />

          <button onClick={searchClicked}  className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">

            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity(cart)}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header

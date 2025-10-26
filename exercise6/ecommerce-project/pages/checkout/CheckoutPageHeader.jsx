import { Link } from 'react-router'
import './CheckoutPageHeader.css'
import Logo from '../../src/assets/images/logo.png'
import MobileLogo from '../../src/assets/images/mobile-logo.png'
import {totalQuantity} from '../utils/totalQuantity';
function CheckoutPageHeader({ cart }) {
  
  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={Logo} />
              <img className="mobile-logo" src={MobileLogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">{totalQuantity(cart)} items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPageHeader
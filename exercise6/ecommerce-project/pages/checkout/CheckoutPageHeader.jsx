import { Link } from 'react-router'
import './CheckoutPageHeader.css'
import Logo from '../../src/assets/images/logo.png'
import MobileLogo from '../../src/assets/images/mobile-logo.png'
import { useState, useEffect } from 'react'
function CheckoutPageHeader({ cart }) {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let total = 0;

    cart.forEach((item) => {
      total += item.quantity;
    })
    setTotalQuantity(total);

  }, [cart]);
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
              to="/">{totalQuantity} items</Link>)
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
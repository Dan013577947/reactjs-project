import './CheckoutPage.css'
import CheckoutPageHeader from './CheckoutPageHeader'
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';

function CheckoutPage({ cart }) {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutPageHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderSummary cart={cart} />
          <PaymentSummary />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage
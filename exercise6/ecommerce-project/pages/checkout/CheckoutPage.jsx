import { useEffect, useState } from 'react';
import './CheckoutPage.css'
import CheckoutPageHeader from './CheckoutPageHeader'
import axios from 'axios'
import { formatMoney } from '../utils/formatMoney'
import dayjs from 'dayjs'

function CheckoutPage() {
  
  const [cartItems, setCartItems] = useState([]);
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    const getCheckoutData = async () => {
      let response = await axios.get('/api/cart-items?expand=product');
      setCartItems(response.data);

      response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    }

    getCheckoutData();
  }, []);
  const [deliveryDate, setDeliveryDate] = useState('');

 
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutPageHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <div className="order-summary">
            {cartItems.map((cart) => {
              return (
                <div key={cart.id} className="cart-item-container">

                  <div className="delivery-date">
                    Delivery date: {deliveryDate}
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={cart.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {cart.product.name}
                      </div>
                      <div className="product-price">
                        {formatMoney(cart.product.priceCents)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cart.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose Link delivery option:
                      </div>
                      {deliveryOptions.map((option) => {
                        return (
                          <div key={option.id} className="delivery-option">
                            <input type="radio"
                              defaultChecked = {option.id === '1'}
                              className="delivery-option-input"
                              name={`delivery-option-${cart.deliveryOptionId}`}
                              onChange={(event)=>{
                                setDeliveryDate(event.target.value);
                              }}
                              value={dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM d')} />
                            <div>
                              <div className="delivery-option-date">
                                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM d')}
                              </div>
                              <div className="delivery-option-price">
                                {`${(option.priceCents && formatMoney(option.priceCents)) || 'Free'} - Shipping`}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              );
            })}


          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">
              Payment Summary
            </div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage
import dayjs from 'dayjs'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { formatMoney } from '../utils/FormatMoney';

function OrderSummary({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {

    const getDeliveryOptionsData = async () => {
      const responseDeliveryOptions = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(responseDeliveryOptions.data);
    };

    getDeliveryOptionsData();
  }, []);

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cart) => {
        const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
          return deliveryOption.id == cart.deliveryOptionId
        });

        const deleteProduct = async () =>{
          await axios.delete(`/api/cart-items/${cart.productId}`);
          await loadCart();
        };
        return (
          <div key={cart.id} className="cart-item-container">

            <div className="delivery-date">
              Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
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
                  <span onClick={deleteProduct} className="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div className="delivery-options">
                <div className="delivery-options-title">
                  Choose Link delivery option:
                </div>
                {deliveryOptions.map((option) => {
                  const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${cart.productId}`, {
                      quantity: cart.quantity,
                      deliveryOptionId: option.id
                    });
                    await loadCart();
                  };
                  return (
                    <div key={option.id} className="delivery-option"
                      onClick={updateDeliveryOption}>
                      <input type="radio"
                        className="delivery-option-input"
                        name={`delivery-option-${cart.productId}`}
                        checked={option.id == cart.deliveryOptionId}
                        onChange={() => {}}
                      />
                      <div>
                        <div className="delivery-option-date">
                          {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
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
  );

}

export default OrderSummary
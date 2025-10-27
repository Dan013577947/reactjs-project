import { formatMoney } from '../utils/FormatMoney';
import dayjs from 'dayjs'
import axios from 'axios';
import { useState } from 'react';

function CartItemDetails({ cart, loadCart, deliveryOptions }) {

  const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id == cart.deliveryOptionId
  });

  const deleteProduct = async () => {
    await axios.delete(`/api/cart-items/${cart.productId}`);
    await loadCart();
  };



  const [quantity, setQuantity] = useState(cart.quantity);

  const updateQuantity = (event) => {
    setQuantity(event.target.value);
  }

  const [onUpdate, setOnUpdate] = useState(false);

  const updateUpdate = async () => {
    if (onUpdate) {
      setOnUpdate(false);
      await axios.put(`/api/cart-items/${cart.productId}`, {
        quantity: Number(quantity),
        deliveryOptionId: cart.deliveryOptionId
      })
    } else {
      setOnUpdate(true);;
    }
    loadCart();
  }

  const keydownUpdateQuantity = async (event) => {
    if (event.key === 'Enter') {
      if (onUpdate) {
        setOnUpdate(false);
        await axios.put(`/api/cart-items/${cart.productId}`, {
          quantity: Number(quantity),
          deliveryOptionId: cart.deliveryOptionId
        })
      } else {
        setOnUpdate(true);
      }
      loadCart();
    } else if (event.key === 'Escape') {
      setOnUpdate(false);
    }
  }

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
              Quantity:
              {onUpdate ? <><input onKeyDown={keydownUpdateQuantity} onChange={updateQuantity} value={quantity} type="text" style={{ width: 50 }} /></> : <span className="quantity-label">{cart.quantity}</span>}
            </span>
            <span onClick={updateUpdate} className="update-quantity-link link-primary">
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
                  onChange={() => { }}
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

}

export default CartItemDetails
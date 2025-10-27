
import { useEffect, useState } from 'react';
import axios from 'axios'
import CartItemDetails from './CartItemDetails';

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
        return (
          <CartItemDetails key={cart.id} cart={cart} loadCart={loadCart} deliveryOptions={deliveryOptions} />
        )
      })}

    </div>
  );

}

export default OrderSummary
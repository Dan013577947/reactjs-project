import { Link, useLocation } from 'react-router-dom'
import dayjs from 'dayjs';

function TrackingPageContents() {
  const location = useLocation();
  const { orderName, orderQuantity, orderImage, orderEstimatedDeliveryTimeMs, orderTimeMs } = location.state || {};
  
  const totalTimeDeliveryMs = orderEstimatedDeliveryTimeMs - orderTimeMs;
  const timePassedMs = dayjs().valueOf() - orderTimeMs;
  let deliveryPercent = (timePassedMs/totalTimeDeliveryMs) * 100;
  deliveryPercent = Number(Math.min(Math.max(deliveryPercent, 0), 100).toFixed(0));

  const deliverStatus = 
  deliveryPercent == 100 ? 'isDelivered':
  deliveryPercent < 100 && deliveryPercent >= 33 ? 'isShipped':
  deliveryPercent < 33 ? 'isPreparing' : '';

  return (
    <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          {deliveryPercent == 100 ? 'Delivered on' : 'Arriving on'} {dayjs(orderEstimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>

        <div className="product-info">
          {orderName}
        </div>

        <div className="product-info">
          Quantity: {orderQuantity}
        </div>

        <img className="product-image" src={orderImage} />

        <div className="progress-labels-container">
          <div className= {`progress-label ${deliverStatus === 'isPreparing' ? 'current-status':'' }`}>
            Preparing
          </div>
          <div className={`progress-label ${deliverStatus === 'isShipped' ? 'current-status':'' }`}>
            Shipped
          </div>
          <div className={`progress-label ${deliverStatus === 'isDelivered' ? 'current-status':'' }`}>
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div style={{width:`${deliveryPercent}%`}} className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default TrackingPageContents
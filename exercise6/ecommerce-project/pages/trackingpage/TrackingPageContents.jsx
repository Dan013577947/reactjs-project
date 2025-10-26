import { Link, useLocation } from 'react-router-dom'
import dayjs from 'dayjs';

function TrackingPageContents() {
  const location = useLocation();
  const { orderName, orderQuantity, orderImage, orderEstimatedDeliveryTimeMs } = location.state || {};

  return (
    <div className="tracking-page">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date">
          Arriving on {dayjs(orderEstimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>

        <div className="product-info">
          {orderName}
        </div>

        <div className="product-info">
          Quantity: {orderQuantity}
        </div>

        <img className="product-image" src={orderImage} />

        <div className="progress-labels-container">
          <div className="progress-label">
            Preparing
          </div>
          <div className="progress-label current-status">
            Shipped
          </div>
          <div className="progress-label">
            Delivered
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default TrackingPageContents
import Header from '../../components/Header'
import './OrdersPage.css'
import OrderHeader from './OrderHeader'
import OrderGrid from './OrderGrid'

function OrdersPage({ cart, orders }) {

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <OrderHeader order={order} />
                <OrderGrid order={order} />

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OrdersPage
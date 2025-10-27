import axios from 'axios'
import { formatMoney } from '../utils/FormatMoney'
import {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router'

function PaymentSummary({cart, loadCart, loadOrders}) {
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    const getPaymentSummaryData = async () => {

      const responsePaymentSummary = await axios.get('/api/payment-summary');
      setPaymentSummary(responsePaymentSummary.data);

      await loadCart();
    };

    getPaymentSummaryData();
  }, [cart]);

  const navigate = useNavigate();

  const createOrder = async () =>{
    await axios.post('/api/orders');
    loadOrders();
    navigate('/orders');
  }
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      <div className="payment-summary-row">
        <div>Items ({paymentSummary.totalItems}):</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostCents)}</div>
      </div>

      <button onClick={createOrder} className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  );
}

export default PaymentSummary
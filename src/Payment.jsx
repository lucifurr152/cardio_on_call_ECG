// src/components/Payment.jsx
import { useState } from 'react';

function Payment({ selectedService, userDetails, onSubmit, onBack }) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      method: paymentMethod,
      details: paymentMethod === 'card' ? cardDetails : null
    });
  };

  return (
    <div className="card">
      <h2>Payment</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Service:</span>
          <span>{selectedService.name}</span>
        </div>
        <div className="summary-item">
          <span>Description:</span>
          <span>{selectedService.description}</span>
        </div>
        <div className="summary-item">
          <span>Customer:</span>
          <span>{userDetails.name}</span>
        </div>
        <div className="summary-item total">
          <span>Total Amount:</span>
          <span>₹{selectedService.price}</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="payment-section">
          <h3>Payment Method</h3>
          <div className="payment-options">
            <div className="payment-option">
              <input 
                type="radio" 
                id="card" 
                name="payment_method" 
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <label htmlFor="card">Credit/Debit Card</label>
            </div>
            <div className="payment-option">
              <input 
                type="radio" 
                id="upi" 
                name="payment_method" 
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              <label htmlFor="upi">UPI</label>
            </div>
            <div className="payment-option">
              <input 
                type="radio" 
                id="cod" 
                name="payment_method" 
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
          
          {paymentMethod === 'card' && (
            <div className="card-details">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  name="cardNumber" 
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input 
                    type="text" 
                    id="expiry" 
                    name="expiry" 
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={handleCardChange}
                  />
                </div>
                <div className="form-group half">
                  <label htmlFor="cvv">CVV</label>
                  <input 
                    type="text" 
                    id="cvv" 
                    name="cvv" 
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={handleCardChange}
                  />
                </div>
              </div>
            </div>
          )}
          
          {paymentMethod === 'upi' && (
            <div className="upi-details">
              <div className="form-group">
                <label htmlFor="upiId">UPI ID</label>
                <input 
                  type="text" 
                  id="upiId" 
                  name="upiId" 
                  placeholder="name@bank"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="form-actions">
          <button type="button" className="btn secondary" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="btn primary">
            Pay ₹{selectedService.price}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;

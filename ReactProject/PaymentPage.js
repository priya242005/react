import React, { useState } from 'react';
import { FaCreditCard, FaGoogleWallet, FaApple } from 'react-icons/fa';

function PaymentPage({ selectedPlan = { title: 'Basic' } }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [totalAmount, setTotalAmount] = useState('');

  const handlePayment = () => {
    setIsPaid(true);
  };

  // Inline styles for the page
  const pageStyle = {
    margin: 0,
    padding: 0,
    height: '100vh',
    backgroundImage: 'url("https://blog.fasterpay.com/uploads/Online_payment_methods_Business_guide_to_the_best_solution_60b594db3f.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Inline styles for the container
  const containerStyle = {
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Black with slight transparency
    borderRadius: '10px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    color: 'white',
  };

  // Inline styles for input fields
  const inputStyle = {
    width: '90%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  };

  // Inline styles for the total amount input
  const totalInputStyle = {
    ...inputStyle,
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    border: '2px solid #e74c3c',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#e74c3c',
  };

  // Inline styles for button container
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px', // Adds space between buttons
    margin: '20px 0',
  };

  // Inline styles for each payment button
  const buttonStyle = (isSelected) => ({
    backgroundColor: isSelected ? '#4CAF50' : 'rgba(255, 255, 255, 0.8)',
    color: isSelected ? 'white' : '#333',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px', // Ensures all buttons have equal width
  });

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Confirm Your Payment</h2>
        <p style={{ fontSize: '20px' }}>
          You have chosen the <strong>{selectedPlan.title}</strong> plan
        </p>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Total:
          <input
            type="text"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Enter Amount"
            style={totalInputStyle}
          />
        </p>

        {/* Button container */}
        <div style={buttonContainerStyle}>
          <button
            onClick={() => setPaymentMethod('CreditCard')}
            style={buttonStyle(paymentMethod === 'CreditCard')}
          >
            <FaCreditCard style={{ marginRight: '5px' }} /> Credit Card
          </button>
          <button
            onClick={() => setPaymentMethod('GooglePay')}
            style={buttonStyle(paymentMethod === 'GooglePay')}
          >
            <FaGoogleWallet style={{ marginRight: '5px' }} /> Google Pay
          </button>
          <button
            onClick={() => setPaymentMethod('ApplePay')}
            style={buttonStyle(paymentMethod === 'ApplePay')}
          >
            <FaApple style={{ marginRight: '5px' }} /> Apple Pay
          </button>
        </div>

        {/* Conditional form fields */}
        {paymentMethod && (
          <div style={{ marginTop: '20px' }}>
            {paymentMethod === 'CreditCard' && (
              <>
                <input type="text" placeholder="Card Number" style={inputStyle} />
                <input type="text" placeholder="Expiry Date (MM/YY)" style={inputStyle} />
                <input type="text" placeholder="CVV" style={inputStyle} />
                <input type="text" placeholder="Cardholder Name" style={inputStyle} />
              </>
            )}
            {paymentMethod === 'GooglePay' && (
              <>
                <input type="text" placeholder="Google Pay ID" style={inputStyle} />
                <input type="text" placeholder="Billing Address" style={inputStyle} />
              </>
            )}
            {paymentMethod === 'ApplePay' && (
              <>
                <input type="text" placeholder="Apple Pay ID" style={inputStyle} />
                <input type="text" placeholder="Billing Address" style={inputStyle} />
              </>
            )}
          </div>
        )}

        {/* Confirm Payment Button */}
        <button
          onClick={handlePayment}
          style={{
            marginTop: '20px',
            backgroundColor: '#8e44ad',
            color: 'white',
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            transition: 'background-color 0.3s',
          }}
        >
          Confirm Payment
        </button>

        {isPaid && <p style={{ color: 'green', fontSize: '20px', marginTop: '15px' }}>Payment Successful!</p>}
      </div>
    </div>
  );
}

export default PaymentPage;

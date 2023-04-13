// client/src/components/Payment.js
import React, { Component } from 'react';

class Payment extends Component {
  render() {
    return (
      <div>
        <h2>Payment</h2>
        <form action="/" method="post">
          <label for="cardNumber">Card Number</label>
          <input type="text" name="cardNumber" id="cardNumber" placeholder="Enter card number" />
          <label for="expiryDate">Expiry Date</label>
          <input type="text" name="expiryDate" id="expiryDate" placeholder="Enter expiry date" />
          <label for="cvv">CVV</label>
          <input type="text" name="cvv" id="cvv" placeholder="Enter CVV" />
          <input type="submit" value="Pay" />
        </form>
      </div>
    );
  }
}

export default Payment;
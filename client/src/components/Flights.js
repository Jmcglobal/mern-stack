// client/src/components/Flights.js
import React, { Component } from 'react';

class Flights extends Component {
  render() {
    return (
      <div>
        <h2>Flights</h2>
        <ul>
          {this.props.flights.map(flight => (
            <li key={flight._id}>
              <p>From: {flight.from}</p>
              <p>To: {flight.to}</p>
              <p>Date: {flight.date}</p>
              <p>Passengers: {flight.passengers}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Flights;
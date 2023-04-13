// client/src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flight Booking Web Application</h1>
        <form action="/" method="post">
          <label for="from">From</label>
          <input type="text" name="from" id="from" placeholder="Enter departure city" />
          <label for="to">To</label>
          <input type="text" name="to" id="to" placeholder="Enter destination city" />
          <label for="date">Date</label>
          <input type="text" name="date" id="date" placeholder="Enter date of travel" />
          <label for="passengers">Passengers</label>
          <input type="text" name="passengers" id="passengers" placeholder="Enter number of passengers" />
          <input type="submit" value="Search Flights" />
        </form>
      </div>
    );
  }
}

export default App;
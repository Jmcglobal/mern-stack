// client/src/components/Search.js
import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <h2>Search</h2>
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

export default Search;
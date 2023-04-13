// client/src/components/Countries.js
import React, { Component } from 'react';

class Countries extends Component {
  render() {
    return (
      <div>
        <h2>Countries</h2>
        <ul>
          {this.props.countries.map(country => (
            <li key={country._id}>{country.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Countries;
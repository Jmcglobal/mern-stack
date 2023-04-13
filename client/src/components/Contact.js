// client/src/components/Contact.js
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <form action="/" method="post">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" />
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email" />
          <label for="message">Message</label>
          <textarea name="message" id="message" placeholder="Enter your message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default Contact;
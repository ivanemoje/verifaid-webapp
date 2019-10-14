import React from 'react';
// import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

import axios from 'axios';

export default class BenSearch extends React.Component {
  state = {
    input: {input : '' },
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const input = {
      input: this.state.input
    };

    // POSTMAN CODE SNIPPET

    // POST /searchben HTTP/1.1
    // Host: localhost:3000
    // Content-Type: application/json
    // cache-control: no-cache
    // [{
    //   "input":"1150036000550"
    // }]
 

    axios.post(`http://localhost:3000/searchben`, {input : 'kiden'} )
      .then(res => {
        console.log(res, "Query sent!");
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search Query: 
            <input type="text" name="input" onChange={this.handleChange} />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

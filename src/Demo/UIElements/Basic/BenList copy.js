import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import axios from 'axios';

class BenList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries : [],
           
        }
      }

     state = {
        input: '',
        // console.log(input);
    }

    

      handleChange = event => {
        this.setState({ name: event.target.value }
            , function () {
                console.log(this.state.input) }
            );
       ;
        
      }  

      handleSubmit = event => {
        event.preventDefault();
    
        const user_input = {
            input: this.state.input
        };
    
        axios.post(`http://localhost:3000/searchben`, { user_input })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }


    componentDidMount() {
       axios.get(`http://localhost:3000/allmanifests`)
         .then(res => {
           const entries = res.data;
           this.setState({ entries }
            
            )
            // console.log(entries);
            ;
           
         })
     }

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Search </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                
                                <h5 className="mt-5">Search Beneficary Profile</h5>
                                <hr/>
                                <Row>
                                    <Col md={8}>
                                       

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Input Progress Group Number / Beneficiary Name / Account Number"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                input="true" type ="text" name = 'input' onChange={this.onChange}
                                            />
                                            <InputGroup.Append>
                                                <Button>Search</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                   
                                    
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BenList;

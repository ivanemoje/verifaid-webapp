import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

import axios from 'axios';

class ManifestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries : []
        }
      }
  
    componentDidMount() {
       axios.get(`http://localhost:3000/allmanifests`)
         .then(res => {
           const entries = res.data;
           this.setState({ entries }
            
            )
            console.log(entries);
            ;
           
         })
     }
  

     renderTableData() {
        return this.state.entries.map((entry, index) => {
           const { manifest_id, manifest_type, region, manifest_file, manifest_date, is_suplimentary} = entry //destructuring
           return (
              <tr key={manifest_id}>
                 <td>{manifest_type}</td>
                 <td>{region}</td>
                 <td>{manifest_file}</td>
                 <td>{manifest_date}</td>
                 <td>{is_suplimentary}</td>
              </tr>
           )
        })
     }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Manifest List</Card.Title>
                                {/* <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span> */}
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        {/* <th>#</th> */}
                                        <th>Region</th>
                                        <th>Manifest Type</th>
                                        <th>Manifest File</th>
                                        <th>Manifest Date</th>
                                        <th>Supplimentary</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderTableData()}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ManifestList;


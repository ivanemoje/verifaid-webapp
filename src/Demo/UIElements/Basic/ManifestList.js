import React from 'react';
// import {Link} from react-router;
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

import axios from 'axios';
// import Pagination from "react-js-pagination";

class ManifestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries : [],
            activePage: 15
        }
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

     handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }

      renderShowsTotal(start, to, total) {
        return (
          <p style={ { color: 'blue' } }>
            From { start } to { to }, totals is { total }&nbsp;&nbsp;(its a customize text)
          </p>
        );
      }
  
    //  https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
     renderTableData() {
        return this.state.entries.map((entry, index) => {
           const {  manifest_id, manifest_type, region, manifest_file, manifest_date, is_suplimentary} = entry //destructuring
           return (
              <tr key={manifest_id}>
                <td>{region}</td>
                 <td>{manifest_type}</td>
                 {/* <td><a href={manifest_file} File </a>{manifest_file}</td> */}
                 <td>{manifest_file}</td>
                 <td>{manifest_date}</td>
                 <td>{is_suplimentary}</td>
              </tr>
           )
        })
     }

    render() {
        const {entries} = this.state.entries;
        const options = {
            page: 1,  // which page you want to show as default
            sizePerPageList: [ {
              text: '5', value: 5
            }, {
              text: '10', value: 10
            }, {
              text: 'All', value: entries.length
            } ], // you can change the dropdown list for size per page
            sizePerPage: 5,  // which size per page you want to locate as default
            pageStartIndex: 0, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'top'  // default is bottom, top and both is all available
      
        }

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
                                <Table responsive hover pagination="true" options={options}>
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


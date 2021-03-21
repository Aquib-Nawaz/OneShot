import { React } from "react";
import { Link } from "react-router-dom";
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
const TableView = props => {

    const renderProduct = (product) => {
      return(
        <tr key={product.id}><Link to={Link.path}>
          <td>{product.name}</td>
          <td>{product.city}</td></Link>
        </tr>
      )
    }

    return (
        <>
              <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">{props.header}</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
        
                      <th className="border-0">Name</th>
                      <th className="border-0">City</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                      {(props.colleges && props.colleges.length > 0) ? (
                        props.colleges.map(product => renderProduct(product))
                      ) : (
                        <p>No products found</p>
                      )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col></Row></Container>
        </>
    );
}

export default TableView;
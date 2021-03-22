import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";


const College = ({match}) => {

    const [college, setCollege] = useState(null);
    const [colleges, setColleges] = useState(null);
    const[related, setRelated] = useState([]);

    useEffect(() => {
      if (!colleges){
        setColleges(JSON.parse(localStorage.getItem("colleges")))
        setCollege(JSON.parse(localStorage.getItem("colleges"))[match.params.id])
        getRelatedColleges()}
    })

    const checkRelated = (c) => {
      var num=0;
      var co = JSON.parse(localStorage.getItem("colleges"))[match.params.id]
      for (var cou in c.courses){if(co.courses.indexOf[cou]>-1) num++;}
      return (c.numStudents >= co.numStudents - 100) && (c.numStudents <= co.numStudents + 100) && (c.state === co.state) && num > 1
    }

    const getRelatedColleges = () => {
      var temp = JSON.parse(localStorage.getItem("colleges"))
      var related = temp.filter(checkRelated);
      setRelated(related)
    }
    const renderProduct = (product) => {

      return(
        <Link to={'/college/' + product.id} key={product.id}>
        <ListGroup.Item>
          <p>{product.name}</p>
        </ListGroup.Item>
        </Link>
      )
    }
    return ( <div><Card><Card.Header><Card.Title>{
        college !== null ? <h3>{college.name}</h3>:<p>"Loading..."</p>
      }</Card.Title></Card.Header>
      <Card.Body>
        <ListGroup>
        <ListGroup.Item>
        <b>Year Founded:</b> {college !== null && college.yearFounded !== null ? college.yearFounded : "Loading ..."}
        </ListGroup.Item>
        <ListGroup.Item>
        <b>Address:</b> {college !== null ? <p>{college.city + '   '+ college.state  + '   '+ college.country} </p>: "Loading ..."}
        </ListGroup.Item>
        <ListGroup.Item>
        <b>number Of Students:</b> {college !== null ? college.numStudents: "Loading..."}
        </ListGroup.Item>
        <ListGroup.Item>
        <b>Courses Offered:</b> {college !== null && college.courses.length>0 ? college.courses.join():"Loading...."}
        </ListGroup.Item>
        </ListGroup>

      </Card.Body>
      </Card>
        <Row>
            <Col md="12">
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">Related Colleges</Card.Title>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive px-0">
                    <ListGroup>
                    { related.length >0 ?
                      related.map(product => renderProduct(product)) : <p style={{margin:"10px"}}>No Related Colleges</p>
                    }</ListGroup>

                    </Card.Body>
                  </Card>
              </Col></Row>
    </div>
  );
}

export default College

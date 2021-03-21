import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import collegeService from '../services/collegeService';
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
    useEffect(() => {
        if(!college){

            getCollege(match.params.id);
        }
    })

    const getCollege = async (id) => {
        let res = await collegeService.getAll();
	      setColleges(res);
        setCollege(res[id]);
        console.log(res)

    }

    return ( <div><Card><Card.Header><Card.Title>{
        college.name
      }</Card.Title></Card.Header>
      <Card.Body>
        <ListGroup>
        <ListGroup.Item>
        <b>Year Founded:</b> {college.yearFounded}
        </ListGroup.Item>
        <ListGroup.Item>
        <b>Address:</b> {college.city}, {college.state}, {college.country}
        </ListGroup.Item>
        <ListGroup.Item>
        <b>number Of Students:</b> {college.numStudednst}
        </ListGroup.Item>
        <ListGroup.Item>
        <b>Courses Offered:</b> {college.courses.forEach(c => {<span margin="10px">c</span>})}
        </ListGroup.Item>
        </ListGroup>

      </Card.Body>


      </Card>
    </div>
  );
}

export default College

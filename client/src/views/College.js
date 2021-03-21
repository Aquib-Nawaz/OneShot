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

    const [college, setCollege] = useState({});
    useEffect(() => {
        if(!college){

            getCollege(match.params.id);
        }
    })

    const getCollege = async (id) => {
        let res = await collegeService.getOne(id);
	      setCollege(res);
    }
    return (
        <div><Card>{(college != null)?(<Card.Header><Card.Title>{
            college.name
          }</Card.Title></Card.Header>
          <Card.body>
            <ListGroup>
            <ListGroup.Item>
            <b>Year Founded:</b> {college.yearFounded}
            </ListGroup.Item>
            <ListGroup.Item>
            <b>Address:</b> {college.city}, {college.state}, {college.country}
            </ListGroup.Item>
            <ListGroup.Item>
            <b>Courses Offered:</b> {college.yearFounded}
            </ListGroup.Item>
            <ListGroup.Item>
            <b>Courses Offered:</b> {college.courses.forEach(c => {<span margin="10px">c</span>})}
            </ListGroup.Item>
            </ListGroup>
          
          </Card.body>):(<></>)

        }
          </Card>}
        </div>
    );
}

export default College

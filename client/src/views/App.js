import React, { useState, useEffect } from "react";
import { Chart } from 'react-google-charts';
import { Link, Route, Switch, Redirect } from "react-router-dom";
// SERVICES
import  collegeService  from '../services/collegeService';
import  College  from './College';
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

function App() {
  const [colleges, setColleges] = useState(null);

  //const pieData = new google.visualization.DataTable();
  const [pieData, setPieData] = useState([]);
  const [pieData1, setPieData1] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [stateData, setStateData] = useState({});
  const [courseData, setCourseData] = useState({});
  const [tableHeader, setTableHeader] = useState("");

  useEffect(() => {
    if(!colleges) {
      getColleges();
    }
  })



  const getColleges = async () => {
    let res = await collegeService.getAll();
    setColleges(res);
    getPieData(res);

  }

  const getPieData = (res) => {
    for (var i=0; i<res.length; i++){
      var state = res[i]['state'];
      (stateData[state]==null) ? stateData[state]=[i] : stateData[state].push(i);
    }
    pieData.push(['State','Number of Colleges' ])
    pieData1.push(['Course','Number of Courses' ])
    for (var key in stateData) {
      pieData.push(
        [ key,
          stateData[key].length
        ]);
    }
    for (var i=0; i< res.length; i++){
      res[i].courses.forEach(course => {
        (courseData[course]==null) ? courseData[course]=[i] : courseData[course].push(i);
      });

    }

    for (var key in courseData) {
      pieData1.push(
        [ key,
          courseData[key].length
        ]);
    }
    setPieData1(pieData1)
    setPieData(pieData);
    setStateData(stateData);
    setCourseData(courseData);
  }
  const chartEvents = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      var selected = chartWrapper.getChart().getSelection()[0];
      var true_selected =  chartWrapper.getDataTable().getValue(selected.row, 0);

      setTableData(stateData[true_selected]);
      setTableHeader("Colleges in "+ true_selected + " state" )
    }
  }
  ];
  const chartEvents1 = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      var selected = chartWrapper.getChart().getSelection()[0];
      var true_selected =  chartWrapper.getDataTable().getValue(selected.row, 0);
      setTableData(courseData[true_selected]);
      setTableHeader("Colleges offering "+ true_selected + " course" )
    }
  }
  ];
const renderProduct = (product) => {
console.log(product)
  return(
    <Link to={'/college/' + product.id} key={product.id}>
    <ListGroup.Item>
      <p>{product.name}</p>
    </ListGroup.Item>
    </Link>
  )
}


  return (<>
<Switch>

<Route path="/dashboard">

    <div className="App">
    <Container fluid>

      <Row><Col md="6"><Card><Card.Header>
      <Card.Title>"State Wise Data For Colleges"</Card.Title></Card.Header>
      <Card.Body>{<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={pieData}
  chartEvents = {chartEvents}
  rootProps={{ 'data-testid': '1' }}

/>}</Card.Body></Card></Col><Col md="6"><Card><Card.Header>
<Card.Title>"Course Wise Data For Colleges"</Card.Title>
</Card.Header><Card.Body>{
  <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={pieData1}
  chartEvents = {chartEvents1}
  rootProps={{ 'data-testid': '1' }}

/>       }</Card.Body></Card></Col></Row>

        <Row>
          <Col md="12">
            <Card>


              <Card.Header>
                <Card.Title as="h4">{tableHeader}</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
              <ListGroup>
              {
                tableData.map(product => renderProduct(colleges[product]))
              }</ListGroup>

              </Card.Body>
            </Card>
          </Col></Row></Container>
    </div>
</Route>
    <Route path="/college/:id" component={College}/>

    <Redirect from="/" to="/dashboard" />

</Switch></>
);
}

export default App;

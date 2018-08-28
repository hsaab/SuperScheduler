import React from 'react';
import Times from './Times';
import Block from './Block';
import { Container, Row, Col } from 'reactstrap';

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Scheduler = ({ schedule, add }) => (

  <Container>
    <Row>
       <Col> <strong> -- <Times/> </strong> </Col>
       {schedule.map((fullDay) => (
           <Col>
             {days[new Date(Object.keys(fullDay[0])).getDay()]}:

             {fullDay.map((tiempo) => (
                <Block info={tiempo} day={days[new Date(Object.keys(fullDay[0])).getDay()]}
                addOnClick={(time, day, title, color, description) => add(time, day, title, color, description)}
                />
              ))}
           </Col> ))}
    </Row>
  </Container>
);

export default Scheduler;

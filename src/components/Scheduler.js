import React from 'react';
import dateJs from 'datejs';
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
              <Block schedule={schedule} time={tiempo[Object.keys(fullDay[0])].time} addOnClick={(time, day, title, color, description) => add(time, day, title, color, description)}
              fullDay={Object.keys(fullDay[0])} arrIndex={schedule.indexOf(fullDay)} arr2Index={fullDay.indexOf(tiempo)} title={tiempo.title} day={days[new Date(Object.keys(fullDay[0])).getDay()]}/>
            ))}
           </Col> ))}
     </Row>
  </Container>
);



export default Scheduler;
//NEED TO PASS IN TITLE HERE HAS A PROP SO THAT COMPONENT WILL UPDATE IN BLOCK WILL UPDATE AS WELL

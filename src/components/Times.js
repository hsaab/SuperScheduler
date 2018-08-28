import React from 'react';
import { Col } from 'reactstrap';

const times = [];

function addTimes () {
  if(times.length < 1) {
    for(let i = 9; i <= 12; i++) {
      times.push(i + ' AM');
    }
    for (let i = 1; i <= 11; i++) {
      times.push(i + ' PM');
    }
    }
}

const Times = (/* props OR { prop1, prop2 } */) => (
  <div>
    {addTimes()}
    {times.map((num) => (<Col className="times"> {num} </Col>) )}
  </div>
);

export default Times;

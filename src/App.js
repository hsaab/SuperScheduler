import React from 'react';
import { connect } from 'react-redux';
import { nextWeek, lastWeek, addAppt } from './actions/types';
import Scheduler from './components/Scheduler';
import Bar from './components/Navbar';
import './App.css';

const App = ({ next, last, schedule, add }) => {
    return (
      <div className="App">
        <Bar next={() => next()} last={() => last()} schedule={schedule}/>
        <Scheduler schedule={schedule} add={add}/>
      </div>
    )
  }

const mapStateToProps = state => {
  return {
    schedule: state.schedule
  }
}

const mapDispatchToProps = dispatch => {
  return {
    next: () => {
      dispatch(nextWeek())
    },
    last: () => {
      dispatch(lastWeek())
    },
    add: (time, day, title, color, description) => {
      dispatch(addAppt(time, day, title, color, description))
    },
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

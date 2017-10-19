function nextWeek() {
  return {
    type: 'NEXT_WEEK'
  }
}

function lastWeek() {
  return {
    type: 'LAST_WEEK'
  }
}

function addAppt(time, day, title, color, description) {
  return {
    type: 'ADD',
    time,
    day,
    title,
    color,
    description
  }
}

export { nextWeek, lastWeek, addAppt }

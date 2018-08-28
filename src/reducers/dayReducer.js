import dateJs from "datejs";

//DEFINE THE DATE VARIABLES
var master = [];
var period = 365*2;
var timeIds = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function addSchedule () {
    for (var i = 0; i < period; i++) {
      const date = new Date().add([i] - 1).day().toString('M/d/yyyy');
      var dayArr = [];
      timeIds.map(function(time) {
        var newObj = {};
        newObj[date] = {
          time: time,
          title: null,
          description: null,
          color: null,
          filled: false
        }
        dayArr.push(newObj);
      })
      master.push(dayArr);
    };
  };

addSchedule();
var firstSchedule = master.slice(0,7);

const initialState = { schedule: firstSchedule, slice: [0,7] };

const dayReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEXT_WEEK':
          const newState = Object.assign({}, state);
            var index1 = newState.slice[0];
            var index2 = newState.slice[1];
            newState.schedule = master.slice(index1 + 7, index2 + 7);
            newState.slice = [index1 + 7, index2 + 7];
            return newState;
        case 'LAST_WEEK':
          const newState1 = Object.assign({}, state);
          if(newState1.slice[0] === 0) {
            return state
          } else {
            var index3 = newState1.slice[0];
            var index4 = newState1.slice[1];
            newState1.schedule = master.slice(index3 - 7, index4 - 7);
            newState1.slice = [index3 - 7, index4 - 7];
            return newState1;
          }
        case 'ADD':
          const newState2 = Object.assign({}, state);
          newState2.schedule.forEach(function(day) {
            if(days[new Date(Object.keys(day[0])).getDay()] === action.day) {
              day.forEach(function(obj) {
                var dia = Object.keys(day[0]);
                if(obj[dia].time === action.time) {
                  obj[dia].title = action.title;
                  obj[dia].description = action.description;
                  obj[dia].color = action.color;
                  obj[dia].filled = true;
                  console.log(newState2);
                  return newState2;
                }
              })
            }
          });
        default:
            return state;
    }
};

export default dayReducer;

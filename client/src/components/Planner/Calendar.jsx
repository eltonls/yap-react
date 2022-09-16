import CalendarBlock from "./CalendarBlock"

const DUMMY_YEAR = [
  {
    monthName: "January", 
    numberOfDays: 31,
  }
]

const Calendar = () => {
  
  for(i = 0; i < DUMMY_YEAR; i++) {
    console.log("Day")
  }

  return (
    <div className="calendar">
      {  } 
    </div>
  )
}

export default Calendar;

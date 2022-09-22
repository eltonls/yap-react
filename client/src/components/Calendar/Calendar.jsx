import { getDate, getYear, getDay } from "date-fns";
import getDaysInMonth from 'date-fns/getDaysInMonth';
import getMonth from 'date-fns/getMonth'
import useState from "react";
import Month from "./Month";
import CalendarNav from "./CalendarNav";
import Styles from "./Calendar.module.css";


// Remember the months:
// 0 = sunday
// 1 = monday
// 2 = tuesday
// 3 = wednesday
// 4 = thursday
// 5 = friday
// 6 = saturday

const weekdays = [
  "dom",
  "seg",
  "ter",
  "qua",
  "qui",
  "sex",
  "sab",
]

const Calendar = () => {     
  // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth); 

  const dateObj = new Date();
  const actualMonth = getMonth(dateObj) // starting from 0
  const actualYear = getYear(dateObj);
  const firstDayOfMonth = getDay(new Date(actualYear, actualMonth, 1));
  const actualDay = getDay(dateObj);
  const numberOfDays = getDaysInMonth(dateObj);
  
  const monthName = new Date().toLocaleString("pt-br", { month: "long" }) 

  const paddingBlockArr = [];
  const daysArray = [];

  for(let i = 0; i <  firstDayOfMonth; i++) {
    if(i < firstDayOfMonth) {
      paddingBlockArr.push(false);
    } 
  } 

  for(let i = 1; i <= numberOfDays; i++) {
    daysArray.push(i);
  }
 
   return (
    <div className={Styles["calendar"]}>
      <CalendarNav month={monthName} year={actualYear} />
      <ul className={Styles["calendar__sub-list"]}>
        <li className={Styles["calendar__sub-weekday"]}>Dom</li>
        <li className={Styles["calendar__sub-weekday"]}>Seg</li>
        <li className={Styles["calendar__sub-weekday"]}>Ter</li>
        <li className={Styles["calendar__sub-weekday"]}>Qua</li>
        <li className={Styles["calendar__sub-weekday"]}>Qui</li>
        <li className={Styles["calendar__sub-weekday"]}>Sex</li>
        <li className={Styles["calendar__sub-weekday"]}>Sab</li> 
      </ul>
      <Month 
        paddingBlockArr={paddingBlockArr} 
        daysArray={daysArray} 
        actualDay={actualDay}
        />  
    </div>  
  )
}

export default Calendar;

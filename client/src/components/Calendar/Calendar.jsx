import { getDate, getYear, getDay, addDays } from "date-fns";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import getDaysInMonth from "date-fns/getDaysInMonth";
import getMonth from "date-fns/getMonth";
import { useState } from "react";
import Month from "./Month/Month";
import Week from "./Week/Week";
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

const weekdays = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

const Calendar = () => {
  // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth);
  // const [currentWeek, setCurrentWeek] = useState(0); // interval object
  const [isWeekView, setIsWeekView] = useState(true);

    let actualWeek = [];

  const dateObj = new Date();
  const actualMonth = getMonth(dateObj); // starting from 0
  const actualYear = getYear(dateObj);
  const firstDayOfMonth = getDay(new Date(actualYear, actualMonth, 1));
  const actualDay = getDay(dateObj);
  const numberOfDays = getDaysInMonth(dateObj);

  const monthName = new Date().toLocaleString("pt-br", { month: "long" });

  const paddingBlockArr = [];
  const daysArray = [];

  const getWeekClicked = (dayNum) => {
    // Based on the weekday we add/subtract days
    const dayClicked = getDay(new Date(actualYear, actualMonth, dayNum));
    // subtract to the start of the week
    const domingo = addDays(
      new Date(actualYear, actualMonth, dayNum),
      -dayClicked
    );
    const sabado = addDays(domingo, 6);

    console.log("Esse é domingo: " + domingo);
    console.log("Esse é o sábado: " + sabado);

    const newInterval = eachDayOfInterval({
      start: domingo,
      end: sabado,
    });

    actualWeek = eachDayOfInterval({
        start: domingo,
        end: sabado,
    });

      // actualWeek = newInterval;

    // setCurrentWeek(newInterval);
    // setIsWeekView(true);

    // console.log(actualWeek);
  };

    getWeekClicked(8);

  for (let i = 0; i < firstDayOfMonth; i++) {
    if (i < firstDayOfMonth) {
      paddingBlockArr.push(false);
    }
  }

  for (let i = 1; i <= numberOfDays; i++) {
    daysArray.push(i);
  }

  return (
    <div className={Styles["calendar"]}> 
      <CalendarNav/>
      <Week weekDays={actualWeek} />
    </div>
  );
};

export default Calendar;

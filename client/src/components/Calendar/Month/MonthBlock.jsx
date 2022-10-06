import Styles from "./MonthBlock.module.css";

const CalendarBlock = (props) => {
  return (
    <div className={Styles["calendar-block"]} onClick={props.sendDayNumber}>
      <span>{props.num}</span> 
    </div>
  )
}

export default CalendarBlock;

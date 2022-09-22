import Styles from "./CalendarBlock.module.css";

const CalendarBlock = (props) => {
  

  return (
    <div className={Styles["calendar-block"]}>
      <span>{props.num}</span> 
    </div>
  )
}

export default CalendarBlock;

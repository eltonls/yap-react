import Styles from "./CalendarNav.module.css";
import Button from "../Button/Button";

const CalendarNav = (props) => {
  return (
    <div className={Styles["calendar-nav"]}>
      <div className={Styles["calendar-nav__month-tab"]}> 
        <ul className={Styles["calendar-nav__menu"]}>
          <li className={Styles["calendar-nav__btn"]}>
            <a href="#" className={Styles["calendar-nav__link"]}>Sep</a>
          </li> 
          <li className={Styles["calendar-nav__btn"]}>
            <a href="#" className={Styles["calendar-nav__link"]}>Oct</a>
          </li> 
          <li className={Styles["calendar-nav__btn"]}>
            <a href="#" className={Styles["calendar-nav__link"]}>Nov</a>
          </li> 
          <li className={Styles["calendar-nav__btn"]}>
            <a href="#" className={Styles["calendar-nav__link"]}>Dec</a>
          </li> 
        </ul>
      </div>
      <h3 className="heading-tertiary">{`${props.month} ${props.year}`}</h3> 
      <Button mod="purple" text="To-do list" />
    </div>
  )
}

export default CalendarNav;

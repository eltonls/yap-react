import React, { useState } from "react";
import CalendarNav from "../CalendarNav";
import WeekHeader from "./WeekHeader";
import Hours from "./Hours";
import Styles from "./Week.module.css";

const Week = (props) => { 
   return (
        <React.Fragment> 
            <WeekHeader days={props.weekDays} /> 
            <div className={Styles["week"]}>
              <div className={Styles["week__days"]}>
                <Hours />
                {props.weekDays.map((day) => {
                    return <div className={Styles["week__day"]}>dia</div>
                })}
              </div> 
            </div>
        </React.Fragment>
   ) 
}

export default Week;

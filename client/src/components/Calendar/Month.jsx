import React from "react";
import CalendarBlock from "./CalendarBlock";
import PaddingBlock from "./PaddingBlock";
import Styles from "./Month.module.css";

const Month = (props) => {

  console.log(props.daysArray);

  return (
    <div className={Styles["month"]}> 
      {
        props.paddingBlockArr.map(() => {
          return <PaddingBlock />
        })
      }
      {
        props.daysArray.map((num) => {
          return <CalendarBlock num={num} />
        })
      }
    </div>
  )
}

export default Month;

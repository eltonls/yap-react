import { eachMinuteOfInterval } from "date-fns";
import Styles from "./Hours.module.css";

const Hours = () => {
  const stdDayMinutes = eachMinuteOfInterval(
    {
      start: new Date(2022, 1, 1, 6),
      end: new Date(2022, 1, 1, 21)
    }
  )      

  return (
    <div className={Styles["hours"]}>
      {
        stdDayMinutes.map((hour) => {
          if(hour.getMinutes() == 30 || hour.getMinutes() == 0){
            return <div className={Styles["hours__block"]}>
              {hour.toLocaleTimeString("pt-BR").slice(0,5)}
            </div>
          }
        })
      }
    </div>
  ) 
}

export default Hours;

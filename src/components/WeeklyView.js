import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck, FaRegCircle } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import { UPDATE_HABBIT } from "../actions";
import style from "../styles/weekView.module.css";

const WeeklyView = ({ id, title }) => {
  let localdata = useSelector((state) => state);
  const firstHabbit = localdata[id];
  const dispatch = useDispatch();

  const handleStatus = (e) => {
    let day = e.currentTarget.id;
    let habbitId = e.currentTarget.getAttribute("data-id");

    const updatedHabbit = firstHabbit.map((hobby) => {
      if (hobby.id === day) {
        let status = "";
        switch(hobby.habbitStatus) {
          case "not define":
            status = "completed";
            break;
          case "completed":
            status = "uncompleted";
            break;
          case "uncompleted":
            status = "not define";
            break;
          default:
            status = "not define";
        }
        return {
          ...hobby,
          habbitStatus: status,
        };
      }
      return hobby;
    });

    localdata[habbitId] = updatedHabbit;
    dispatch({
      type: UPDATE_HABBIT,
      payload: localdata,
    });
  };

  return (
    <div className={style.hobbyContainer}>
      <div className={style.heading}> <span className={style.headingMark}>#</span>{title}</div>
      <div className={style.days}>
        {firstHabbit &&
          firstHabbit.map((day, index) => {
            return (
              <div
                key={index}
                className={style.everyday}
                data-id={id}
                id={day.id}
                onClick={handleStatus}
              >
                <div>{day.weekday}</div>
                <div className={style.status}>
                  {(day.habbitStatus === "completed" && (
                    <FaCheck className={style.check} />
                  )) ||
                    (day.habbitStatus === "uncompleted" && (
                      <HiX className={style.cross} />
                    )) ||
                    (day.habbitStatus === "not define" && (
                      <FaRegCircle className={style.circle} />
                    ))}
                </div>
                <div className={style.date}>{day.id}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WeeklyView;

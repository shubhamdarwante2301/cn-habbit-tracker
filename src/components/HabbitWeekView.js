import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import WeeklyView from "./WeeklyView";
import style from "../styles/weekView.module.css";

// print total week details of all the habbits
const HabbitWeekView = () => {
  const habbits = useSelector((state) => state.habbits);

  if (habbits.length === 0) {
    return (
      <div className={style.noHabbits}>
        <h3>Don't have enough habbits to show details...</h3>
        <p>
          Add your first habbit by clicking on here 
          {/* Add-New-Habbit */}
          <Link to="/new-habbit">
            <span className={style.addHabbitBtn}>
              <FaPlus />
            </span>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className={style.weekContainer}>
      {habbits &&
        habbits.map((habbit) => {
          return (
            <WeeklyView id={habbit.id} title={habbit.title} key={habbit.id} />
          );
        })}
    </div>
  );
};

export default HabbitWeekView;

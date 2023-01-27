import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../styles/habbitlist.module.css";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { DELETE_HABBIT } from "../actions";

// total habbit list on homepage
const HabbitList = () => {
  let localdata = useSelector((state) => state);
  const habbit = localdata.habbits;
  const dispatch = useDispatch();

  // delet the habbit
  const handleDeleteHabbit = (e) => {
    if(window.confirm("Delete this Habbit !")) {
      let habbitId = e.currentTarget.id;
      delete localdata[habbitId];

      const ramainingHabbits = habbit.filter(
        (hobby) => hobby.id.toString() !== habbitId
      );
      dispatch({
        type: DELETE_HABBIT,
        payload: {
          ...localdata,
          habbits: ramainingHabbits,
        },
      });
    }
  };

  if(habbit.length === 0) {
    return (
      <div className={style.addHabbits}>
        <h2>Add your first Habbit</h2>
        <p>
          Add your first habbit by clicking here 
          {/* Add-New-Habbit */}
          <Link to="/new-habbit">
            <span className={style.addHabbitBtn}>
              <FaPlus />
            </span>
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className={style.habbitContainer}>
      {habbit !== undefined &&
        habbit.map((habbits, index) => {
          return (
            <div className={style.habbit} key={index}>
              <div className={style.heading}>
                <span>{index + 1}. </span>
                <span>{habbits.title}</span>
              </div>
              <div>
                <p>{habbits.description}</p>
              </div>
              <div className={style.habbitAction}>
                <Link to="week-view">week detail</Link>
                <span
                  className={style.trash}
                  id={habbits.id}
                  onClick={handleDeleteHabbit}
                >
                  <FaTrashAlt />
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HabbitList;

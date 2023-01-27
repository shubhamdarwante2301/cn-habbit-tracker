import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_HABBIT } from "../actions";

import style from '.././styles/addNewHabbit.module.css'

// add new habbit
const AddNewHabbit = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

  const validateData = (event) => {
    event.preventDefault();
    const newHabbit = {
      id: Date.now(),
      title: title,
      description: description
    }

    dispatch({
      type: ADD_HABBIT,
      payload: newHabbit
    })

    setTitle("");
    setDescription("");
  };
  return (
    <div className={style.formContainer}>
      <form onSubmit={validateData} className={style.form}>
        <input
          type="text"
          placeholder="Habbit"
          required
          className={style.inputFiled}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="description"
          required
          className={style.inputFiled}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit" className={style.submitBtn}>add habbit</button>
      </form>
    </div>
  );
};

export default AddNewHabbit;

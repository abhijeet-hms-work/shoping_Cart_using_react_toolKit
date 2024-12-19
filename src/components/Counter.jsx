import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decreasedby1,
  decreasedby10,
  increasedby1,
  increasedby10,
} from "../redux/counterSlice";
export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div>Counter {counter}</div>
      <button onClick={() => dispatch(increasedby1())}>Increasedby1</button>
      <button onClick={() => dispatch(decreasedby1())}>Decreasedby1</button>
      <button onClick={() => dispatch(increasedby10())}>Increasedby10</button>
      <button onClick={() => dispatch(decreasedby10())}>Decreasedby10</button>
    </>
  );
};

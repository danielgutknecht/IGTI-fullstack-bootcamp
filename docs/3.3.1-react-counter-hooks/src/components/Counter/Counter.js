import React, { Component, useState } from "react";
import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import NumberLabel from "./NumberLabel";

export default function Counter() {
  const [currentCounter, setCurrentCounter] = useState(2);
  const [steps, setSteps] = useState(0);

  const handleClick = (op) => {
    setCurrentCounter( op === "+" ? currentCounter + 1 : currentCounter - 1);
    setSteps(steps + 1);
  };

  return (
    <div className={css.counterContainer}>
      <DecrementButton onDecrement={handleClick} />
      <NumberLabel value={currentCounter} />
      <IncrementButton onIncrement={handleClick} />
      <NumberLabel value={steps} />
    </div>
  );
}

import React from "react";
import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import NumberLabel from "./NumberLabel";

//functional component
export default function CounterCommonState(props) {
  const handleClick = (op) => {
    props.onCount(op);
  };

  const { count, step } = props;

  return (
    <div className={css.counterContainer}>
      <DecrementButton onDecrement={handleClick} />
      <NumberLabel value={count} />
      <IncrementButton onIncrement={handleClick} />
      <NumberLabel value={step} />
    </div>
  );
}

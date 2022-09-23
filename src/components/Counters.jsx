import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
 
  render() {
    const { onDelete, onIncreament, onReset, counts, onDecreament, onGetRid } = this.props;
    return (
      <>
        <button
          onClick={onReset}
          className=" bg-blue-700 p-2 rounded mx-[100px] my-4"
        >
          Reset
        </button>
        {counts.map((count) => (
          <Counter
            key={count.id}
            onDelete={onDelete}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
            onGetRid={onGetRid}
            count={count}
          />
        ))}
      </>
    );
  }
}

export default Counters;

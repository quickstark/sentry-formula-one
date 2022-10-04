import React, { useState, useEffect } from "react";
import WheelComponent from "react-wheel-of-prizes";

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = `ERROR: "${message}" from Current Release `; // (2)
  }
}

export default function Roulette() {
  const [err, setErr] = useState("");

  //   useEffect(() => {
  //     console.log(err);
  //     throw err
  //   }, [err]);

  function handleOnFinished(winner) {
    if (winner == "User Error") {
      throw new ValidationError(winner);
    }
  }

  const segments = [
    "User Error",
    "DB Error",
    "App Error",
    "Network Error",
    "Value Error",
  ];

  const segColors = ["#584774", "#E1567C", "#AD6CAA", "#C83852", "#452650"];

  return (
    <>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => handleOnFinished(winner)}
        primaryColor="#452650"
        contrastColor="#F6F6F8"
        buttonText="Error"
        isOnlyOnce={true}
        size={250}
        upDuration={200}
        downDuration={500}
        fontFamily="Arial"
      />
    </>
  );
}

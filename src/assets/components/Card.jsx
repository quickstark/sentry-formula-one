import {
  Button as AntButton,
  Input as AntInput,
  Space as AntSpace,
  Card as AntCard,
} from "antd";

import "antd/dist/antd.css";
import React, { useState } from "react";
// import "../../index.css";

import { useEnvContext } from "./Context";

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = `ERROR: "${message}" from ${import.meta.env.VITE_RELEASE} `; // (2)
  }
}
export default function Card() {
  const [count, setCount] = useEnvContext();
  const [message, setMessage] = useState("Default Message");

  function handleInput(e) {
    console.log(e.target.value);
    setMessage(e.target.value);
  }

  function handleClick() {
    setCount((count) => count + 1);
    throw new ValidationError(message);
  }

  return (
    <AntCard>
      <AntSpace>
        <AntInput placeholder="Error Message" onChange={handleInput} />
        <AntButton type="primary" onClick={handleClick}>
          Create Error
        </AntButton>
      </AntSpace>
    </AntCard>
  );
}

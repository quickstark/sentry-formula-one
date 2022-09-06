import React from "react";
import reactLogo from "../react.svg";
import * as Sentry from "@sentry/react";

import { useEnvContext } from "./Context";

function UserException(message) {
  this.message = message;
  this.name = "Invalid User in Release sentry-formula-one";
}

export default function Index() {
  const [count, setCount] = useEnvContext();

  function handleClick() {
    setCount((count) => count + 1);
    throw new UserException("Newer Error to Test");
    Sentry.withScope(function (scope) {
      scope.addEventProcessor(function (event, hint) {
        console.log(`With Scope: ${event}`);
        return event;
      });
      Sentry.captureMessage("With Scope Test");
    });
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>Count is: {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

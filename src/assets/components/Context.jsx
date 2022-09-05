import React, { useContext, useState } from "react";
import * as Sentry from '@sentry/react'

/* Create our Environment Context
   It's easier to just define this once and reuse in 
   the Components where Context is needed */

const EnvContext = React.createContext();

function useEnvContext() {
  return useContext(EnvContext);
}

function EnvProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <EnvContext.Provider value={[count, setCount]}>
      {children}
    </EnvContext.Provider>
  );
}

export {EnvProvider, useEnvContext}
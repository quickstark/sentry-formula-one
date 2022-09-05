import * as Sentry from "@sentry/react";
import { Layout as AntLayout } from "antd";
import React from "react";
import "./index.css";

const {
  Header: AntHeader,
  Footer: AntFooter,
  Sider: AntSider,
  Content: AntContent,
} = AntLayout;

// Import the Environment Contenxt
import { EnvProvider } from "./assets/components/Context";

// Import Components
import Index from "./assets/components/Index";

import "./App.css";

Sentry.init({
  dsn: "https://32a888abdc564b36a8c9d4cd3cda9fb0@o1347124.ingest.sentry.io/6719200",
  release: import.meta.env.VITE_RELEASE,
  initialScope: {
    tags: { release: import.meta.env.VITE_RELEASE },
  },
  beforeSend(event, hint) {
    console.log(`Before Send`);
    console.log(event);
    return event;
  },
});

function App(count, setCount) {
  return (
    <React.StrictMode>
      <EnvProvider>
        <AntLayout hasSider>
          <AntSider>Navigation</AntSider>
          <AntLayout>
            <AntHeader></AntHeader>
            <AntContent>
              <Index></Index>
            </AntContent>
            <AntFooter></AntFooter>
          </AntLayout>
        </AntLayout>
      </EnvProvider>
    </React.StrictMode>
  );
}

export default Sentry.withProfiler(App);

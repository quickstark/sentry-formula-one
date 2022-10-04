import * as Sentry from "@sentry/react";
import {
  Breadcrumb as AntBreadcrumb,
  Layout as AntLayout,
  Menu as AntMenu,
} from "antd";
import "antd/dist/antd.css";
import React from "react";

const {
  Header: AntHeader,
  Footer: AntFooter,
  Sider: AntSider,
  Content: AntContent,
} = AntLayout;

// Import iconography
import { HomeOutlined } from "@ant-design/icons";

// Import the Environment Contenxt
import { EnvProvider } from "./assets/components/Context";

// Import Components
import Index from "./assets/components/Index";
import Routlette from "./assets/components/Roulette";

import "./App.css";

Sentry.init({
  dsn: "https://2d4f63b062ca464c8be03ebb14d0e212@o1347124.ingest.sentry.io/4503926053339136",
  release: "sentry-formula-one@1.0.0",
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
        <AntLayout>
          <AntHeader
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
            }}
          >
            <img src="/qsglyph.png" className="logo logoqs" alt="QS logo" />
            {/* <img src="/vite.svg" className="logo" alt="Vite logo" />
            <img src="/react.svg" className="logo react" alt="React logo" /> */}
            <AntMenu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <AntMenu.Item key="home" icon={<HomeOutlined />}>
                <a href="/" rel="noopener noreferrer">
                  Home
                </a>
              </AntMenu.Item>
            </AntMenu>
          </AntHeader>
          <AntContent
            className="site-layout"
            style={{
              padding: "0 25px  ",
              marginTop: 0,
            }}
          >
            <AntBreadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <AntBreadcrumb.Item>Home</AntBreadcrumb.Item>
              <AntBreadcrumb.Item>List</AntBreadcrumb.Item>
              <AntBreadcrumb.Item>App</AntBreadcrumb.Item>
            </AntBreadcrumb>
            <Index></Index>
            {/* <Routlette></Routlette> */}
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 380,
              }}
            ></div>
          </AntContent>
          <AntFooter
            style={{
              textAlign: "center",
            }}
          >
            {" "}
          </AntFooter>
        </AntLayout>
      </EnvProvider>
    </React.StrictMode>
  );
}

export default Sentry.withProfiler(App);

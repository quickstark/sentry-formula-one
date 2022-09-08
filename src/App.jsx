import * as Sentry from "@sentry/react";
import {
  Breadcrumb as AntBreadcrumb,
  Menu as AntMenu,
  Layout as AntLayout,
} from "antd";
import React from "react";
import "antd/dist/antd.css";

const {
  Header: AntHeader,
  Footer: AntFooter,
  Sider: AntSider,
  Content: AntContent,
} = AntLayout;

// Import iconography
import {
  HomeOutlined,
  NumberOutlined,
  InfoCircleOutlined,
  ApartmentOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";

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
        <AntLayout>
          <AntHeader
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%",
            }}
          >
            <img src="/quickstark.svg" className="logo logoqs" alt="QS logo" />
            <img src="/vite.svg" className="logo" alt="Vite logo" />
            <img src="/react.svg" className="logo react" alt="React logo" />
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

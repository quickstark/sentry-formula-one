import React from "react";
import * as Sentry from "@sentry/react";

import { Col as AntCol, Row as AntRow, Divider as AntDivider } from "antd";

import { useEnvContext } from "./Context";
import Card from "./Card";

const style = {
  background: "#F6F6F8",
  padding: "8px 0",
};

export default function Index() {
  const [count, setCount] = useEnvContext();
  const cards = [...Array(3).keys()];

  return (
    <div style={style}>
      <AntDivider>Generate Errors</AntDivider>
      <AntRow justify="space-between">
        <AntCol flex={3} align="middle">
          {cards.map((cardno) => (
            <Card key={cardno}></Card>
          ))}
        </AntCol>
      </AntRow>
    </div>
  );
}

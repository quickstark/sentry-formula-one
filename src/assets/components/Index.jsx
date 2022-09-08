import React from "react";
import * as Sentry from "@sentry/react";

import { Col as AntCol, Row as AntRow } from "antd";

import { useEnvContext } from "./Context";
import Card from "./Card";

export default function Index() {
  const [count, setCount] = useEnvContext();
  const cards = [...Array(19).keys()];

  return (
    <div className="content-wrapper">
      {cards.map((cardno) => (
        <Card key={cardno}></Card>
      ))}
    </div>
  );
}

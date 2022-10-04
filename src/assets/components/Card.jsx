import * as Sentry from "@sentry/browser";

import {
  Button as AntButton,
  Input as AntInput,
  Space as AntSpace,
  Card as AntCard,
  Checkbox as AntCheckbox,
} from "antd";

import { CloseOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
// import "../../index.css";

import { useEnvContext } from "./Context";

const style = {
  // background: "#F6F6F8",
  fontSize: "20px",
  height: "40px",
};

const buttonstyle = {
  background: "#C83852",
  borderColor: "#F1B71C",
  fontSize: "20px",
  height: "40px",
};

const tagoptions = [
  {
    label: "Tag 1",
    value: "Tag1",
  },
  {
    label: "Tag 2",
    value: "Tag2",
  },
  {
    label: "Tag 3",
    value: "Tag3",
  },
];

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = `ERROR: "${message}" `; // (2)
  }
}

export default function Card() {
  const [count, setCount] = useEnvContext();
  const [message, setMessage] = useState("Default Message");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  function handleInput(e) {
    console.log(e.target.value);
    setMessage(e.target.value);
  }

  function handleClick() {
    tags.forEach((tag) => {
      const tagvalue = tagoptions.find((option) => {
        return option.value == tag;
      });
      console.log(tagvalue);
      Sentry.setTag(tag, tagvalue.label);
      Sentry.setContext("customer", {
        name: "Prithvi Raj",
        address: "121 Main St",
        zip: "12121",
        nonsensitive: {
          color: "blue",
          phone: "555-222-3333",
          movie: "Sentry",
          comic: "Marvel",
        },
        sensitive: {
          color: "green",
          email: "prithvirajkumar.rajakumar@sentry.io",
          phone: "555-111-1212",
          ssn: "555-111-212",
        },
      });
    });

    throw new ValidationError(message);
  }

  function handleTag(e) {
    setTags(e);
  }

  return (
    <AntCard>
      <AntSpace>
        <AntInput
          style={style}
          placeholder="Error Message"
          onChange={handleInput}
        />
        <AntCheckbox.Group options={tagoptions} onChange={handleTag} />
        <AntButton
          style={buttonstyle}
          icon={<CloseOutlined />}
          type="primary"
          onClick={handleClick}
        >
          Generate Error
        </AntButton>
      </AntSpace>
    </AntCard>
  );
}

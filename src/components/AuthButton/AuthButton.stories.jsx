import React from "react";
import AuthButton from "./index";
export default {
  title: "Components/AuthButton",
  component: AuthButton,
  argTypes: {
    auth: {
      description: "Set the auth of AuthButton"
    },
    authBtns: {
      description: "Set the authBtns of AuthButton"
    },
    authBtns: {
      description: "Set the editorEnable of DDEditor",
      table: {
        defaultValue: { 
            summary: ["001", "002", "003", "btn001"], 
        },
      },
    },
  }
};

// export const Button = args => <AuthButton {...args}></AuthButton>;

// Button.args = {
//   auth: "btn001",
//   authBtns: ["001", "002", "003", "btn001"]
// };

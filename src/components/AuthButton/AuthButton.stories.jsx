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
      description: "Set the authBtns of AuthButton",
      table: {
        defaultValue: { 
            summary: ["001", "002", "003", "btn001"], 
        },
      },
    },
  }
};

export const Button = args => <AuthButton {...args}><button>button</button></AuthButton>;

Button.args = {
  auth: "001",
  authBtns: ["001", "002", "003", "004"]
};

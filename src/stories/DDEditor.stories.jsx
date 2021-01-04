import React from "react";
import Node from '../index'
import data from '../data.json'

export default {
  title: "Example/DDEditor",
  component: Node,
  argTypes: {
    treeData: {
      description: "Set the dataTree of DDEditor",
    },
    NodeContainer: {
      description: "Set the NodeContainer of DDEditor",
    }
  }
};

const NodeContainer = info => (
  <select defaultValue="1" style={{ width: "120px" }}>
    <option value="1">{info.title}</option>
    <option value="2">jack22</option>
  </select>
  // <span>{info.title}</span>
);

const Template = (args) => {

  return (
      <Node
        {...args}
      ></Node>
  );
};
export const DDEditor = Template.bind({});
DDEditor.args = {
  treeData: data,
  NodeContainer: NodeContainer
}

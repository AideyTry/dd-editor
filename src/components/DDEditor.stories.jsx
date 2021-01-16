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
    editorEnable: {
      description: "Set the editorEnable of DDEditor",
      table: {
        defaultValue: { 
            summary: true, 
        },
      },
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
);

export const DDEditor = args => {
  return (
    <Node
      {...args}
    ></Node>
);
};
DDEditor.args = {
  treeData: data,
  NodeContainer: NodeContainer,
  editorEnable: true
}

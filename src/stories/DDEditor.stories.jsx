import React, { useRef, useState, useEffect } from "react";
import Node from "../components/index";
import Header from "../components/Header";
import data from "../data.json";
import { useDataShare, Observer } from "../components/shared";

export default {
  title: "Example/DDEditor",
  component: Node,
  argTypes: {
    dataTree: {
      description: "Set the dataTree of DDEditor",
    },
    editorEnable: {
      description: "Set the editorEnable of DDEditor",
    },
    NodeContainer: {
      description: "Set the NodeContainer of DDEditor",
    }
  }
};

const Template = (args) => {
  const [dataTree, setDataTree] = useState(data);
  console.log("dataTree===", dataTree);
  const canvasRef = useRef(null);
  useEffect(() => {
    useDataShare.excute({ command: "init", param: data });
    // 订阅tree的数据结构是否发生变化，如果发生了变化就及时更新整个树。
    Observer.subscribe("tree", (e) => {
      setDataTree(e.args.msg);
    });
  }, []);
  return (
    <div ref={canvasRef}>
      <Header ref={canvasRef} />
      <Node
        {...args}
      ></Node>
    </div>
  );
};
export const DDEditor = Template.bind({});
DDEditor.args = {
  dataTree: data,
  editorEnable: true,
  NodeContainer: () => <div></div>
}

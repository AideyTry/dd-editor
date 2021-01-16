import React from "react";
import { createFromIconfontCN } from ".";

const IconFont = createFromIconfontCN({
    scriptUrl: ["//at.alicdn.com/t/font_1986533_vk4mok8me3k.js"],
  });
export default {
    title: "Example/IconFont",
    component: IconFont,
    argTypes: {
        type: {
            description: "Set the type of IconFont"
        }
    }
}

export const Icon = args => (<IconFont {...args}></IconFont>)

Icon.args = {
    type: 'icon-zoomin'
}
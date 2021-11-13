// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: n8TqFiiUqC
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: gb4IIit3yv/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicDateRangeInput.module.css"; // plasmic-import: n8TqFiiUqC/css
import ClocksvgIcon from "./icons/PlasmicIcon__Clocksvg"; // plasmic-import: Nzid9dAsSe/icon

export const PlasmicDateRangeInput__VariantProps = new Array();

export const PlasmicDateRangeInput__ArgProps = new Array();

function PlasmicDateRangeInput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <TextInput
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput}
        center={"center"}
        className={classNames("__wab_instance", sty.textInput)}
        disabled={true}
        icon={"icon"}
      >
        <ClocksvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg)}
          role={"img"}
        />
      </TextInput>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "svg"],
  textInput: ["textInput", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDateRangeInput__ArgProps,
      internalVariantPropNames: PlasmicDateRangeInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicDateRangeInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDateRangeInput";
  } else {
    func.displayName = `PlasmicDateRangeInput.${nodeName}`;
  }
  return func;
}

export const PlasmicDateRangeInput = Object.assign(
  // Top-level PlasmicDateRangeInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicDateRangeInput
    internalVariantProps: PlasmicDateRangeInput__VariantProps,
    internalArgProps: PlasmicDateRangeInput__ArgProps
  }
);

export default PlasmicDateRangeInput;
/* prettier-ignore-end */

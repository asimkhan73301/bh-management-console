// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: QOtMsR4vNO
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
import * as sty from "./PlasmicDateInput.module.css"; // plasmic-import: QOtMsR4vNO/css

export const PlasmicDateInput__VariantProps = new Array();

export const PlasmicDateInput__ArgProps = new Array();

function PlasmicDateInput__RenderFunc(props) {
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
        className={classNames("__wab_instance", sty.textInput)}
        disabled={true}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput"],
  textInput: ["textInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDateInput__ArgProps,
      internalVariantPropNames: PlasmicDateInput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicDateInput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDateInput";
  } else {
    func.displayName = `PlasmicDateInput.${nodeName}`;
  }
  return func;
}

export const PlasmicDateInput = Object.assign(
  // Top-level PlasmicDateInput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicDateInput
    internalVariantProps: PlasmicDateInput__VariantProps,
    internalArgProps: PlasmicDateInput__ArgProps
  }
);

export default PlasmicDateInput;
/* prettier-ignore-end */

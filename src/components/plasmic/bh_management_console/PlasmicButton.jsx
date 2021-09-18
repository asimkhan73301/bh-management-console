// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: btDhG8rl2o
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicButton.module.css"; // plasmic-import: btDhG8rl2o/css

export const PlasmicButton__VariantProps = new Array("type", "rounded", "size");

export const PlasmicButton__ArgProps = new Array("text");

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__type_primary]: hasVariant(variants, "type", "primary"),
        [sty.root__type_secondary]: hasVariant(variants, "type", "secondary")
      })}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(defaultcss.button, sty.button, {
          [sty.button__rounded]: hasVariant(variants, "rounded", "rounded"),
          [sty.button__size_sm]: hasVariant(variants, "size", "sm"),
          [sty.button__size_xs]: hasVariant(variants, "size", "xs"),
          [sty.button__type_primary]: hasVariant(variants, "type", "primary"),
          [sty.button__type_secondary]: hasVariant(
            variants,
            "type",
            "secondary"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Click Me",
          value: args.text,
          className: classNames(sty.slotText, {
            [sty.slotText__rounded]: hasVariant(variants, "rounded", "rounded"),
            [sty.slotText__size_sm]: hasVariant(variants, "size", "sm"),
            [sty.slotText__size_xs]: hasVariant(variants, "size", "xs"),
            [sty.slotText__type_primary]: hasVariant(
              variants,
              "type",
              "primary"
            ),

            [sty.slotText__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            )
          })
        })}
      </button>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */

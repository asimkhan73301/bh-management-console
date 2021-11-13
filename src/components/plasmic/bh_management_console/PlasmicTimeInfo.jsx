// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: 1Q1glXnQfVK
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
import * as sty from "./PlasmicTimeInfo.module.css"; // plasmic-import: 1Q1glXnQfVK/css
import ClocksvgIcon from "./icons/PlasmicIcon__Clocksvg"; // plasmic-import: Nzid9dAsSe/icon

export const PlasmicTimeInfo__VariantProps = new Array("itemType");

export const PlasmicTimeInfo__ArgProps = new Array();

function PlasmicTimeInfo__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    hasVariant(variants, "itemType", "meetingRoom")
      ? true
      : hasVariant(variants, "itemType", "fleet")
      ? true
      : true
  ) ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__itemType_fleet]: hasVariant(variants, "itemType", "fleet"),
        [sty.root__itemType_meetingRoom]: hasVariant(
          variants,
          "itemType",
          "meetingRoom"
        )
      })}
    >
      {(
        hasVariant(variants, "itemType", "meetingRoom")
          ? true
          : hasVariant(variants, "itemType", "fleet")
          ? true
          : true
      ) ? (
        <p.PlasmicIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          PlasmicIconType={
            hasVariant(variants, "itemType", "meetingRoom")
              ? ClocksvgIcon
              : hasVariant(variants, "itemType", "fleet")
              ? ClocksvgIcon
              : ClocksvgIcon
          }
          className={classNames(defaultcss.all, sty.svg, {
            [sty.svg__itemType_fleet]: hasVariant(
              variants,
              "itemType",
              "fleet"
            ),

            [sty.svg__itemType_meetingRoom]: hasVariant(
              variants,
              "itemType",
              "meetingRoom"
            )
          })}
          role={"img"}
        />
      ) : null}
      {(
        hasVariant(variants, "itemType", "meetingRoom")
          ? true
          : hasVariant(variants, "itemType", "fleet")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text,
            {
              [sty.text__itemType_fleet]: hasVariant(
                variants,
                "itemType",
                "fleet"
              ),

              [sty.text__itemType_meetingRoom]: hasVariant(
                variants,
                "itemType",
                "meetingRoom"
              )
            }
          )}
        >
          {hasVariant(variants, "itemType", "meetingRoom")
            ? "4/29/2021 4:00 PM"
            : hasVariant(variants, "itemType", "fleet")
            ? "09/14/2021 7:30 PM"
            : "09/14/2021 7:30 PM"}
        </div>
      ) : null}
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTimeInfo__ArgProps,
      internalVariantPropNames: PlasmicTimeInfo__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTimeInfo__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTimeInfo";
  } else {
    func.displayName = `PlasmicTimeInfo.${nodeName}`;
  }
  return func;
}

export const PlasmicTimeInfo = Object.assign(
  // Top-level PlasmicTimeInfo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicTimeInfo
    internalVariantProps: PlasmicTimeInfo__VariantProps,
    internalArgProps: PlasmicTimeInfo__ArgProps
  }
);

export default PlasmicTimeInfo;
/* prettier-ignore-end */
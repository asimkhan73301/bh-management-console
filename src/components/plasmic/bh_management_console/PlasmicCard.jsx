// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: cbRusPsa56
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: btDhG8rl2o/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicCard.module.css"; // plasmic-import: cbRusPsa56/css
import CrossIconsvgIcon from "./icons/PlasmicIcon__CrossIconsvg"; // plasmic-import: u1TTN9T8s/icon

export const PlasmicCard__VariantProps = new Array(
  "hasClose",
  "contentOnly",
  "rounded"
);

export const PlasmicCard__ArgProps = new Array("children", "title");

function PlasmicCard__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__rounded]: hasVariant(variants, "rounded", "rounded")
      })}
    >
      {(hasVariant(variants, "contentOnly", "contentOnly") ? true : true) ? (
        <div
          data-plasmic-name={"titleContainer"}
          data-plasmic-override={overrides.titleContainer}
          className={classNames(defaultcss.all, sty.titleContainer, {
            [sty.titleContainer__contentOnly]: hasVariant(
              variants,
              "contentOnly",
              "contentOnly"
            ),

            [sty.titleContainer__hasClose]: hasVariant(
              variants,
              "hasClose",
              "hasClose"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Title",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(defaultcss.all, sty.freeBox, {
              [sty.freeBox__hasClose]: hasVariant(
                variants,
                "hasClose",
                "hasClose"
              )
            })}
          >
            {(hasVariant(variants, "hasClose", "hasClose") ? true : true) ? (
              <Button
                data-plasmic-name={"closeButton"}
                data-plasmic-override={overrides.closeButton}
                className={classNames("__wab_instance", sty.closeButton, {
                  [sty.closeButton__hasClose]: hasVariant(
                    variants,
                    "hasClose",
                    "hasClose"
                  )
                })}
                text={
                  <CrossIconsvgIcon
                    data-plasmic-name={"crossIcon"}
                    data-plasmic-override={overrides.crossIcon}
                    className={classNames(defaultcss.all, sty.crossIcon)}
                    role={"img"}
                  />
                }
              />
            ) : null}
          </div>
        </div>
      ) : null}
      {p.renderPlasmicSlot({
        defaultContents: "Enter some text",
        value: args.children
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "titleContainer", "freeBox", "closeButton", "crossIcon"],
  titleContainer: ["titleContainer", "freeBox", "closeButton", "crossIcon"],
  freeBox: ["freeBox", "closeButton", "crossIcon"],
  closeButton: ["closeButton", "crossIcon"],
  crossIcon: ["crossIcon"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCard__ArgProps,
      internalVariantPropNames: PlasmicCard__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCard";
  } else {
    func.displayName = `PlasmicCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCard = Object.assign(
  // Top-level PlasmicCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    titleContainer: makeNodeComponent("titleContainer"),
    freeBox: makeNodeComponent("freeBox"),
    closeButton: makeNodeComponent("closeButton"),
    crossIcon: makeNodeComponent("crossIcon"),
    // Metadata about props expected for PlasmicCard
    internalVariantProps: PlasmicCard__VariantProps,
    internalArgProps: PlasmicCard__ArgProps
  }
);

export default PlasmicCard;
/* prettier-ignore-end */

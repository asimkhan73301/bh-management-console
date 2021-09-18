// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: E5fsqxpowC
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: btDhG8rl2o/component
import MuiDialog from "../../MuiDialog"; // plasmic-import: zkmZt9CEr9/component
import { useDialog } from "./PlasmicGlobalVariant__Dialog"; // plasmic-import: Faff0vBnTY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicDialog.module.css"; // plasmic-import: E5fsqxpowC/css

export const PlasmicDialog__VariantProps = new Array("isOpen");

export const PlasmicDialog__ArgProps = new Array(
  "buttonText",
  "componentToRender"
);

function PlasmicDialog__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    dialog: useDialog()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__isOpen]: hasVariant(variants, "isOpen", "isOpen")
      })}
    >
      {(
        hasVariant(variants, "isOpen", "isOpen")
          ? true
          : hasVariant(globalVariants, "dialog", "open")
          ? true
          : true
      ) ? (
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.button__global_dialog_open]: hasVariant(
              globalVariants,
              "dialog",
              "open"
            ),

            [sty.button__isOpen]: hasVariant(variants, "isOpen", "isOpen")
          })}
          text={p.renderPlasmicSlot({
            defaultContents: "Click Me",
            value: args.buttonText
          })}
        />
      ) : null}
      {(
        hasVariant(variants, "isOpen", "isOpen")
          ? true
          : hasVariant(globalVariants, "dialog", "open")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"dialogBoxWrapper"}
          data-plasmic-override={overrides.dialogBoxWrapper}
          className={classNames(defaultcss.all, sty.dialogBoxWrapper, {
            [sty.dialogBoxWrapper__global_dialog_open]: hasVariant(
              globalVariants,
              "dialog",
              "open"
            ),

            [sty.dialogBoxWrapper__isOpen]: hasVariant(
              variants,
              "isOpen",
              "isOpen"
            )
          })}
        >
          <MuiDialog
            data-plasmic-name={"muiDialog"}
            data-plasmic-override={overrides.muiDialog}
            className={classNames("__wab_instance", sty.muiDialog)}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button", "dialogBoxWrapper", "muiDialog"],
  button: ["button"],
  dialogBoxWrapper: ["dialogBoxWrapper", "muiDialog"],
  muiDialog: ["muiDialog"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDialog__ArgProps,
      internalVariantPropNames: PlasmicDialog__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicDialog__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDialog";
  } else {
    func.displayName = `PlasmicDialog.${nodeName}`;
  }
  return func;
}

export const PlasmicDialog = Object.assign(
  // Top-level PlasmicDialog renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    dialogBoxWrapper: makeNodeComponent("dialogBoxWrapper"),
    muiDialog: makeNodeComponent("muiDialog"),
    // Metadata about props expected for PlasmicDialog
    internalVariantProps: PlasmicDialog__VariantProps,
    internalArgProps: PlasmicDialog__ArgProps
  }
);

export default PlasmicDialog;
/* prettier-ignore-end */
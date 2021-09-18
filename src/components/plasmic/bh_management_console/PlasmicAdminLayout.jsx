// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: 046Osy-48bS
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Sidebar from "../../Sidebar"; // plasmic-import: 2ETjiGbh3p/component
import Dialog from "../../Dialog"; // plasmic-import: E5fsqxpowC/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicAdminLayout.module.css"; // plasmic-import: 046Osy-48bS/css

export const PlasmicAdminLayout__VariantProps = new Array("hideAddButton");

export const PlasmicAdminLayout__ArgProps = new Array(
  "mainWrapper",
  "children",
  "breadcrumbs",
  "buttonText"
);

function PlasmicAdminLayout__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames(defaultcss.all, sty.content)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Sidebar
              className={classNames("__wab_instance", sty.sidebar__oARh6)}
            />
          ),

          value: args.children
        })}

        <div
          data-plasmic-name={"mainWrapper"}
          data-plasmic-override={overrides.mainWrapper}
          className={classNames(defaultcss.all, sty.mainWrapper)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox___3EWD)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___5LAlq)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__qEn1U
                      )}
                    >
                      {"Breadcrumb One"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__rmO01
                      )}
                    >
                      {">"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__lzahG
                      )}
                    >
                      {"Breadcrumb Two"}
                    </div>
                  </React.Fragment>
                ),

                value: args.breadcrumbs
              })}
            </p.Stack>

            {(
              hasVariant(variants, "hideAddButton", "hideAddButton")
                ? true
                : true
            ) ? (
              <Dialog
                data-plasmic-name={"dialog"}
                data-plasmic-override={overrides.dialog}
                buttonText={p.renderPlasmicSlot({
                  defaultContents: "Click Me",
                  value: args.buttonText
                })}
                className={classNames("__wab_instance", sty.dialog, {
                  [sty.dialog__hideAddButton]: hasVariant(
                    variants,
                    "hideAddButton",
                    "hideAddButton"
                  )
                })}
              />
            ) : null}
          </p.Stack>

          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.mainWrapper
          })}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "content", "mainWrapper", "dialog"],
  content: ["content", "mainWrapper", "dialog"],
  mainWrapper: ["mainWrapper", "dialog"],
  dialog: ["dialog"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAdminLayout__ArgProps,
      internalVariantPropNames: PlasmicAdminLayout__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicAdminLayout__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdminLayout";
  } else {
    func.displayName = `PlasmicAdminLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicAdminLayout = Object.assign(
  // Top-level PlasmicAdminLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    content: makeNodeComponent("content"),
    mainWrapper: makeNodeComponent("mainWrapper"),
    dialog: makeNodeComponent("dialog"),
    // Metadata about props expected for PlasmicAdminLayout
    internalVariantProps: PlasmicAdminLayout__VariantProps,
    internalArgProps: PlasmicAdminLayout__ArgProps
  }
);

export default PlasmicAdminLayout;
/* prettier-ignore-end */
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: MrE5uj_9Ik
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import UserLayout from "../../UserLayout"; // plasmic-import: TF4eeP5pkV/component
import Sidebar from "../../Sidebar"; // plasmic-import: 2ETjiGbh3p/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicUserDashboard.module.css"; // plasmic-import: MrE5uj_9Ik/css

export const PlasmicUserDashboard__VariantProps = new Array();

export const PlasmicUserDashboard__ArgProps = new Array();

function PlasmicUserDashboard__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      >
        <UserLayout
          data-plasmic-name={"userLayout"}
          data-plasmic-override={overrides.userLayout}
          className={classNames("__wab_instance", sty.userLayout)}
        >
          <Sidebar
            data-plasmic-name={"sidebar"}
            data-plasmic-override={overrides.sidebar}
            className={classNames("__wab_instance", sty.sidebar)}
          />
        </UserLayout>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "userLayout", "sidebar"],
  userLayout: ["userLayout", "sidebar"],
  sidebar: ["sidebar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicUserDashboard__ArgProps,
      internalVariantPropNames: PlasmicUserDashboard__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicUserDashboard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserDashboard";
  } else {
    func.displayName = `PlasmicUserDashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicUserDashboard = Object.assign(
  // Top-level PlasmicUserDashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    userLayout: makeNodeComponent("userLayout"),
    sidebar: makeNodeComponent("sidebar"),
    // Metadata about props expected for PlasmicUserDashboard
    internalVariantProps: PlasmicUserDashboard__VariantProps,
    internalArgProps: PlasmicUserDashboard__ArgProps
  }
);

export default PlasmicUserDashboard;
/* prettier-ignore-end */

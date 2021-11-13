// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: z5q8_iySW5
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import AdminLayout from "../../AdminLayout"; // plasmic-import: 046Osy-48bS/component
import Sidebar from "../../Sidebar"; // plasmic-import: 2ETjiGbh3p/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicAdminReports.module.css"; // plasmic-import: z5q8_iySW5/css

export const PlasmicAdminReports__VariantProps = new Array();

export const PlasmicAdminReports__ArgProps = new Array();

function PlasmicAdminReports__RenderFunc(props) {
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
        <AdminLayout
          data-plasmic-name={"adminLayout"}
          data-plasmic-override={overrides.adminLayout}
          breadcrumbs={
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text
              )}
            >
              {"Reports"}
            </div>
          }
          className={classNames("__wab_instance", sty.adminLayout)}
          hideAddButton={"hideAddButton"}
          mainWrapper={null}
          type={"reporting"}
        >
          <Sidebar
            data-plasmic-name={"sidebar"}
            data-plasmic-override={overrides.sidebar}
            admin={"admin"}
            className={classNames("__wab_instance", sty.sidebar)}
          />
        </AdminLayout>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "adminLayout", "sidebar", "text"],
  adminLayout: ["adminLayout", "sidebar", "text"],
  sidebar: ["sidebar"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAdminReports__ArgProps,
      internalVariantPropNames: PlasmicAdminReports__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicAdminReports__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAdminReports";
  } else {
    func.displayName = `PlasmicAdminReports.${nodeName}`;
  }
  return func;
}

export const PlasmicAdminReports = Object.assign(
  // Top-level PlasmicAdminReports renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    adminLayout: makeNodeComponent("adminLayout"),
    sidebar: makeNodeComponent("sidebar"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicAdminReports
    internalVariantProps: PlasmicAdminReports__VariantProps,
    internalArgProps: PlasmicAdminReports__ArgProps
  }
);

export default PlasmicAdminReports;
/* prettier-ignore-end */
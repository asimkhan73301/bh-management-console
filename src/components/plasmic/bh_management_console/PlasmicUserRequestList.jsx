// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: tqNj2kvNy9
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import AdminLayout from "../../AdminLayout"; // plasmic-import: 046Osy-48bS/component
import Sidebar from "../../Sidebar"; // plasmic-import: 2ETjiGbh3p/component
import RequestList from "../../RequestList"; // plasmic-import: R7-uUmA8YC/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicUserRequestList.module.css"; // plasmic-import: tqNj2kvNy9/css

export const PlasmicUserRequestList__VariantProps = new Array();

export const PlasmicUserRequestList__ArgProps = new Array();

function PlasmicUserRequestList__RenderFunc(props) {
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
            <React.Fragment>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__w0X7
                )}
              >
                {"Request"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__tFsl
                )}
              >
                {">"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__q81De
                )}
              >
                {"List"}
              </div>
            </React.Fragment>
          }
          className={classNames("__wab_instance", sty.adminLayout)}
          hideAddButton={"hideAddButton"}
          mainWrapper={
            <RequestList
              data-plasmic-name={"requestList"}
              data-plasmic-override={overrides.requestList}
              className={classNames("__wab_instance", sty.requestList)}
              userContext={"userContext"}
            />
          }
        >
          <Sidebar
            data-plasmic-name={"sidebar"}
            data-plasmic-override={overrides.sidebar}
            className={classNames("__wab_instance", sty.sidebar)}
          />
        </AdminLayout>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "adminLayout", "sidebar", "requestList"],
  adminLayout: ["adminLayout", "sidebar", "requestList"],
  sidebar: ["sidebar"],
  requestList: ["requestList"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicUserRequestList__ArgProps,
      internalVariantPropNames: PlasmicUserRequestList__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicUserRequestList__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserRequestList";
  } else {
    func.displayName = `PlasmicUserRequestList.${nodeName}`;
  }
  return func;
}

export const PlasmicUserRequestList = Object.assign(
  // Top-level PlasmicUserRequestList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    adminLayout: makeNodeComponent("adminLayout"),
    sidebar: makeNodeComponent("sidebar"),
    requestList: makeNodeComponent("requestList"),
    // Metadata about props expected for PlasmicUserRequestList
    internalVariantProps: PlasmicUserRequestList__VariantProps,
    internalArgProps: PlasmicUserRequestList__ArgProps
  }
);

export default PlasmicUserRequestList;
/* prettier-ignore-end */
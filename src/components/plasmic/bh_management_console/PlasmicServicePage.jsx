// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: syysRW7bMl
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import UserLayout from "../../UserLayout"; // plasmic-import: TF4eeP5pkV/component
import ServiceForm from "../../ServiceForm"; // plasmic-import: rCjvWQ_Miz/component
import Sidebar from "../../Sidebar"; // plasmic-import: 2ETjiGbh3p/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicServicePage.module.css"; // plasmic-import: syysRW7bMl/css

export const PlasmicServicePage__VariantProps = new Array();

export const PlasmicServicePage__ArgProps = new Array();

function PlasmicServicePage__RenderFunc(props) {
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
          breadcrumbs={
            <React.Fragment>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__dl7Li
                )}
              >
                {"Services"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__zsYc
                )}
              >
                {">"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__roXe
                )}
              >
                {"Add Service"}
              </div>
            </React.Fragment>
          }
          className={classNames("__wab_instance", sty.userLayout)}
          hideFilters={"hideFilters"}
          mainWrapper={
            <ServiceForm
              data-plasmic-name={"serviceForm"}
              data-plasmic-override={overrides.serviceForm}
              className={classNames("__wab_instance", sty.serviceForm)}
            />
          }
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
  root: ["root", "userLayout", "serviceForm", "sidebar"],
  userLayout: ["userLayout", "serviceForm", "sidebar"],
  serviceForm: ["serviceForm"],
  sidebar: ["sidebar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicServicePage__ArgProps,
      internalVariantPropNames: PlasmicServicePage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicServicePage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServicePage";
  } else {
    func.displayName = `PlasmicServicePage.${nodeName}`;
  }
  return func;
}

export const PlasmicServicePage = Object.assign(
  // Top-level PlasmicServicePage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    userLayout: makeNodeComponent("userLayout"),
    serviceForm: makeNodeComponent("serviceForm"),
    sidebar: makeNodeComponent("sidebar"),
    // Metadata about props expected for PlasmicServicePage
    internalVariantProps: PlasmicServicePage__VariantProps,
    internalArgProps: PlasmicServicePage__ArgProps
  }
);

export default PlasmicServicePage;
/* prettier-ignore-end */

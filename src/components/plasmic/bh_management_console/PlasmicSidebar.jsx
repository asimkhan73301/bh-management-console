// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: 2ETjiGbh3p
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SidebarItem from "../../SidebarItem"; // plasmic-import: cj0PTxmEF4/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicSidebar.module.css"; // plasmic-import: 2ETjiGbh3p/css
import ApprovalsvgIcon from "./icons/PlasmicIcon__Approvalsvg"; // plasmic-import: muIIwCg07L/icon
import CustomerSupportsvgIcon from "./icons/PlasmicIcon__CustomerSupportsvg"; // plasmic-import: UAOJiIzwc/icon
import TrafficJamsvgIcon from "./icons/PlasmicIcon__TrafficJamsvg"; // plasmic-import: 8FGzZD12o/icon
import BusinessReportsvgIcon from "./icons/PlasmicIcon__BusinessReportsvg"; // plasmic-import: BdIT_EAXnE/icon
import GroupMeetingsvgIcon from "./icons/PlasmicIcon__GroupMeetingsvg"; // plasmic-import: UesfMCqru/icon
import Logout1SvgIcon from "./icons/PlasmicIcon__Logout1Svg"; // plasmic-import: AyfUoElJ4s/icon
import _51F6Fb256629Fc755B8870C801092942PngOBmXbAsf4 from "./images/_51F6Fb256629Fc755B8870C801092942Png.png"; // plasmic-import: oBMXbASF4/picture

export const PlasmicSidebar__VariantProps = new Array("admin");

export const PlasmicSidebar__ArgProps = new Array();

function PlasmicSidebar__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__admin]: hasVariant(variants, "admin", "admin")
      })}
    >
      <div
        data-plasmic-name={"brand"}
        data-plasmic-override={overrides.brand}
        className={classNames(defaultcss.all, sty.brand)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__jo5X
          )}
        >
          {"BEACONHOUSE"}
        </div>
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"profile"}
        data-plasmic-override={overrides.profile}
        hasGap={true}
        className={classNames(defaultcss.all, sty.profile)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img, {
            [sty.img__admin]: hasVariant(variants, "admin", "admin")
          })}
          src={_51F6Fb256629Fc755B8870C801092942PngOBmXbAsf4}
        />

        <a
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(defaultcss.a, defaultcss.__wab_text, sty.link, {
            [sty.link__admin]: hasVariant(variants, "admin", "admin")
          })}
          href={
            hasVariant(variants, "admin", "admin")
              ? "/admin/profile"
              : "/user/profile"
          }
        >
          {hasVariant(variants, "admin", "admin") ? "Admin User" : "John Doe"}
        </a>
      </p.Stack>

      <div
        data-plasmic-name={"itemWrapper"}
        data-plasmic-override={overrides.itemWrapper}
        className={classNames(defaultcss.all, sty.itemWrapper, {
          [sty.itemWrapper__admin]: hasVariant(variants, "admin", "admin")
        })}
      >
        {(hasVariant(variants, "admin", "admin") ? true : true) ? (
          <SidebarItem
            className={classNames("__wab_instance", sty.sidebarItem__rqmdo, {
              [sty.sidebarItem__admin__rqmdowi46C]: hasVariant(
                variants,
                "admin",
                "admin"
              )
            })}
            destination={"/requests"}
            slot={
              <ApprovalsvgIcon
                className={classNames(defaultcss.all, sty.svg__yZxz)}
                role={"img"}
              />
            }
            slot2={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__vc9X5
                )}
              >
                {"My Requests"}
              </div>
            }
          />
        ) : null}
        {(hasVariant(variants, "admin", "admin") ? true : true) ? (
          <SidebarItem
            className={classNames("__wab_instance", sty.sidebarItem___5LuIv, {
              [sty.sidebarItem__admin___5LuIvwi46C]: hasVariant(
                variants,
                "admin",
                "admin"
              )
            })}
            destination={"/services"}
            slot={
              <CustomerSupportsvgIcon
                className={classNames(defaultcss.all, sty.svg__luMkk)}
                role={"img"}
              />
            }
            slot2={"Services"}
          />
        ) : null}
        {(hasVariant(variants, "admin", "admin") ? true : true) ? (
          <SidebarItem
            className={classNames("__wab_instance", sty.sidebarItem__lCn4U, {
              [sty.sidebarItem__admin__lCn4Uwi46C]: hasVariant(
                variants,
                "admin",
                "admin"
              )
            })}
            destination={"/fleet"}
            slot={
              <TrafficJamsvgIcon
                className={classNames(defaultcss.all, sty.svg__pEw3)}
                role={"img"}
              />
            }
            slot2={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__b2MDr
                )}
              >
                {"Fleet / Travel"}
              </div>
            }
          />
        ) : null}
        {(hasVariant(variants, "admin", "admin") ? true : false) ? (
          <SidebarItem
            className={classNames("__wab_instance", sty.sidebarItem__peGI, {
              [sty.sidebarItem__admin__peGIwi46C]: hasVariant(
                variants,
                "admin",
                "admin"
              )
            })}
            destination={
              hasVariant(variants, "admin", "admin") ? "/admin/dashboard" : ""
            }
            slot={
              <ApprovalsvgIcon
                className={classNames(defaultcss.all, sty.svg__oMuEq)}
                role={"img"}
              />
            }
            slot2={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__fX4Xx,
                  {
                    [sty.text__admin__fX4XXwi46C]: hasVariant(
                      variants,
                      "admin",
                      "admin"
                    )
                  }
                )}
              >
                {hasVariant(variants, "admin", "admin")
                  ? "Approvals"
                  : "Some link text"}
              </div>
            }
          />
        ) : null}
        {(hasVariant(variants, "admin", "admin") ? true : false) ? (
          <SidebarItem
            className={classNames("__wab_instance", sty.sidebarItem__kbJOg, {
              [sty.sidebarItem__admin__kbJOgwi46C]: hasVariant(
                variants,
                "admin",
                "admin"
              )
            })}
            destination={"/admin/reports"}
            slot={
              <BusinessReportsvgIcon
                className={classNames(defaultcss.all, sty.svg__rSwaH)}
                role={"img"}
              />
            }
            slot2={
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.text__bqEh7,
                  {
                    [sty.text__admin__bqEh7Wi46C]: hasVariant(
                      variants,
                      "admin",
                      "admin"
                    )
                  }
                )}
              >
                {hasVariant(variants, "admin", "admin") ? "Reports" : "Reports"}
              </div>
            }
          />
        ) : null}
        {(hasVariant(variants, "admin", "admin") ? true : true) ? (
          <SidebarItem
            className={classNames("__wab_instance", sty.sidebarItem__hioS, {
              [sty.sidebarItem__admin__hioSwi46C]: hasVariant(
                variants,
                "admin",
                "admin"
              )
            })}
            destination={"/meeting-rooms"}
            slot={
              <GroupMeetingsvgIcon
                className={classNames(defaultcss.all, sty.svg__w9GRq)}
                role={"img"}
              />
            }
            slot2={"Meeting Rooms"}
          />
        ) : null}
      </div>

      <div
        data-plasmic-name={"logoutMenu"}
        data-plasmic-override={overrides.logoutMenu}
        className={classNames(defaultcss.all, sty.logoutMenu)}
      >
        <SidebarItem
          className={classNames("__wab_instance", sty.sidebarItem___5GmRb)}
          destination={"/sign-in"}
          slot={
            <Logout1SvgIcon
              className={classNames(defaultcss.all, sty.svg__zvDhz)}
              role={"img"}
            />
          }
          slot2={"Logout"}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "brand",
    "profile",
    "img",
    "link",
    "itemWrapper",
    "logoutMenu"
  ],

  brand: ["brand"],
  profile: ["profile", "img", "link"],
  img: ["img"],
  link: ["link"],
  itemWrapper: ["itemWrapper"],
  logoutMenu: ["logoutMenu"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSidebar__ArgProps,
      internalVariantPropNames: PlasmicSidebar__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSidebar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSidebar";
  } else {
    func.displayName = `PlasmicSidebar.${nodeName}`;
  }
  return func;
}

export const PlasmicSidebar = Object.assign(
  // Top-level PlasmicSidebar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    brand: makeNodeComponent("brand"),
    profile: makeNodeComponent("profile"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    itemWrapper: makeNodeComponent("itemWrapper"),
    logoutMenu: makeNodeComponent("logoutMenu"),
    // Metadata about props expected for PlasmicSidebar
    internalVariantProps: PlasmicSidebar__VariantProps,
    internalArgProps: PlasmicSidebar__ArgProps
  }
);

export default PlasmicSidebar;
/* prettier-ignore-end */

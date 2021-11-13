// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: zp0oR3Do2e
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Table from "../../Table"; // plasmic-import: sMUya_zWwh/component
import TableRow from "../../TableRow"; // plasmic-import: ivRJDBBaYd/component
import TableCell from "../../TableCell"; // plasmic-import: H6KFzMtVnz/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicMeetingRoomByRoomReport.module.css"; // plasmic-import: zp0oR3Do2e/css

export const PlasmicMeetingRoomByRoomReport__VariantProps = new Array();

export const PlasmicMeetingRoomByRoomReport__ArgProps = new Array();

function PlasmicMeetingRoomByRoomReport__RenderFunc(props) {
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
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__e232Z
          )}
        >
          {"Meeting Room Analysis"}
        </div>
      </div>

      <Table
        data-plasmic-name={"table"}
        data-plasmic-override={overrides.table}
        className={classNames("__wab_instance", sty.table)}
      >
        <TableRow className={classNames("__wab_instance", sty.tableRow__sg67J)}>
          <TableCell
            className={classNames("__wab_instance", sty.tableCell__kSfrC)}
            color={"primary"}
          >
            {"Room"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__zcQCk)}
            color={"primary"}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__cmZDr
              )}
            >
              {"Total Duration ( hrs )"}
            </div>
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__uoe4Z)}
            color={"primary"}
          >
            {"Day Count"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__p6P1M)}
            color={"primary"}
          >
            {"Unique Reservers"}
          </TableCell>
        </TableRow>

        <TableRow className={classNames("__wab_instance", sty.tableRow__vhMql)}>
          <TableCell
            className={classNames("__wab_instance", sty.tableCell__pEybr)}
            color={"primaryLight"}
          >
            {"Room 2"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__h4DOe)}
          >
            {"54"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__u4SEd)}
          >
            {"20"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__fP6Tf)}
          >
            {"8"}
          </TableCell>
        </TableRow>

        <TableRow className={classNames("__wab_instance", sty.tableRow__zbrtR)}>
          <TableCell
            className={classNames("__wab_instance", sty.tableCell__nZuvp)}
            color={"primaryLight"}
          >
            {"Room 1"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__q7XpC)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__jxPql
              )}
            >
              {"32"}
            </div>
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__mjxat)}
          >
            {"15"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__yp82A)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__mYeYm
              )}
            >
              {"12"}
            </div>
          </TableCell>
        </TableRow>

        <TableRow className={classNames("__wab_instance", sty.tableRow__n6YZd)}>
          <TableCell
            className={classNames("__wab_instance", sty.tableCell__tva44)}
            color={"primaryLight"}
          >
            {"Room 3"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__l0FNf)}
          >
            {"25"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__fMa2F)}
          >
            {"10"}
          </TableCell>

          <TableCell
            className={classNames("__wab_instance", sty.tableCell__njYTy)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__qxXma
              )}
            >
              {"4"}
            </div>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "table"],
  freeBox: ["freeBox"],
  table: ["table"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMeetingRoomByRoomReport__ArgProps,
      internalVariantPropNames: PlasmicMeetingRoomByRoomReport__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMeetingRoomByRoomReport__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMeetingRoomByRoomReport";
  } else {
    func.displayName = `PlasmicMeetingRoomByRoomReport.${nodeName}`;
  }
  return func;
}

export const PlasmicMeetingRoomByRoomReport = Object.assign(
  // Top-level PlasmicMeetingRoomByRoomReport renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    table: makeNodeComponent("table"),
    // Metadata about props expected for PlasmicMeetingRoomByRoomReport
    internalVariantProps: PlasmicMeetingRoomByRoomReport__VariantProps,
    internalArgProps: PlasmicMeetingRoomByRoomReport__ArgProps
  }
);

export default PlasmicMeetingRoomByRoomReport;
/* prettier-ignore-end */
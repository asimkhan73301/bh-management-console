// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: YQ4NazOClY
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import GenericFormComponent from "../../GenericFormComponent"; // plasmic-import: -oqFHJTBGG/component
import MeetingRoomFormFields from "../../MeetingRoomFormFields"; // plasmic-import: At5FRbyuem/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicMeetingRoomForm.module.css"; // plasmic-import: YQ4NazOClY/css

export const PlasmicMeetingRoomForm__VariantProps = new Array();

export const PlasmicMeetingRoomForm__ArgProps = new Array();

function PlasmicMeetingRoomForm__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <GenericFormComponent
        data-plasmic-name={"genericFormComponent"}
        data-plasmic-override={overrides.genericFormComponent}
        className={classNames("__wab_instance", sty.genericFormComponent)}
        fieldsWrapper={
          <MeetingRoomFormFields
            data-plasmic-name={"meetingRoomFormFields"}
            data-plasmic-override={overrides.meetingRoomFormFields}
            className={classNames("__wab_instance", sty.meetingRoomFormFields)}
          />
        }
        title={"Add Meeting Room"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "genericFormComponent", "meetingRoomFormFields"],
  genericFormComponent: ["genericFormComponent", "meetingRoomFormFields"],
  meetingRoomFormFields: ["meetingRoomFormFields"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMeetingRoomForm__ArgProps,
      internalVariantPropNames: PlasmicMeetingRoomForm__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicMeetingRoomForm__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMeetingRoomForm";
  } else {
    func.displayName = `PlasmicMeetingRoomForm.${nodeName}`;
  }
  return func;
}

export const PlasmicMeetingRoomForm = Object.assign(
  // Top-level PlasmicMeetingRoomForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    genericFormComponent: makeNodeComponent("genericFormComponent"),
    meetingRoomFormFields: makeNodeComponent("meetingRoomFormFields"),
    // Metadata about props expected for PlasmicMeetingRoomForm
    internalVariantProps: PlasmicMeetingRoomForm__VariantProps,
    internalArgProps: PlasmicMeetingRoomForm__ArgProps
  }
);

export default PlasmicMeetingRoomForm;
/* prettier-ignore-end */
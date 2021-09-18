// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icons8EditsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.828 3c-.512 0-1.023.195-1.414.586L19 6l5 5 2.414-2.414a2 2 0 000-2.828l-2.172-2.172A1.994 1.994 0 0022.828 3zM17 8L5.26 19.74s.918-.082 1.26.26c.342.342.06 2.58.48 3 .42.42 2.644.124 2.963.443.319.32.297 1.297.297 1.297L22 13l-5-5zM4 23l-.943 2.672A1 1 0 003 26a1 1 0 001 1 1 1 0 00.328-.057 1 1 0 00.01-.004l.025-.007a1 1 0 00.006-.004L7 26l-1.5-1.5L4 23z"
        }
      ></path>
    </svg>
  );
}

export default Icons8EditsvgIcon;
/* prettier-ignore-end */
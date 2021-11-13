// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Approval1SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-27 0 512 512"}
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
          "M215 492c0 11.047-8.953 20-20 20H80c-44.113 0-80-35.887-80-80V80C0 35.887 35.887 0 80 0h245.89c44.11 0 80 35.887 80 80v212c0 11.047-8.956 20-20 20-11.046 0-20-8.953-20-20V80c0-22.055-17.945-40-40-40H80c-22.055 0-40 17.945-40 40v352c0 22.055 17.945 40 40 40h115c11.047 0 20 8.953 20 20zm235.64-166.262c-8.98-6.43-21.472-4.36-27.902 4.617L324.156 468.06c-2.691 3.12-6.066 3.793-7.87 3.914-1.868.12-5.477-.114-8.575-3.063l-63.82-61.281c-7.965-7.649-20.625-7.395-28.278.574-7.652 7.969-7.394 20.629.575 28.277l63.882 61.344C289.64 506.93 302.41 512 315.55 512c1.13 0 2.263-.04 3.395-.113 14.313-.953 27.676-7.914 36.664-19.102.23-.285.457-.582.672-.883l98.98-138.261c6.43-8.98 4.364-21.473-4.62-27.903zM305.89 120h-206c-11.046 0-20 8.953-20 20s8.954 20 20 20h206c11.044 0 20-8.953 20-20s-8.956-20-20-20zm20 100c0-11.047-8.956-20-20-20h-206c-11.046 0-20 8.953-20 20s8.954 20 20 20h206c11.044 0 20-8.953 20-20zm-226 60c-11.046 0-20 8.953-20 20s8.954 20 20 20H225c11.047 0 20-8.953 20-20s-8.953-20-20-20zm0 0"
        }
      ></path>
    </svg>
  );
}

export default Approval1SvgIcon;
/* prettier-ignore-end */

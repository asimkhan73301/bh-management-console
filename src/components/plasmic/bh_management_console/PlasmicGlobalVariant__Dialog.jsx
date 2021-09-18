// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const DialogContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function useDialog() {
  return React.useContext(DialogContext);
}

export default DialogContext;
/* prettier-ignore-end */

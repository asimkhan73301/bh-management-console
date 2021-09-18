// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iiynbYDu6GiGaNNDvPQoVR
// Component: MiR_dRz3Cz
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import InputComponent from "../../InputComponent"; // plasmic-import: qNK1ZRC_DP/component
import Button from "../../Button"; // plasmic-import: btDhG8rl2o/component
import { useScreenVariants } from "../blank_project/PlasmicGlobalVariant__Screen"; // plasmic-import: AUzgs24G0s/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: iiynbYDu6GiGaNNDvPQoVR/projectcss
import * as sty from "./PlasmicSignInPage.module.css"; // plasmic-import: MiR_dRz3Cz/css
import logoBackgroundjpg1MyVk98Jv from "./images/logoBackgroundjpg.jpeg"; // plasmic-import: 1MyVk98Jv/picture

export const PlasmicSignInPage__VariantProps = new Array();

export const PlasmicSignInPage__ArgProps = new Array();

function PlasmicSignInPage__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox___4KtHv)}>
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(defaultcss.all, sty.columns)}
          >
            <div className={classNames(defaultcss.all, sty.column__zqThq)}>
              <img
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(defaultcss.img, sty.img)}
                src={logoBackgroundjpg1MyVk98Jv}
              />
            </div>

            <div className={classNames(defaultcss.all, sty.column__ua8S6)}>
              <div className={classNames(defaultcss.all, sty.freeBox__cKl6K)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__vkyRu)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__pZavO
                    )}
                  >
                    {"Don't have an account?"}
                  </div>

                  <a
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.link
                    )}
                    href={"/sign-up"}
                  >
                    {"Sign Up Now"}
                  </a>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  data-plasmic-name={"formWrapper"}
                  data-plasmic-override={overrides.formWrapper}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.formWrapper)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___4LFs
                    )}
                  >
                    {"Sign In to Beacon House"}
                  </div>

                  <div
                    data-plasmic-name={"row"}
                    data-plasmic-override={overrides.row}
                    className={classNames(defaultcss.all, sty.row)}
                  >
                    <InputComponent
                      data-plasmic-name={"usernameEmailInput"}
                      data-plasmic-override={overrides.usernameEmailInput}
                      className={classNames(
                        "__wab_instance",
                        sty.usernameEmailInput
                      )}
                      label={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__m2Hiv
                          )}
                        >
                          {"Username or Email"}
                        </div>
                      }
                    />
                  </div>

                  <div
                    data-plasmic-name={"row2"}
                    data-plasmic-override={overrides.row2}
                    className={classNames(defaultcss.all, sty.row2)}
                  >
                    <InputComponent
                      data-plasmic-name={"inputComponent"}
                      data-plasmic-override={overrides.inputComponent}
                      className={classNames(
                        "__wab_instance",
                        sty.inputComponent
                      )}
                      label={"Password"}
                    />
                  </div>

                  <div
                    data-plasmic-name={"row3"}
                    data-plasmic-override={overrides.row3}
                    className={classNames(defaultcss.all, sty.row3)}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___7Rnkn
                      )}
                    >
                      {"Forgot Password?"}
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"row4"}
                    data-plasmic-override={overrides.row4}
                    className={classNames(defaultcss.all, sty.row4)}
                  >
                    <Button
                      data-plasmic-name={"signInButton"}
                      data-plasmic-override={overrides.signInButton}
                      className={classNames("__wab_instance", sty.signInButton)}
                      rounded={"rounded"}
                      text={"Log In"}
                      type={"secondary"}
                    />
                  </div>
                </p.Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "columns",
    "img",
    "link",
    "formWrapper",
    "row",
    "usernameEmailInput",
    "row2",
    "inputComponent",
    "row3",
    "row4",
    "signInButton"
  ],

  columns: [
    "columns",
    "img",
    "link",
    "formWrapper",
    "row",
    "usernameEmailInput",
    "row2",
    "inputComponent",
    "row3",
    "row4",
    "signInButton"
  ],

  img: ["img"],
  link: ["link"],
  formWrapper: [
    "formWrapper",
    "row",
    "usernameEmailInput",
    "row2",
    "inputComponent",
    "row3",
    "row4",
    "signInButton"
  ],

  row: ["row", "usernameEmailInput"],
  usernameEmailInput: ["usernameEmailInput"],
  row2: ["row2", "inputComponent"],
  inputComponent: ["inputComponent"],
  row3: ["row3"],
  row4: ["row4", "signInButton"],
  signInButton: ["signInButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSignInPage__ArgProps,
      internalVariantPropNames: PlasmicSignInPage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicSignInPage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignInPage";
  } else {
    func.displayName = `PlasmicSignInPage.${nodeName}`;
  }
  return func;
}

export const PlasmicSignInPage = Object.assign(
  // Top-level PlasmicSignInPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    link: makeNodeComponent("link"),
    formWrapper: makeNodeComponent("formWrapper"),
    row: makeNodeComponent("row"),
    usernameEmailInput: makeNodeComponent("usernameEmailInput"),
    row2: makeNodeComponent("row2"),
    inputComponent: makeNodeComponent("inputComponent"),
    row3: makeNodeComponent("row3"),
    row4: makeNodeComponent("row4"),
    signInButton: makeNodeComponent("signInButton"),
    // Metadata about props expected for PlasmicSignInPage
    internalVariantProps: PlasmicSignInPage__VariantProps,
    internalArgProps: PlasmicSignInPage__ArgProps
  }
);

export default PlasmicSignInPage;
/* prettier-ignore-end */

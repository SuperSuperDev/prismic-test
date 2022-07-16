// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type User6763SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function User6763SvgIcon(props: User6763SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 256 256"}
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
          "M241.558 254.036H230.23c0-56.369-45.86-102.23-102.229-102.23S25.77 197.668 25.77 254.037H14.443c0-62.617 50.94-113.558 113.558-113.558s113.558 50.94 113.558 113.558zM128 127.818c-34.7 0-62.926-28.23-62.926-62.928S93.301 1.964 128 1.964s62.926 28.23 62.926 62.926-28.227 62.928-62.926 62.928zm0-114.525c-28.45 0-51.596 23.146-51.596 51.597S99.549 116.489 128 116.489c28.45 0 51.596-23.149 51.596-51.6S156.451 13.294 128 13.294z"
        }
        opacity={"1"}
        fill={"none"}
      ></path>
    </svg>
  );
}

export default User6763SvgIcon;
/* prettier-ignore-end */

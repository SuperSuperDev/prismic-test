// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pSGwZDAYME5TdPFpDRZPiX
// Component: 8sPBcCqjAEwzk3
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { ProductMedia } from "@plasmicpkgs/commerce"; // plasmic-import: qpULM0wwWW/codeComponent
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent
import { ProductPriceComponent } from "@plasmicpkgs/commerce"; // plasmic-import: _PaJxGc8gf/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_origin.module.css"; // plasmic-import: pSGwZDAYME5TdPFpDRZPiX/projectcss
import sty from "./PlasmicProduct.module.css"; // plasmic-import: 8sPBcCqjAEwzk3/css

export type PlasmicProduct__VariantMembers = {};

export type PlasmicProduct__VariantsArgs = {};
type VariantPropType = keyof PlasmicProduct__VariantsArgs;
export const PlasmicProduct__VariantProps = new Array<VariantPropType>();

export type PlasmicProduct__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicProduct__ArgsType;
export const PlasmicProduct__ArgProps = new Array<ArgPropType>("children");

export type PlasmicProduct__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  productTextField?: p.Flex<typeof ProductTextField>;
  productPrice?: p.Flex<typeof ProductPriceComponent>;
};

export interface DefaultProductProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicProduct__RenderFunc(props: {
  variants: PlasmicProduct__VariantsArgs;
  args: PlasmicProduct__ArgsType;
  overrides: PlasmicProduct__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__qs349)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <ProductMedia
              className={classNames("__wab_instance", sty.productMedia__yRenr)}
            />
          ),

          value: args.children
        })}
      </div>

      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nVbMf)}
        >
          <h3
            data-plasmic-name={"h3"}
            data-plasmic-override={overrides.h3}
            className={classNames(projectcss.all, projectcss.h3, sty.h3)}
          >
            <ProductTextField
              data-plasmic-name={"productTextField"}
              data-plasmic-override={overrides.productTextField}
              className={classNames("__wab_instance", sty.productTextField)}
              field={"name" as const}
            />
          </h3>

          <ProductPriceComponent
            data-plasmic-name={"productPrice"}
            data-plasmic-override={overrides.productPrice}
            className={classNames("__wab_instance", sty.productPrice)}
          />
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "productTextField", "productPrice"],
  h3: ["h3", "productTextField"],
  productTextField: ["productTextField"],
  productPrice: ["productPrice"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  productTextField: typeof ProductTextField;
  productPrice: typeof ProductPriceComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProduct__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProduct__VariantsArgs;
    args?: PlasmicProduct__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProduct__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProduct__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProduct__ArgProps,
          internalVariantPropNames: PlasmicProduct__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProduct__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProduct";
  } else {
    func.displayName = `PlasmicProduct.${nodeName}`;
  }
  return func;
}

export const PlasmicProduct = Object.assign(
  // Top-level PlasmicProduct renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    productTextField: makeNodeComponent("productTextField"),
    productPrice: makeNodeComponent("productPrice"),

    // Metadata about props expected for PlasmicProduct
    internalVariantProps: PlasmicProduct__VariantProps,
    internalArgProps: PlasmicProduct__ArgProps
  }
);

export default PlasmicProduct;
/* prettier-ignore-end */

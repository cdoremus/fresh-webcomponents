/**
 * Definitions of web component types with emphasis on extending
 * JSX.IntrinsicElements. This is required to be able to use a custom
 * element in a .tsx page without showing errors in vscode.
 */
import { JSX } from "preact";
import { LitElement } from "https://esm.sh/lit@3.1.0";
import { TableDataItem } from "../components/wc/TableWC.ts";

// This is used to specify the type that is the result of JSON.stringify()
declare class Stringified<T> extends String {
  private ___stringified: T;
}

interface JSON {
  stringify<T>(
    value: T,
    // deno-lint-ignore no-explicit-any
    replacer?: (key: string, value: any) => any,
    space?: string | number,
  ): string & Stringified<T>;
  // deno-lint-ignore no-explicit-any
  parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T;
  // deno-lint-ignore no-explicit-any
  parse(text: string, reviver?: (key: any, value: any) => any): any;
}

interface HelloWCProps extends JSX.HTMLAttributes<HTMLElement> {
  message?: string;
}

interface CounterWCProps extends JSX.HTMLAttributes<HTMLElement> {
  initialCount?: number;
}

interface ToolTip extends JSX.HTMLAttributes<HTMLElement> {
  tip: string;
}

interface TableWC extends JSX.HTMLAttributes<HTMLElement> {
  "data-feed": string;
}

interface SparklyText extends JSX.HTMLAttributes<HTMLElement> {
  "number-of-sparkles": Stringified<[TableDataItem]>; // a JSON string
}

interface MyLitMessage extends JSX.HTMLAttributes<LitElement> {
  message: string;
}

interface UsingNpmLib extends JSX.HTMLAttributes<HTMLElement> {
  "token"?: string;
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      // This fixes "Property 'template' does not exist on JSX.IntrinsicElements" error
      "template": JSX.HTMLAttributes<HTMLTemplateElement>;
      // Web components below
      //  These are custom elements with attributes defined above
      "hello-wc": HelloWCProps;
      "counter-wc": CounterWCProps;
      "tool-tip": ToolTip;
      "data-table": TableWC;
      "my-lit-message": MyLitMessage;
      "sparkly-text": SparklyText;
      "using-npm-lib": UsingNpmLib;
      //  These are custom elements without attributes
      "two-up": JSX.HTMLAttributes<HTMLElement>;
      "emoji-picker-wrapper": JSX.HTMLAttributes<HTMLElement>;
      "templated-wc": JSX.HTMLAttributes<HTMLElement>;
      //  These are Lit custom elements
      "search-form": JSX.HTMLAttributes<LitElement>;
      "lit-counter": JSX.HTMLAttributes<LitElement>;
      "custom-alert": JSX.HTMLAttributes<LitElement>;
    }
  }
}

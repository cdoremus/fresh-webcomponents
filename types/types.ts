/**
 * Definitions of web component types
 */
import { JSX } from "preact";
import { LitElement } from "https://esm.sh/lit@3.1.0";
import { TableDataItem } from "../components/wc/TableWC.ts";

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

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "hello-wc": HelloWCProps;
      "counter-wc": CounterWCProps;
      "tool-tip": ToolTip;
      "data-table": TableWC;
      "lit-counter": JSX.HTMLAttributes<LitElement>;
      "my-lit-message": MyLitMessage;
      "custom-alert": JSX.HTMLAttributes<LitElement>;
      "sparkly-text": SparklyText;
      "two-up": JSX.HTMLAttributes<HTMLElement>;
      "emoji-picker-wrapper": JSX.HTMLAttributes<HTMLElement>;
      "search-form": JSX.HTMLAttributes<LitElement>;
      "templated-wc": JSX.HTMLAttributes<LitElement>;
    }
  }
}

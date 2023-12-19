/**
 * Definitions of web component types
 */
import { JsxAttribute } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";
import { JSX } from "preact";

type booleanString = "true" | "false";

interface HelloWCProps extends JSX.HTMLAttributes<HTMLElement> {
  message?: string;
}

interface CounterWCProps extends JSX.HTMLAttributes<HTMLElement> {
  initialCount?: number;
}

interface ToolTip extends JSX.HTMLAttributes<HTMLElement> {
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "hello-wc": HelloWCProps;
      "counter-wc": CounterWCProps;
      "tool-tip": ToolTip;
    }
  }
}

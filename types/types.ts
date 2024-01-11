/**
 * Definitions of web component types
 */
import { JSX } from "preact";
import { LitElement } from "https://esm.sh/lit@3.1.0";

interface HelloWCProps extends JSX.HTMLAttributes<HTMLElement> {
  message?: string;
}

interface CounterWCProps extends JSX.HTMLAttributes<HTMLElement> {
  initialCount?: number;
}

interface ToolTip extends JSX.HTMLAttributes<HTMLElement> {
  tip: string;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "hello-wc": HelloWCProps;
      "counter-wc": CounterWCProps;
      "tool-tip": ToolTip;
      "lit-counter": JSX.HTMLAttributes<LitElement>;
    }
  }
}

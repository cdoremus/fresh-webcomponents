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

interface JbDateInputProps extends JSX.HTMLAttributes<HTMLElement> {
  label?: string;
  format?: string; // MM/DD/YYYY
  value?: string; // default date
  "use-persian-number"?: booleanString;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "hello-wc": HelloWCProps;
      "counter-wc": CounterWCProps;
      "jb-date-input": JbDateInputProps;
    }
  }
}

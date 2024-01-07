import { JSX } from "preact";

function button(
  change: string,
  attributes?: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
      {...attributes}
    >
      {change}
    </button>
  );
}

interface CounterProps {
  initialCount?: number;
  attributes?: JSX.HTMLAttributes<HTMLButtonElement>;
}

export default function WCWrappedCounter(props?: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      {button("-1", props?.attributes)}
      <p id="counter-count" class="text-3xl">{props?.initialCount ?? 1}</p>
      {button("+1", props?.attributes)}
    </div>
  );
}

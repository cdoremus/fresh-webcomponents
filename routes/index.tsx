import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import WCWrappedCounter from "../islands/WCWrappedCounter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <div class="text-3xl font-bold">Counter Display Options</div>
          <div class="flex flex-col items-center gap-px">
            <h3>
              Fresh Counter in Preact
            </h3>
            <a
              class="text-xs italic"
              href="https://github.com/cdoremus/deno-fresh-webcomponents/blob/main/islands/Counter.tsx"
            >
              Source code
            </a>
          </div>
          <Counter count={count} />
          <div class="flex flex-col items-center gap-px">
            <h3>Web Component HTML Wrapped Counter</h3>
            <a
              class="text-xs italic"
              href="https://github.com/cdoremus/deno-fresh-webcomponents/blob/main/components/wc/CounterWC.ts"
            >
              Source code
            </a>
            <counter-wc>
              <div class="flex gap-8 py-6">
                <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors">
                  -1
                </button>
                <p id="counter-count" class="text-3xl">3</p>
                <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors">
                  +1
                </button>
              </div>
            </counter-wc>
          </div>
          <div class="flex flex-col items-center gap-px">
            <h3>Web Component Preact Wrapped Counter</h3>
            <a
              class="text-xs italic"
              href="https://github.com/cdoremus/deno-fresh-webcomponents/blob/main/islands/WCWrappedCounter.tsx"
            >
              Source code
            </a>
            <counter-wc>
              <WCWrappedCounter
                initialCount={3}
                attributes={{ title: "Preact-WC Counter button" }}
              />
            </counter-wc>
          </div>
          <div class="flex flex-col items-center gap-px">
            <h3>LitElement Counter</h3>
            <a
              class="text-xs italic"
              href="https://github.com/cdoremus/deno-fresh-webcomponents/blob/main/components/wc/LitCounter.js"
            >
              Source code
            </a>
            <lit-counter></lit-counter>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          <hr style="color:black;" />
          <h3>Preact Counter</h3>
          <Counter count={count} />
          <h3>Web Component HTML Wrapped Counter</h3>
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
          <h3>Web Component Preact Wrapped Counter</h3>
          <counter-wc>
            <WCWrappedCounter
              initialCount={3}
              attributes={{ title: "Preact-WC Counter button" }}
            />
          </counter-wc>

          <h3>Lit Counter</h3>
          {/* @ts-ignore lit wc */}
          <my-lit-element></my-lit-element>
        </div>
      </div>
    </div>
  );
}

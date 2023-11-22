import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import WCWrappedCounter from "../islands/WCWrappedCounter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">Deno Fresh Web Component Demo</h1>
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

          <h3>Greeting Web Component</h3>

          <hello-wc message="from Web Component embedded in Fresh">
          </hello-wc>
        </div>
      </div>
    </div>
  );
}

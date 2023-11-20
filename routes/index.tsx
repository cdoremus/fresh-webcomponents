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
          <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <h3>Preact Counter</h3>
          <Counter count={count} />
          <h3>Web Component Wrapped Counter</h3>
          {/* @ts-ignore WC */}
          <counter-wc>
            <WCWrappedCounter
              initialCount={3}
              attributes={{ title: "count button" }}
            />
            {/* @ts-ignore WC */}
          </counter-wc>
          <hr />
          {/* @ts-ignore HelloWC */}
          <hello-wc message="WC in Deno">
            {/* @ts-ignore HelloWC */}
          </hello-wc>
        </div>
      </div>
    </div>
  );
}

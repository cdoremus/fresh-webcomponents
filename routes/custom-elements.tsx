import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_: Request, ctx: FreshContext) {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    const json: [] = await resp.json() as [];
    return await ctx.render({ json });
  },
};

export default function CustomElementsPage({ data }: PageProps) {
  const { json } = data;
  const tableData = json;
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="text-3xl font-bold">Web Component Custom Elements</div>
      <hr />
      <div>
        <h3>Greeting Web Component</h3>
        <hello-wc></hello-wc>
      </div>
      <div>
        <h2>Tool Tip Demo</h2>
        <div>
          <span class="text-xl bold">Hover over this:</span>{" "}
          <tool-tip tip="The tooltip text">Text that needs a tooltip</tool-tip>
        </div>
      </div>
      <div>
        <h2>Table Demo</h2>
        <div>
          {/* @ts-ignore */}
          <my-table data-feed={JSON.stringify(tableData)}></my-table>
        </div>
      </div>
      <div>
        <h2>Toggle Button Demo</h2>
        <div>
          {/* @ts-ignore */}
          <toggle-wc>Toggle Button</toggle-wc>
        </div>
      </div>
    </div>
  );
}

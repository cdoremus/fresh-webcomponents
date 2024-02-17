import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { TableDataItem } from "../components/wc/mod.ts";

export const handler: Handlers = {
  async GET(_: Request, ctx: FreshContext) {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    const json: [TableDataItem] = await resp.json() as [TableDataItem];
    const users: Record<string, [TableDataItem]> = { users: json };
    ctx.state = users;

    return await ctx.render();
  },
};

export default function CustomElementsPage(
  props: PageProps<never, Record<string, [TableDataItem]>>,
) {
  const tableData = props.state.users;
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="text-3xl font-bold">Web Component Custom Elements</div>
      <hr />
      <div>
        <h3>Greeting Web Component</h3>
        <hello-wc></hello-wc>
      </div>
      <hr />
      <div>
        <h2>Tool Tip Demo</h2>
        <div>
          <span class="text-xl bold">Hover over this:</span>{" "}
          <tool-tip tip="The tooltip text">Text that needs a tooltip</tool-tip>
        </div>
      </div>
      <hr />
      <div>
        <h2>Table Web Component Demo</h2>
        <div>
          <data-table data-feed={JSON.stringify(tableData)}></data-table>
        </div>
      </div>
      <hr />
      <div>
        <h2>Form Web Component Demo</h2>
        <div>
          <search-form></search-form>
        </div>
      </div>
    </div>
  );
}

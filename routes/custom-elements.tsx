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
        <h3>Tool Tip Demo</h3>
        <div>
          <span class="text-xl bold">Hover over this:</span>{" "}
          <tool-tip tip="The tooltip text">Text that needs a tooltip</tool-tip>
        </div>
      </div>
      <hr />
      <div>
        <h3>Table Web Component Demo</h3>
        <div>
          <data-table data-feed={JSON.stringify(tableData)}></data-table>
        </div>
      </div>
      <hr />
      <div>
        <h3>Form Web Component Demo</h3>
        <div>
          <search-form></search-form>
        </div>
      </div>
      <hr />
      <div>
        <h3>Web Component that uses a Template and Slots</h3>
        <div>
          <templated-wc>
            {/* Needed to add 'template' to JSX.IntrinsicElements in types/types.ts to fix error */}
            <template id="template-wc">
              <slot></slot>
              <slot name="slot2"></slot>
              <slot name="slot3"></slot>
            </template>
            <div slot="slot3">Slotted content3</div>
            <div slot="slot2">Slotted content2</div>
            <div>Slotted content1</div>
          </templated-wc>
        </div>
      </div>
    </div>
  );
}

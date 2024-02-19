import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type FormProcessingProps = {
  search: string;
};

export const handler: Handlers = {
  // @ts-ignore spurious error
  GET(req: Request, ctx: FreshContext<FormProcessingProps>) {
    const url = new URL(req.url);
    // Get form input value
    const query = url.searchParams.get("search") || "";
    // Make sure form does not get spammed
    if (query.length > 250) {
      return new Response("Not allowed", { status: 400 });
    }
    ctx.state = { search: query };
    return ctx.render();
  },
};

export default function FormProcessing(
  props: PageProps<never, FormProcessingProps>,
) {
  const results = props.state.search;
  return (
    <div>
      <h3>This is the form results page</h3>
      <p>
        You searched for: <span style="color:red">{results}</span>
      </p>
    </div>
  );
}

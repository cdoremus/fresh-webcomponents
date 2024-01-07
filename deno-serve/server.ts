import {
  serveDir,
  serveFile,
} from "https://deno.land/std@0.207.0/http/file_server.ts";

const handler = (req: Request) => {
  const pathname = new URL(req.url).pathname;
  console.log("Pathname", pathname);

  if (pathname === "/") {
    return serveFile(req, "./static/index.html");
  }

  if (pathname.startsWith("/")) {
    if (pathname === "/") {
      return serveFile(req, "./static/index.html");
    } else if (pathname.includes(".js") || pathname.includes(".css")) {
      return serveDir(req, {
        fsRoot: "static",
        urlRoot: "",
      });
    }
  }

  return serveFile(req, `./static/404.html`);

  // return new Response("404: File Not Found", {
  //   status: 404,
  // });
};

Deno.serve({ port: 8080 }, handler);

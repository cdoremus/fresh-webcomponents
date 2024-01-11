import {
  serveDir,
  serveFile,
} from "https://deno.land/std@0.207.0/http/file_server.ts";

const handler = (req: Request) => {
  const pathname = new URL(req.url).pathname;
  console.log("Pathname", pathname);

  if (pathname === "/") {
    console.log("PATHNAME: ", "/");
    return serveFile(req, "./static/index.html");
  }

  if (pathname.startsWith("/")) {
    if (pathname === "/") {
      console.log("PATHNAME startsWith: ", "/");
      return serveFile(req, "./static/index.html");
    } else if (pathname.includes(".js") || pathname.includes(".css")) {
      console.log("PATHNAME js or css: ", pathname);
      return serveDir(req, {
        fsRoot: "static",
        urlRoot: "",
      });
    }
  }

  console.log("PATHNAME: ", "/static/404.html");
  return serveFile(req, `./static/404.html`);

  // return new Response("404: File Not Found", {
  //   status: 404,
  // });
};

Deno.serve({ port: 8080 }, handler);

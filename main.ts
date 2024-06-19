import { serveFile } from "jsr:@std/http/file-server";

// move to up
const HTML = await Deno.readFile("./index.html");

Deno.serve(async (req) => {
  const pathname = new URL(req.url).pathname;

  console.log(pathname);
  if (pathname === "/") {
    return new Response(HTML, { status: 200 });
  }

  if (pathname === "/public/main.js") {
    return serveFile(req, "./public/main.js");
  }

  return new Response("", { status: 404 });
});

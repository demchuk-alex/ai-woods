import { serve } from "bun";
import { join } from "path";
import { statSync, existsSync } from "fs";

const PORT = process.env.PORT || 3000;
const STATIC_DIR = "./out";

console.log(`Starting static file server on http://localhost:${PORT}`);

serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    
    // Handle root path
    if (path === "/") {
      path = "/index.html";
    }
    
    // Handle paths without file extension (add .html)
    if (!path.includes(".")) {
      path = path.endsWith("/") ? `${path}index.html` : `${path}.html`;
    }
    
    const filePath = join(STATIC_DIR, path);
    
    // Check if file exists
    if (!existsSync(filePath)) {
      return new Response("Not Found", { status: 404 });
    }
    
    // Serve the file
    const file = Bun.file(filePath);
    return new Response(file);
  },
});

console.log(`Serving static files from ${STATIC_DIR}`);
console.log(`Visit http://localhost:${PORT} to view your site`); 
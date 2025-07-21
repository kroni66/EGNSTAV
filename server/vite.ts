import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");
  const indexPath = path.resolve(distPath, "index.html");

  if (!fs.existsSync(distPath)) {
    const errorMessage = `Production build directory not found: ${distPath}. Make sure to run 'npm run build'.`;
    log(errorMessage, "server-static");
    // Throwing an error here will stop the server from starting, which is appropriate
    // if the main static asset directory is missing.
    throw new Error(errorMessage);
  }

  if (!fs.existsSync(indexPath)) {
    // Log this, but don't throw. The app might still function for API routes,
    // or this might be an expected state in some scenarios.
    // The catch-all route below will attempt to serve it, and fail, leading to a 404
    // if the error handler is set up correctly.
    log(`Warning: Main 'index.html' not found at ${indexPath}. SPA routing will likely fail.`, "server-static");
  }

  app.use(express.static(distPath, {
    // Ensure that if index.html is missing, express.static doesn't error out in a way
    // that bypasses our later catch-all or error handlers.
    // Default behavior is fine here, as it will call next() if index.html is not found for a directory request.
  }));

  // Fall through to index.html for SPA routing if no static file matched above
  app.use("*", (req, res, next) => {
    // Check again for index.html here, as it might have been created after server start (unlikely for prod builds)
    // Or to ensure we handle its absence gracefully.
    if (!fs.existsSync(indexPath)) {
      const spaMessage = `index.html not found for SPA fallback (path: ${req.originalUrl}). Check build.`;
      log(spaMessage, "server-static");
      // Pass an error to the next error handler, which should result in a 404 or 500
      const err = new Error(spaMessage) as any;
      err.status = 404; // Indicate it's a "Not Found" type of error
      return next(err);
    }
    res.sendFile(indexPath, (err) => {
      if (err) {
        log(`Error sending file ${indexPath}: ${err.message}`, "server-static");
        next(err); // Pass error to the main error handler in server/index.ts
      }
    });
  });
}

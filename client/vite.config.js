import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Proxy requests to /graphql to your GraphQL server.
      "/graphql": {
        // The GraphQL server is running on port 3001.
        target: process.env.VITE_GRAPHQL_ENDPOINT || "http://localhost:3001",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/graphql/, "/graphql"),
      },
    },
  },
});
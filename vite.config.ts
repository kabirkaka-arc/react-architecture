import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(new URL(".", import.meta.url).pathname, "src"),
      "@components": path.resolve(
        new URL(".", import.meta.url).pathname,
        "src/shared/components"
      ),
      "@utils": path.resolve(
        new URL(".", import.meta.url).pathname,
        "src/utils"
      ),
      // Add other aliases as necessary
    },
  },
});

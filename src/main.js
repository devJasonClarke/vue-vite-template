import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes }
);

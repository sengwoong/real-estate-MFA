import { injectFactory } from "@real-estate/shell-router";
import { routes } from "./routes";

const inject = injectFactory({
  routes,
});

export default inject;
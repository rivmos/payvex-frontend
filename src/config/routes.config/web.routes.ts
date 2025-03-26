import { Route } from "@/@types/routes";
import { lazy } from "react";

const webRoutes: Route[] = [
  {
    key: "web.home",
    path: "/",
    component: lazy(() => import("@/views/web/Home")),
  },
];

export default webRoutes;

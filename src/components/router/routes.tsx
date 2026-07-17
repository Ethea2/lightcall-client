import { lazy } from "solid-js";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../../pages/homepage/Homepage.tsx")),
  },
  {
    path: "/room",
    component: lazy(() => import("../../pages/roompage/Roompage.tsx")),
  },
];

export default routes

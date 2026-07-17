/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import routes from "./components/router/routes";
import Layout from "./components/layout/Layout";

const root = document.getElementById("root")

render(() => <Router root={Layout}>{routes}</Router>, root as HTMLElement);

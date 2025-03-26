import type { JSX, LazyExoticComponent } from "react";

export type Route = {
  key: string;
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
};

export type Routes = Route[];

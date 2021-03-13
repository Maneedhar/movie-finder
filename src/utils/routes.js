import Home from "../Home";
import Movie from "../Movie";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/:name",
    exact: true,
    component: Movie,
  },
];

export default routes;

import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ScrollTop } from "../components/layout/ScrollTop";
import { Dashboard } from "../pages/Dashboard";
import { AskPin } from "../security/AskPin";

export const Route_Items = [
  { name: "Home", link: "/", element: <Dashboard /> },
  { name: "Home", link: "/About", element: <Home /> },
  { name: "Dashboard", link: "/*", element: <Home /> },
];

export const ProjectRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <AskPin />
        <Routes>
          {Route_Items.map((item, index) => {
            return (
              <Route key={index} path={item.link} element={item.element} />
            );
          })}
        </Routes>

        <ScrollTop col={"green"} />
      </BrowserRouter>
    </div>
  );
};

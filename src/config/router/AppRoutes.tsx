import { HashRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../constants/protectedRoutes";
import { appRoutes } from "./routes";
import NotFound from "../../shared/components/NotFound";
import NavBar from "../../shared/components/Navbar/Navbar";

function AppRoutes() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        {appRoutes?.map(
          ({
            route,
            module,
            isParent,
            privacyType,
            isPermitted,
            element: Element,
          }) => (
            <Route
              key={route}
              path={`${route}${isParent ? "/*" : ""}`}
              element={
                <ProtectedRoute
                  privacyType={privacyType}
                  isPermitted={isPermitted}
                  module={module}
                >
                  <Element />
                </ProtectedRoute>
              }
            />
          )
        )}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;

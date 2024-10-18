import { checkModulePermission } from "../../../config/constants/checkModulesPermissions";
import DashboardContainer from "../components/container/DashboardContainer";

interface ModuleRouteConfig {
  route: string;
  module: string;
  subModule: string;
  privacyType: "public" | "private";
  isPermitted: (module: string, subModule?: string) => boolean; // Function to check permissions
  element: any;
}

const DASHBOARD_CONSTANTS = {
  MODULE: "dashboard",
  SUB_MODULES: {
    DASHBOARD: "dashboard",
  },
  ROUTES: {
    DASHBOARD: "/",
  },
};

export const dashboardRoutes: ModuleRouteConfig[] = [
  {
    route: DASHBOARD_CONSTANTS.ROUTES.DASHBOARD,
    module: DASHBOARD_CONSTANTS.MODULE,
    subModule: DASHBOARD_CONSTANTS.SUB_MODULES.DASHBOARD,
    privacyType: "private",
    isPermitted: (module, subModule) =>
      checkModulePermission(module, subModule),
    element: DashboardContainer,
  },
];

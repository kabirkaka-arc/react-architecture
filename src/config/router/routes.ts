import Dashboard from '../../features/dashboard';
import { checkModulePermission } from '../constants/checkModulesPermissions';

interface appRouteConfig {
  route: string;
  module: string;
  privacyType: 'public' | 'private';
  isPermitted: (module: string) => boolean; // Function to check permissions
  isParent: boolean; // For top-level routes
  element: any;
}

export const APP_CONSTANTS = {
  MODULES: {
    DASHBOARD: 'dashboard',
  },
  ROUTES: {
    DASHBOARD: '/',
  },
};

export const appRoutes: appRouteConfig[] = [
  {
    route: APP_CONSTANTS.ROUTES.DASHBOARD,
    module: APP_CONSTANTS.MODULES.DASHBOARD,
    privacyType: 'public',
    isPermitted: (module) => checkModulePermission(module), // Custom logic for permissions
    isParent: false,
    element: Dashboard,
  },
];

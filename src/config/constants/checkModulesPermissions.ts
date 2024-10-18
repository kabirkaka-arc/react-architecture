export const checkModulePermission = (
  module: string,
  subModule?: string
): boolean => {
  const permittedAppModules: string[] = ['dashboard'];

  const permittedSubModules: Record<string, string[]> = {
    dashboard: ['dashboard'],
  };

  return !subModule
    ? permittedAppModules.includes(module)
    : subModule
      ? permittedSubModules[module].includes(subModule)
      : false;
};

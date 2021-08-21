//Plan creation form - General page
export const planNameInput = '#planName';
export const selectSourceCluster = '#sourceCluster';
export const selectTargetCluster = '#targetCluster';
export const selectRepo = '#selectedStorage';

//Plan creation form - Namespaces page
export const searchInput = '#name-input';
export const searchButton = `[aria-label="search button for search input"]`;

//Plan creation form - copy options page
export const verifyCopyCheckbox = '.pf-c-check__input';

//Plan creation form - Migration options page
export const directPvMigrationCheckbox = '#indirectVolumeMigration';

//Plan list page
export const kebab = '.pf-c-dropdown__toggle.pf-m-plain';
export const kebabDropDownItem = 'li > a.pf-c-dropdown__menu-item';
export enum dataLabel {
  name = '[data-label=Name]',
  sourceProvider = '[data-label="Source provider"]',
  targetProvider = '[data-label="Target provider"]',
  vms = '[data-label=VMs]',
  status = '[data-label="Last state"]',
}

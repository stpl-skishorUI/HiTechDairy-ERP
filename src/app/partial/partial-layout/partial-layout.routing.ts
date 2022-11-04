import { RouterModule, Routes } from '@angular/router';

export const PartialLayoutRoutes: Routes = [
  // Asset Management
  { path: 'asset-dashboard', loadChildren: () => import('../../partial/asset-management/asset-dashboard/asset-dashboard.module').then(m => m.AssetDashboardModule) },
  { path: 'group-master', loadChildren: () => import('../../partial/asset-management/item-master/group-master/group-master.module').then(m => m.GroupMasterModule) },
  { path: 'category-master', loadChildren: () => import('../../partial/asset-management/item-master/category-master/category-master.module').then(m => m.CategoryMasterModule) },
  { path: 'parameter-master', loadChildren: () => import('../../partial/asset-management/item-master/parameter-master/parameter-master.module').then(m => m.ParameterMasterModule) },
  { path: 'store-master', loadChildren: () => import('../../partial/asset-management/store-vendor-master/store-master/store-master.module').then(m => m.StoreMasterModule) },
  { path: 'vendor-master', loadChildren: () => import('../../partial/asset-management/store-vendor-master/vendor-master/vendor-master.module').then(m => m.VendorMasterModule) },
  { path: 'item-registration', loadChildren: () => import('../../partial/asset-management/manage-items/item-registration/item-registration.module').then(m => m.ItemRegistrationModule) },
  { path: 'item-issue-return', loadChildren: () => import('../../partial/asset-management/manage-items/item-issue-return/item-issue-return.module').then(m => m.ItemIssueReturnModule) },
  { path: 'item-transfer', loadChildren: () => import('../../partial/asset-management/manage-items/item-transfer/item-transfer.module').then(m => m.ItemTransferModule) },
  { path: 'item-repair-issue-return', loadChildren: () => import('../../partial/asset-management/manage-items/item-repair-issue-return/item-repair-issue-return.module').then(m => m.ItemRepairIssueReturnModule) },
  { path: 'item-scrap-donated', loadChildren: () => import('../../partial/asset-management/manage-items/item-scrap-donated/item-scrap-donated.module').then(m => m.ItemScrapDonatedModule) },

  // HRMS
  { path: 'organization-register', loadChildren: () => import('../../partial/HRMS/masters/organization-register/organization-register.module').then(m => m.OrganizationRegisterModule) },
  { path: 'company-register', loadChildren: () => import('../../partial/HRMS/masters/company-register/company-register.module').then(m => m.CompanyRegisterModule) },
  { path: 'branch-registration', loadChildren: () => import('../../partial/HRMS/masters/branch-registration/branch-registration.module').then(m => m.BranchRegistrationModule) },
  { path: 'department-registration', loadChildren: () => import('../../partial/HRMS/masters/department-registration/department-registration.module').then(m => m.DepartmentRegistrationModule) },
  { path: 'designation-register', loadChildren: () => import('../../partial/HRMS/masters/designation-register/designation-register.module').then(m => m.DesignationRegisterModule) },
  { path: 'bank-register', loadChildren: () => import('../../partial/HRMS/masters/bank-register/bank-register.module').then(m => m.BankRegisterModule) },  

  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), data: { title: 'Dashboard' } },
];

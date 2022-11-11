import { RouterModule, Routes } from '@angular/router';

export const PartialLayoutRoutes: Routes = [
  // Asset Management //////////////////////////////////////// 
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

  // HRMS //////////////////////////////////////// 
  { path: 'hrms-dashboard', loadChildren: () => import('../../partial/HRMS/hrms-dashboard/hrms-dashboard.module').then(m => m.HrmsDashboardModule) },
  { path: 'organization-register', loadChildren: () => import('../../partial/HRMS/masters/organization-register/organization-register.module').then(m => m.OrganizationRegisterModule) },
  { path: 'company-register', loadChildren: () => import('../../partial/HRMS/masters/company-register/company-register.module').then(m => m.CompanyRegisterModule) },
  { path: 'branch-registration', loadChildren: () => import('../../partial/HRMS/masters/branch-registration/branch-registration.module').then(m => m.BranchRegistrationModule) },
  { path: 'department-registration', loadChildren: () => import('../../partial/HRMS/masters/department-registration/department-registration.module').then(m => m.DepartmentRegistrationModule) },
  { path: 'designation-register', loadChildren: () => import('../../partial/HRMS/masters/designation-register/designation-register.module').then(m => m.DesignationRegisterModule) },
  { path: 'bank-register', loadChildren: () => import('../../partial/HRMS/masters/bank-register/bank-register.module').then(m => m.BankRegisterModule) },


  // AMCU //////////////////////////////////////// 
  // Master
  { path: 'amcu-dashboard', loadChildren: () => import('../../partial/auto-milk-collection-unit/amcu-dashboard/amcu-dashboard.module').then(m => m.AmcuDashboardModule) },
  { path: 'customer-registration', loadChildren: () => import('../../partial/auto-milk-collection-unit/masters/customer-registration/customer-registration.module').then(m => m.CustomerRegistrationModule) },
  { path: 'material-registration', loadChildren: () => import('../../partial/auto-milk-collection-unit/masters/material-registration/material-registration.module').then(m => m.MaterialRegistrationModule) },
  { path: 'employee-registration', loadChildren: () => import('../../partial/auto-milk-collection-unit/masters/employee-registration/employee-registration.module').then(m => m.EmployeeRegistrationModule) },
  { path: 'route-registration', loadChildren: () => import('../../partial/auto-milk-collection-unit/masters/route-registration/route-registration.module').then(m => m.RouteRegistrationModule) },
  { path: 'village-registration', loadChildren: () => import('../../partial/auto-milk-collection-unit/masters/village-registration/village-registration.module').then(m => m.VillageRegistrationModule) },
  { path: 'company-account-registration', loadChildren: () => import('../../partial/auto-milk-collection-unit/masters/company-account-registration/company-account-registration.module').then(m => m.CompanyAccountRegistrationModule) },
  { path: 'route-assignment', loadChildren: () => import('../../partial/auto-milk-collection-unit/masters/route-registration/route-assignment/route-assignment.module').then(m => m.RouteAssignmentModule) },
  // Rate Card 
  { path: 'rate-card', loadChildren: () => import('../../partial/auto-milk-collection-unit/rate-card-master/rate-card/rate-card.module').then(m => m.RateCardModule) },
  { path: 'rate-chart-registration', loadChildren: () => import('../../partial/auto-milk-collection-unit/rate-card-master/rate-chart-registration/rate-chart-registration.module').then(m => m.RateChartRegistrationModule) },
  { path: 'default-ratecard-assignment', loadChildren: () => import('../../partial/auto-milk-collection-unit/rate-card-master/default-ratecard-assignment/default-ratecard-assignment.module').then(m => m.DefaultRatecardAssignmentModule) },
  { path: 'additions-deductions-type', loadChildren: () => import('../../partial/auto-milk-collection-unit/rate-card-master/additions-deductions-type/additions-deductions-type.module').then(m => m.AdditionsDeductionsTypeModule) },
  { path: 'additions-deductions-charges', loadChildren: () => import('../../partial/auto-milk-collection-unit/rate-card-master/additions-deductions-charges/additions-deductions-charges.module').then(m => m.AdditionsDeductionsChargesModule) },
  // Milk Collection
  { path: 'daily-transaction', loadChildren: () => import('../../partial/auto-milk-collection-unit/milk-collection/farmer-milk-collection/daily-transaction/daily-transaction.module').then(m => m.DailyTransactionModule) },
  { path: 'milk-collection-list', loadChildren: () => import('../../partial/auto-milk-collection-unit/milk-collection/farmer-milk-collection/milk-collection-list/milk-collection-list.module').then(m => m.MilkCollectionListModule) },
  { path: 'doc-milk-collection', loadChildren: () => import('../../partial/auto-milk-collection-unit/milk-collection/doc-milk-collection/doc-milk-collection.module').then(m => m.DocMilkCollectionModule) },
  // Milk Billing
  { path: 'milk-purchase-bill', loadChildren: () => import('../../partial/auto-milk-collection-unit/milk-billing/milk-purchase-bill/milk-purchase-bill.module').then(m => m.MilkPurchaseBillModule) },
  { path: 'bulk-bill-calculation', loadChildren: () => import('../../partial/auto-milk-collection-unit/milk-billing/bulk-bill-calculation/bulk-bill-calculation.module').then(m => m.BulkBillCalculationModule) },
  { path: 'delete-all-bills', loadChildren: () => import('../../partial/auto-milk-collection-unit/milk-billing/delete-all-bills/delete-all-bills.module').then(m => m.DeleteAllBillsModule) },
  // Inventory
  { path: 'purchase-order', loadChildren: () => import('../../partial/auto-milk-collection-unit/inventory/purchase-order/purchase-order.module').then(m => m.PurchaseOrderModule) },
  { path: 'goods-receipt-number', loadChildren: () => import('../../partial/auto-milk-collection-unit/inventory/goods-receipt-number/goods-receipt-number.module').then(m => m.GoodsReceiptNumberModule) },
  { path: 'purchase-invoice', loadChildren: () => import('../../partial/auto-milk-collection-unit/inventory/purchase-invoice/purchase-invoice.module').then(m => m.PurchaseInvoiceModule) },
  { path: 'sales-invoice', loadChildren: () => import('../../partial/auto-milk-collection-unit/inventory/sales-invoice/sales-invoice.module').then(m => m.SalesInvoiceModule) },
  { path: 'debit-note', loadChildren: () => import('../../partial/auto-milk-collection-unit/inventory/debit-note/debit-note.module').then(m => m.DebitNoteModule) },
  { path: 'credit-note', loadChildren: () => import('../../partial/auto-milk-collection-unit/inventory/credit-note/credit-note.module').then(m => m.CreditNoteModule) },
  { path: 'stock-transfer', loadChildren: () => import('../../partial/auto-milk-collection-unit/inventory/stock-transfer/stock-transfer.module').then(m => m.StockTransferModule) },
  // Account
  { path: 'opening-balance', loadChildren: () => import('../../partial/auto-milk-collection-unit/account/opening-balance/opening-balance.module').then(m => m.OpeningBalanceModule) },
  { path: 'customerwise-cutting', loadChildren: () => import('../../partial/auto-milk-collection-unit/account/customerwise-cutting/customerwise-cutting.module').then(m => m.CustomerwiseCuttingModule) },
  { path: 'partywise-material-rate', loadChildren: () => import('../../partial/auto-milk-collection-unit/account/partywise-material-rate/partywise-material-rate.module').then(m => m.PartywiseMaterialRateModule) },
  { path: 'group-payment', loadChildren: () => import('../../partial/auto-milk-collection-unit/account/group-payment/group-payment.module').then(m => m.GroupPaymentModule) },
  { path: 'account-management', loadChildren: () => import('../../partial/auto-milk-collection-unit/account/account-management/account-management.module').then(m => m.AccountManagementModule) },
  { path: 'bonus-payment', loadChildren: () => import('../../partial/auto-milk-collection-unit/account/bonus-payment/bonus-payment.module').then(m => m.BonusPaymentModule) },
  // Dairy Production
  { path: 'milk-bag-production', loadChildren: () => import('../../partial/auto-milk-collection-unit/dairy-production/milk-bag-production/milk-bag-production.module').then(m => m.MilkBagProductionModule) },
  { path: 'batch-template', loadChildren: () => import('../../partial/auto-milk-collection-unit/dairy-production/byproducts/batch-template/batch-template.module').then(m => m.BatchTemplateModule) },
  { path: 'batch-process', loadChildren: () => import('../../partial/auto-milk-collection-unit/dairy-production/byproducts/batch-process/batch-process.module').then(m => m.BatchProcessModule) },
  { path: 'batch-register', loadChildren: () => import('../../partial/auto-milk-collection-unit/dairy-production/byproducts/batch-register/batch-register.module').then(m => m.BatchRegisterModule) },


  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), data: { title: 'Dashboard' } },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule),data: { title: ' Home' } },
  { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule), data: { title: 'Login' }, },
  { path: 'about-us', loadChildren: () => import('../../web/about-us/about-us.module').then(m => m.AboutUsModule), data: { title: 'About Us' }, },
  { path: 'products', loadChildren: () => import('../../web/products/products.module').then(m => m.ProductsModule), data: { title: 'Products' }, },
  { path: 'services', loadChildren: () => import('../../web/services/services.module').then(m => m.ServicesModule), data: { title: 'Services' }, },
  { path: 'contact-us', loadChildren: () => import('../../web/contact-us/contact-us.module').then(m => m.ContactUsModule), data: { title: 'Contact Us' }, },
  // products
  { path: 'automatic-milk-collection-unit', loadChildren: () => import('../../web/products/automatic-milk-collection-unit/automatic-milk-collection-unit.module').then(m => m.AutomaticMilkCollectionUnitModule) },
  { path: 'daily-supervisor', loadChildren: () => import('../../web/products/daily-supervisor/daily-supervisor.module').then(m => m.DailySupervisorModule) },
  { path: 'route-manager', loadChildren: () => import('../../web/products/route-manager/route-manager.module').then(m => m.RouteManagerModule) },
  { path: 'e-anifarm-mobile-app', loadChildren: () => import('../../web/products/e-anifarm-mobile-app/e-anifarm-mobile-app.module').then(m => m.EAnifarmMobileAppModule) },
  { path: 'e-anifarm-desktop', loadChildren: () => import('../../web/products/e-anifarm-desktop/e-anifarm-desktop.module').then(m => m.EAnifarmDesktopModule) },
  { path: 'e-vet-mobile', loadChildren: () => import('../../web/products/e-vet-mobile/e-vet-mobile.module').then(m => m.EVetMobileModule) },
  { path: 'procurement-web-panel', loadChildren: () => import('../../web/products/procurement-web-panel/procurement-web-panel.module').then(m => m.ProcurementWebPanelModule) },
  { path: 'e-processor', loadChildren: () => import('../../web/products/e-processor/e-processor.module').then(m => m.EProcessorModule) },
  { path: 'pos', loadChildren: () => import('../../web/products/pos/pos.module').then(m => m.PosModule) },
  // services
  { path: 'production', loadChildren: () => import('../../web/services/production/production.module').then(m => m.ProductionModule) },
  { path: 'asset-management', loadChildren: () => import('../../web/services/asset-management/asset-management.module').then(m => m.AssetManagementModule) },
  { path: 'inventory-management', loadChildren: () => import('../../web/services/inventory-management/inventory-management.module').then(m => m.InventoryManagementModule) },
  { path: 'sales-distribution', loadChildren: () => import('../../web/services/sales-distribution/sales-distribution.module').then(m => m.SalesDistributionModule) },
  { path: 'hrms', loadChildren: () => import('../../web/services/hrms/hrms.module').then(m => m.HrmsModule) },
  { path: 'finance-accounting', loadChildren: () => import('../../web/services/finance-accounting/finance-accounting.module').then(m => m.FinanceAccountingModule) },
  { path: 'field-force-tracking', loadChildren: () => import('../../web/services/field-force-tracking/field-force-tracking.module').then(m => m.FieldForceTrackingModule) },
  { path: 'vehicle-tracking-system', loadChildren: () => import('../../web/services/vehicle-tracking-system/vehicle-tracking-system.module').then(m => m.VehicleTrackingSystemModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLayoutRoutingModule { }

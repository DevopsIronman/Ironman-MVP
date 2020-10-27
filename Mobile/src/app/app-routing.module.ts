import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  },
  
  {
    path: 'privacy-policy',
    loadChildren: () => import('./companyDetails/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./companyDetails/contact-us/contact-us.module').then( m => m.ContactUSPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./companyDetails/about-us/about-us.module').then( m => m.AboutUSPageModule)
  },
  {
    path: 'service-due',
    loadChildren: () => import('./customerServices/service-due/service-due.module').then( m => m.ServiceDuePageModule)
  },
  {
    path: 'service-history',
    loadChildren: () => import('./customerServices/service-history/service-history.module').then( m => m.ServiceHistoryPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'customer-enquiry',
    loadChildren: () => import('./customers/customer-enquiry/customer-enquiry.module').then( m => m.CustomerEnquiryPageModule)
  },
  {
    path: 'existing-customers',
    loadChildren: () => import('./customers/existing-customers/existing-customers.module').then( m => m.ExistingCustomersPageModule)
  },
  // {
  //   path: 'existing-lead',
  //   loadChildren: () => import('./lead/existing-lead/existing-lead.module').then( m => m.ExistingLeadPageModule)
  // },
  // {
  //   path: 'create-lead',
  //   loadChildren: () => import('./lead/create-lead/create-lead.module').then( m => m.CreateLeadPageModule)
  // },
  {
    path: 'product-purchased',
    loadChildren: () => import('./product/product-purchased/product-purchased.module').then( m => m.ProductPurchasedPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'new-lead',
    loadChildren: () => import('./newLead/new-lead/new-lead.module').then( m => m.NewLeadPageModule)
  },
  {
    path: 'existing-lead',
    loadChildren: () => import('./newLead/existing-lead/existing-lead.module').then( m => m.ExistingLeadPageModule)
  },
  {
    path: 'convert-lead',
    loadChildren: () => import('./newLead/convert-lead/convert-lead.module').then( m => m.ConvertLeadPageModule)
  },
  {
    path: 'create-customer',
    loadChildren: () => import('./newLead/create-customer/create-customer.module').then( m => m.CreateCustomerPageModule)
  },
  {
    path: 'customerdetails',
    loadChildren: () => import('./customers/customerdetails/customerdetails.module').then( m => m.CustomerdetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'call-back-details',
    loadChildren: () => import('./call-back-details/call-back-details.module').then( m => m.CallBackDetailsPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'forgotpin', loadChildren: './forgotpin/forgotpin.module#ForgotpinPageModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
  { path: 'chart', loadChildren: './chart/chart.module#ChartPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'market', loadChildren: './market/market.module#MarketPageModule' },
  { path: 'jewellerslist', loadChildren: './jewellerslist/jewellerslist.module#JewellerslistPageModule' },
  { path: 'kyc-page', loadChildren: './kyc-page/kyc-page.module#KycPagePageModule' },
  { path: 'pin', loadChildren: './pin/pin.module#PinPageModule' },
  { path: 'otp', loadChildren: './otp/otp.module#OtpPageModule' },
  { path: 'congratulation', loadChildren: './congratulation/congratulation.module#CongratulationPageModule' },
  { path: 'confirm-pin', loadChildren: './confirm-pin/confirm-pin.module#ConfirmPinPageModule' },
  { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionPageModule' },
  { path: 'jw', loadChildren: './jw/jw.module#JwPageModule' },
  { path: 'js', loadChildren: './js/js.module#JsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

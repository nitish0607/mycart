import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import("./cart/cart.module").then(m => m.CartModule)
  },
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },
  {
    path: '',
    loadChildren: () => import("./product/product.module").then(m => m.ProductModule)

  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

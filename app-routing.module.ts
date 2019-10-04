import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { ElecComponent } from './elec/elec.component';
import { LoginComponent } from './login/login.component';
import { PopComponent } from './pop/pop.component';
import { CartComponent } from './cart/cart.component';
import { OfficeComponent } from './office/office.component';
const routes: Routes = [
  {path:'front',component:FrontComponent},
  {path:'elec',component:ElecComponent},
  {path:'login',component:LoginComponent},
  {path:'popup',component:PopComponent},
  {path:'cart',component:CartComponent},
  {path:'ofc',component:OfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

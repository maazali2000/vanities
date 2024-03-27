import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { AdminComponent } from './components/admin/admin.component';

const HomeRoutes: Routes = [
  { path: 'product-description', component: ProductDescriptionComponent },
  { path: 'van/admin/credentials', component: AdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

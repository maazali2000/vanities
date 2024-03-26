import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VanitiesFurnitureComponent } from './components/vanities-furniture/vanities-furniture.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vanities-furniture', component: VanitiesFurnitureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

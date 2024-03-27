import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PvcVanitiesComponent } from './components/pvc-vanities/pvc-vanities.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { VanitiesFurnitureComponent } from './components/vanities-furniture/vanities-furniture.component';
import { MyCommonModule } from '../common/common.module';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FieldsetModule } from 'primeng/fieldset';
import { HomeRoutingModule } from './home-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
@NgModule({
  declarations: [
    HomeComponent,
    PvcVanitiesComponent,
    ProductDescriptionComponent,
    VanitiesFurnitureComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MyCommonModule,
    CardModule,
    ButtonModule,
    MatButtonModule,
    DropdownModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    RecaptchaModule, RecaptchaFormsModule ,
    FieldsetModule,
    PanelModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

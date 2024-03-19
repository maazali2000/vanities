import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyCommonModule } from './common/common.module';
import { VanitiesFurnitureComponent } from './components/vanities-furniture/vanities-furniture.component';
import { CardModule } from 'primeng/card';
import { PvcVanitiesComponent } from './components/pvc-vanities/pvc-vanities.component';
import { DropdownModule } from 'primeng/dropdown';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VanitiesFurnitureComponent,
    PvcVanitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCommonModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}

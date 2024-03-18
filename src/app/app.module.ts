import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FieldsetModule } from 'primeng/fieldset';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyCommonModule } from './common/common.module';
import { VanitiesFurnitureComponent } from './components/vanities-furniture/vanities-furniture.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VanitiesFurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCommonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

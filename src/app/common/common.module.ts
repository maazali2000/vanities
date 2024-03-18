import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [HeaderComponent],
})
export class MyCommonModule { }

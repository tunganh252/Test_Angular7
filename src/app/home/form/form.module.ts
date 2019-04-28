import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { FormRountingModule } from './form-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, DangNhapComponent, DangKyComponent],
  imports: [
    CommonModule,
    FormRountingModule,
    FormsModule
  ]
})
export class FormModule { }

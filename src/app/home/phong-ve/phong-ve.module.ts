import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhongVeComponent } from './phong-ve.component';
import { PhongVeRoutingModule } from './phong-ve-rounting.modules';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [PhongVeComponent, DanhSachGheComponent, ItemGheComponent],
  imports: [
    CommonModule,
    PhongVeRoutingModule
  ]
})
export class PhongVeModule { }

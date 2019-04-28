import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ListPhimComponent } from './list-phim/list-phim.component';

@NgModule({
  declarations: [DanhSachPhimComponent, ItemPhimComponent, ChiTietPhimComponent, ListPhimComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule
  ]
})
export class DanhSachPhimModule { }

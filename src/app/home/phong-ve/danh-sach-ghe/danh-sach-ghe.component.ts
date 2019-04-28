import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { QuanLyPhimServiceService } from 'src/app/_core/services/quan-ly-phim-service.service';
import { ActivatedRoute } from '@angular/router';
import { ItemGheComponent } from '../item-ghe/item-ghe.component';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  idMaLichChieu: any;
  danhSachGhe: Array<any>;
  danhSachGheDangChon = [];

  @ViewChildren(ItemGheComponent) tagListItemGhe: QueryList<ItemGheComponent>;

  constructor(
    private quanLyPhimService: QuanLyPhimServiceService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.getParams();
    this.getDanhSachGhe();
  }

  getParams() {
    this.idMaLichChieu = this.activatedRoute.snapshot.paramMap.get('id');
  }
  getDanhSachGhe() {
    // this.quanLyPhimService.getDanhSachGhe(this.idMaLichChieu).subscribe((result: any) => {
    //   this.danhSachGhe = result.DanhSachGhe;
    //   console.log(this.danhSachGhe);

    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.idMaLichChieu}`
    this.dataService.get(uri).subscribe((result: any) => {
      this.danhSachGhe = result.DanhSachGhe;
      console.log(this.danhSachGhe);
    })
  }
  /////
  datGhe(objGhe) {
    console.log(objGhe);
    if (objGhe.dangChon) {
      this.danhSachGheDangChon.push(objGhe.ghe);
    } else {
      this.danhSachGheDangChon.map((item, index) => {
        if (item.TenGhe === objGhe.ghe.TenGhe) {
          this.danhSachGheDangChon.splice(index, 1);
        }
      });
    }
  }
  huy(index, gheHuy) {
    this.danhSachGheDangChon.splice(index, 1);
    this.tagListItemGhe.map(item => {
      if (item.ghe.TenGhe === gheHuy.TenGhe) {
        item.dangChon = false;
      }
    })
  }
}
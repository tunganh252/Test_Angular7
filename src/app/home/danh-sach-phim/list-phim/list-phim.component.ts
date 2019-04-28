import { Component, OnInit } from '@angular/core';
import { QuanLyPhimServiceService } from 'src/app/_core/services/quan-ly-phim-service.service';
import { PhimService } from 'src/app/_core/services/phim.service';
import { DataService } from './../../../_core/services/data.service'

@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.scss']
})
export class ListPhimComponent implements OnInit {
  danhSachPhim = [];


  constructor(private phimService: PhimService, private quanLyPhimService: QuanLyPhimServiceService, private dataService: DataService) { }

  ngOnInit() {

    this.getDanhSachPhim();

  }

  getDanhSachPhim() {
    // // service tạo tay
    // this.danhSachPhim = this.phimService.getDanhSachPhim();
    // console.log(this.danhSachPhim);

    // this.quanLyPhimService.getDanhSachPhim().subscribe((result: any) => {
    //   console.log(result);
    //   this.danhSachPhim = result;
    // })

    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP06`;
    this.dataService.get(uri).subscribe((result: any) => {
      console.log(result);
      this.danhSachPhim = result;

    })
  }

}

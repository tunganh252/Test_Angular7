import { Component, OnInit } from '@angular/core';
import { QuanLyPhimServiceService } from 'src/app/_core/services/quan-ly-phim-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.scss']
})
export class PhongVeComponent implements OnInit {

  // idMaLichChieu: any;
  // danhSachGhe: any;

  // constructor(private quanLyPhimService: QuanLyPhimServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.getParams();
    // this.getDanhSachGhe();
  }

  // getParams() {
  //   this.idMaLichChieu = this.activatedRoute.snapshot.paramMap.get('id');
  // }
  // getDanhSachGhe() {
  //   this.quanLyPhimService.getDanhSachGhe(this.idMaLichChieu).subscribe((result: any) => {
  //     this.danhSachGhe = result.DanhSachGhe;
  //     console.log(this.danhSachGhe);

  //   })

  // }
}

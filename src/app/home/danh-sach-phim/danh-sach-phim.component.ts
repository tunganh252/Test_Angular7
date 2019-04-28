import { Component, OnInit } from '@angular/core';
import { PhimService } from './../../_core/services/phim.service'
import { QuanLyPhimServiceService } from './../../_core/services/quan-ly-phim-service.service'
@Component({
	selector: 'app-danh-sach-phim',
	templateUrl: './danh-sach-phim.component.html',
	styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {

	danhSachPhim = [];


	constructor(private phimService: PhimService, private quanLyPhimService: QuanLyPhimServiceService) { }

	ngOnInit() {

		this.getDanhSachPhim();

	}

	getDanhSachPhim() {
		// // service tạo tay
		// this.danhSachPhim = this.phimService.getDanhSachPhim();
		// console.log(this.danhSachPhim);

		this.quanLyPhimService.getDanhSachPhim().subscribe((result: any) => {
			console.log(result);
			this.danhSachPhim = result;
		})
	}

}

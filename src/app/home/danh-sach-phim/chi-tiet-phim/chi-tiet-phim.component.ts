import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyPhimServiceService } from 'src/app/_core/services/quan-ly-phim-service.service';
import { Phim } from './../../../_core/models/phim';
import { Router } from '@angular/router';
import { DataService } from './../../../_core/services/data.service';

@Component({selector: 'app-chi-tiet-phim', templateUrl: './chi-tiet-phim.component.html', styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {idPhim: any; tenPhimParams: any; movie: Phim;

	constructor(
		private activatedRoute: ActivatedRoute,
		private quanLyPhimService: QuanLyPhimServiceService, private router: Router,
		private dataService: DataService) { }

	ngOnInit() {
		this.getParams();
		this.getChiTietPhim();
	}

	getParams() {
		this.idPhim = this.activatedRoute.snapshot.paramMap.get('id')
		// Truyền theo tham số truyền từ routing danh-sach-phim

		this.activatedRoute.queryParams.subscribe((params: any) => {
			this.tenPhimParams = params.tenPhim;
		})

		// console.log(this.idPhim, this.tenPhimParams);
	}

	getChiTietPhim() {
		// this.quanLyPhimService.getChiTietPhim(this.idPhim).subscribe((result: any) => {
		// 	console.log(result);
		// 	this.movie = result;

		// })
		const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.idPhim}`;
		this.dataService.get(uri).subscribe((result: any) => {
			console.log(result);
			this.movie = result;
		})
	}

	muaVe(maLichChieu) {
		// Đưa link trang phòng vé
		this.router.navigate(["./home/phong-ve", maLichChieu]);

	}

}

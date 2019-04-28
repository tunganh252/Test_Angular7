import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PhimService {
	danhSachPhim = [
		{ maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh: "assets/images/minions.jpg" },
		{ maPhim: 2, tenPhim: "Home", gia: "55000", hinhAnh: "assets/images/home.jpg" },
		{ maPhim: 3, tenPhim: "Harvie", gia: "50000", hinhAnh: "assets/images/harvie.jpg" },
		{ maPhim: 4, tenPhim: "Insideout", gia: "70000", hinhAnh: "assets/images/insideout.jpg" },
	];

	constructor() { }

	getDanhSachPhim() {
		return this.danhSachPhim;
	}


}

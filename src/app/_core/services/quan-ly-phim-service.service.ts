import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class QuanLyPhimServiceService {

	constructor(private http: HttpClient) { }

	getDanhSachPhim(): Observable<any> {
		const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06`;
		let observable = this.http.get(url).pipe(
			tap(
				// thành công
				() => { },
				// show ra lỗi khi fail
				catchError(err => {
					return this.handleError(err);
				})
			)
		)
		return observable;
	}

	getChiTietPhim(maPhim) {
		const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}
		`;
		let observable = this.http.get(url).pipe(
			tap(
				// thành công
				() => { },
				// show ra lỗi khi fail
				catchError(err => {
					return this.handleError(err);
				})
			)
		)
		return observable;
	}

getDanhSachGhe(maLichChieu){
	const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
	let observable = this.http.get(url).pipe(
		tap(
			// thành công
			() => { },
			// show ra lỗi khi fail
			catchError(err => {
				return this.handleError(err);
			})
		)
	)
	return observable;
}







	// ////////////////////////
	handleError(err) {
		console.log("Bạn đã bị lỗi !!!");
		/* 
		 Back End trả về 1 object handle vd: err {}
		 if (err.....)
		**/
		return err;
	}
}

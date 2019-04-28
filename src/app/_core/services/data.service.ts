import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

let urlAPI = ``; 



@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {
    urlAPI = environment.urlAPI;
   }

  // Phương thức GET
  get(uri: string): Observable<any> {
    return this.http.get(urlAPI + "/" + uri).pipe(
      tap(
        // thành công
        () => { },
        // show ra lỗi khi fail
        catchError(err => {
          return this.handleError(err);
        })
      )
    )
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

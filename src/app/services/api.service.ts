// import { CONST } from 'src/app/constants';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { env } from 'src/env/env.local';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   constructor(private http: HttpClient) { }

//   private getHeaders() {
//     const token = localStorage.getItem('token');
//     return token ? { Authorization: `${token}` } : {};
//   }

//   getImageFromAws() {
//     const url = `${CONST.BACKEND_URL}/content`
//   }

//   getAll(url: string, params = {}): Observable<any> {
//     const queryParams = Object.keys(params).map((key) => {
//       return `${key}=${params[key]}`;
//     });

//     const query = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

//     return this.http.get(`${CONST.BACKEND_URL}/${url}${query}`, {
//       headers: this.getHeaders(),
//     });
//   }

//   post(url: string, body: any = {}): Observable<any> {
//     return this.http.post(`${CONST.API_ENDPOINT}/${url}`, body, {
//       headers: this.getHeaders(),
//     });
//   }

//   postFile(url: string, data?: any) {
//     return this.http.post(`${CONST.API_ENDPOINT}/${url}`, data, {
//       headers: this.getHeaders(),
//       responseType: 'blob',
//     });
//   }

//   delete(url: string): any {
//     return this.http.delete(`${CONST.API_ENDPOINT}/${url}`, {
//       headers: this.getHeaders(),
//     });
//   }

//   put(url: string, body: any) {
//     return this.http.put(`${CONST.API_ENDPOINT}/${url}`, body, {
//       headers: this.getHeaders(),
//     });
//   }


// }
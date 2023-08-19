// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { CONST } from '../constants';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   logout() {
//     throw new Error('Method not implemented.');
//   }
//   private backendUrl = CONST.BACKEND_URL;

//   constructor(private http: HttpClient) { }

//   login(username: string, password: string) {
//     if (username === 'testeusername' && password === 'testesenha') {
//       return 200;
//     } else {
//       return 403;
//     }
//     const loginData = { username, password };
//     return this.http.post(`${this.backendUrl}/auth/login`, loginData);
//   }
// }
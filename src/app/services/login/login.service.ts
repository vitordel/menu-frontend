import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CONST } from '../../constants';

@Injectable({ providedIn: 'root' })
export class LoginService {
  ulr = `${CONST.BACKEND_ENDPOINT}/auth/login`;
  errorSubject: any = new BehaviorSubject<any>(null);

  private userAuthenticated: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // login(user: User): any {
  //   if (user.username === 'usuario@email.com' &&
  //     user.password === '123456') {

  //     this.userAuthenticated = true;

  //     this.mostrarMenuEmitter.emit(true);

  //     this.router.navigate(['/recipe-list']);

  //   } else {
  //     this.userAuthenticated = false;

  //     this.mostrarMenuEmitter.emit(false);
  //   }
  // }

  isAuthenticated(): boolean {
    return this.userAuthenticated;
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap,retry, catchError } from 'rxjs/operators'
import { User } from './../models/user'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/users";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUser(user): Observable<User[]> {
    return this.http
    .get<User[]>(this.path + "?userName="+user.userName+"&userPass="+user.userPass )
    .pipe(
      tap(data =>console.log(JSON.stringify)),
      catchError(this.handleError)
    )
  }

  createUser(user): Observable<User>{
    return this.http
    .post<User>(this.path, JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errMessage = "";
    if (err.error instanceof ErrorEvent) {
      errMessage = "Bir hata olustu" + err.error.message;
    } else {
      errMessage = "Sistemsel hata";
    }

    console.log(errMessage);
    return throwError(errMessage);
  }

  loggedIn = false;
  logIn(){
      this.loggedIn = true;
      localStorage.setItem("isLogged", "true");
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}

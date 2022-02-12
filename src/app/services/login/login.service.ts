import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from 'src/app/interfaces/user-login.interface';
import { userSignup } from 'src/app/interfaces/user-signup.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  saveUser(usr: userSignup): Observable<userSignup> {
    return this.http.post<userSignup>(`${this.baseUrl}/`, usr);
  }

  loginUser(lgn: userLogin): Observable<userLogin> {
    return this.http.post<userLogin>(`${this.baseUrl}/signin`, lgn);
  }
}

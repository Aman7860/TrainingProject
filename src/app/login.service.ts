import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Register} from 'src/Models/register'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string;
  token: string;
  header: any;
  constructor(private http: HttpClient) {

    this.baseUrl = 'http://localhost:56046/api/Login/';

    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);  

  }

  loginUser(model: any):Observable<any> {
    let loginUrl = this.baseUrl + 'userlogin';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(loginUrl, model, { headers: this.header });
  }

  CreateUser(register: Register) {
    let createUrl = this.baseUrl + 'createcontact';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Register[]>(createUrl, register, httpOptions)
  }
}
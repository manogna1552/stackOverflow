import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  getUserDetails(){ 

    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/users',{ headers: Headers })   

  }
}

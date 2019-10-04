import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 

  constructor(private http:HttpClient) { }
  postUserDetails(dName, email, password) {
  const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json',
                                    Authorization : 'my-auth-token'
        })
    };
  const postData = {
    dName:dName,
    email:email,
    password:password
};

  return this.http.post(`http://localhost:3000/users`, postData)
}

getUserDetails(){
  const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  return this.http.get(`http://localhost:3000/users`,{ headers: Headers });
}

}

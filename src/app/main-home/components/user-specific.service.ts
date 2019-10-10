import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSpecificService {

  constructor(private http : HttpClient) { }

  getUserQuestions(userId) {
   
   // const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get(`http://localhost:3000/questions?uid=${userId}`)   

}
getUserAnswers(userId) {
   
  // const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
   return this.http.get(`http://localhost:3000/questions?uid=${userId}`)   

}
getUserComments(userId) {
   
  // const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
   return this.http.get(`http://localhost:3000/questions?uid=${userId}`)   

}
}
